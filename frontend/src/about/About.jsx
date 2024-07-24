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

  let promise = [
    {
      pimage:"https://theobroma.in/cdn/shop/files/icon1.jpg?v=1615448111",
      pheading:"AUTHENTIC RECIPES",
      pdescription:"Our products are based on traditional home-style recipes, using fresh ingredients."
    },
    {
      pimage:"https://theobroma.in/cdn/shop/files/icon2.jpg?v=1615448111",
      pheading:"BAKED WITH LOVE",
      pdescription:"Our passion for baking is poured into every recipe, serving smiles on a plate everyday."
  
    },
    {
      pimage:"https://theobroma.in/cdn/shop/files/icon3.jpg?v=1615448111",
      pheading:"HONESTLY PRICED",
      pdescription:"We constantly strive to offer the best products at the right prices."
  
    },
    {
      pimage:"https://theobroma.in/cdn/shop/files/icon4.jpg?v=1615448111",
      pheading:"COMMITTED TO QUALITY",
      pdescription:"From our ingredients to our kitchen operations & guest services, we always prioritize quality."
  
    }
  
  ]
  return (
  
  <>
  <Navbar/>
   <div className='about' style={{backgroundColor:'#fff0f7'}}>
   <h1 id="h1">About us</h1>
   <p id="p1">Established in Kolkata in 1892, yummy cake is a household name in <br /> India, and one of the country’s leading food products companies. <br /> Our key businesses are in bakery, dairy, and adjacent snacking <br /> categories and our operations span over 80 countries in the world.</p>

   <button className='btn btn-warning btn-sm readmore px-4 '> Read More</button>


   </div>
  <div>
  {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">
  {/* Indicators/dots */}
  <div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
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
<h3 className='text-center fw-bold mt-3' style={{color:'#6C0345'}}>Our Promise</h3>
<div className="row mt-5">
{promise.map((p, index) => (
      <div key={index} className="col-xl-3 col-md-6 col-sm-6 mb-4">
   
<img src={p.pimage} alt="" width={40} id="icon" />
<h5 id="h5">{p.pheading}</h5>
< p id="pa1">{p.pdescription}</p>

    </div>
   ))}
  </div>


</div>

{/* code for our team */}
<div style={{backgroundColor:'#fff0f7'}}>
  <div>
  <h1 id="h1">Our Team</h1>
  <Childcomponent/>
  </div>


</div>



<div style={{backgroundColor:'#ECFFE6'}}>
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