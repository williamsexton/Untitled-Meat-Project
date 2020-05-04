
@orders.each do |order|
  products = order.products
  json.orders do
    json.set! order.id do
      json.partial! 'api/orders/order', order: order
      ids = []
    end
  end
  json.products do
    products.each do |product|
      json.set! product.id do 
        json.partial! 'api/products/product', product: product
      end 
    end 
  end
end
