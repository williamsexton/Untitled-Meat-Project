@categories.each do |category|
    json.set! category.id do 
        json.extract! category, :id, :name
        json.productIds do
            prods = category.products.map{|product| product.id}
            json.array! prods
        end
    end
end