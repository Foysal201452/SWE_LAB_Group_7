function PatientHero({ label, title, description, icon }) {
  return (
    <section className="patient-hero">
      <div className="patient-hero-text">
        <small>{label}</small>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="patient-hero-art">
        <span className="hero-star hero-star-left">✦</span>
        <span className="hero-star hero-star-top">✦</span>
        <span className="hero-star hero-star-right">✦</span>
        <span className="hero-star hero-star-bottom">✦</span>

        <span className="hero-dot hero-dot-one"></span>
        <span className="hero-dot hero-dot-two"></span>

        <span className="hero-main-icon">{icon}</span>
      </div>
    </section>
  );
}

export default PatientHero;