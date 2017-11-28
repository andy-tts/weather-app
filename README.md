# README

To get this project functioning on your own local server,
you have to get an API key from wunderground for free.
The free package allows you 500 calls per day which should be more than enough.
https://www.wunderground.com/weather/api

Also, grab a google API key from https://developers.google.com/maps/web/
for map part of this project. It's free so the insecure nature of this website
shouldn't be too much of an issue.

Place the two keys in weather-app/config/application.yml as so:

wunderground_api_key: "your_wunderground_key_here"

google_api_key: "your_google_key_here"