const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((items) => res.render("imagesPage", { items: items }))
    .catch((err) => {
      console.log(err);
      res.status(500).send("AN ERROR OCCURED", err);
    });
};

module.exports.uploadNewProducts = (req, res, next) => {
  const obj = {
    name: req.body.name,
    description: req.body.desc,
    image: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  Product.create();
};
