const mongoose = require("mongoose");
// const Joi = require("joi");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    // minLength: [2, "first name must be at least 2 characters long"],
  },
  last_name: {
    type: String,
    required: [true, "last name is required"],
    // minLength: [2, "last name must be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [6, "password must be 6 characters"],
  },
  // .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/),
});

UserSchema.virtual("confirmPassword")
  .get(() => {
    this.confirm_password;
  })
  .set((value) => (this.confirm_password = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirm_password) {
    this.invalidate("confirm_password", "password must match confirm password");
  }
  next();
});

// // goes in user models
UserSchema.pre("save", function (next) {
  // const user = this;

  if (this.isModified("password")) {
    bcrypt
      .hash(this.password, saltRounds)
      .then((hash) => (this.password = hash));
    next();
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
