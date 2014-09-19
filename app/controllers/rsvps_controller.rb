class RsvpsController < ApplicationController
	def new
		@rsvp = Rsvp.new
	end

	def create
		@user = current_user
		@rsvp = Rsvp.new(params.require(:rsvp).permit(:phone, :attending, :name1, :name2, :name3, :name4, :name5))
		@user.rsvp_id = @rsvp.id
		@user.save
		
		if @rsvp.save
			redirect_to user_path(@user)
		else
			render 'new'
		end
	end

	def show
		@rsvp = Rsvp.find(params[:id])
	end

	def edit
		@rsvp = Rsvp.find(params[:id])
	end

	def destroy
		@rsvp = Rsvp.find(params[:id])
		@rsvp.destroy
		redirect_to root_path
	end

end