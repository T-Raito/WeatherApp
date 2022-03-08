import React, { useState } from "react";
import { IconContext } from "react-icons";
import Url from "../components/Url";
import Card from "../components/Card";
import { GiHummingbird } from "../../node_modules/react-icons/gi";

const Search = ({ props }) => {
  const [place, setPlace] = useState("");
  const handlePlace = (event) => {
    setPlace(event.target.value);
  };

  const [resources, setResources] = useState({});
  const one = "weather?q=";
  const getInPlace = async () => {
    try {
      const searchInPlace = await Url.get(
        one + place + "&APPID=f4c0da68baed4e299440386df3914148"
      );
      setResources(searchInPlace.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("resources", resources);
  // console.log("place", place);

  return (
    <div style={style.total}>
      <p style={style.top}>How's the Weather?</p>
      <p style={style.search}>
        <input
          value={place}
          placeholder="地名を入力･･･"
          onChange={handlePlace}
          style={style.input}
        />
        <IconContext.Provider value={{ size: "7vw", color: "white" }}>
          <GiHummingbird onClick={getInPlace} />
        </IconContext.Provider>
      </p>
      {resources.id ? (
        <Card
          city={resources.name}
          temp={resources.main.temp}
          humidity={resources.main.humidity}
          weatherMain={resources.weather[0].main}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

const style = {
  total: {
    marginBottom: "2vh",
  },
  top: {
    width: window.innerWidth,
    fontSize: "5vh",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "20px",
  },
  search: {
    marginLeft: "7vw",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    marginBottom: "2vh",
  },
  input: {
    font: "2.5vh sans-serif",
    fontcolor: "black",
    boxSizing: "border-box",
    width: "50%",
    height: "6vh",
    padding: "0.3em",
    transition: "0.3s",
    letterSpacing: "1px",
    border: "1px solid #ffffff",
    boxShadow: "1px 1px 2px 0 #707070 inset",
    borderRadius: "4px",
    marginRight: "4vw",
  },
};

export default Search;
