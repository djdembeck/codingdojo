class Message < ActiveRecord::Base
	belongs_to :post
	belongs_to :user
	# Comments
	has_many :comments, as: :comentable
	validates :author, presence: true
	validates :message, presence: true, length: { minimum: 7 }
end
