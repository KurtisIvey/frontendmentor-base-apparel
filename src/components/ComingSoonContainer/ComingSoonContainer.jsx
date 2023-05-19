import "./ComingSoonContainer.css";

function ComingSoonContainer() {
  return (
    <section className="comingSoonContainer">
      <div className="were">{"WE'RE"}</div>
      <div className="coming">COMING SOON</div>
      <p>
        {`Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.`}
      </p>
      <div>
        <input placeholder="Email Address" type="email" />
        <button>{">"}</button>
      </div>
    </section>
  );
}

export default ComingSoonContainer;
