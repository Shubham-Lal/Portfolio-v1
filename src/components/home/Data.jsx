export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Shubham Lal
      </h1>
      <h3 className="home__subtitle">Tech Enthusiast</h3>
      <p className="home__description">
        Currently building products at <a href="https://github.com/Casuals4Fun" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Casuals4Fun</a>
      </p>

      <div className="home__buttons">
        <a href={`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NO}&text=Namaste Shubham`} className="button button--flex" target="_blank" rel="noopener noreferrer">
          Say Hello
          <img src='/others/send.svg' height={24} width={24} className="button__icon" alt="" />
        </a>
        <a href="https://links.shubhamlal.in/Resume-Shubham_Lal.pdf" className="button-white button--flex" target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </div>
    </div>
  )
}