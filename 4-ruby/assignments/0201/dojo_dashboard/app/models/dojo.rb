class Dojo < ActiveRecord::Base
	has_many :students, dependent: :destroy
	validates :branch, :street, :city, presence: true, length: { minimum: 4 }
	validates :state, presence: true, length: { is: 2 }
end
