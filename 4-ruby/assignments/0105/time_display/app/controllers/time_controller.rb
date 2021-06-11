require 'date'
class TimeController < ApplicationController
  def index
	@time = DateTime.now.strftime("%B %d, %Y %I:%M %P")
  end
end
