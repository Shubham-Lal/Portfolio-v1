import Scroll from "../../assets/scroll.svg"

export default function ScrollDown() {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <span className="home__scroll-name">Scroll Down</span>
            <img src={Scroll} width={32} height={32} className="home__scroll-mouse wheel" alt="" />
            {/* <i className="uil uil-arrow-down home__scroll-arrow"></i> */}
        </a>
    </div>
  )
}