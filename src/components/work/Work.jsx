import "./work.css";
import Works from "./Works";

export default function Work() {
  return (
    <section className="work section" id="portfolio">
      <div className="section__header">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most Recent Works</span>
      </div>

      <Works />
    </section>
  )
}