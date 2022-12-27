class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password

  has_many :purchases
  has_many :properties, through: :purchases
end
