class Category < ApplicationRecord
    validates :name, :description, presence:true
    validates :name, uniqueness:true

    has_many :inclusions,
     as: :includable, 
     dependent: :destroy
     
    has_many :products, 
    through: :inclusions

end
