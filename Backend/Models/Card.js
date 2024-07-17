let mongoose = require("mongoose");

let cartinfo = new mongoose.Schema({
    weight:String,
    cakeName:String,
    deliveryPincode:String,
    deliveryDate:String,
    shippingMethod:String



})



let Cart = mongoose.model("cart",cartinfo)

module.exports = Cart;