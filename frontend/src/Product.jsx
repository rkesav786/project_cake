import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar';

function Product() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/GetAllCategories")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert("Failed to fetch data from server");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div style={{ backgroundColor: 'pink' }}>
          <h1 id='h1'> Yummy Cakes</h1>
          <p id='p1'> At Theobroma, we offer a wide range of products, both sweet & savoury. Our offerings include <br /> indulgent brownies, cakes & desserts, artisanal breads, puffs & quiches, wholesome sandwiches,<br /> wraps & rolls, beverages and more.</p>
        </div>

        {/* Render your data here */}
        {Data && Data.length > 0 ? (
          <ul style={{ display: "flex", margin: "5px", flexWrap: "wrap" }}>
            {Data.map((item) => (
              <li key={item.id} className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-5">
                <Link to={`/Dp/${item.id}`}>
                  <div className="card card1 mt-3">
                    <img className="card-img-top img-fluid" src={item.CimageUrl} alt="Cake" />
                    <div className="card-body">
                      <h6 className="card-title text-center" style={{ fontSize: 15, fontWeight: 900 }}>{item.category}</h6>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {/* Loading spinner or placeholder */}
            <div className="spinner-grow text-muted" />
            <div className="spinner-grow text-primary" />
            <div className="spinner-grow text-success" />
            {/* Add more spinner elements as needed */}
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
