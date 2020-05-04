json.extract! box, :id, :user_id
json.price box.boxtotal

incs = box.inclusions
prods = box.products

json.inclusionIds do
  json.array! incs.map{|inc| inc.id}
end
json.productIds do
  json.array! prods.map{|inc| inc.id}
end