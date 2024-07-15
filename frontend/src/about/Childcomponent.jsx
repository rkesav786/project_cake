import React, { useContext } from 'react';
// import { dummy } from '../about/Usecontext'; // Assuming dummy is an imported context
import './usecontext.css'

function Childcomponent() {
  // let data = useContext(dummy); // Assuming dummy is a React context


  let data=[
    {
      teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Abhishekshah.webp",
      teamname:"Abhishekshah",
      teamposition:"Cheif Executive",
      teamdescription:"This is some text within a card body."


    },
    {
      teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Kunal_Chef_Portrait.webp",
      teamname:"Kunal_Chef",
      teamposition:"Cheif Executive",
      teamdescription:"This is some text within a card body."
    },
    {
      teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Kunal_Chef_Portrait.webp",
      teamname:"Kunal_Chef",
      teamposition:"Cheif Executive",
      teamdescription:"This is some text within a card body."
    },
    {
      teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Kunal_Chef_Portrait.webp",
      teamname:"Kunal_Chef",
      teamposition:"Cheif Executive",
      teamdescription:"This is some text within a card body."
    },
    {
      teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Kunal_Chef_Portrait.webp",
      teamname:"Kunal_Chef",
      teamposition:"Cheif Executive",
      teamdescription:"This is some text within a card body."
    },
    {
      teamimage:"https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Kunal_Chef_Portrait.webp",
      teamname:"Kunal_Chef",
      teamposition:"Cheif Executive",
      teamdescription:"This is some text within a card body."
    }
   
    
  ]
  return (
    <div  >
      
      <div className="row" id='card'>
        {data.map((item, index) => (
          <div key={index} className="col-sm-4 " >
          <div className="card  d-flex mt-5 "  >
            <img src={item.teamimage} className="card-img-top team img-fluid " alt="..." />
            <div className="card-body">
              <h5 className="card-title text-warning fs-6 fw-bold">{item.teamname}</h5>
              <p className="card-text fw-bold">{item.teamposition}</p>
            </div>
          </div>
         <p className='fs-6'>{item.teamdescription}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Childcomponent;
