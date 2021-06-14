class StudentsController < ApplicationController
  def index
	@dojo = Dojo.find(params[:dojo_id])
	@students = Student.where(dojo_id: @dojo.id).all
  end

  def new
	@all_dojos = Dojo.all
	@dojo = Dojo.find(params[:dojo_id])
	@student = Student.new
  end

  def create
	@student = Student.new(student_params)
	if @student.save
		flash[:success] = "Student added successfully"
		redirect_to controller: 'dojos', action: 'show', id: params[:dojo_id]
	else
		render :new
	end
  end

  def show
	@dojo = Dojo.find(params[:dojo_id])
	@student = Student.find(params[:id])
	start_date = @student.created_at.beginning_of_day
	end_date = @student.created_at.end_of_day
	@students = Student.where(dojo_id: @student.dojo.id, created_at: start_date..end_date)
  end

  def edit
	@student = Student.find(params[:id])
  end

  def update
	@student = Student.find_by(id: params[:id])
	@student.update(student_params)
	redirect_to controller: 'students', action: 'show', id: params[:id]
  end

  def destroy
	Student.find(params[:id]).destroy
	redirect_to controller: 'dojos', action: 'show', id: params[:dojo_id]
  end
end
private
	def student_params
		params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
	end