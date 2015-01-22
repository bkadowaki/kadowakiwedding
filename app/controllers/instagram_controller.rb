class InstagramController < ApplicationController
  require 'httparty'
  def show
  	response = HTTParty.get('https://api.instagram.com/v1/tags/kadowakiwedding/media/recent?client_id=41a6231c5e8f4912a7ffbef183b81b1e')
  	@photos = response["data"]
  	# binding.pry
  end
end
