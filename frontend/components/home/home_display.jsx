/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CategoryDisplay from '../category/category_display'
export default class HomeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories, products } = this.props;
    function propProds(category) {
      const propProds = category.productIds.map((id) => products[id]);
      return <CategoryDisplay key={category.id} category={category} products={propProds} />
    }
    return (
      <ul className="all-categories">
        {Object.values(categories).map((category) => propProds(category))}
      </ul>
    );
  }
}
