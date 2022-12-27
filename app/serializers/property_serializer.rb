class PropertySerializer < ActiveModel::Serializer
  attributes :id, :property_name, :price, :location, :image, :property_description, :property_type

  has_many :purchases
  has_many :users, through: :purchases
end
