import GifosL from "./svg/gifosLight.svg";
import GifosD from "./svg/gifosDark.svg";
import "./styles.css";

function Header(props) {
  const handleDark = (props) => {
    props.setIsDarkMode(!props.isDarkMode);
  };

  return (
    <div className="HeaderContainer">
      <img
        className="Header-title"
        width="250px"
        src={props.isDarkMode ? GifosD : GifosL}
        alt="gifosLogo"
      />
      <button onClick={handleDark} className="Header-button">
        {" "}
        MODO {props.isDarkMode ? "LIGHT" : "DARK"}{" "}
      </button>
    </div>
  );
}

export default Header;
