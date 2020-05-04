import React from 'react';

const CheckoutRow = (props) => {

  const { row } = props;
  const { name, price, quantity, id, imgUrl } = row;
  
  return (
    <li id="checkout-row" className="category-display order-display">
      <img className="box-row-image" src={imgUrl} alt="" />
      <div className="box-row-details">
        <div className="box-row-name" >{name}</div>
        <div className="box-row-quantity" >Quantity: {quantity}</div>
      </div>
      <div className="box-row-price">
        <div>${price}.00</div>
      </div>
    </li>
  );
};

export default CheckoutRow