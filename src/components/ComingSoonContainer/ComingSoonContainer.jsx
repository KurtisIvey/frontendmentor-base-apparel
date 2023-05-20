import "./ComingSoonContainer.css";
import arrow from "../../assets/images/icon-arrow.svg";
import errIcon from "../../assets/images/icon-error.svg";
import Title from "../Title/Title";
import { useState } from "react";

function ComingSoonContainer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      setError(true);
    }
    if (isValidEmail) {
      setError(false);
    }
  };

  return (
    <section className="comingSoonContainer">
      <h1 aria-hidden="true">Base Apparel</h1>
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
      <form className="emailContainer" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email"></label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          type="text"
          id="email"
          aria-label="email"
          className={error ? "errorBorder" : ""}
        />
        {error && <img className="errIcon" src={errIcon} />}
        {error && <p>Please provide a valid email</p>}
        <button type="submit" className="emailButton" aria-label="Submit">
          <img src={arrow} alt="arrow icon" />
        </button>
      </form>
    </section>
  );
}

export default ComingSoonContainer;
