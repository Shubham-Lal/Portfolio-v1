import "./about.css";
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
                <img src='/others/about.jpg' alt="Shubham-Second" className="about__img" loading="lazy" />
                {/* <p className="about__hobby">
                    Full-Stack Developer | Software Developer | Game Developer | App Developer
                </p> */}
                <div className="about__data">
                    <Info />

                    <div className="about__description">
                        {/* <p className="about__hobbies">
                            Full-Stack Developer | Software Developer | Game Developer | App Developer<br /><br />
                        </p> */}
                        {/* <p>
                            With over 1500+ hours (ref. <a href="https://wakatime.com/@shubhamlal">wakatime.com/@shubhamlal</a>) of hands-on development experience. Actively engaged in building back-end solutions for various web applications.<br /><br />
                            My greatest strength in development lies in breaking down product requirements into manageable stages, enabling me to address each component. This approach ensures that the applications I build not only excel in functionality but also possess the capability for troubleshooting and optimization in the near future.<br /><br />
                            My proficiency extends beyond MERN stack, as I am currently learning and applying skills to build applications with Angular, PHP, and various other tech stacks.
                        </p> */}
                        <p>
                            Hello, I'm Shubham, an experienced Full Stack Developer with over 1+ year of experience.
                            <br /><br />
                            Previously, I worked as an Intern at two different startups, guiding projects through the stages of product pre-planning, development, and deployment, while also optimizing them further. In the past, I have developed notable applications such as WePaint, GuessPaint, Clang Social, and HammerOBots.
                            <br /><br />
                            Currently, I am focused on expanding my knowledge base and seeking full-time opportunities in the Software Engineering field. I am open to collaboration and freelance opportunities.
                        </p>
                    </div>

                    <a href="https://links.shubhamlal.in/Resume-Shubham_Lal.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer" >
                        My Resume
                        <img src='/others/files.svg' className="button__icon" alt="" />
                    </a>
                </div>
            </div>
        </section >
    )
}
