<div className="category-show">
  <div className="category-show-banner">
    <h1 className="category-show-title">{category.name.toUpperCase()}</h1>
    <h2 id="category-show-description">{category.description}</h2>
  </div>
  <ul className="category-products">
    {products.map((product) => (
      <ProductDisplay
        key={product.id}
        name={product.name}
        price={product.price}
      />
    ))
          }

  </ul>
</div>