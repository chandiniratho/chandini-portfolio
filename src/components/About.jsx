import React from "react";

export default function About() {
  return (
    <div id="about" style={{ display: "grid", gap: 16 }}>
      <div className="card">
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>About Me</h3>
        <p style={{ color: "var(--muted)" }}>
          Frontend Developer with 10 months experience at T-Machine Software Solutions,
          contributing to the AI-powered educational platform <strong>tmachine.ai</strong>.
          Skilled in building responsive UI using ReactJS, JavaScript (ES6+), CSS Modules, 
          and REST API integrations.  

          I specialize in converting Figma designs into pixel-perfect components and 
          delivering clean, production-ready interfaces with a strong understanding of 
          Agile workflows through Zoho Sprints.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div className="card">
          <h4 style={{ marginBottom: 8 }}>Experience</h4>
          <p style={{ color: "var(--muted)" }}>
            <strong>T-Machine Software Solutions Pvt Ltd</strong>  
            Frontend Developer (Nov 2024 – Aug 2025)  
            Worked on student learning UI, interactive modules, and API-driven components.
          </p>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: 8 }}>Education</h4>
          <p style={{ color: "var(--muted)" }}>
            Bachelor of Technology — Computer Science  
            Gayatri Vidya Parishad College (CGPA: 8.3)
          </p>
        </div>
      </div>

      <div className="card">
        <h4 style={{ marginBottom: 8 }}>Internships</h4>
        <p style={{ color: "var(--muted)" }}>
          • Tech Mahindra — Frontend Intern (June 2024 – Oct 2024) <br />
          • Brain Vision, Hyderabad — Intern (May 2024 – Aug 2024) <br />
          • Visakhapatnam Port Trust — Trainee (May 2023 – June 2023)
        </p>
      </div>
    </div>
  );
}
