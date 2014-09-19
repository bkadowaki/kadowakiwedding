class SessionsController < ApplicationController
  def new
  end

  def create
  		@user = User.find_by({email: params[:email]})

  	if @user && @user.authenticate(params[:password])
  			log_in @user
  			redirect_to @user
  	else 
  			flash[:error] ||= 'Try again.'
  			render 'new'
  	end
    rescue
      flash[:error] = 'Email not found.'
      render :new
  end

  	def destroy
  		log_out
  		redirect_to root_path
  	end


end