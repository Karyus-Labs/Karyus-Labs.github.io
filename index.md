---
layout: page
title: ""
permalink: /
---

{% assign cessna_post = site.posts | where_exp: "item", "item.path contains 'cessna182'" | first %}

<section id="home" class="one-page-section" style="text-align: center;">
  <div class="hero-manifesto">
    
    <img src="{{ '/assets/images/karyus-logo.svg' | relative_url }}" alt="Karyus Labs" class="hero-logo-totem">
    
    <h1 class="glitch-text mini-glitch">KARYUS LABS</h1>
    
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
    <p>
      Here you should keep your bio regarding your double degree at USP and École Centrale.
    </p>
  </div>
</section>

<section id="projects" class="one-page-section">
    <h2 class="section-title">Selected Missions</h2>
    
    <div class="project-image-container" style="margin-bottom: 2rem;">
        <div class="project-overlay">
            <h3 class="highlight-text">Cessna 182 Flight Dynamics</h3>
            <p>Implementing raw equations of motion. Validated against linearized state-space models.</p>
            <a href="{{ cessna_post.url | default: '#projects' | relative_url }}" class="futuristic-btn">Read Case Study</a>
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

        <a href="{{ '/assets/files/CV_RenatoCMF_Ouvrier.pdf' | relative_url }}" target="_blank" class="futuristic-btn">
          Download CV
        </a>
      </div>
    </div>
  </div>
</section>
