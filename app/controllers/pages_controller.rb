class PagesController < ApplicationController
  def index
  	@user = User.new
  	@rsvp = Rsvp.new
  end
end
