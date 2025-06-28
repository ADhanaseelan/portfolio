
import "../styles/projects.css";

const projects = [
  {
    title: "Vehicle Management System",
    desc: "A complete solution for tracking and managing all vehicle-related needs. Built with React and TypeScript.",
    tags: ["React", "TypeScript", "VMS"],
    github: "https://github.com/ADhanaseelan/vehicle-management-frontend",
  },
  {
    title: "Career Guidance Chatbot",
    desc: "AI-powered chatbot to help students choose the right career path. Integrates with various APIs for real-time advice.",
    tags: ["AI", "Chatbot", "Guidance"],
    github: "https://github.com/ADhanaseelan/career-guidance-chatbot",
  },
  // {
  //   title: "Drowsiness Detection",
  //   desc: "A smart system to detect driver drowsiness using computer vision and alert mechanisms.",
  //   tags: ["Python", "OpenCV", "AI"],
  //   github: "https://github.com/ADhanaseelan/drowsiness-detection",
  // },
  {
    title: "Timetable Generator",
    desc: "Automates timetable creation for colleges and schools, saving hours of manual work.",
    tags: ["TypeScript", "Automation"],
    github: "https://github.com/ADhanaseelan/TimeTable",
  },
  // {
  //   title: "Supermarket Expiry Checker",
  //   desc: "Checks and manages product expiry dates in supermarkets, reducing waste and improving efficiency.",
  //   tags: ["PHP", "Retail"],
  //   github: "https://github.com/ADhanaseelan/supermarket-expiry-checker",
  // },
  {
    title: "PHP Project",
    desc: "A collection of PHP-based web applications and utilities for learning and rapid prototyping.",
    tags: ["PHP", "Web"],
    github: "https://github.com/ADhanaseelan/php-projects",
  },
  {
    title: "College Event Commit Management",
    desc: "Manages event participation, commits, and results for college events. Streamlines event workflows.",
    tags: ["React", "Event", "Management"],
    github: "https://github.com/ADhanaseelan/college-event-commit-management",
  },
];

const Projects = () => (
  <section className="projects-section">
    <div className="projects-header">
      <h2>
        <span role="img" aria-label="rocket">🚀</span> My Projects
      </h2>
      <p>
        Explore some of my favorite builds and open-source work.  
        <a
          href="https://github.com/ADhanaseelan"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="github-icon">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"/>
          </svg>
          View GitHub Profile
        </a>
      </p>
    </div>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div className="project-card" style={{ animationDelay: `${idx * 0.13 + 0.2}s` }} key={proj.title}>
          <div className="project-title-row">
            <h3>{proj.title}</h3>
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-github-link" title="View on GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"/>
              </svg>
            </a>
          </div>
          <p className="project-desc">{proj.desc}</p>
          <div className="project-tags">
            {proj.tags.map(tag => (
              <span className="project-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;