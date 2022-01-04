import React from "react";
import Header from "../components/Header";
import clearBackground from "../images/ClearImage.jpg";
import cloudsBackground from "../images/CloudsImage.jpg";
import rainBackground from "../images/RainImage.jpg";
import { IconContext } from "react-icons";
// import Search from "../components/Search";
// import { place, resources } from "../vomponents/Search";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";

export const SearchedPlace = () => {
  const weather = [
    { city: "tokyo", temp: "10℃", humidity: "30%", weatherMain: "Clear" },
  ];
  return (
    <React.Fragment>
      {weather[0].weatherMain === "Clear" ? (
        <div style={style.clearBackground}>
          <Header text={weather[0].city} />
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
              <p>{weather[0].temp}</p>
              <p>{weather[0].humidity}</p>
            </span>
          </div>
        </div>
      ) : weather[0].weatherMain === "Rain" ? (
        <div style={style.rainBackground}>
          <Header text={weather[0].city} />
          <p style={style.icon}>
            <WiHail />
          </p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather[0].temp}</p>
              <p>{weather[0].humidity}</p>
            </span>
          </div>
        </div>
      ) : weather[0].weatherMain === "Clouds" ? (
        <div style={style.cloudsBackground}>
          <Header text={weather[0].city} />
          <p style={style.icon}>
            <WiCloudy />
          </p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather[0].temp}</p>
              <p>{weather[0].humidity}</p>
            </span>
          </div>
        </div>
      ) : (
        <div style={style.rainBackground}>
          <Header text={weather[0].city} />
          <p style={style.icon}>{weather[0].weatherMain}</p>
          <div style={style.card}>
            <span style={style.block}>
              <p>Templature</p>
              <p>Humidity</p>
            </span>
            <span>
              <p>{weather[0].temp}</p>
              <p>{weather[0].humidity}</p>
            </span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const style = {
  clearBackground: {
    backgroundImage: `url(${clearBackground})`,
    backgroundSize: "cover",
    marginTop: "30px",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  rainBackground: {
    backgroundImage: `url(${cloudsBackground})`,
    backgroundSize: "cover",
    marginTop: "30px",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  cloudsBackground: {
    backgroundImage: `url(${rainBackground})`,
    backgroundSize: "cover",
    marginTop: "30px",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  card: {
    width: window.innerWidth,
    height: "15vh",
    fontSize: "3vh",
    fontFamily: "Comic Sans MS",
    backgroundColor: "rgba(220,220,220,0.5)",
    // padding: "30px",
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
    textAlign: "center",
    paddingTop: "45px",
    margin: "0 auto",
    position: "relative",
    top: "100px",
    borderRadius: "10vh",
  },
};
