const Cart = require('../Models/Card');

module.exports = (req, res) => {
 let {Pid} = req.body
  Cart.findByIdAndDelete({_id:Pid})
    .then((data) => {
      if (data) {
        res.send("Data Deleted");
        console.log("Data Deleted", data);
      } else {
        res.status(404).send("Data not found");
      }
    })
    .catch((e) => {
      console.error("Error deleting data", e);
      res.status(500).send("Error deleting data");
    });

    



};
