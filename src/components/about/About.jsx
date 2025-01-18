import "./about.css";
import Info from "./Info";

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="section__header">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">Introduction</span>
            </div>
            <div className="section__shadow" />

            <div className="about__container container grid">
                <img src='/others/shubham-lal.png' alt="Shubham-Second" className="about__img" loading="lazy" />
                <div className="about__data">
                    <Info />

                    <div className="about__description">
                        <p>
                            I am Shubham, a Full Stack Developer with over 1+ year of experience.
                            <br /><br />
                            Previously, I worked as an Intern at two different startups, collaborating with team members throughout the stages of product pre-planning, development and deployment, while also optimizing the product. In the past, I have created some notable applications such as <a href="https://drawing.shubhamlal.in" target="_blank" rel="noreferrer">WePaint</a>, <a href="https://guesspaint.vercel.app" target="_blank" rel="noreferrer">GuessPaint</a>, <a href="https://clangsocial.netlify.app" target="_blank" rel="noreferrer">Clang Social</a> and <a href="https://play.google.com/store/apps/details?id=com.Casuals4Fun.HammerOBots" target="_blank" rel="noreferrer">HammerOBots</a>.
                            <br /><br />
                            Currently, I am working on my side-projects alongside seeking full-time opportunities in the Software Engineering field. I am open to collaboration and freelance opportunities.
                        </p>
                    </div>

                    <a href="https://links.shubhamlal.in/Resume-Shubham_Lal.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer" >
                        My Resume
                    </a>
                </div>
            </div>
        </section >
    )
}
