class User < ApplicationRecord
    validates :first_name, presence: true, length: { minimum: 3 }
    validates :last_name, presence: true, length: { minimum: 3 }
    validates :email, presence: true, length: { minimum: 8 }, uniqueness: true
    validates :password, presence: true

    has_many :purchases
    has_many :properties, through: :purchases
    has_secure_password
end
