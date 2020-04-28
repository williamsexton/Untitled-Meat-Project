class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.float :subscription_price, null: false
      t.timestamps
    end
    add_index :products, :name, unique:true
  end
end
