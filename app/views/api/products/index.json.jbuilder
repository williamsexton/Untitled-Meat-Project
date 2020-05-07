json.products do
  @products.each do |product|
    json.set! product.id do
        json.partial! 'api/products/product', product: product
        cats = product.categories
        json.categoryIds do
            json.array! cats.map{|category| category.id}
        end
    end
  end
end
json.filters do
  json.searchIds @products.map{|product| product.id}
  json.query @query
end