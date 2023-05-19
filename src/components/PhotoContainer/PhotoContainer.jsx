import Title from "../Title/Title";
import "./PhotoContainer.css";
import heroMobile from "../../assets/images/hero-mobile.jpg";
import heroDesktop from "../../assets/images/hero-desktop.jpg";

function PhotoContainer() {
  return (
    <div>
      <Title />
      <picture>
        <source media="(max-width: 900px)" srcSet={heroMobile} />
        <img src={heroDesktop} alt="hero" />
      </picture>
    </div>
  );
}

export default PhotoContainer;
