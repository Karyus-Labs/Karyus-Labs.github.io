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
      "Engineering precision met by Data Intelligence. We solve complex aerodynamic problems through rigorous simulation and algorithmic efficiency."
    </div>

    <div class="tech-grid" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 4rem; flex-wrap: wrap;">
      <div class="tech-item" style="border: 1px solid var(--karyus-blue); padding: 15px 25px; background: rgba(0,47,69,0.3); border-radius: 4px;">
        <i class="fas fa-university" style="color: var(--karyus-earth); margin-right: 10px;"></i>
        <span>Centrale Méditerranée & USP (Double Degree)</span>
      </div>
      <div class="tech-item" style="border: 1px solid var(--karyus-blue); padding: 15px 25px; background: rgba(0,47,69,0.3); border-radius: 4px;">
        <i class="fas fa-trophy" style="color: var(--karyus-earth); margin-right: 10px;"></i>
        <span>1st Place: Embraer HackaSEA Challenge</span>
      </div>
    </div>

    <a href="#projects" class="futuristic-btn">Deploy R&D Portfolio</a>
  </div>
</section>

<section id="about" class="one-page-section">
  <h2 class="section-title">The Founder</h2>
  <div class="content-block">
    <p class="highlight-text">**Renato Filho** | Aerospace Engineer & Data Scientist</p>
    
    <h3>Strategic Vision</h3>
    <p>At Karyus Labs, the mission is to transcend traditional engineering boundaries. By combining the physical intuition of <strong>Fluid Mechanics</strong> with the predictive power of <strong>Machine Learning</strong>, I develop solutions that are not only theoretically sound but operationally efficient.</p>

    <h3>Core Competencies</h3>
    <ul class="tech-list">
      <li>**Aerospace Dynamics:** Expertise in Stability & Control and Aircraft Sizing (SAE Aerodesign Legacy), utilizing XFLR5, AVL, and MATLAB.</li>
      <li>**Applied Intelligence:** Full-stack development of data platforms using Node.js and Python, featuring NLP pipelines for large-scale sentiment analysis.</li>
      <li>**Technical Leadership:** Proven track record in managing technical partnerships and strategic planning for high-performance engineering teams.</li>
    </ul>
  </div>
</section>

<section id="research" class="one-page-section">
  <h2 class="section-title">Research & Intelligence</h2>
  <div class="content-block">
    <h3>PICME - Advanced Mathematics (IMPA/CNPq)</h3>
    <p>Researched the mathematical foundations of Computer Science, focusing on Graph Theory and Implementation Complexity. This background ensures that Karyus algorithms are optimized for performance, not just functionality.</p>
    
    <h3>Automotive Market Intelligence (NLP Engine)</h3>
    <p>Designed and deployed a proprietary data intelligence architecture that scraped and processed <strong>140,000+ consumer reviews</strong>. The system utilized Natural Language Processing to generate a quantitative "Reliability Score" for market analysis.</p>
  </div>
</section>

<section id="projects" class="one-page-section">
  <h2 class="section-title">Engineering Hangar</h2>
  <div class="project-showcase">
    <div class="project-image-container">
      <img src="{{ '/assets/images/cessna_hero.png' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
      <div class="project-overlay">
        <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
        <p>High-fidelity nonlinear simulator built in Simulink by implementing raw equations of motion block-by-block. Validated against linearized state-space models.</p>
        <a href="{{ '/2025/11/16/linear-vs-non-linear-what-building-a-simulink-flight-simulator-taught-me-about-engineering/' | relative_url }}" class="futuristic-btn">View Technical Report</a>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="one-page-section">
  <h2 class="section-title">Initiate Contact</h2>
  <div class="contact-grid">
    <div class="contact-info" style="font-size: 1.1rem; line-height: 2;">
      <p style="margin-bottom: 1rem; color: var(--karyus-neon);"><strong>Status:</strong> <span style="color: #fff;">Open for Internship Opportunities (Summer 2026)</span></p>
      <p><i class="fas fa-envelope" style="color: var(--karyus-earth); margin-right: 10px;"></i> <a href="mailto:renatocmf@usp.br" style="color: inherit; text-decoration: none;">renatocmf@usp.br</a></p>
      <p><i class="fas fa-map-marker-alt" style="color: var(--karyus-earth); margin-right: 10px;"></i> Marseille, France (Timezone: CET)</p>
      <p><i class="fas fa-phone" style="color: var(--karyus-earth); margin-right: 10px;"></i> +33 07 43 50 28 14</p>
      
      <div style="margin-top: 2rem;">
        <a href="https://linkedin.com/in/renato-cm-filho" target="_blank" class="futuristic-btn" style="font-size: 0.9rem;">Connect on LinkedIn</a>
      </div>
    </div>
  </div>
</section>

<style>
  
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
  
  /* ESTILOS DO PROJETO (CESSNA) */
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
