import { useEffect, useState } from 'react';
import axios from 'axios';

export const CustomData = (url) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log("Failed to Fetch Data!");
      });
  }, [url]);

  return Data;
};
