let SCCD =  require("../Models/ASCD");
module.exports = (req,res)=>{

let {category} = req.params

console.log(category);


SCCD.find({Category:category})
.then((data)=>{
    res.send(data)
    console.log(data);
})
.catch((e)=>{
    console.log("Failed To Fetch Data");
})






}