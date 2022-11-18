const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then((allUsers) => res.json({ users: allUsers }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};
module.exports.findOneUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.json({ user: user }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then((newlyCreatedUser) => {
      res.json({ user: newlyCreatedUser });
      console.log("this is from createNewUser", newlyCreatedUser);
    })
    .catch((err) => {
      res.status(400).json({ validation_error: err });
    });
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    function (err, user) {
      if (err) {
        // console.log("SOMETHING WENT WRONG FOOL", err);
        res.status(400).json({ validation_error: err });
      }
      return res.json(user);
    }
  );
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
