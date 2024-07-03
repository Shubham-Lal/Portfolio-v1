// import Hand from "../../assets/hand.svg";
import Send from "../../assets/send.svg";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Shubham Lal
        {/* <img src={Hand} className="home__hand" alt="" /> */}
      </h1>
      <h3 className="home__subtitle">Tech Enthusiast</h3>
      <p className="home__description">
        Working on an awesome project.
      </p>

      <div className="home__buttons">
        <a href={`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NO}&text=Namaste Shubham`} className="button button--flex" target="_blank" rel="noopener noreferrer">
          Say Hello
          <img src={Send} height={24} width={24} className="button__icon" alt="" />
        </a>
        <a href="https://links.shubhamlal.in/Resume-Shubham_Lal.pdf" className="button-white button--flex" target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </div>
    </div>
  )
}