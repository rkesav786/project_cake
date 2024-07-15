import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            {Data.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Description: {item.description}</p>
                {/* Add more details as needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
