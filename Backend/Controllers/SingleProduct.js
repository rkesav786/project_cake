let SCCD = require("../Models/ASCD");
module.exports = (req,res)=>{

    let {id} = req.params;
    console.log(id);

SCCD.findById({_id:id})
.then((data)=>{
    res.send(data)
})
.catch((e)=>{
    res.send("Failled to Fetch Single Product")
})



}