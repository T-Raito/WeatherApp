import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import Url from "../components/Url";
import Card from "../components/Card";

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
    <div>
      <p style={style.top}>How's the Weather?</p>
      <p style={style.search}>
        <input
          value={place}
          placeholder="地名を入力･･･"
          onChange={handlePlace}
          style={style.input}
        />
        <button onClick={getInPlace} style={style.button}>
          <IconContext.Provider value={{ size: "3vh", color: "black" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </button>
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
  top: {
    width: window.innerWidth,
    fontSize: "5vh",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
  },
  search: {
    marginLeft: "0px",
    fontSize: "3vh",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    margin: "0 auto",
  },
  button: {
    width: "6vh",
    height: "6vh",
    borderRadius: "50%",
  },
  input: {
    font: "2.5vh sans-serif",
    boxSizing: "border-box",
    width: "50%",
    height: "6vh",
    padding: "0.3em",
    transition: "0.3s",
    letterSpacing: "1px",
    color: "#aaaaaa",
    border: "1px solid #ffffff",
    boxShadow: "1px 1px 2px 0 #707070 inset",
    borderRadius: "4px",
    margin: "2vw",
    marginRight: "2vw",
  },
};

export default Search;
