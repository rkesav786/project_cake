let Cart = require("../Models/Card");

module.exports = (req,res)=>{
    Cart.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch((e)=>{
        res.send("Error To Fetch Cart Data!")
    })
}