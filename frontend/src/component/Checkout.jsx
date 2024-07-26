import React, { useState } from "react";
import OrderSuccessModal from "./OrderSuccessModal";
import Navbar from "../component/Navbar";

function Checkout({ total, cartData }) {
  const [rname, setRName] = useState("");
  const [rNumber, setRNumber] = useState("");
  const [rcountry, setRCountry] = useState("");
  const [rpincode, setRpincode] = useState("");
  const [rstate, setRState] = useState("");
  const [rtown, setRTown] = useState("");
  const [raddress, setAddress] = useState("");
  const [sname, setSName] = useState("");
  const [semail, setSEmail] = useState("");
  const [snumber, setSNumber] = useState("");
  const [stown, setSTown] = useState("");
  const [payop, setPayop] = useState("");
  const [paycod, setPaycod] = useState("");

  const HandleformData = (e) => {
    e.preventDefault();

    const paymentForm = {
      RName: rname,
      RNumber: rNumber,
      RCountry: rcountry,
      RPincode: rpincode,
      RState: rstate,
      RTown: rtown,
      RAddress: raddress,
      SName: sname,
      SEmail: semail,
      SNumber: snumber,
      STown: stown,
      PayOP: payop,
      PayCOD: paycod,
    };
    console.log(paymentForm);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={HandleformData}>
        <div className="row ms-2">
          {/* Left Side - Receiver and Sender Details */}
          <div className="col-lg-6">
            <h5 className="text-start fw-bold ms-3">Receiver details</h5>
            <div className="card">
              <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="receiverName" className="form-label">
                      Receiver's Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="receiverName"
                      placeholder="Full Name"
                      onChange={(e) => setRName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="receiverContact" className="form-label">
                      Contact Number *
                    </label>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend">
                        <input
                          type="text"
                          className="form-control"
                          style={{ maxWidth: 60 }}
                          placeholder="+91"
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        onChange={(e) => setRNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="receiverCountry" className="form-label">
                      Receiver's Country *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="receiverCountry"
                      placeholder=""
                      required
                      onChange={(e) => setRCountry(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="receiverPin" className="form-label">
                      Receiver's Pin Code *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="receiverPin"
                      placeholder=""
                      required
                      onChange={(e) => setRpincode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="receiverState" className="form-label">
                      Receiver's State *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="receiverState"
                      placeholder=""
                      required
                      onChange={(e) => setRState(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="receiverCity" className="form-label">
                      Receiver's Town/City *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="receiverCity"
                      placeholder=""
                      required
                      onChange={(e) => setRTown(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="receiverAddress" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="receiverAddress"
                      rows="4"
                      placeholder="Enter your address"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="text-start fw-bold">Sender Details</h5>
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="senderName" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="senderName"
                        placeholder="Full Name"
                        onChange={(e) => setSName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="senderEmail" className="form-label">
                        Email id *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="senderEmail"
                        placeholder="E-mail"
                        onChange={(e) => setSEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="senderContact" className="form-label">
                        Contact Number *
                      </label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <input
                            type="text"
                            className="form-control"
                            style={{ maxWidth: 60 }}
                            placeholder="+91"
                          />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your mobile number"
                          onChange={(e) => setSNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="senderCity" className="form-label">
                        Town/City *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="senderCity"
                        placeholder=""
                        onChange={(e) => setSTown(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Payment Options and Cart Details */}
          <div className="col-lg-6">
          \
            <div className="mt-3">
              <h5 className="text-start fw-bold">Cart Details</h5>
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                  {cartData && cartData.length > 0 ? (
                    <ul>
                      {cartData.map((item, index) => (
                        <li key={index}>
                          {item.Name}: ₹{item.price}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No items in the cart.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="text-start fw-bold">Total Amount: ₹{total}</h5>
            </div>
            <div className="mt-3">
              <h5 className="text-start fw-bold">Payment Options</h5>
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentOption"
                          id="paymentOption1"
                          value="Online"
                          onChange={(e) => setPayop(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="paymentOption1">
                          Pay Online
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentOption"
                          id="paymentOption2"
                          value="COD"
                          onChange={(e) => setPaycod(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="paymentOption2">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
