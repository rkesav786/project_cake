import React from 'react'
import Navbar from './component/Navbar'
import "../src/home.css"

import Childcomponent from './about/Childcomponent';
import CardRow from './CardRow';

function Home() {
 let cakecard = [
{
cakeimg: 'https://flowera.in/uploads/tempDir/dessscM_06_6662e686bf80b-350X400.jpg',
cakename:'DESIGNER CAKES'
},
{
  cakeimg: 'https://flowera.in/uploads/tempDir/rassscM_06_6662dd87a8be5-350X400.jpg',
  cakename:'RASAMALAI CAKES'
  },
{
  cakeimg: 'https://flowera.in/uploads/tempDir/birsscM_06_6662de2704c15-350X400.jpg',
  cakename:'BIRTHDAY CAKES'
    },
{
  cakeimg: 'https://flowera.in/uploads/tempDir/annsscM_06_6662ea35cf21e-350X400.jpeg',
  cakename:'ANNIVERSARY CAKES'
      },
{
  cakeimg: 'https://flowera.in/uploads/tempDir/chosscM_06_6662f255c8cb6-350X400.jpg',
  cakename:'CHOCOLATE TRUFFLE'
      },
      {
        cakeimg: 'https://flowera.in/uploads/tempDir/rassscM_06_6662dd87a8be5-350X400.jpg',
        cakename:'RASAMALAI CAKES'
        }
]
console.log(cakecard);
  return (
    <>
    <Navbar/>
      <div className='home'>
    <img src="https://flowera.in/uploads/tempDir/citySlid_06_667bf5b8a9074-1920X788.jpg" alt=""  className='img-fluid homeimg'/>
   </div>
   
   <div style={{backgroundColor:'pink'}}>
   <div className="container mt-5 " >
    <h3 className='text-center fw-bold p-4' style={{color:'#6C0345'}}>Best selling Cakes</h3>
  <div className="row">
    {cakecard.map((cake, index) => (
      <div key={index} className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-4">
        <div className="card card1 mt-3">
          <img className="card-img-top cakeimg-home" src={cake.cakeimg} alt="Cake" />
          <div className="card-body">
            <h6 className="card-title text-center "style={{fontSize:12,fontWeight:900}} >{cake.cakename}</h6>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
{/* safety,delivery */}
<div className='mt-5'>
<div className="row mt-5 ">
  <div className="col-sm-3  d-flex flex-column align-items-center justify-content-center"> < img src="https://flowera.in/uploads/tempDir/higPoint051715953717-200X200.png" alt="" width={60} className=''/>
    <h5 className=' text-center fw-bold '> Safety And Hygiene</h5>
    <p className='text-center ms-3'style={{fontSize:14}} > Our Bakery & Florist shop takes complete control over safety and hydgeine. We also follow proper covid safety guidelines.</p>
  </div>
  <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">

<img src="https://flowera.in/uploads/tempDir/higPoint051715953701-200X200.png" alt="" width={60} />


    <h5 className='text-center fw-bold '>Express 3 Hour Delivery</h5>
    <p className='text-center ms-3'style={{fontSize:14}}>Get Flowers,cakes, gifts,chocolate same-day delivery in 3 hours. We guarantee ontime delivery.</p>
  </div>
  <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">
  
<img src="https://flowera.in/uploads/tempDir/higPoint051715953686-200X200.png" alt="" width={60} />


    <h5 className= ' text-center fw-bold'>Delivery In 500+ Cities</h5>
    <p className='text-center ms-3'style={{fontSize:14}}>We bet, you will have the best experience of flowers & cakes in more the 600 cities in India.</p>
  </div>
  <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">

  <img src="https://flowera.in/uploads/tempDir/higPoint051715953671-200X200.png" alt=""width={60}/>

    <h5 className='text-center fw-bold'>Midnight Delivery</h5>
    <p className='text-center ms-3' style={{fontSize:14}}>Surprise your loved one with our reliable midnight flower delivery services.</p>
  </div>
</div>

</div>
{/* cakeproducts */}
{/* <div style={{backgroundColor:'pink'}}>
<h3 className='text-center fw-bold p-4' style={{color:'#6C0345'}}>Featured Products</h3>
  <Cakemenu/>
  
  </div> */}


{/* FEATURED PRODUCTS */}
<div style={{backgroundColor:'pink'}}><CardRow/></div>


{/* cake card */}




</>

  
  )
}

export default Home