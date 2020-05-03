json.orders do
  json.set! @order.id do
    json.partial! 'api/orders/order', order: @order
  end
end

inclusions = @order.inclusions
json.inclusions do
  inclusions.each do |inclusion|
    json.set! inclusion.id do
      json.partial! 'api/inclusions/inclusion', inclusion: inclusion
    end
  end
end

products=@order.products
json.products do
  products.each do |product|
    json.set! product.id do 
      json.partial! 'api/products/product', product: product
    end 
  end 
end