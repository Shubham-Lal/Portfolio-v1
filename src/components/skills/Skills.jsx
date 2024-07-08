import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Game from "./Game";
import Software from "./Software";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section__header">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Aspects</span>
      </div>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Game />
        <Software />
      </div>
    </section>
  )
}