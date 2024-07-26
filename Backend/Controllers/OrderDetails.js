let OrderDB = require("../Models/OrderDB");
module.exports = (req, res) => {
  console.log(req.body);

  let {
    RName,
    RNumber,
    RCountry,
    RPincode,
    RState,
    RTown,
    RAddress,
    SName,
    SEmail,
    SNumber,
    STown,
    PayOP,
    PayCOD,
  } = req.body;

  OrderDB.create({
    RName: RName,
    RNumber: Number(RNumber),
    RCountry: RCountry,
    RPincode: Number(RPincode),
    RState: RState,
    RTown: RTown,
    RAddress: RAddress,
    SName: SName,
    SEmail: SEmail,
    SNumber: Number(SNumber),
    STown: STown,
    PayOP: PayOP,
    PayCOD: PayCOD,
  })
    .then(() => {
      console.log("order details Data Added Done!");
      res.send("orderdetails received");
    })
    .catch((e) => {
      console.log("Error To Added orderdetails Data!");
      res.status(500).send("Error To Added orderdetails Data!");
    });
};
