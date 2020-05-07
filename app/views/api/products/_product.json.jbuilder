json.extract! product, :name, :description, :price, :id, :subscription_price
json.imgUrl url_for(product.photo)