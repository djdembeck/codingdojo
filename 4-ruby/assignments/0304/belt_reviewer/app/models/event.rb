class Event < ActiveRecord::Base
  validates :name, :city, :state, presence: true
  validates :date, presence: :true
  validate :future_date

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :attendees

private
	def future_date
		if date.present? && date < Date.today
			errors.add(:date, "must be in the future")
		end
	end
end
