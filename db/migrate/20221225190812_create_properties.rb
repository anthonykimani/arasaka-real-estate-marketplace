class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :property_name
      t.integer :price
      t.string :location
      t.string :image
      t.string :property_description
      t.string :property_type

      t.timestamps
    end
  end
end
