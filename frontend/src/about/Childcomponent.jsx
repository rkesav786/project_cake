import React, { useContext } from 'react';
// import { dummy } from '../about/Usecontext'; // Assuming dummy is an imported context
import './usecontext.css'

function Childcomponent() {
  // let data = useContext(dummy); // Assuming dummy is a React context


  let data=[
    {
      teamimage:"https://theobroma.in/cdn/shop/files/rishi_1.jpg?v=1615354261",
      teamname:"RISHI GOUR",
      teamposition:"Chief Executive Officer",
      teamdescription:"With over 22 years of international management experience, Rishi has a track record of increasing sales & growing bottom line while driving operational ,."


    },
    {
      teamimage:"https://theobroma.in/cdn/shop/files/Kunal_Chef_Portrait.jpg?v=1703060186",
      teamname:"KUNAL KUMAR",
      teamposition:"Product Development",
      teamdescription:"With over 20 years of culinary and F&B experience, Kunal heads Production and New Product Development at Theobroma. A graduate of the Oberoi Centre for Learning ."
    },
    {
      teamimage:"https://theobroma.in/cdn/shop/files/nazir_2.jpg?v=1615355353",
      teamname:"NAZIR SARELA",
      teamposition:" Operating Officer",
      teamdescription:"With over 17 years of valuable F&B experience behind him, Nazir is in charge of operations for all Theobroma outlets and business units. Armed with a hospitality degree from IHM Aurangabad"
    },
    {
      teamimage:"https://theobroma.in/cdn/shop/files/Geeta-a-sundarani.jpg?v=1702963626",
      teamname:"GEETA A SUNDRANI",
      teamposition:"Chief Human Resources Officer",
      teamdescription:"A seasoned hospitality and human resources professional with 24 years of experience, Geeta leads the HR function at Theobroma. She has worked extensively ."
    },
    {
      teamimage:"https://theobroma.in/cdn/shop/files/Abhishekshah.jpg?v=1702963830",
      teamname:"ABHISHEK SHAH",
      teamposition:"Chief Financial Officer",
      teamdescription:"A qualified chartered accountant with a career spanning 16 years, Abhishek heads the finance function at Theobroma. Over the span of his career, he has held senior positions "
    },
    {
      teamimage:"https://theobroma.in/cdn/shop/files/Simantini-new.jpg?v=1711182945",
      teamname:"SIMANTINI BUDUKH",
      teamposition:"General Counsel and Company Secretary",
      teamdescription:"With over 17 years of experience Simantini oversees Legal & Corporate Governance function, Risk mitigation and Investor Relations at Theobroma. She has a track record."
    }
   
    
  ]
  return (
    <div  >
      
      <div class="container-fluid d-flex flex-wrap justify-content-center align-items-center ">
        {data.map((item, index) => (
          <div key={index} className="col-xl-4 col-md-6 col-sm-6 mb-4" >
          <div className="card  mt-5 " style={{width:300}} >
            <img src={item.teamimage} className="card-img-top img-fluid p-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-warning fs-6 fw-bold">{item.teamname}</h5>
              <p className="card-text fw-bold">{item.teamposition}</p>
            </div>
          </div>
         <p className='fs-6 text-start'style={{width:300,fontWeight:500}}>{item.teamdescription}</p>
        </div>
        ))}
            
      </div>
    </div>
  );
}

export default Childcomponent;
