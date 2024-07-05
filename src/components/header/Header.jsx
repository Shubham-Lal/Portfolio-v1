import { useEffect, useState } from "react";
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [toggle, setToggle] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) setShowNavbar(true);
            else setShowNavbar(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [activeNav, setActiveNav] = useState("");

    useEffect(() => {
        if (!location.hash && location.pathname !== "/contact") setActiveNav("#home");
        else setActiveNav(location.hash);
    }, [location.hash, location.pathname]);

    const handleScroll = (id) => {
        if (location.pathname === "/") {
            setActiveNav(id);
        } else {
            navigate("/");
        }
        setToggle(false);
    };

    return (
        <header className={`header ${showNavbar ? 'show-header' : ''}`}>
            <nav className={`nav ${showNavbar ? 'show-nav' : ''}`}>
                <a href="/" className="nav__logo">Shubham</a>

                <div className={`nav__lists_desktop ${toggle ? "nav__menu show-menu" : "nav__menu"}`}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => handleScroll("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => handleScroll("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => handleScroll("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" onClick={() => handleScroll("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => handleScroll("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => handleScroll("#contact")} className={location.pathname === "/contact" || activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>

            <div className={`nav__lists_mobile ${toggle ? "nav__menu show-menu" : "nav__menu"}`}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => handleScroll("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => handleScroll("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => handleScroll("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={() => handleScroll("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => handleScroll("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => handleScroll("#contact")} className={location.pathname === "/contact" || activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
            </div>
        </header>
    );
}