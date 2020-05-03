class Box < ApplicationRecord
  validates :user_id, presence:true, uniqueness:true

  has_many :inclusions,
     as: :includable, 
     dependent: :destroy
     
  has_many :products, 
    through: :inclusions

  belongs_to :user

  def boxtotal
    sum = 0
      self.inclusions.each do |inc|
        sum += inc.quantity * inc.product.price
      end
    sum
  end

end
