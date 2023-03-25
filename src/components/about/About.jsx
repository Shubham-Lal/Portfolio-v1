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
                        <br />
                        <span>
                            As a developer, my journey has been a remarkable one, encompassing a vast array of experiences. From the humble beginnings of saving PowerPoint slides as HTML webpages to crafting intricate Full-Stack Web applications, I have embarked on a journey of constant learning and growth. With a passion for gaming, I have ventured into the exciting world of Video Game design, where I continue to explore and innovate.
                        </span>
                        <br />
                        <span>
                            Throughout my journey, I have come to appreciate the value of dedication and commitment. I firmly believe that with unwavering determination and an insatiable appetite for knowledge, we can learn something new every day. My parents have been a constant source of encouragement, providing the support and guidance that I needed to pursue my dreams. Alongside them, my brother-like friends have been an integral part of my journey, offering unwavering support and camaraderie.
                        </span>
                        <br />
                        <span>
                            With such incredible support, I am confident of a bright future filled with boundless opportunities. I look forward to continuing my journey of discovery, exploring new horizons and pushing the limits of what is possible.
                        </span>
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
