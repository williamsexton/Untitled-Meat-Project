cats = @product.categories
json.product do
    json.set! @product.id do
        json.extract! @product, :name, :description, :price, :subscription_price
        json.categoryIds do
            json.array! cats.map{|category| category.id}
        end
    end
end
