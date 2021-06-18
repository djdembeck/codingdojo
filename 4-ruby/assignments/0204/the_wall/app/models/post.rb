class Post < ApplicationRecord
  belongs_to :user, foreign_key: 'user_id'
  has_many :comments
  validates :content, presence: true, length: { minimum: 10 }
end
