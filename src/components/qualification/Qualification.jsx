import { useState } from "react";
import "./qualification.css";

export default function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <div className="section__header">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Journey So Far</span>
            </div>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        onClick={() => toggleTab(1)}
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        <span>Experience</span>
                    </div>

                    <div
                        onClick={() => toggleTab(2)}
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        <span>Education</span>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* DATA 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">AI Chef Master</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 2 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Lead Web Developer</h3>
                                <span className="qualification__subtitle">GDSC Bengal Institute of Technology</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sep 2023 - Present
                                </div>
                            </div>
                        </div>
                        {/* DATA 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Back End Developer</h3>
                                <span className="qualification__subtitle">eZ- "The One" App</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2023 - Oct 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 6 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Open Source Developer</h3>
                                <span className="qualification__subtitle">freeCodeCamp</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> May 2023 - Jun 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* DATA 1 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Udemy & Youtube</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>
                        {/* DATA 2 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">BIT - Kolkata</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 3 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">App Development</h3>
                                <span className="qualification__subtitle">Youtube</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>
                        {/* DATA 4 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Game Development</h3>
                                <span className="qualification__subtitle">Taught Myself</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}