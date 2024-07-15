import React from 'react'
import logo from "../assets/download.jpg"
import "../component/footer.css"
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer1() {
  return (
    <div style={{backgroundColor:'#405D72'}}>
<div className="row">
<div className="col-sm-2">
    <a href=""><img src={logo} alt="" srcSet="" className='img-fluid footerlogo'/></a>
    
</div>
<div className="col-sm-2 mt-5 ">
<ul >
    <li ><a  className="footer-link" href="">OUR STORY</a></li>
    <li><a  className="footer-link" href="">OUR PRODUCTS</a></li>
    <li><a  className="footer-link" href="">SPECIALITY CAKES</a></li>
    <li><a  className="footer-link" href="">BLOGS</a></li>
</ul>

</div>
<div className="col-sm-2 mt-5">
<ul >
    <li ><a  className="footer-link" href="">PRIVATE POLICY</a></li>
    <li><a  className="footer-link" href="">COOKIES POLICY</a></li>
    <li><a  className="footer-link" href="">REFUND POLICY</a></li>
    <li><a  className="footer-link" href="">FAQs</a></li>
</ul>
</div>
<div className="col-sm-2 mt-5 " id='col'>
<ul >
    <li ><a  className="footer-link" href=""> +91 8182-881881</a></li>
    <li><a  className="footer-link" href="">Contact@yummycakes.com</a></li>
</ul>
<div className='d-flex ms-3' > 
  <span className=' ms-2 fs-4 icon'><IoLogoWhatsapp /></span>
 <span  className='ms-2 fs-4 icon'><RiInstagramFill /></span>
 <span  className='ms-2 fs-4 icon ' ><FaTwitter /></span>
 <span  className='ms-2 fs-4 icon '><FaFacebookSquare /></span>
 <span  className='ms-2 fs-4 icon '><FaYoutube /></span>
</div>
</div>
<div classname="col-sm-4" style={{width:300}} >
  <label htmlFor="email" className='mt-5 ms-3 text-light sign' >Sign up for more updates</label><br />
  <input type="email" className="footerform1 ms-3 " placeholder="Email Address" />
  <button className="footerbutton">Sign Up</button>
  {/* <p id="place">
  OUR STORES - Mumbai | Navi Mumbai | Thane | Delhi | Noida | Ghaziabad | Gurgaon | Faridabad | Bengaluru | Hyderabad | Pune | Chandigarh-Mohali | Chennai | Nashik | Surat | Mysore | Nagpur | Jaipur | Agra | Lucknow | Vadodara | Dehradun | Meerut | Ahmedabad | Indore | Ludhiana | Jalandhar | Patiala | Rajkot | Panchkula
  </p> */}
  <div>
    <h5 id="stores" className='ms-3 mt-3'>OUR STORES - <a href="" id='places'> Mumbai |</a><a href="" id='places'> Navi Mumbai |</a><a href="" id='places'> Thane |</a><a href="" id='places'>Delhi |</a><a href="" id='places'>Noida|</a><a href="" id='places'> Ghaziabad |</a>
    <a href="" id='places'>Gurgaon |</a><a href="" id='places'>Faridabad |</a><a href="" id='places'>Bengaluru |</a><a href="" id='places'>Hyderabad |</a><a href="" id='places'>Pune |</a><a href="" id='places'>Chandigarh-Mohali |</a><a href="" id='places'>Chennai |</a><a href=""  id='places'>Nashik |</a><a href="" id='places'>Surat |</a>
    <a href="" id='places'> Mumbai |</a><a href="" id='places'> Navi Mumbai |</a><a href="" id='places'> Thane |</a></h5>
  </div>
</div>
 
</div>


    </div>
  )
}

export default Footer1