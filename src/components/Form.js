import React, { Component } from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" placeholder="City..." />
      <input type="text" placeholder="Country..." />
      <button>Get Weather</button>
      Form Component
    </form>
  );
};

export default Form;
