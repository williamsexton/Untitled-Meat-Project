json.extract! order, :id, :price, :user_id, :created_at
json.inclusionIds order.inclusions.map {|inc| inc.id}
json.productIds order.products.map{ |prod| prod.id}