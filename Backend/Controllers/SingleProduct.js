let CDB = require("../Models/CakeDB");
module.exports = (req,res)=>{

    let {id} = req.params;
    console.log(id);

CDB.findById({_id:id})
.then((data)=>{
    res.send(data)
})
.catch((e)=>{
    res.send("Failled to Fetch Single Product")
})



}