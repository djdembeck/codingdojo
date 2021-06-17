class User < ApplicationRecord
	validates :first_name, :last_name, :presence => true
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
	# validates :first_name, :last_name, presence: true, length: { minimum: 2 }
	# validates :age, presence: true, numericality: { only_integer: true, greater_than: 10, less_than: 150 }
	validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
