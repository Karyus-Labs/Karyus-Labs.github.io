---
layout: page
title: ""
permalink: /
---

<section id="home" class="one-page-section" style="text-align: center;">
  <div class="hero-manifesto">
    <h1 class="glitch-text">KARYUS LABS</h1>
    <p class="subtitle">Aerospace Engineering | Applied Intelligence | Computational Physics</p>
    
    <div class="mission-statement" style="max-width: 800px; margin: 3rem auto; font-size: 1.2rem; font-style: italic; color: #fff; opacity: 0.9;">
      "An independent R&D initiative bridging the gap between classical Aeronautical Engineering and the transformative power of AI."
    </div>

    <div class="tech-grid" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 4rem; flex-wrap: wrap;">
      <div class="tech-item" style="border: 1px solid var(--karyus-blue); padding: 15px 25px; background: rgba(0,47,69,0.3); border-radius: 4px;">
        <i class="fas fa-university" style="color: var(--karyus-earth); margin-right: 10px;"></i>
        <span>Centrale Méditerranée & USP</span>
      </div>
      <div class="tech-item" style="border: 1px solid var(--karyus-blue); padding: 15px 25px; background: rgba(0,47,69,0.3); border-radius: 4px;">
        <i class="fas fa-code-branch" style="color: var(--karyus-earth); margin-right: 10px;"></i>
        <span>Open Source Engineering</span>
      </div>
    </div>

    <a href="#projects" class="futuristic-btn">Explore Projects</a>
  </div>
</section>

<section id="about" class="one-page-section">
  <h2 class="section-title">The Engineer</h2>
  <div class="content-block">
    <p class="highlight-text">**Renato Filho** | Founder of Karyus Labs</p>
    
    <h3>The Philosophy</h3>
    <p><strong>Karyus Labs</strong> is my personal sandbox for high-complexity problem solving. It represents a shift from passive learning to active creation. Here, I document my work in combining the physical intuition of <strong>Fluid Mechanics</strong> with the predictive power of <strong>Machine Learning</strong>.</p>

    <h3>Core Toolkit</h3>
    <ul class="tech-list">
      <li>**Aerospace Dynamics:** Deep understanding of Stability & Control (Legacy SAE Aerodesign), backed by simulation tools (XFLR5, AVL).</li>
      <li>**Data Intelligence:** Building custom NLP pipelines and scraping architectures to turn raw chaos into structured industrial data.</li>
      <li>**Mathematical Rigor:** Leveraging a background in Graph Theory (IMPA) to optimize algorithms rather than just implementing them.</li>
    </ul>
  </div>
</section>

<section id="research" class="one-page-section">
  <h2 class="section-title">Research & Intelligence</h2>
  <div class="content-block">
    <p style="margin-bottom: 2rem; opacity: 0.8;"><em>Advanced academic work applied to real-world engineering constraints.</em></p>

    <h3>PICME - Algorithm Theory (IMPA/CNPq)</h3>
    <p>Before engineering, I studied the mathematical foundations of Computer Science. This research on <strong>Implementation Complexity</strong> ensures that the code I write for Karyus projects is efficient, scalable, and mathematically sound.</p>
    
    <h3>Automotive Market Intelligence (NLP)</h3>
    <p>A proof-of-concept for industrial data analysis. I developed a full-stack platform processing <strong>140,000+ reviews</strong> to generate a quantitative "Reliability Score", demonstrating how unstructured text can drive engineering decisions.</p>
  </div>
</section>

<section id="projects" class="one-page-section">
  <h2 class="section-title">Engineering Hangar</h2>
  <div class="project-showcase">
    <div class="project-image-container">
      <img src="{{ '/assets/images/cessna_hero.png' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
      <div class="project-overlay">
        <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
        <p>A move away from linearized approximations. This simulator implements raw equations of motion in Simulink to predict aircraft behavior in edge-cases.</p>
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
      <p>I am available for technical discussions regarding Flight Mechanics, Data Science, and Engineering opportunities.</p>
      
      <div style="margin-top: 2rem; display: flex; gap: 20px; align-items: center;">
        <a href="mailto:renatocmf@usp.br" class="futuristic-btn" style="background: transparent; border: 1px solid var(--karyus-neon);">Email Me</a>
        <a href="https://linkedin.com/in/renato-cm-filho" target="_blank" class="futuristic-btn">LinkedIn Profile</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* MANTENHA O SEU CSS AQUI */
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
