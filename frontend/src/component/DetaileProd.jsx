import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

export const DetaileProd = () => {
  let { category } = useParams();
  let [Data, setData] = useState([]);

  console.log(Data);

  useEffect(() => {
    axios.get(`http://localhost:8000/CategoryVice/${category}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from server:", error);
      });
  }, [category]);

  return (
    <div>
      {/* <h2>Details for Category: {category}</h2> */}
      <div>
        {/* Render your detailed data here */}
        {Data && Data.length > 0 ? (
          <ul>
            {Data.map((TD)=>{
              return(
                <Link  to={`/SingleProduct/${TD._id}`} style={{textDecoration:"none"}}>
                
                <div className="card" style={{width: '15rem'}}>
                <img src={TD.imageUrl} className="card-img-top" alt="Placeholder Image" />
                <div className="card-body">
                  <h5 className="card-title">Black Forest</h5>
                  <p className="card-text"><FaRupeeSign />{TD.price}/-  <span className='ms-5 fs-4 text-white bg-black p-1' style={{borderRadius:10}}><FaShoppingCart /></span></p>
                <p className='card-text fw-bold'>Earliest Delivery: <span className='text-success fw-bold'>Today</span></p>
                 <p className='card-text '><span ><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></span> <span className='ms-2'> 233 reviews</span></p>
              
                </div>
              </div>
                
                </Link>
             
              )
            })}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
