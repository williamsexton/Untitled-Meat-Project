json.set! @product.id do
    json.extract! @product, :name, :description, :price, :subscription_price
    json.categoryIds do
        cats = @product.categories.map{|category| category.id}
        json.array! cats
    end
end