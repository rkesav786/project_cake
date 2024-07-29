const nodemailer = require("nodemailer");
let OrderDB = require("../Models/OrderDB");
require("dotenv").config();

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
      console.log("Order details data added successfully!");

      // Create a transporter object using SMTP transport
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email options
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: SEmail,
        subject: "Order Confirmation",
        text: `Thank you for your order, ${SName}! Your order has been placed successfully.`,
        html: `<p>Thank you for your order, ${SName}! Your order has been placed successfully.</p>`,
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res
            .status(500)
            .send(
              "Order details received, but failed to send confirmation email."
            );
        }
        console.log("Email sent: " + info.response);
        res.send("Order details received and confirmation email sent.");
      });
    })
    .catch((e) => {
      console.log("Error adding order details:", e);
      res.status(500).send("Error adding order details!");
    });
};
