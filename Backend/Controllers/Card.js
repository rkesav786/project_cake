let Cart = require("../Models/Card");

module.exports = (req,res)=>{
    let {weight,cakeName,deliveryPincode,deliveryDate,shippingMethod,timeSlot,Imgurl,Name,price} = req.body
    Cart.create({weight,cakeName,deliveryPincode,deliveryDate,shippingMethod,timeSlot,Imgurl,Name,price})
    .then(()=>{
        console.log("Data Successfully added to our Cart");
    })
    .catch((e)=>{
        console.log("Error to add Data");
    })
}