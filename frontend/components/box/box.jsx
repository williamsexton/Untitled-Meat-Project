import React from 'react';
import { Link } from 'react-router-dom'
import BoxRow from './box_row'
export default class Box extends React.Component {
  componentDidMount() {
    const { fetchBox, currentUser } = this.props;
    if (currentUser) fetchBox(currentUser);
  }

  render() {
    const { inclusions, products, hideBox, box, currentUser } = this.props;
    const boxRows = [];
    for (let i=0; i<inclusions.length; i++) {
      const {price, name} = products[i];
      const { quantity } = inclusions[i]
      boxRows.push({...products[i], ...inclusions[i]});
    }
    return((currentUser) ? (
      <div id = "box-main">
        <div id="box-header">
          <div id="phantom"/>
          <h1>Your Box</h1>
          <div id="box-x" onClick={ ()=> hideBox() }>x</div>
        </div>
        <ul id = "item-list">
          {boxRows.map((row) => (
            <BoxRow 
              key = {row.id}
              updateInclusion={(inc) => this.props.updateInclusion(inc)}
              deleteInclusion={(id) => this.props.deleteInclusion(id)}
              row={row}
            />
          ))
        }
        </ul>
        <div id="box-footer">
          <div id="box-options">
            <button type="submit" onClick={() => hideBox()} id="bob">CONTINUE SHOPPING</button>
              <div id="box-total">Subtotal: ${box.price}.00</div>
          </div> 
          { (box.price) ? (
            <Link onClick={() => hideBox()} to="/checkout"><button id="checkout-button" type="button">CHECKOUT</button></Link>
          ) : <Link onClick={() => hideBox()} to="/"><button id="checkout-button" type="button">FIND MORE MEATS</button></Link> }
          
        </div>
      </div>
    ) : (
      <Link onClick={() => hideBox()} to="/login">
        <div id="box-protec-main">
          <img src="https://meat-project-seed.s3-us-west-1.amazonaws.com/box-login-picture.png" alt="" />
        </div>
      </Link>
    )
    );
  }
}