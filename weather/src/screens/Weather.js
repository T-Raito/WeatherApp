import React, { useState } from "react";
import Header from "../components/Header";
import background from "../images/TopImage.jpg";
import Search from "../components/Search";
// import { SearchedPlace } from "./SearchedPlace";
import Url from "../components/Url";
import Card from "../components/Card";

export const Weather = () => {
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
  console.log("resources", resources);
  return (
    <div style={style.background}>
      <Header text="Home" onClick={getWeather} />
      <Search />
      {resources[0] && (
        <div style={style.listBlock}>
          <ul style={style.list}>
            {resources.map((resources, index) => (
              <li key={index}>
                <Card
                  city={resources.name}
                  temp={resources.main.temp}
                  humidity={resources.main.humidity}
                  weatherMain={resources.weather[0].main}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const style = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    marginTop: "30px",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  listBlock: {},
  list: {
    listStyle: "none",
    paddingLeft: "0px",
  },
};
