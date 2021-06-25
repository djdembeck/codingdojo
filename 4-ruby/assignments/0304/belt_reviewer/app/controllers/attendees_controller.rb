class AttendeesController < ApplicationController
  def index
  end

  def new
  end

  def create
    event = Event.find(params[:event_id])
		attendee = Attendee.new(event: event, user: current_user)
		if attendee.save
			redirect_to :back
		else
			flash[:errors] = ['Already attending']
			redirect_to :back
		end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    attendee = Attendee.where(event_id: params[:id], user_id: current_user.id)
    unless attendee.count == 1
      flash[:errors] = ["Can't leave event unless you're attending"]
      redirect_to events_path
    else
      attendee.destroy_all
      redirect_to events_path
    end
  end
end
