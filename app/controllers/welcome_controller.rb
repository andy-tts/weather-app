class WelcomeController < ApplicationController
  
  def text
  	response = HTTParty.get("http://api.wunderground.com/api/#{ENV['wunderground_api_key']}/conditions/q/OH/Columbus.json")
  	# @location = response['current_observation']['display_location']['full']
  	# @temperature = response['current_observation']['temperature_string']
  	@current_observation = response['current_observation']
  end

  def index
  	@states = %w(HI AK CA OR WA ID UT NV AZ NM CO WY MT ND SD NB KS OK TX LA AR MO IA MN WI IL IN MI OH KY TN MS AL GA FL SC NC VA WV DE MD PA NY NJ CT RI MA VT NH ME DC).sort!
  		
  	@locations = Location.all

		location_exists = false
			if params[:city].present? && params[:state].present?
  			Location.all.each do |location|		
  				if location.city == params[:city] && location.state == params[:state] 
						location_exists = true 
  				end
  			end
  		# end

			if location_exists == false 
  				Location.create(
  					city: params[:city],
  					state: params[:state],
  					latitude: latitude,
  					longitude: longitude
  						)
  		end

  			
  	city_param = URI.encode(params[:city])

  	results = HTTParty.get("http://api.wunderground.com/api/#{ENV['wunderground_api_key']}/conditions/q/#{params[:state]}/#{city_param}.json")
  		if results['response']['error'].present?
  			@error = results['response']['error']['description']

  		else
  			@current_observation = results['current_observation']
  			latitude = @current_observation['display_location']['latitude']
  			longitude = @current_observation['display_location']['longitude']
  		end
  		end
  	end	
  end