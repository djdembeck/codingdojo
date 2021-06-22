class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :secret

  validates_uniqueness_of :secret_id, :scope => :user_id
end
