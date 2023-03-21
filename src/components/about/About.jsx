import "./about.css";
import AboutImg from "../../assets/about.jpg";
import FilesSVG from "../../assets/files.svg";
import Info from "./Info";

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Insights</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="Shubham-Second" className="about__img" />
                <p className="about__hobby">
                    Full-Stack Developer | Game Dev | Software Programmer | App Developer
                </p>
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        <span className="about__hobbies">Full-Stack Developer | Game Dev | Software Programmer | App Developer</span>
                        <span>From saving PowerPoint slides as HTML webpages to creating Full-Stack Web applications; from being mobile gamer to creating Video Games,
                            it's how I describe myself as a developer. It has been a great journey so far. As long as we are committed, we can learn something new every day.
                        </span>
                        I anticipate a bright future thanks to my parents' encouragement and the friendship of my brother-like-friends.
                    </p>

                    <a href="/Resume-Shubham-Lal.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer" >
                        My Resume
                        <img src={FilesSVG} className="button__icon" alt="" />
                    </a>
                </div>
            </div>
        </section >
    )
}
