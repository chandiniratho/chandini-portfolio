import React, { useState } from "react";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div className="navbar" >
        <div className="brand">Chandini <span style={{color:"#8a2be2"}}>Ratho</span></div>

        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Contact</a>
        </nav>

        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <div className="burger" onClick={() => setOpen(p => !p)} aria-hidden>
            <svg width="18" height="12" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="#6B7280"></rect>
              <rect y="6" width="20" height="2" rx="1" fill="#6B7280"></rect>
              <rect y="12" width="20" height="2" rx="1" fill="#6B7280"></rect>
            </svg>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="card" style={{display:"flex", flexDirection:"column", gap:8}}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a 
  className="btn" 
  href="mailto:rathochandini@gmail.com" 
  onClick={(e) => {
    // Fallback for browsers that block mailto
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=rathochandini@gmail.com",
        "_blank"
      );
    }, 300);
  }}
>
  Contact Me
</a>




        </div>
      </div>
    </div>
  );
}
