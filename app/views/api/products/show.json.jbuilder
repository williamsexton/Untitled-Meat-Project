cats = @product.categories
json.product do
    json.set! @product.id do
        json.extract! @product, :name, :description, :price, :subscription_price
        json.imgUrl url_for(@product.photo)
        json.categoryIds do
            json.array! cats.map{|category| category.id}
        end
    end
end
