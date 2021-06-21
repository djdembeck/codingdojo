class Secret < ActiveRecord::Base
  belongs_to :user
  validates :content, presence: true
  has_many :users, through: :likes
  has_many :likes, dependent: :destroy
end
