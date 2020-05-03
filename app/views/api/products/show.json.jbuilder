json.product do
    json.set! @product.id do
        json.partial! 'api/products/product', product: @product
        json.extract! @product, :subscription_price
        cats = product.categories
        json.categoryIds do
            json.array! cats.map{|category| category.id}
        end
    end
end
