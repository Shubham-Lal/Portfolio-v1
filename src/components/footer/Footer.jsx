import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Shubham</h1>

                <div className="center-flex">
                    <a href="https://www.buymeacoffee.com/lalshubham" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=lalshubham&button_colour=333333&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" alt="shubham buymeacoffee" />
                    </a>
                </div>

                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul> */}

                <div className="footer__social">
                    <a href="https://github.com/Shubham-Lal" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-lal" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://stackoverflow.com/users/21035210/shubham-lal" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-stack-overflow' style={{ fontWeight: "700", scale: "1.25" }}></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; WeKnewHow Inc. All rights reserved</span>
            </div>
        </footer>
    )
}
