import React from "react";
import "../styles/home.css";
import dhanushImage from "../../assets/dhanush_image.jpg";

const scrollToNext = () => {
  const nextSection = document.getElementById("about-section");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Home: React.FC = () => (
  <section className="home-hero full-vh">
    <header>
      <div className="profile-img-wrapper">
        <img
          src={dhanushImage}
          alt="Dhanaseelan A"
          className="home-profile-img float-in"
        />
        <span className="profile-img-glow"></span>
      </div>
      <div className="home-greeting fade-in">
        <span role="img" aria-label="house">🏠</span> வணக்கம் (Vanakkam)! I'm
      </div>
      <h1 className="home-title slide-in">
        <span className="highlight-name">Dhanaseelan A</span>
      </h1>
      <div className="home-subtitle fade-in-delayed">
        Frontend Developer &amp; Tech Enthusiast
      </div>
      <div className="home-edu-loc fade-in-delayed2">
        <span role="img" aria-label="education">🎓</span> B.Tech IT, Nandha Engineering College &nbsp;
        <span role="img" aria-label="location">📍</span> Erode, Tamil Nadu
      </div>
      <p className="home-desc fade-in-delayed3">
        Welcome to my personal space on the web. I'm building a career around designing creative, clean, and efficient web applications. I'm driven by a passion for technology, innovation, and solving real-world problems that matter.
      </p>
      <div className="home-extra-content fade-in-delayed4">
        <div className="home-badges">
          <span className="badge badge-unique">🌟 Creative Thinker</span>
          <span className="badge badge-unique2">💡 Problem Solver</span>
          <span className="badge badge-unique3">🤝 Team Player</span>
        </div>
        <div className="home-funfact">
          <span role="img" aria-label="fun">✨</span> Fun fact: I love building mini web games and experimenting with UI micro-interactions!
        </div>
      </div>
      <blockquote className="home-quote quote-pop">
        "Design is not just what it looks like and feels like. Design is how it works."
        <br />
        <span className="home-quote-author">– Steve Jobs</span>
      </blockquote>
      <div className="scroll-down-indicator" onClick={scrollToNext} tabIndex={0} title="Scroll to next section">
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
        {/* <span className="scroll-arrow"></span>
        <span className="scroll-text">Scroll Down</span> */}
      </div>
    </header>
  </section>
);

export default Home;