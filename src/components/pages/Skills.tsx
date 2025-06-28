
import "../styles/skills.css";

const skills = [
  {
    title: "Frontend Development",
    icon: (
      <span className="skill-icon glassy" style={{ background: "#e0edff" }}>
        <svg width="28" height="28" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </span>
    ),
    color: "card-blue",
    items: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js with TypeScript",
      "Tailwind CSS and Bootstrap",
    ],
  },
  {
    title: "Backend & Database",
    icon: (
      <span className="skill-icon glassy" style={{ background: "#e6fbe8" }}>
        <svg width="28" height="28" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      </span>
    ),
    color: "card-green",
    items: [
      "Node.js and Express (beginner)",
      "SQL and NoSQL (MySQL, Firebase)",
    ],
  },
  {
    title: "UI/UX Design",
    icon: (
      <span className="skill-icon glassy" style={{ background: "#f7eaff" }}>
        <svg width="28" height="28" fill="none" stroke="#a855f7" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
        </svg>
      </span>
    ),
    color: "card-purple",
    items: [
      "Adobe XD, Figma (prototyping)",
      "Design thinking & wireframing",
    ],
  },
  {
    title: "Version Control",
    icon: (
      <span className="skill-icon glassy" style={{ background: "#fff4e6" }}>
        <svg width="28" height="28" fill="none" stroke="#fb923c" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="7" r="2" />
          <path d="M7 17L17 7" />
        </svg>
      </span>
    ),
    color: "card-orange",
    items: [
      "Git, GitHub for team collaboration",
      "Version control and project management",
    ],
  },
  {
    title: "Tools & Environment",
    icon: (
      <span className="skill-icon glassy" style={{ background: "#ffeaf3" }}>
        <svg width="28" height="28" fill="none" stroke="#ec4899" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 20v-4h8v4" />
        </svg>
      </span>
    ),
    color: "card-pink",
    items: [
      "VS Code",
      "Chrome DevTools"
    ],
  },
  {
    title: "Soft Skills",
    icon: (
      <span className="skill-icon glassy" style={{ background: "#eaeaff" }}>
        <svg width="28" height="28" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 8a5 5 0 00-10 0c0 5 5 9 5 9s5-4 5-9z" />
          <circle cx="12" cy="8" r="2" />
        </svg>
      </span>
    ),
    color: "card-indigo",
    items: [
      "Tamil and English communication",
      "Time management",
      "Creative problem solving",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section unique-bg">
      <div className="skills-header unique-header">
        <span className="skills-brain float-anim">
          {/* <svg width="44" height="44" fill="#f472b6" viewBox="0 0 24 24">
            <path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg> */}
        </span>
        <h2>Skills Snapshot</h2>
        <p>A comprehensive overview of my technical expertise and capabilities</p>
      </div>
      <div className="skills-grid unique-grid">
        {skills.map((skill, idx) => (
          <div
            className={`skill-card glassy ${skill.color} unique-card`}
            style={{ animationDelay: `${idx * 0.13 + 0.2}s` }}
            key={skill.title}
          >
            <div className="skill-title">
              {skill.icon}
              <span>{skill.title}</span>
            </div>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;