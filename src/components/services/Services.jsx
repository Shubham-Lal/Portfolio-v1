import { useState, useEffect } from "react";
import "./services.css";

export default function Services() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        if (toggleState > 0) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
    }, [toggleState]);

    return (
        <section className="services section" id="services">
            <div className="section__header">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I'm Capable Of</span>
            </div>

            <div className="services__container container grid">
                {/* CONTENT 1 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web <br /> Developer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Web Development</h3>
                            <p className="services__modal-description">
                                Services with more than 1 year of experience. Currently building web applications at <a href="https://github.com/Casuals4Fun" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Casuals4Fun</a>
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Pro in creative UI design.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Making Fullstack web-apps is a child's play for me.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CONTENT 2 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Game <br /> Developer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Game Development</h3>
                            <p className="services__modal-description">
                                More than 1 year of experience. Currently making games at <a href="https://github.com/Casuals4Fun" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Casuals4Fun</a>
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Pro in creative UI design</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Cunning & ambitious with the Game projects completed so far</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CONTENT 3 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Software <br /> Programmer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Software Programming</h3>
                            <p className="services__modal-description">
                                More than 2 year of knowledge. Currently building applications at <a href="https://github.com/Casuals4Fun" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Casuals4Fun</a>
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Have complete understanding how OOPs works but I'm more efiicient in algorithms</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Software design & mockups</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
