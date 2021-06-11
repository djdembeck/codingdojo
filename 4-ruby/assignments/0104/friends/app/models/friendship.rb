class Friendship < ActiveRecord::Base
  belongs_to :user, class_name: "Friendship"
  belongs_to :friend
end
