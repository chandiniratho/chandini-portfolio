import React from "react";

export default function Projects() {
  const data = [
    {
      title: "tmachine.ai – Course Learning UI Module",
      desc:
        "Developed responsive UI screens for lesson content, notes, and assessments. Integrated backend APIs for student-specific progress and learning paths. Ensured pixel-perfect Figma implementation using ReactJS and CSS Modules.",
      link: "#"
    },
    {
      title: "AI-Powered Learning Platform (Frontend Enhancements)",
      desc:
        "Enhanced interactive UI components for the learning dashboard, improved performance, and collaborated with QA and backend teams for smooth delivery. Contributed to sprint planning via Zoho Sprints.",
      link: "#"
    },
    {
      title: "React CRUD Manager App (Personal Project)",
      desc:
        "Built a reusable component-based CRUD application using React, Axios, modals, pagination, and form validation. Focused on clean state management and responsive UI.",
      link: "#"
    }
  ];

  return (
    <div id="projects" className="projects">
      {data.map((p) => (
        <article key={p.title} className="project card">
          <h4>{p.title}</h4>
          <p>{p.desc}</p>
          <div style={{ marginTop: 12 }}>
            <a className="btn" href={p.link} onClick={(e) => e.preventDefault()}>
              View More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
