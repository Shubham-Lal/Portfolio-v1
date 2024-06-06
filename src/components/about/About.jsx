import "./about.css";
import AboutImg from "../../assets/about.jpg";
import FilesSVG from "../../assets/files.svg";
import Info from "./Info";

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="section__header">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Insights</span>
            </div>
            <div className="section__shadow" />

            <div className="about__container container grid">
                <img src={AboutImg} alt="Shubham-Second" className="about__img" loading="lazy" />
                <p className="about__hobby">
                    Full-Stack Developer | Game Dev | Software Programmer | App Developer
                </p>
                <div className="about__data">
                    <Info />

                    <div className="about__description">
                        <p className="about__hobbies">Full-Stack Developer | Software Developer | Game Developer | App Developer<br /><br /></p>
                        <p>
                            With over 1500+ hours (ref. <a href="https://wakatime.com/@shubhamlal">wakatime.com/@shubhamlal</a>) of hands-on development experience. Actively engaged in building back-end solutions for various web applications.<br /><br />
                            My greatest strength in development lies in breaking down product requirements into manageable stages, enabling me to address each component. This approach ensures that the applications I build not only excel in functionality but also possess the capability for troubleshooting and optimization in the near future.<br /><br />
                            My proficiency extends beyond MERN stack, as I am currently learning and applying skills to build applications with Angular, PHP, and various other tech stacks.
                        </p>
                    </div>

                    <a href="https://links.shubhamlal.in/Resume-Shubham_Lal.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer" >
                        My Resume
                        <img src={FilesSVG} className="button__icon" alt="" />
                    </a>
                </div>
            </div>
        </section >
    )
}
