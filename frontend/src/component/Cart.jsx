import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { MdDelete } from "react-icons/md";

export const Cart = () => {
  const [cakeInfo, setCakeInfo] = useState([]);
  console.log("Cake Info1:", cakeInfo);  

  useEffect(() => {
    axios.get("http://localhost:8000/Cart")
      .then((res) => {
        setCakeInfo(res.data);
      })


      .catch((e) => {
        console.log("Error To Fetch Cart Data!", e); 
      });
  }, []);

  if (!cakeInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      {cakeInfo.map((cd)=>{
        return(
          <div>
            {cd.cakeName}
          </div>
        )
      })}
      
    </>
  );
};
