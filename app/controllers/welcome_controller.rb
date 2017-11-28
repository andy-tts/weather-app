class WelcomeController < ApplicationController
  def text
  	response = HTTParty.get("http://api.wunderground.com/api/#{ENV['wunderground_api_key']}/conditions/q/OH/Columbus.json")
    @current_observation = response['current_observation']
  end

  def index
  	@states = %w(HI AK CA OR WA ID UT NV AZ NM CO WY MT ND SD NB KS OK TX LA AR MO IA MN WI IL IN MI OH KY TN MS AL GA FL SC NC VA WV DE MD PA NY NJ CT RI MA VT NH ME DC).sort!
  	if params[:city].present? && params[:state].present?
  		city_param = URI.encode(params[:city])
  		results = HTTParty.get("http://api.wunderground.com/api/#{ENV['wunderground_api_key']}/conditions/q/#{params[:state]}/#{city_param}.json")
  		puts results
  		if results['response']['error'].present?
  			@error = results['response']['error']['description']
  		else
	  		locations_test = Location.all
	  		caught = false
	  		locations_test.each do |location|
	  			if location.city == params[:city] && location.state == params[:state]
	  				caught = true
	  			end
	  		end
	  		if caught == false
	  			latitude = results['current_observation']['display_location']['latitude']
  				longitude = results['current_observation']['display_location']['longitude']
	  			Location.create(city: params[:city], state: params[:state], latitude: latitude, longitude: longitude) 
	  		end
  			@current_observation = results['current_observation']
  		end
  	end
  	@locations = Location.all
  end

end
