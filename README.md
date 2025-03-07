# -WEATHER-APPLICATION


##  *Name*: CHINTHAPARTHI CHETHAN  
## *Company*: CODTECH IT SOLUTIONS PVT. LTD  
## *ID*: CT12ITW  
## *Domain*: MERN STACK WEB DEVELOPMENT  
## *Duration*: JANUARY 5, 2025 – MARCH 5, 2025  
## *Mentor*: Neela Santhosh Kumar  

### Overview of the Project  
Project: Weather App  
This project is a simple web-based Weather Application that fetches real-time weather data using an external API. The application provides users with temperature, weather conditions, and an icon representing the current weather for a specified city.  

### Features  
The Weather App includes the following features:  

- **City-Based Weather Search**: Users can enter a city name to fetch weather details.  
- **Live Temperature Updates**: Displays the current temperature of the searched city.  
- **Weather Description**: Shows a short description of the current weather condition.  
- **Weather Icon**: Displays an image representing the weather.  
- **Error Handling**: Alerts users if an invalid city is entered or there is an issue retrieving data.  

### Prerequisites  
- **Basic HTML, CSS, and JavaScript knowledge**  
- **Internet Connection**: The app fetches real-time data from an API.  

### Step-by-Step Guide to Running the Weather App  
#### Step 1: Open the `index.html` File  
Simply open the `index.html` file in a web browser.  

#### Step 2: Enter a City Name  
- Type the city name in the input field.  
- Click the **Search** button.  

#### Step 3: View Weather Details  
- The app will fetch and display:  
  - City and country name.  
  - Current temperature in Celsius.  
  - Weather condition description.  
  - Weather icon.  

#### Example Usage  
```plaintext
Weather App
Enter the first number: Hyderabad
Temperature: 32°C
Clear Sky
```

### Code Overview  
#### HTML (index.html)  
- Contains the structure of the web application.  
- Includes an input field, a search button, and a weather information display area.  

#### JavaScript (script.js)  
- Uses `fetch()` to call the Weather API.  
- Extracts and updates weather information on the webpage.  
- Handles errors if the city is not found or if the API request fails.  

#### CSS (styles.css)  
- Provides a visually appealing design with a gradient background.  
- Styles buttons, input fields, and weather information.  

### Conclusion  
This Weather App project demonstrates the use of API integration, asynchronous JavaScript, and front-end web development techniques. It serves as a great introduction to working with external data sources and handling user input dynamically.  
