---
layout: page
title: ""
permalink: /
---

{% assign cessna_post = site.posts | where_exp: "item", "item.path contains 'cessna182'" | first %}
{% assign ambmet_post = site.posts | where_exp: "item", "item.path contains 'ambmet'" | first %}
{% assign arbitrage_post = site.posts | where_exp: "item", "item.path contains 'arbitrage'" | first %}

<section id="home" class="one-page-section" style="text-align: center;">
  <div class="hero-manifesto">
    <h1 class="glitch-text">KARYUS LABS</h1>
    <p class="subtitle">Aerospace Engineering | Computational Physics | Data Strategy</p>
    
    <div class="mission-statement" style="max-width: 800px; margin: 3rem auto; font-size: 1.2rem; font-style: italic; color: #fff; opacity: 0.9;">
      "An independent engineering portfolio focused on high-fidelity simulation and data-driven analysis." [cite: 6]
    </div>

    <div class="tech-grid" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 4rem; flex-wrap: wrap;">
      <div class="tech-item">
        <i class="fas fa-university"></i>
        <span>Centrale Méditerranée & USP</span>
      </div>
      <div class="tech-item">
        <i class="fas fa-layer-group"></i>
        <span>Multidisciplinary Engineering</span>
      </div>
    </div>

    <a href="#projects" class="futuristic-btn">Deploy Hangar</a>
  </div>
</section>

<section id="about" class="one-page-section">
  <h2 class="section-title">The Engineer</h2>
  <div class="content-block">
    <p class="highlight-text">Renato Martins Filho | Founder of Karyus Labs [cite: 3, 49]</p>
    
    <h3>The Approach</h3>
    <p><strong>Karyus Labs</strong> serves as my digital workshop. The goal is simple: to document the rigorous application of engineering principles to solve complex problems. Whether through Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), or Data Science, the focus remains on <strong>technical precision</strong> and reliability. [cite: 12, 77]</p>

    <h3>Core Toolkit</h3>
    <ul class="tech-list">
      <li>Flight Dynamics & Control: Comprehensive stability analysis ranging from static sizing (XFLR5, AVL) to Nonlinear Dynamic Simulation and Control Law design using MATLAB & Simulink. [cite: 14, 16]</li>
      <li>Simulation & Structure: Structural analysis and FEM simulation using Abaqus and ANSYS, integrated with parametric CAD modeling (SolidWorks/CATIA). [cite: 54, 56]</li>
      <li>Computational Logic: Leveraging a background in Algorithm Theory (IMPA) to build optimized engineering automation scripts in Python and MATLAB.</li>
    </ul>
  </div>
</section>

<section id="research" class="one-page-section">
  <h2 class="section-title">Research & Intelligence</h2>
  <div class="content-block">
    <p style="margin-bottom: 2rem; opacity: 0.8;"><em>Theoretical foundations and data science projects.</em></p>

    <h3>PICME - Algorithmic Logic (IMPA/CNPq)</h3>
    <p>Scientific initiation focused on <strong>Graph Theory</strong> and the mathematical foundations of Computer Science. This background provides the logical framework used to structure complex engineering code and optimization routines.</p>
    
    <h3>Automotive Market Intelligence (NLP)</h3>
    <p>Developed a full-stack data platform processing <strong>140,000+ consumer reviews</strong>. Demonstrates the capability to handle large datasets and extract actionable insights using Natural Language Processing (Node.js/Python).</p>
  </div>
</section>

<section id="projects" class="one-page-section">
  <h2 class="section-title">Engineering Hangar</h2>
  <p style="margin-bottom: 2rem; opacity: 0.7;">High-fidelity aerospace simulations and physical modeling. [cite: 14]</p>
  
  <div class="project-grid-compact" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px;">
    
    <div class="project-card-mini">
      <div class="card-image">
        <img src="{{ '/assets/images/Simulink_Cessna_Cover.png' | relative_url }}" alt="Cessna 182 Simulation">
      </div>
      <div class="card-content">
        <h3>Cessna 182: Nonlinear Dynamics</h3>
        <p>High-fidelity simulator in Simulink implementing raw equations of motion. Validated against linearized state-space models. [cite: 14, 16]</p>
        <a href="{{ cessna_post.url | relative_url }}" class="compact-link">View Case Study →</a>
      </div>
    </div>

    </div>

  <h2 class="section-title" style="margin-top: 5rem;">The Laboratory</h2>
  <p style="margin-bottom: 2rem; opacity: 0.7;">Systems automation, ETL pipelines, and data strategy.</p>

  <div class="project-grid-compact" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px;">
    
    <div class="project-card-mini">
      <div class="card-image">
        <img src="{{ '/assets/images/karyus-ambmet-pipeline.jpg' | relative_url }}" alt="Ambmet Data Pipeline">
      </div>
      <div class="card-content">
        <h3>Ambmet: Meteorological ETL</h3>
        <p>Architected a proprietary modular pipeline to transform raw API data (ECMWF, GFS, ONS) into automated reports.</p>
        <a href="{{ ambmet_post.url | relative_url }}" class="compact-link">View Case Study →</a>
      </div>
    </div>

    <div class="project-card-mini">
      <div class="card-image">
        <img src="{{ '/assets/images/arbitrage-monitor.png' | relative_url }}" alt="Market Monitor Architecture">
      </div>
      <div class="card-content">
        <h3>E-commerce Arbitrage Monitor</h3>
        <p>Full-stack monitoring system utilizing Puppeteer Stealth for anti-bot evasion and MongoDB for data deduplication.</p>
        <a href="{{ arbitrage_post.url | relative_url }}" class="compact-link">View Case Study →</a>
      </div>
    </div>

  </div>
</section>

<section id="contact" class="one-page-section">
  <h2 class="section-title">Connect</h2>
  <div class="contact-grid">
    <div class="contact-info" style="font-size: 1.1rem; line-height: 2;">
      <p style="margin-bottom: 1rem; color: #00D4FF;"><strong>Objective:</strong> <span style="color: #fff;">Seeking Internship Opportunities (Summer 2026)</span></p>
      <p>Available for discussions on Structural Analysis, Aerodynamics, and Software Engineering.</p>
      
      <div style="margin-top: 2rem; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        <a href="mailto:renatocmf@usp.br" class="futuristic-btn" style="background: transparent; border: 1px solid #00D4FF;">
          Email Me
        </a>
        <a href="https://linkedin.com/in/renato-cm-filho" target="_blank" class="futuristic-btn">
          LinkedIn
        </a>
        <a href="{{ '/assets/files/CV_Renato_MARTINS.pdf' | relative_url }}" target="_blank" class="futuristic-btn" style="color: #00D4FF !important; border-color: #00D4FF;">
          <i class="fas fa-file-download" style="margin-right: 8px;"></i> CV
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Estilos para os novos blocos compactos */
  .project-card-mini {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
    transition: 0.3s;
  }
  .project-card-mini:hover {
    border-color: #00D4FF;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
  }
  .card-image img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    opacity: 0.8;
  }
  .card-content {
    padding: 1.5rem;
  }
  .card-content h3 {
    color: #00D4FF;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  .card-content p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  .compact-link {
    color: #00D4FF;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
  }
</style>
