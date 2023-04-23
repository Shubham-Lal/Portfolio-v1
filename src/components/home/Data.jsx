import Hand from "../../assets/hand.svg";
import Send from "../../assets/send.svg";
import Community from "../../assets/community.svg";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Shubham Lal
        <img src={Hand} className="home__hand" alt="" />
      </h1>
      <h3 className="home__subtitle">Tech Enthusiast</h3>
      <p className="home__description">
        A passionate teen developer from India who utilizes every second he spends.
      </p>

      <a href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_PHONE_NO}&text=Namaste Shubham`} className="button button--flex" target="_blank" rel="noopener noreferrer">
        Say Namaste
        <img src={Send} height={24} width={24} className="button__icon" alt="" />
      </a>
      <a href="/Resume-Shubham-Lal.pdf" className="button-white button--flex" target="_blank" rel="noopener noreferrer">
        My Resume
        <img src={Community} height={24} width={24} className="button__icon" alt="" />
      </a>
      {/* <a href={`https://stackoverflowteams.com/c/${process.env.REACT_APP_TEAM_NAME}`} className="button-white button--flex" target="_blank" rel="noopener noreferrer">
        Collaborate
        <img src={Community} height={24} width={24} className="button__icon" alt="" />
      </a> */}
    </div>
  )
}