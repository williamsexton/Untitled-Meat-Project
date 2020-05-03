
@orders.each do |order|
  json.orders do
    json.set! order.id do
      json.partial! 'api/orders/order', order: order
    end
  end
  products = order.products
  json.products do
    products.each do |product|
      json.set! product.id do 
        json.partial! 'api/products/product', product: product
      end 
    end 
  end
end
