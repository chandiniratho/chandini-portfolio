import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="container navbar card">
          <Navbar />
        </div>
      </header>

      <main className="container">
        <Hero />
        <section className="section">
          <About />
        </section>

        <section className="section">
          <div className="section-title">Tech Stack</div>
          <Skills />
        </section>

        <section className="section">
          <div className="section-title">Projects</div>
          <Projects />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
