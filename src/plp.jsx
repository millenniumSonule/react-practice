import React from 'react';

const Plp = ({ data }) => {  
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.product_name} style={{ width: '100px', height: '100px' }} />
          <p>{item.product_name}</p>
          <p>{item.price} </p>
        </div>
      ))}
    </div>
  );
};

export default Plp;
