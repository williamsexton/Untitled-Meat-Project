json.inclusions do 
  json.incId @inclusion.id
  json.set! @inclusion.id do
    json.partial! 'api/inclusions/inclusion', inclusion: @inclusion
  end
end

product = @inclusion.product
json.products do
  json.set! product.id do
    json.extract! product, :id, :name, :price
  end
end
if @inclusion.includable_type == "Box"
  box = @inclusion.includable
  json.boxes do
    json.set! box.id do
      json.partial! 'api/boxes/box', box: box
      json.inclusionIds box.inclusions.map{|inc| inc.id}
      
    end
  end
end

if @inclusion.includable_type == "Order"
  order = @inclusion.includable
  json.orders do
    json.set! order.id do
        json.partial! 'api/orders/order', order: order
    end
  end
end

