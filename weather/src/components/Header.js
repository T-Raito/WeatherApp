import { IconContext } from "react-icons";
import { GiBirdHouse, GiNestBirds } from "../../node_modules/react-icons/gi";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ text, onClick }) => {
  let navigate = useNavigate();
  const onHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <div style={style.header}>
        <IconContext.Provider value={{ size: "8vw", color: "white" }}>
          <GiBirdHouse onClick={onHome} />
        </IconContext.Provider>
        <p style={style.text}>{text}</p>
        <IconContext.Provider value={{ size: "8vw", color: "white" }}>
          <GiNestBirds onClick={onClick} />
        </IconContext.Provider>
      </div>
    </React.Fragment>
  );
};

const style = {
  header: {
    width: window.innerWidth,
    height: "6vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  text: {
    fontFamily: "Comic Sans MS",
    fontSize: "4vh",
    margin: "0 auto",
  },
};

export default Header;
