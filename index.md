---
layout: page
title: ""
permalink: /
---

{% assign cessna_post = site.posts | where_exp: "item", "item.path contains 'cessna182'" | first %}

<section id="home" class="one-page-section" style="text-align: center;">
  <div class="hero-manifesto">
    
    <div class="karyus-logotype-wrapper">
      <img src="{{ '/assets/images/karyus-logo.svg' | relative_url }}" alt="K" class="inline-k-logo">
      
      <h1 class="glitch-text text-remainder">ARYUS LABS</h1>
    </div>

    <p class="subtitle">Aerospace Engineering | Computational Physics | Data Strategy</p>
    
    <div class="mission-statement" style="max-width: 800px; margin: 3rem auto; font-size: 1.2rem; font-style: italic; color: #fff; opacity: 0.9;">
      "An independent engineering portfolio focused on high-fidelity simulation and data-driven analysis."
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
    <p class="highlight-text">Renato Martins Filho | Founder of Karyus Labs</p>
    
    <h3>The Approach</h3>
    <p><strong>Karyus Labs</strong> serves as my digital workshop. The goal is simple: to document the rigorous application of engineering principles to solve complex problems. Whether through Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), or Data Science, the focus remains on <strong>technical precision</strong> and reliability.</p>

    <h3>Core Toolkit</h3>
    <ul class="tech-list">
      <li>Flight Dynamics & Control: Comprehensive stability analysis ranging from static sizing (XFLR5, AVL) to Nonlinear Dynamic Simulation and Control Law design using MATLAB & Simulink.</li>
      <li>Simulation & Structure: Structural analysis and FEM simulation using Abaqus and ANSYS, integrated with parametric CAD modeling (SolidWorks/CATIA).</li>
      <li>Computational Logic: Leveraging a background in Algorithm Theory (IMPA) to build optimized engineering automation scripts in Python and MATLAB.</li>
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
      <img src="{{ '/assets/images/cessna182-photo.png' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
      
      <div class="project-overlay">
        <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
        <p>High-fidelity simulator in Simulink implementing raw equations of motion. Validated against linearized state-space models.</p>
        
        <a href="{{ cessna_post.url | default: '#projects' | relative_url }}" class="futuristic-btn">Read Case Study</a>
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
      
      <div style="margin-top: 2rem; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        
        <a href="mailto:renatocmf@usp.br" class="futuristic-btn" style="background: transparent; border: 1px solid var(--karyus-neon);">
          Email Me
        </a>
        
        <a href="https://linkedin.com/in/renato-cm-filho" target="_blank" class="futuristic-btn">
          LinkedIn
        </a>

        <a href="{{ '/assets/files/CV_RenatoCMF_Ouvrier.pdf' | relative_url }}" target="_blank" class="futuristic-btn" style="color: var(--karyus-neon) !important; border-color: var(--karyus-neon);">
          <i class="fas fa-file-download" style="margin-right: 8px;"></i> CV
        </a>

      </div>
    </div>
  </div>
</section>
