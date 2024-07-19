const Cart = require("../Models/Card");

module.exports = (req, res) => {
  Cart.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log("Error To Fetch Cart Data", e);
      res.status(500).send({ error: "Error To Fetch Cart Data" });
    });
};
