let CDB = require("../Models/CakeDB");
 module.exports = (req,res)=>{

CDB.find({}).then((data)=>{
    res.send(data)
})
.catch((e)=>{
    res.send("Error To Find Data!");
})


 }