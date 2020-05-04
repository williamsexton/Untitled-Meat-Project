import React from 'react';

const BoxRow = (props) => {
  
  const { row, deleteInclusion, updateInclusion } = props;
  const { name, price, quantity, id, imgUrl } = row;
  const handleChange = (e) =>{
    updateInclusion({ id, quantity: e.currentTarget.value });
  };

  const handleDelete = (e) =>{
    deleteInclusion(id);
  };
  const selector = (quantity) =>{
    return (<select defaultValue={quantity} onChange={handleChange}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
    </select>)
  }
  return (
    <li className="box-row">
      <img className="box-row-image" src={imgUrl} alt=""/>
      <div className="box-row-details">
        <div className="box-row-name" >{name}</div>
        <div className="box-row-quantity" >Quantity: {selector(quantity)}</div>
        <div className="box-row-delete" ><button type="submit" onClick={handleDelete}>REMOVE ITEM</button></div>
      </div>
      <div className="box-row-price">
        <div>${price}.00</div>
      </div>
    </li>
  );
};

export default BoxRow