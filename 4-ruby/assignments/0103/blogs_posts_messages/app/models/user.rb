class User < ActiveRecord::Base
	# Owner relationships
	has_many :owners
	# Blog relationships
	has_many :blogs, through: :posts
	has_many :own_blogs, through: :owners, source: :blog
	# Message relationships
	has_many :messages, through: :posts
	# Post relationships
	has_many :posts
	# Comments
	has_many :comments, as: :comentable
end
