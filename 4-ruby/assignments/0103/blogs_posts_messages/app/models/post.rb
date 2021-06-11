class Post < ActiveRecord::Base
	belongs_to :blog
	belongs_to :user
	has_many :messages, dependent: :destroy
	# Comments
	has_many :comments, as: :comentable
	# Validations
	validates :title, presence: true, length: { minimum: 7 }
	validates :content, presence: true
end
