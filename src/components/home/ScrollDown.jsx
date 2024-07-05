export default function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <span className="home__scroll-name">Scroll Down</span>
        <img src='/others/scroll.svg' width={32} height={32} className="home__scroll-mouse wheel" alt="" />
      </a>
    </div>
  )
}