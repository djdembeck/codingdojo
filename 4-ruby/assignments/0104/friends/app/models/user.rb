class User < ActiveRecord::Base
	has_many :friendships
	has_many :friends, through: :friendships, foreign_key: 'user_id', class_name: 'User'
end
