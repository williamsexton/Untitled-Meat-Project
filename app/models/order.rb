class Order < ApplicationRecord
  validates :price, :product_id, :includable_id, :includable_type, presence:true
  validates :product_id, uniqueness:{ scope: [:includable_id, :includable_type] }

  after_create :populate_order

  has_many :inclusions,
     as: :includable, 
     dependent: :destroy
     
  has_many :products, 
    through: :inclusions

  belongs_to :user

  def populate_order
    incs = self.user.box
    incs.each do |inc|
      inc.update({includable_id: self.id, includable_type: "Order"})
    end
  end
end
