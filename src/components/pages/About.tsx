
import "../styles/about.css";

const About = () => {
  return (
    <section className="about-section">
      {/* <button className="about-cta">
        Learn More About Me <span className="about-cta-arrow">↓</span>
      </button> */}
      <h2 className="about-title">
        <span role="img" aria-label="hello">🧑‍💻</span> About Me
      </h2>
      <p className="about-subtitle">
        Born and raised in Tamil Nadu, I've been curious about technology since I first used a computer.
      </p>
      <div className="about-cards-grid">
        <div className="about-card about-card-blue animate-fade-in">
          <h3>
            <span className="about-card-emoji" role="img" aria-label="story">🧡</span>
            My Story
          </h3>
          <p>
            Ever since I started using a computer, I became curious about how websites and apps are made. That curiosity turned into passion. Today, I proudly call myself a frontend developer.
          </p>
          <p>
            I am a person who believes in continuous learning and pushing boundaries. Whether it's improving a user interface, optimizing page load time, or finding better ways to solve problems — I enjoy every step of the process.
          </p>
        </div>
        <div className="about-card about-card-green animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h3>
            <span className="about-card-emoji" role="img" aria-label="not-coding">📗</span>
            When I'm Not Coding
          </h3>
          <ul>
            <li>Exploring new startup ideas</li>
            <li>Reading about clean UX and sustainable web design</li>
            <li>Watching documentaries about innovation and entrepreneurship</li>
            <li>Listening to Tamil podcasts or motivational talks</li>
          </ul>
        </div>
        <div className="about-card about-card-yellow animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3>
            <span className="about-card-emoji" role="img" aria-label="collaboration">🧑‍🤝‍🧑</span>
            Collaboration & Growth
          </h3>
          <p>
            I value collaboration and teamwork. At college, I've taken part in several tech forums, hackathons, and peer group learning sessions. I've also guided junior students in web development basics and shared project experience during workshops.
          </p>
        </div>
        <div className="about-card about-card-pink animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3>
            <span className="about-card-emoji" role="img" aria-label="vision">🎯💡</span>
            My Vision
          </h3>
          <ul>
            <li>Build user-first web applications that are accessible and inclusive</li>
            <li>Solve real-life challenges through tech solutions</li>
            <li>Keep growing with industry trends in frontend and AI</li>
            <li>Contribute to open-source and mentor future tech learners</li>
          </ul>
          <p className="about-card-note">
            <em>
              I'm especially interested in education technology, green technology, and AI-enhanced web applications.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;