class Friendship < ActiveRecord::Base
	belongs_to :user, class_name: "Friend"
  end
  