
@categories.each do |category|
    prods = category.products 
    json.categories do
        json.set! category.id do 
            json.extract! category, :id, :name
            json.productIds do
                ids = prods.map{|product| product.id}
                json.array! ids
            end
        end
    end
    json.products do
        prods.each do |product|
            json.set! product.id do
                json.extract! product, :id, :name, :price
                json.imgUrl url_for(product.photo)
            end
        end

    end
end