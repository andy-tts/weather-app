class WelcomeController < ApplicationController
  def text
  	response = HTTParty.get("http://api.wunderground.com/api/#{ENV['wunderground_api_key']}/conditions/q/OH/Columbus.json")
  	@current_observation = response['current_observation']
  end

  def index
  end
end
