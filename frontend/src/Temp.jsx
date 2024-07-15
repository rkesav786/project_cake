import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './Home1';
import  CakeForm  from './CakeForm';
import About from "../src/about/About"
import Product from './Product'
import Footer1 from "./component/Footer1"
import Navbar from "./component/Navbar"
import ContactForm from "./ContactForm"
import { DetaileProd } from './component/DetaileProd';




export const Temp = () => {
  return (<><BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/Home' element={<Home />}></Route>
     <Route path='/CF' element={<CakeForm />}></Route>
     <Route path='/About' element={<About />}></Route>
     <Route path='/Product' element={<Product/>}></Route>
     <Route path='/Contactus' element={<ContactForm/>}></Route>
     <Route path='/Dp/:category' element={<DetaileProd />}></Route>
    
    
    </Routes>
    <Footer1/>
    </BrowserRouter>
    
    </>
    
  )
}
