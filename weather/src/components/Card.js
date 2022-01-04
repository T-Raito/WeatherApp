import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const Card = ({ city, temp, humidity, weatherMain }) => {
  let realTemp = Math.floor(temp - 273.15);
  let navigate = useNavigate();
  const onClick = () => {
    navigate("/searchedPlace");
  };
  return (
    <div>
      <button style={style.card} onClick={onClick}>
        <p>{city}</p>
        <IconContext.Provider value={{ size: "10vw", color: "black" }}>
          {weatherMain === "Clear" ? (
            <WiDaySunny />
          ) : weatherMain === "Rain" ? (
            <WiHail />
          ) : weatherMain === "Clouds" ? (
            <WiCloudy />
          ) : (
            <p>{weatherMain}</p>
          )}
        </IconContext.Provider>
        <span>
          <p>Templature</p>
          <p>Huminidity</p>
        </span>
        <span>
          <p>{realTemp}℃</p>
          <p>{humidity}%</p>
        </span>
      </button>
    </div>
  );
};

const style = {
  card: {
    width: window.innerWidth,
    height: "10vh",
    borderRadius: "5vh",
    fontSize: "2vh",
    fontFamily: "Comic Sans MS",
    backgroundColor: "rgba(220,220,220,0.5)",
    marginTop: "1vh",
    // display: "flex",
    // justifyContent: "space-between",
    display: "grid",
    gridTemplateColumns: "3fr 1fr 2fr 2fr",
    alignItems: "center",
  },
};

export default Card;
