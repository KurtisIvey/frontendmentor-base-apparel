import Title from "../Title/Title";
import "./PhotoContainer.css";
import heroMobile from "../../assets/images/hero-mobile.jpg";
import heroDesktop from "../../assets/images/hero-desktop.jpg";

function PhotoContainer() {
  return (
    <section className="photoContainer">
      <nav>
        <Title />
      </nav>
      <div className="pictureContainer">
        <picture>
          <source media="(max-width: 700px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="hero" />
        </picture>
      </div>
    </section>
  );
}

export default PhotoContainer;
