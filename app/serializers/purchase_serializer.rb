class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :property_id

  belongs_to :user 
  belongs_to :property
end
