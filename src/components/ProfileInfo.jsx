import emailIcon from "../assets/email.svg";

export default function ProfileInfo() {
  return (
    <div className="card-content">
      <header className="profile-header">
        <h1>Laura Smith</h1>
        <p className="role">Frontend Developer</p>
        <p className="website">laurasmith.website</p>
      </header>

      <a className="email-button" href="mailto:laura@example.com">
        <img src={emailIcon} alt="" aria-hidden="true" />
        <span>Email</span>
      </a>

      <section className="profile-section">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </section>

      <section className="profile-section interests">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </div>
  );
}
