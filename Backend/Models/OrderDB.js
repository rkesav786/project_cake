let mongoose = require("mongoose");

let orderdb = new mongoose.Schema({
  RName: { type: String },
  RNumber: { type: String }, // Changed to String
  RCountry: { type: String }, // Changed to String
  RPincode: { type: String }, // Changed to String
  RState: { type: String },
  RTown: { type: String },
  RAddress: { type: String },
  SName: { type: String },
  SEmail: { type: String },
  SNumber: { type: String }, // Changed to String
  STown: { type: String },
  PayOP: { type: String },
  PayCOD: { type: String },
});

let OrderDetailDB = mongoose.model("orderdetails", orderdb);
module.exports = OrderDetailDB;
