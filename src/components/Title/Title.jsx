import "./Title.css";
import logo from "../../assets/images/logo.svg";

function Title() {
  return (
    <section className="titleContainer">
      <img src={logo} />
      <div></div>
    </section>
  );
}

export default Title;
