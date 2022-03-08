import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import clearBackground from "../images/ClearImage.jpg";
import cloudsBackground from "../images/CloudsImage.jpg";
import rainBackground from "../images/RainImage.jpg";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { useLocation } from "react-router-dom";
import Url from "../components/Url";
import Card from "../components/Card";

export const SearchedPlace = () => {
  const location = useLocation();
  const weather = {
    city: location.state.searchedPlaceData.city,
    temp: location.state.searchedPlaceData.realTemp + "℃",
    humidity: location.state.searchedPlaceData.humidity + "%",
    weatherMain: location.state.searchedPlaceData.weatherMain,
  };
  console.log(location.state);
  const [forecastdata, setForestdata] = useState([]);
  const two = "forecast?q=";
  const getWeatherForecast = async () => {
    try {
      const place = await Url.get(
        two + weather.city + "&APPID=f4c0da68baed4e299440386df3914148"
      );
      setForestdata((forecastdata) => [...forecastdata, place.data]);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("forecastdata:", forecastdata);

  const defaultPlace = [
    "Sapporo",
    "Tokyo",
    "Nagoya",
    "Osaka",
    "Fukuoka",
    "Okinawa",
    "New York",
    "London",
  ];
  const [resources, setResources] = useState([]);
  const one = "weather?q=";
  const getWeather = async () => {
    for (let index = 0; index < defaultPlace.length; index++) {
      try {
        const place = await Url.get(
          one + defaultPlace[index] + "&APPID=f4c0da68baed4e299440386df3914148"
        );
        setResources((resources) => [...resources, place.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log("resources:", resources);
  useEffect(() => {
    getWeatherForecast();
    getWeather();
  }, []);

  return (
    <React.Fragment>
      {weather.weatherMain === "Clear" ? (
        <div style={style.clearBackground}>
          <Header text={weather.city} />
          <p style={style.icon}>
            <IconContext.Provider value={{ size: "10vh", color: "black" }}>
              <WiDaySunny />
            </IconContext.Provider>
          </p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather.temp}</p>
              <p>{weather.humidity}</p>
            </span>
          </div>
          {resources[0] && (
            <div>
              <ul style={style.list}>
                {resources.map((resources, index) => (
                  <li key={index}>
                    <Card
                      city={resources.name}
                      temp={resources.main.temp}
                      humidity={resources.main.humidity}
                      weatherMain={resources.weather[0].main}
                      defaultWeatherData={resources}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : weather.weatherMain === "Rain" ? (
        <div style={style.rainBackground}>
          <Header text={weather.city} />
          <p style={style.icon}>
            <IconContext.Provider value={{ size: "10vh", color: "black" }}>
              <WiHail />
            </IconContext.Provider>
          </p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather.temp}</p>
              <p>{weather.humidity}</p>
            </span>
          </div>
          {resources[0] && (
            <div>
              <ul style={style.list}>
                {resources.map((resources, index) => (
                  <li key={index}>
                    <Card
                      city={resources.name}
                      temp={resources.main.temp}
                      humidity={resources.main.humidity}
                      weatherMain={resources.weather[0].main}
                      defaultWeatherData={resources}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : weather.weatherMain === "Clouds" ? (
        <div style={style.cloudsBackground}>
          <Header text={weather.city} />
          <p style={style.icon}>
            <IconContext.Provider value={{ size: "10vh", color: "black" }}>
              <WiCloudy />
            </IconContext.Provider>
          </p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather.temp}</p>
              <p>{weather.humidity}</p>
            </span>
          </div>
          {resources[0] && (
            <div>
              <ul style={style.list}>
                {resources.map((resources, index) => (
                  <li key={index}>
                    <Card
                      city={resources.name}
                      temp={resources.main.temp}
                      humidity={resources.main.humidity}
                      weatherMain={resources.weather[0].main}
                      defaultWeatherData={resources}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div style={style.rainBackground}>
          <Header text={weather.city} />
          <p style={style.icon}>{weather.weatherMain}</p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather.temp}</p>
              <p>{weather.humidity}</p>
            </span>
          </div>
          {resources[0] && (
            <div>
              <ul style={style.list}>
                {resources.map((resources, index) => (
                  <li key={index}>
                    <Card
                      city={resources.name}
                      temp={resources.main.temp}
                      humidity={resources.main.humidity}
                      weatherMain={resources.weather[0].main}
                      defaultWeatherData={resources}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

const style = {
  clearBackground: {
    backgroundImage: `url(${clearBackground})`,
    backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  rainBackground: {
    backgroundImage: `url(${rainBackground})`,
    backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  cloudsBackground: {
    backgroundImage: `url(${cloudsBackground})`,
    backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  card: {
    width: window.innerWidth,
    height: "15vh",
    fontSize: "3vh",
    fontFamily: "Comic Sans MS",
    backgroundColor: "rgba(220,220,220,0.5)",
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "130px",
  },
  block: {
    marginRight: "10vw",
  },
  icon: {
    backgroundColor: "rgba(220,220,220,0.5)",
    width: "20vh",
    height: "20vh",
    padding: "5vh",
    margin: "0 auto",
    position: "relative",
    top: "100px",
    borderRadius: "10vh",
    fontSize: "5vh",
  },
  list: {
    marginTop: "150px",
    height: "30vh",
    listStyle: "none",
    paddingLeft: "0px",
    overflowX: "hidden",
    overflowY: "scroll",
  },
};
