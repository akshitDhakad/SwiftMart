import React, { useEffect, useState } from 'react';
import { Data } from "./Data";
import Card from './Card';


function Home() {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    setData(Data);
  }, [Data]);

  return (
    <div className='container'>
      {data.map((item) => (
        <div key={item.id}>
          <Card name={item.name} price={item.price} img={item.img} />
        </div>
      ))}
    </div>
  );
}

export default Home;