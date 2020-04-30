# json.extract! @category, :id, :name, :description
#         json.products do
#             @category.products.each do |product|
#                 json.set! product.id do
#                     json.extract! product, :id, :price, :name
#                 end
#             end
#         end


prods = @category.products 
json.category do
    json.set! @category.id do 
        json.extract! @category, :id, :name, :description
        json.productIds do
            ids = prods.map{|product| product.id}
            json.array! ids
        end
    end
end
json.products do
    prods.each do |product|
        json.set! product.id do
            json.extract! product, :id, :name, :price, :subscription_price
        end
    end
end