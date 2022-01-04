import { IconContext } from "react-icons";
import { FiMenu } from "../../node_modules/react-icons/fi";
import { AiOutlineHome } from "../../node_modules/react-icons/ai";
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
        <button onClick={onHome} style={style.button}>
          <IconContext.Provider value={{ size: "4vw", color: "black" }}>
            <AiOutlineHome />
          </IconContext.Provider>
        </button>
        <p style={style.text}>{text}</p>
        <button onClick={onClick} style={style.button}>
          <IconContext.Provider value={{ size: "4vw", color: "black" }}>
            <FiMenu />
          </IconContext.Provider>
        </button>
      </div>
    </React.Fragment>
  );
};

const style = {
  button: {
    width: "6vh",
    height: "6vh",
    borderRadius: "50%",
  },
  header: {
    width: window.innerWidth,
    height: "6vh",
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Comic Sans MS",
    fontSize: "3vh",
    margin: "0 auto",
  },
};

export default Header;
