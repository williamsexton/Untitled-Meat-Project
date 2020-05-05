import React from 'react';
import { updateInclusion } from '../../actions/inclusion_actions';

export default class ProductShow extends React.Component {
  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
    const { fetchBox, currentUser } = this.props;
    if (currentUser) fetchBox(currentUser);
  }

  addToBox(e) {
    const {
      inBox,
      boxId,
      createInclusion,
      updateInclusion,
      match,
      showBox,
    } = this.props;
    debugger
    if (inBox === false) {
      const newInclusion = {
        includable_id: boxId,
        includable_type: 'Box',
        product_id: match.params.id,
        quantity: 1,
      };
      createInclusion(newInclusion).then(showBox());
    } else if (inBox === undefined) {
      showBox();
    } else {
      const inclusion = inBox;
      inclusion.quantity += 1;
      updateInclusion(inclusion).then(showBox());
    }
  }

  render() {
    const { product } = this.props;
    if (!product) return null;
    return (
      <div id="product-show">
        <img id="product-show-picture" src={product.imgUrl} alt="placeholder" />
        <div id="product-show-options">
          <h1 id="product-show-name">{product.name}</h1>
          <h2 id="product-show-price">${product.price}</h2>
          <h3 id="product-show-description">{product.description}</h3>
          <h2 id="product-show-sub-blurb">Subscribe now and save!</h2>
          <h2 id="product-show-sub-price">
            Now available for subscription for only ${product.subscription_price}
          </h2>
          <button type="submit" onClick={(e)=>this.addToBox(e)}>ADD TO BOX</button>
        </div>
      </div>
    );
  }
}
