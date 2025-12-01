import React from "react";

export default function Hero(){
  return (
    <section className="hero center">
      <div className="card" style={{display:"inline-block", maxWidth:900}}>
        <div style={{padding:"30px 24px"}}>
          <h1 className="hero-title">Hi, I'm Chandini — Frontend Engineer</h1>
          <p className="hero-sub">
            I build pixel-perfect, responsive interfaces with React and modern HTML/CSS.
            I translate Figma designs into production components and ship features fast.
          </p>

          <div className="cta-group">
  <a className="btn btn-primary" href="#projects">View Projects</a>
  <a className="btn" href="mailto:rathochandini@gmail.com">Contact Me</a>
</div>

        </div>
      </div>

      <div style={{marginTop:22}} className="float">
        <div className="card" style={{display:"inline-block", padding:"14px 18px"}}>
          <div style={{fontWeight:800}}>React • TypeScript • CSS</div>
          <div style={{color:"var(--muted)", marginTop:6}}>10 months experience • Open to work</div>
        </div>
      </div>
    </section>
  );
}
