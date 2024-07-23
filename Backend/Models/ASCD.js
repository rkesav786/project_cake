let Mongoose = require("mongoose");

let sscdschema = new Mongoose.Schema(

{
    ImgUrl:String,
    CakeName:String,
    Desc:String,
    Price:String,
    Category:String,
    SubCategory:String,
    Availablity:Boolean
}



)


let SCCD = Mongoose.model("SCCD",sscdschema);

module.exports = SCCD;