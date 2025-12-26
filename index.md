---
layout: page
title: ""
permalink: /
---

<section id="home" class="one-page-section">
  <div class="hero-manifesto">
    <h1 class="glitch-text">KARYUS LABS</h1>
    <p class="subtitle">Aerospace Engineering | Applied Intelligence | Mathematical Rigor</p>
    <div class="mission-statement">
      "Bridging the gap between classical Aeronautical Engineering and the transformative power of AI."
    </div>
    <div class="tech-grid">
      <div class="tech-item">
        <i class="fas fa-microchip"></i>
        <span>Double Degree Candidate: Centrale Méditerranée & EESC-USP</span>
      </div>
      <div class="tech-item">
        <i class="fas fa-trophy"></i>
        <span>Winner: Embraer HackaSEA Challenge</span>
      </div>
    </div>
    <a href="#projects" class="futuristic-btn">Access R&D Portfolio</a>
  </div>
</section>

<section id="about" class="one-page-section">
  <h2 class="section-title">The Founder: Engineering the Future of Flight</h2>
  <div class="content-block">
    <p class="highlight-text">**Renato Filho** | Aerospace Engineer & AI Researcher</p>
    
    <h3>Strategic Vision</h3>
    <p>My journey in engineering is driven by a singular goal: to bridge the gap between classical Aeronautical Engineering and the transformative power of Artificial Intelligence. I focus on solving high-complexity problems through simulation, automation, and mathematical rigor.</p>

    <h3>Technical Foundation</h3>
    <ul class="tech-list">
      <li>**Flight Mechanics & Control:** Specialized in stability analysis and control sizing (XFLR5, AVL, MATLAB/Simulink).</li>
      <li>**Data Science & NLP:** Developed data intelligence platforms and applied NLP to large-scale industrial datasets (PICME scholarship).</li>
      <li>**Optimization:** Background in Graph Theory and computational complexity for Deep Tech development.</li>
    </ul>
  </div>
</section>

<section id="research" class="one-page-section">
  <h2 class="section-title">Research & R&D</h2>
  <div class="content-block">
    <h3>PICME - Undergraduate Research (IMPA & CNPq)</h3>
    <p>Conducted rigorous theoretical research on the mathematical foundations of computer science, focusing on implementation complexity and mathematical proofs.</p>
    
    <h3>Automotive Market Intelligence (CarReliability)</h3>
    <p>Developed a full-stack data intelligence platform, processing over 140,000 consumer reviews using Sentiment Analysis and a proprietary "Reliability Score" algorithm.</p>
  </div>
</section>

<section id="projects" class="one-page-section">
  <h2 class="section-title">Engineering Hangar</h2>
  <div class="project-showcase">
    <div class="project-image-container">
      <img src="{{ '/assets/images/cessna_hero.png' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
      <div class="project-overlay">
        <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
        <p>High-fidelity nonlinear simulator built in Simulink by implementing raw equations of motion block-by-block.</p>
        <a href="{{ '/2025/11/16/linear-vs-non-linear-what-building-a-simulink-flight-simulator-taught-me-about-engineering/' | relative_url }}" class="futuristic-btn">View Technical Report</a>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="one-page-section">
  <h2 class="section-title">Contact Mission Control</h2>
  <div class="contact-grid">
    <div class="contact-info">
      <p><i class="fas fa-envelope"></i> rcmartinsf@gmail.com</p>
      <p><i class="fas fa-map-marker-alt"></i> Marseille, France | São Carlos, Brazil</p>
      <p><i class="fas fa-phone"></i> +33 07 43 50 28 14</p>
    </div>
  </div>
</section>

<style>
  .one-page-section {
    min-height: 100vh;
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
    font-family: var(--font-header);
  }
</style>
