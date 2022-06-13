import error from "img/not-found.jpg";
import "./NotFound.scss";

export function NotFound() {
  return (
    <section className="not-found">
      <a href="/" className="btn btn--large">
        Back to home page
      </a>
      <div className="not-found__bg">
        <img src={error} alt="error" />
      </div>
    </section>
  );
}
