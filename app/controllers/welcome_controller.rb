class WelcomeController < ApplicationController
  def text
  	response = HTTParty.get("http://api.wunderground.com/api/#{ENV['wunderground_api_key']}/conditions/q/OH/Columbus.json")
  	@location = response['current_observation']['display_location']['full']
  	@temperature = response['current_observation']['temperature_string']
  end

  def index
  end
end
