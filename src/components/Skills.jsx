import React from "react";

export default function Skills(){
  const skills = [
    "ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "CSS Modules", "REST APIs", "Axios", "Figma", "Git & GitLab"
  ];

  return (
    <div id="skills" className="skill-grid">
      {skills.map(s => (
        <div key={s} className="skill">{s}</div>
      ))}
    </div>
  );
}
