import React from "react";



export const Payment = (props) => {

   console.log(props.location);

    const product = props.location.product; // we need to persist the information with refresh


  return (
      <div>
          <h1>{ ' The order is about : ' + product.title }</h1>
          <h3>{product.price + ' €'}</h3>
      </div>
  );
};