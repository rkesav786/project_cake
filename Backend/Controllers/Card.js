let Cart = require("../Models/Card");

module.exports = (req,res)=>{
    let {weight,cakeName,deliveryPincode,deliveryDate,shippingMethod,timeSlot} = req.body
    Cart.create({weight,cakeName,deliveryPincode,deliveryDate,shippingMethod,timeSlot})
    .then(()=>{
        console.log("Data Successfully added to our Cart");
    })
    .catch((e)=>{
        console.log("Error to add Data");
    })
}