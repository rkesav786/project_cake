const SCCD = require("../Models/ASCD")

module.exports = (req,res)=>{

    // let {} = req.body
    let {imageUrl,cakeName,description,price,category,subcategory,availability} = req.body;


    SCCD.create(

        {
            ImgUrl:imageUrl,
            CakeName:cakeName,
            Desc:description,
            Price:price,
            Category:category,
            SubCategory:subcategory,
            Availablity:availability
        }
    )
    .then(()=>{
        console.log("Sub Data Added Done!");
    })
    .catch((e)=>{
        console.log("Error To Added Sub Data!");
    })





}