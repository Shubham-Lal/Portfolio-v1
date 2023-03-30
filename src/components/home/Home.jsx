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

                    <div className="home__img">
                        <img src="../../assets/profile.jp" alt="me" />
                    </div>

                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}
