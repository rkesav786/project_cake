let CDB = require("../Models/CakeDB");
module.exports = (req,res)=>{

    let {imageUrl,cakeName,description,price,category,subcategory,availability,CimageUrl} = req.body;

    CDB.create({
        imageUrl,
        CimageUrl,
        cakeName,
        description,
        price,
        category,
        subcategory,
        availability
    })
    .then(()=>{
        console.log("Data Successfully Added In DB!");
    })
    .catch((e)=>{
        console.log("Failled To Create Data!");
    })

    res.send("DR")

}
