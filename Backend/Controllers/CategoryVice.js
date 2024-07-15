let CDB =  require("../Models/CakeDB");
module.exports = (req,res)=>{

let {category} = req.params

console.log(category);


CDB.find({category:category})
.then((data)=>{
    res.send(data)
})
.catch((e)=>{
    console.log("Failed To Fetch Data");
})






}