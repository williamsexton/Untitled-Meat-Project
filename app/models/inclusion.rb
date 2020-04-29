class Inclusion < ApplicationRecord
    validates :product_id, :quantity, :includable_id, :includable_type, presence: true
    validates :product_id, uniqueness:{scope:[:includable_id,:includable_type]}
    
    belongs_to :product

    belongs_to :includable, 
    polymorphic: true
end
