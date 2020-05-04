class Order < ApplicationRecord
  validates :price, presence:true

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
