import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { FaStar, FaRupeeSign, FaCalendar } from "react-icons/fa";

export const SingleProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  const [weight, setWeight] = useState('0.5'); // Defaulting to 0.5 kg
  const [cakeName, setCakeName] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [timeSlot, setTimeSlot] = useState('morning');

  useEffect(() => {
    axios.get(`http://localhost:8000/SingleProduct/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("Error fetching single product:", error);
      });
  }, [id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Prepare data object to send to backend or for local processing
    const formData = {
      weight,
      cakeName,
      deliveryPincode,
      deliveryDate,
      shippingMethod,
      timeSlot,
    };

    // Example: Log form data to console
    console.log("Form Data:", formData);

    // Example: Send data to backend (you can modify this as per your backend API)
    axios.post('http://localhost:8000/add-to-cart', formData)
      .then((response) => {
        console.log("Successfully added to cart:", response.data);
        // Optionally, perform additional actions after successful addition
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        // Handle error scenarios
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={product.imageUrl} className="img-fluid" alt="Product" />
        </div>
        <div className="col-lg-6">
          <div>
            <h2 className='text-start fw-bold' style={{ color: '#6C0345' }}>{product.cakeName}</h2>
            <p className='card-text '><span><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></span> <span className='ms-2'> 233 reviews</span></p>
            <h1 className='fw-bold'><FaRupeeSign />{product.price}/-</h1>
            <p className='text-muted'>inclusive of all taxes</p>
          </div>
          <div className="mt-4">
            <h4 className='text-start fw-bold' style={{ color: '#6C0345' }}>Customize Your Product</h4>
            <form onSubmit={handleAddToCart}>
              <div className='border border-dark mt-4 p-3' style={{ borderRadius: 10 }}>
                <h5 className='text-start fw-bold pt-2 ps-3' style={{ color: '#6C0345' }}>Customize Your Weight</h5>
                <div className="d-flex mt-2">
                  <label className='fw-bold'><input className='ms-2' type="radio" name="weight" value="0.5" checked={weight === '0.5'} onChange={(e) => setWeight(e.target.value)} /> 0.5 kg</label>
                  <label className='fw-bold'><input className='ms-2' type="radio" name="weight" value="1" checked={weight === '1'} onChange={(e) => setWeight(e.target.value)} /> 1 kg</label>
                  <label className='fw-bold'><input className='ms-2' type="radio" name="weight" value="2" checked={weight === '2'} onChange={(e) => setWeight(e.target.value)} /> 2 kg</label>
                </div>
              </div>
              <div className='border border-muted mt-4 p-3' style={{ borderRadius: 5 }}>
                <input type="text" className="form-control mt-2" id="cake-name" name="cake-name" value={cakeName} onChange={(e) => setCakeName(e.target.value)} placeholder="Name On The Cake" />
              </div>
              <div className='border border-muted mt-4 p-3'>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="delivery-pincode" name="delivery-pincode" value={deliveryPincode} onChange={(e) => setDeliveryPincode(e.target.value)} placeholder="Enter Delivery Pincode" />
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" className="form-control" id="delivery-date" name="delivery-date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} placeholder="Select Delivery Date" aria-describedby="calendar-icon" />
                      <span className="input-group-text" id="calendar-icon"><FaCalendar /></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <select className="form-select" id="shipping-method" name="shipping-method" value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
                      <option value="standard">Standard Shipping</option>
                      <option value="express">Express Shipping</option>
                      <option value="same-day">Same Day Delivery</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select className="form-select" id="time-slot" name="time-slot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 3pm)</option>
                      <option value="evening">Evening (3pm - 6pm)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <button className='btn btn-warning btn-lg fs-4 p-3 d-block mx-auto w-50' type="submit">
                    Add To Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
