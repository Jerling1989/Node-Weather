# Node-Weather
Here is a NODE command line weather app. The app uses yargs and axios node packages as well as the Google Maps Geocoding API and the Darksky Forecast API. The user enters an address into the command line where it is encoded and sent to the Google API, then the latitude and longitude are returned and used in the Darksky Forecast API. Once this is completed the full address the user searched and the current weather information is logged to the console.

---

- Below is a screen shot of the different ways the user can use the app in the command line. The first example it when the user enters a zipcode, the second is a full street address, third is when just a city name is entered, and the last it the error code that displays when a user enters and invalid address. The console displays the full adress of the location the user searched, along with the current temperature and what the temnerature really feels like outside.
![CONSOLE](read_me/console.png)
