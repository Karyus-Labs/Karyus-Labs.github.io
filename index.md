---
layout: page
title: ""
permalink: /
---

<section id="home" class="one-page-section" style="text-align: center;">
  <div class="hero-manifesto">
    <h1 class="glitch-text">KARYUS LABS</h1>
    <p class="subtitle">Aerospace Engineering | Computational Physics | Data Strategy</p>
    
    <div class="mission-statement" style="max-width: 800px; margin: 3rem auto; font-size: 1.2rem; font-style: italic; color: #fff; opacity: 0.9;">
      "An independent engineering portfolio focused on high-fidelity simulation and data-driven analysis."
    </div>

    <div class="tech-grid" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 4rem; flex-wrap: wrap;">
      <div class="tech-item" style="border: 1px solid var(--karyus-blue); padding: 15px 25px; background: rgba(0,47,69,0.3); border-radius: 4px;">
        <i class="fas fa-university" style="color: var(--karyus-earth); margin-right: 10px;"></i>
        <span>Centrale Méditerranée & USP</span>
      </div>
      <div class="tech-item" style="border: 1px solid var(--karyus-blue); padding: 15px 25px; background: rgba(0,47,69,0.3); border-radius: 4px;">
        <i class="fas fa-layer-group" style="color: var(--karyus-earth); margin-right: 10px;"></i>
        <span>Multidisciplinary Engineering</span>
      </div>
    </div>

    <a href="#projects" class="futuristic-btn">Deploy Hangar</a>
  </div>
</section>

<section id="about" class="one-page-section">
  <h2 class="section-title">The Engineer</h2>
  <div class="content-block">
    <p class="highlight-text">**Renato Filho** | Founder of Karyus Labs</p>
    
    <h3>The Approach</h3>
    <p><strong>Karyus Labs</strong> serves as my digital workshop. The goal is simple: to document the rigorous application of engineering principles to solve complex problems. Whether through Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), or Data Science, the focus remains on <strong>technical precision</strong> and reliability.</p>

    <h3>Core Toolkit</h3>
    <ul class="tech-list">
      <li>**Simulation & Structure:** Structural analysis and simulation using Abaqus, ANSYS, and CAD modeling (SolidWorks/CATIA).</li>
      <li>**Aerodynamics:** Stability analysis and aircraft sizing (XFLR5, AVL) validated by academic competitions (SAE Aerodesign).</li>
      <li>**Computational Logic:** Leveraging a background in Algorithm Theory to build efficient scripts in Python and MATLAB for engineering automation.</li>
    </ul>
  </div>
</section>

<section id="research" class="one-page-section">
  <h2 class="section-title">Research & Intelligence</h2>
  <div class="content-block">
    <p style="margin-bottom: 2rem; opacity: 0.8;"><em>Theoretical foundations and data science projects.</em></p>

    <h3>PICME - Algorithmic Logic (IMPA/CNPq)</h3>
    <p>Scientific initiation focused on <strong>Graph Theory</strong> and the mathematical foundations of Computer Science. While distinct from aerospace, this background provided the rigorous logical framework I use today to structure complex engineering code and optimization routines.</p>
    
    <h3>Automotive Market Intelligence (NLP)</h3>
    <p>Developed a full-stack data platform processing <strong>140,000+ consumer reviews</strong>. This project demonstrates the capability to handle large datasets and extract actionable insights using Natural Language Processing (Node.js/Python).</p>
  </div>
</section>

<section id="projects" class="one-page-section">
  <h2 class="section-title">Engineering Hangar</h2>
  <div class="project-showcase">
    <div class="project-image-container" style="margin-bottom: 2rem;">
      <img src="{{ '/assets/images/cessna_hero.png' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
      <div class="project-overlay">
        <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
        <p>High-fidelity simulator in Simulink implementing raw equations of motion. Validated against linearized state-space models.</p>
        <a href="{{ '/2025/11/16/linear-vs-non-linear-what-building-a-simulink-flight-simulator-taught-me-about-engineering/' | relative_url }}" class="futuristic-btn">Read Case Study</a>
      </div>
    </div>
    
    </div>
</section>

<section id="contact" class="one-page-section">
  <h2 class="section-title">Connect</h2>
  <div class="contact-grid">
    <div class="contact-info" style="font-size: 1.1rem; line-height: 2;">
      <p style="margin-bottom: 1rem; color: var(--karyus-neon);"><strong>Objective:</strong> <span style="color: #fff;">Seeking Internship Opportunities (Summer 2026)</span></p>
      <p>Available for discussions on Structural Analysis, Aerodynamics, and Software Engineering.</p>
      
      <div style="margin-top: 2rem; display: flex; gap: 20px; align-items: center;">
        <a href="mailto:renatocmf@usp.br" class="futuristic-btn" style="background: transparent; border: 1px solid var(--karyus-neon);">Email Me</a>
        <a href="https://linkedin.com/in/renato-cm-filho" target="_blank" class="futuristic-btn">LinkedIn Profile</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* MANTENHA O CSS ORIGINAL */
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    border-left: 5px solid var(--karyus-neon);
    padding-left: 20px;
    color: var(--karyus-earth);
  }
  .content-block {
    background: rgba(255, 255, 255, 0.02);
    padding: 2.5rem;
    border: 1px solid rgba(0, 242, 255, 0.1);
    border-radius: 8px;
    line-height: 1.8;
  }
  .highlight-text {
    color: var(--karyus-neon);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
  .tech-list {
    list-style: none;
    padding: 0;
  }
  .tech-list li {
    margin-bottom: 1rem;
    padding-left: 25px;
    position: relative;
  }
  .tech-list li::before {
    content: '>';
    position: absolute;
    left: 0;
    color: var(--karyus-earth);
    font-weight: bold;
  }
  .project-image-container {
    position: relative;
    border: 1px solid var(--karyus-blue);
    border-radius: 8px;
    overflow: hidden;
    background: #000;
    transition: var(--transition);
  }
  .project-hero-img {
    width: 100%;
    opacity: 0.5;
    transition: 0.5s;
    display: block;
  }
  .project-overlay {
    padding: 3rem;
    background: linear-gradient(0deg, rgba(1, 8, 11, 0.95) 40%, transparent);
    position: relative;
  }
  .project-image-container:hover {
    border-color: var(--karyus-neon);
    box-shadow: 0 0 30px var(--karyus-earth-glow);
  }
  .project-image-container:hover .project-hero-img {
    opacity: 0.8;
    transform: scale(1.03);
  }
</style>
