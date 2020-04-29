json.extract! @category, :id, :name
        json.products do
            @category.products.each do |product|
                json.set! product.id do
                    json.extract! product, :id, :price, :name
                end
            end
        end