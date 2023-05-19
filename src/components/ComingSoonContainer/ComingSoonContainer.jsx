import "./ComingSoonContainer.css";
import arrow from "../../assets/images/icon-arrow.svg";
import Title from "../Title/Title";

function ComingSoonContainer() {
  return (
    <section className="comingSoonContainer">
      <nav>
        <Title />
      </nav>
      <div className="were">{"WE'RE"}</div>
      <div className="coming">COMING SOON</div>
      <p>
        {`Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.`}
      </p>
      <form className="emailContainer">
        <label htmlFor="email"></label>
        <input
          placeholder="Email Address"
          type="email"
          id="email"
          aria-label="email"
        />
        <button type="submit" className="emailButton">
          <img src={arrow} alt="" />
        </button>
      </form>
    </section>
  );
}

export default ComingSoonContainer;
