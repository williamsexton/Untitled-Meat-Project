class Product < ApplicationRecord
    validates :name, :description, :price, :subscription_price, presence: true
    validates :name, uniqueness: true


    has_many :inclusions

    has_many :categories, 
    through: :inclusions, 
    source: :includable, 
    source_type: 'Category'
end
