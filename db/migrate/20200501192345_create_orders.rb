class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.float :price, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :orders, :user_id
  end
end
