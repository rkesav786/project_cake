import React  from 'react'
import Navbar from '../component/Navbar'

import "../about/about.css"
import img1 from "../assets/aboutimg1.jpg"
import img2 from "../assets/aboutimg2.jpg"
import img3 from "../assets/aboutimg3.jpg"
import img4 from "../assets/aboutimg4.jpg"
import img5 from "../assets/aboutimg5.jpg"
import img6 from "../assets/aboutimg6.jpg"
import icon1 from"../assets/icon1.webp"
import icon2 from"../assets/icon2.webp"
import icon3 from"../assets/icon3.webp"
import icon4 from"../assets/icon4.webp"
import team1 from"../assets/Abhishekshah.webp"
import Childcomponent from './Childcomponent'

function About() {
  return (
  
  <>
  <Navbar/>
   <div className='about' style={{backgroundColor:'pink'}}>
   <h1 id="h1">About us</h1>
   <p id="p1">Established in Kolkata in 1892, yummy cake is a household name in <br /> India, and one of the country’s leading food products companies. <br /> Our key businesses are in bakery, dairy, and adjacent snacking <br /> categories and our operations span over 80 countries in the world.</p>

   <button className='btn btn-warning btn-sm readmore px-4 '> Read More</button>


   </div>
  <div>
  {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">
  {/* Indicators/dots */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>
  {/* The slideshow/carousel */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/aboutimg1.webp" alt="Los Angeles" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/aboutimg3.webp" alt="Chicago" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/aboutimg4.webp" alt="New York" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/aboutimg5.webp" alt="New York" className="d-block w-100" />
    </div>
   
  </div>
  {/* Left and right controls/icons */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
</div>



  </div>
<div>
<h1 id="h2">Our Promise</h1>
<div className="row">
    <div className="col-sm-3   mt-5">
<img src={icon1} alt="" width={40} id="icon" />
<h5 id="h5">AUTHENTIC RECIPES</h5>
< p id="pa1">Our products are based on <br /> traditional home-style recipes, <br /> using fresh ingredients</p>

    </div>
    <div className="col-sm-3  mt-5">
<img src={icon2} alt="" width={40} id="icon" />
<h5 id="h5">AUTHENTIC RECIPES</h5>
<p id="pa1">Our products are based on <br /> traditional home-style recipes, <br /> using fresh ingredients</p>

    </div>
  
    <div className="col-sm-3  mt-5">
<img src={icon3} alt="" width={40} id="icon" />
<h5 id="h5">AUTHENTIC RECIPES</h5>
<p id="pa1">Our products are based on <br /> traditional home-style recipes, <br /> using fresh ingredients</p>

    </div>
    
    <div className="col-sm-3  mt-5">
<img src={icon4} alt="" width={40} id="icon" />
<h5 id="h5">AUTHENTIC RECIPES</h5>
<p id="pa1">Our products are based on <br /> traditional home-style recipes, <br /> using fresh ingredients</p>

    </div>
</div>

</div>

{/* code for our team */}
<div style={{backgroundColor:'#FFE9D0'}}>
  <div>
  <h1 id="h1">Our Team</h1>
  <Childcomponent/>
  </div>


</div>



<div style={{backgroundColor:'#D8EFD3'}}>
<div>
  <h1 id="h1">Like Our Products?</h1>
  <p id='p1' className='mt-5'>
  Treat yourself to your favourite Theobroma products or surprise your loved ones with an edible gift.
  </p>
  <button className='btn btn-warning btn-sm readmore px-4 '>Order Now</button>
</div>


</div>

</>
    
  )
}

export default About