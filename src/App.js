import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "528d30ed7c37939379e836b4798a0dab";
//https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur,my&appid=528d30ed7c37939379e836b4798a0dab

class App extends Component {
  state = {
    tempereture: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    if (city & country) {
      this.setState({
        tempereture: data.main.temp,
        city: "data.name",
        country: "data.sys.country",
        humidity: "data.main.humidity",
        description: "data.weather[0].description",
        error: ""
      });
    } else {
      this.setState({
        tempereture: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Wrong Input, Please Check."
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
