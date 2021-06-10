class Blog < ActiveRecord::Base
	# User relations
	has_many :owners, dependent: :destroy
	has_many :users, through: :owners, dependent: :destroy
	# Post relations
	has_many :posts, dependent: :destroy
	# Validations
	has_many :messages, through: :posts
	validates :name, :description, presence: true
end
