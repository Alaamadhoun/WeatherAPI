import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {
  getWeather = e => {
    e.preventDefault();
    console.log("Weather");
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
