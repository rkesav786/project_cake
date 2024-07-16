
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const SingleProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/SingleProduct/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("Error fetching single product:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

