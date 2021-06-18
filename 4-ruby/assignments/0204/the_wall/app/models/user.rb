class User < ApplicationRecord
	has_many :posts
	has_many :comments
	validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 5 }
end
