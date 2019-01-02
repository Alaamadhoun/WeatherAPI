import React from "react";

const Weather = props => {
  return (
    <div>
      {props.temperature && (
        <p>
          <strong>Temperature: </strong> {props.temperature}
        </p>
      )}
      {props.city && (
        <p>
          <strong>City:</strong> {props.city}
        </p>
      )}
      {props.country && (
        <p>
          <strong>Country:</strong> {props.country}
        </p>
      )}
      {props.humidity && (
        <p>
          <strong>Humidity:</strong> {props.humidity}
        </p>
      )}
      {props.description && (
        <p>
          <strong>Description: </strong>
          {props.description}
        </p>
      )}
    </div>
  );
};

export default Weather;
