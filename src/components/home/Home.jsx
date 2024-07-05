import Data from "./Data";
import Social from "./Social";
import "./home.css";
import ScrollDown from "./ScrollDown";

export default function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div>
                        <img 
                            src="/shubham-lal.jpg" 
                            alt="me" 
                            className="home__img" 
                            loading="lazy" 
                        />
                    </div>

                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}
