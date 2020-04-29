class CreateInclusions < ActiveRecord::Migration[5.2]
  def change
    create_table :inclusions do |t|
      t.integer :product_id, null:false
      t.integer :quantity, null:false
      t.integer :includable_id, null:false
      t.string :includable_type, null:false

      t.timestamps
      
    end
    add_index :inclusions, :product_id
    add_index :inclusions, [:includable_type, :includable_id]
    
  end
end
