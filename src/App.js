import React, { Component, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import Location from "./Components/Location";
import WCard from "./Components/WCard";
import Error from "./Components/Error";
import axios from "axios";
import useStyles from "./appStyles";

const api = {
  key: "65a5af7262f0df77c2546f3008862ed3",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const App = () => {
  const [state, setState] = useState({});

  const classes = useStyles();

  const roundTemp = (temp) => {
    return Math.floor(temp);
  };

  const onChangeData = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const selectBackground = (temp, error) => {
    return temp < 16 && error === false
      ? "App App-Cold"
      : temp > 25 && error === false
      ? "App App-Hot"
      : temp < 26 && temp > 15 && error === false
      ? "App App-Normal"
      : "App";
  };

  const getWeather = async () => {
    if (!state.city && !state.country) return;
    const { city, country } = state;

    await axios
      .get(`${api.base}${city},${country}&units=metric&appid=${api.key}`)
      .then((response) => {
        const data = response.data;
        console.log("fffffff", data);
        setState({
          city: data.name,
          country: data.sys.country,
          temp: roundTemp(data.main.temp),
          min: roundTemp(data.main.temp_min),
          max: roundTemp(data.main.temp_max),
          description: data.weather[0].description,
          error: false,
        });
      })
      .catch((err) => {
        setState({ error: true });
      });
  };

  // const { city, country, temp, min, max, description, error } = state;

  //${selectBackground(temp, error)}

  return (
    <div className={`${classes.root}`}>
      <Header />
      <div className="wheatherContainer">
        <div className="formContainer">
          <Inputs handleChange={onChangeData} loadWeather={getWeather} />
          <div className="app2">
            {state.city && state.country ? (
              <Location city={state.city} country={state.country} />
            ) : (
              <Error />
            )}
            {state.temp ? (
              <WCard
                min={state.min}
                max={state.max}
                temp={state.temp}
                description={state.description}
              />
            ) : null}
          </div>
        </div>
        <div className="app1">
          <div className="b">
            <div>Cloudy</div>
            <div>Humidity</div>
            <div>Wind</div>
            <div>Rain</div>
            <div>sunny</div>
          </div>
          <hr />
          <div className="a">
            <div>Another Location</div>
            <div>Brimingham</div>
            <div>Manchester</div>
            <div>New York</div>
            <div>California</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
