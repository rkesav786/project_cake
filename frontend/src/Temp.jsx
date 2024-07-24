import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home1';
import CakeForm from './CakeForm';
import About from '../src/about/About';
import Product from './Product';
import Footer1 from './component/Footer1';
import Navbar from './component/Navbar';
import ContactForm from './ContactForm';
import Specialitycake from './Specialitycake';
import { DetaileProd } from './component/DetaileProd';
import { SingleProduct } from './component/SingleProduct';
import { Cart } from './component/Cart';
import Checkout from './component/Checkout';
import ASCF from './ASCF';

export const Temp = () => {
  const [total, setTotal] = useState(0);
  const [CartData, setCartData] = useState();

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  const CartProduct = (CartD) => {
    setCartData(CartD);
  };

  console.log(CartData);










  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CF" element={<CakeForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/Dp/:category" element={<DetaileProd />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart Total={updateTotal} CartProduct={CartProduct} />} />
          <Route path="/checkout" element={<Checkout total={total} />} />
          <Route path="/Dp/:category/ASCF" element={<ASCF />} />
          <Route path="/Specialitycake" element={<Specialitycake />} />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </>
  );
};
