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
          <div onClick={ ()=> hideBox() }>x</div>
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
          <Link to="/checkout"><button id="checkout-button" type="button">CHECKOUT</button></Link>
          
        </div>
      </div>
    ) : (
      <div id="box-protec-main">
        <div>Please <Link onClick={() => hideBox()} to="/login">Log in</Link> to access box features</div>
      </div>
    )
    );
  }
}