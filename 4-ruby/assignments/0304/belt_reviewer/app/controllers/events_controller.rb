class EventsController < ApplicationController
  def index
    @events = Event.order(:date).where(state: current_user.state).reverse
    @events_other = Event.order(:date).where.not(state: current_user.state).reverse
  end

  def new
  end

  def create
    @event = Event.new(
      name: event_params[:name],
      date: event_params[:date],
      city: event_params[:city],
      state: event_params[:state],
      user_id: current_user.id
    )
    if @event.save
      flash[:success] = "Event added successfully"
      redirect_to events_path
    else
      flash[:errors] = ["Event couldn't be added"]
      redirect_to events_path
    end
  end

  def show
    @event = Event.find(params[:id])
    @attendees = @event.attendees
    @comments = Comment.where(event_id: params[:id])
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    @event.name = params[:name]
    @event.date = params[:date]
    @event.city = params[:city]
    @event.state = params[:state]
    if @event.valid?
      @event.save
      redirect_to events_path
    else
      flash[:errors] = @event.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    event = Event.find(params[:id])
    unless current_user.id == event.user.id
      flash[:errors] = ["Cannot delete a event you don't own"]
      redirect_to events_path
    else
      event.destroy
      redirect_to events_path
    end
  end
end
private
	def event_params
		params.require(:event).permit(:name, :date, :city, :state)
	end