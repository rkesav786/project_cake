let Mongoose = require("mongoose");

let cakeschema = new Mongoose.Schema({

    imageUrl:String,
    CimageUrl:String,
    cakeName:String,
    description:String,
    price:Number,
    category:String,
    subcategory:String,
    availability:Boolean




})


let CDB = Mongoose.model("cake",cakeschema)

module.exports =  CDB;