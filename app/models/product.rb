class Product < ApplicationRecord
    validates :name, :description, :price, :subscription_price, presence: true
    validates :name, uniqueness: true

    has_many :inclusions

    has_many :categories, 
    through: :inclusions, 
    source: :includable, 
    source_type: 'Category'

    has_many :orders, 
    through: :inclusions, 
    source: :includable, 
    source_type: 'Order'

    has_many :boxes, 
    through: :inclusions, 
    source: :includable, 
    source_type: 'Box'

    has_one_attached :photo
end
