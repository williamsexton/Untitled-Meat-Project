class Order < ApplicationRecord
  has_many :inclusions,
     as: :includable, 
     dependent: :destroy
     
  has_many :products, 
    through: :inclusions

  belongs_to :user
end
