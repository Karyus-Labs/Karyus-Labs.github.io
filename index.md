---
layout: page
title: ""
permalink: /
---

{% assign cessna_post = site.posts | where_exp: "item", "item.path contains 'cessna182'" | first %}
{% assign ambmet_post = site.posts | where_exp: "item", "item.path contains 'ambmet'" | first %}
{% assign arbitrage_post = site.posts | where: "slug", "ecommerce-arbitrage-monitor" | first %}

<section id="home" class="one-page-section" style="text-align: center;">
  <div class="hero-manifesto">
    <h1 class="glitch-text">KARYUS LABS</h1>
    <p class="subtitle">Aerospace Systems | Computational Physics | Data Architecture</p>
    
    <div class="mission-statement" style="max-width: 750px; margin: 3rem auto; font-size: 1.2rem; font-style: italic; color: #fff; opacity: 0.9; line-height: 1.6;">
      "Engineering is the bridge between raw mathematical theory and operational reality. At <strong>Karyus Labs</strong>, I develop high-fidelity simulations and automated data pipelines to solve complex aerospace and logistical challenges."
    </div>

    <div class="tech-grid" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 4rem; flex-wrap: wrap;">
      <div class="tech-item">
        <i class="fas fa-microchip"></i>
        <span>Systems Automation</span>
      </div>
      <div class="tech-item">
        <i class="fas fa-wind"></i>
        <span>Flight Dynamics</span>
      </div>
      <div class="tech-item">
        <i class="fas fa-database"></i>
        <span>Data Strategy</span>
      </div>
    </div>

    <a href="#projects" class="futuristic-btn">Access Engineering Hangar</a>
  </div>
</section>

<section id="about" class="one-page-section">
  <h2 class="section-title">The Engineer</h2>
  <div class="content-block">
    <p class="highlight-text">Renato Martins Filho | Founder & Lead Developer</p>
    <p>Currently pursuing a <strong>Double Degree</strong> in Aerospace Engineering at <strong>EESC-USP</strong> and <strong>Centrale Méditerranée</strong>. My work focuses on the intersection of physical modeling and data-driven optimization.</p>

    <h3 style="margin-top: 2rem;">Technical Arsenal</h3>
    <ul class="tech-list">
      <li><strong>Aero & Flight Mechanics:</strong> High-fidelity simulation (6-DOF) and Non-linear dynamics implementation in MATLAB/Simulink. Stability & Control analysis via XFLR5 and AVL.</li>
      <li><strong>Data & Software Engineering:</strong> Architecting resilient ETL pipelines, Web Scraping (Stealth/Puppeteer), and NoSQL database management (MongoDB).</li>
      <li><strong>Computational Foundations:</strong> Algorithmic logic and Graph Theory background via PICME (IMPA/CNPq), providing the mathematical framework for engineering automation.</li>
    </ul>
  </div>
</section>

<section id="achievements" class="one-page-section">
  <h2 class="section-title">Research & Intelligence</h2>
  <div class="content-block">
    
    <div style="margin-bottom: 2rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">ActinSpace 2026 (CNES/ESA) | 3rd Place Local (Toulon)</h3>
      <p>Developed a space-data-driven solution for industrial monitoring under high-pressure hackathon conditions, competing within the French aerospace ecosystem.</p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">Winner - HackSEA Embraer (2023)</h3>
      <p>Strategic solution for the aeronautical industry developed during the XXI Aeronautical Engineering Week (EESC-USP).</p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">Automotive Market Intelligence (NLP)</h3>
      <p>Developed a full-stack data platform processing <strong>140,000+ consumer reviews</strong>. Demonstrates the capability to handle large datasets and extract actionable insights using Natural Language Processing (Node.js/Python).</p>
    </div>

  </div>
</section>

<section id="projects" class="one-page-section">
  <h2 class="section-title">Engineering Hangar</h2>
  <p style="margin-bottom: 2rem; opacity: 0.7;">High-fidelity aerospace simulations and automated data pipelines.</p>
  
  <div class="project-grid-compact">
    
    <div class="project-card-mini">
      <div class="card-image">
        <img src="{{ '/assets/images/cessna182-photo.png' | relative_url }}" alt="Cessna 182 Simulation">
      </div>
      <div class="card-content">
        <h3>Cessna 182: Nonlinear Simulator</h3>
        <p>Implementation of 6-DOF nonlinear equations of motion in Simulink. Features a Newton-Raphson trimming routine and validation against state-space linear models (Longitudinal stability).</p>
        <a href="{{ cessna_post.url | relative_url }}" class="compact-link">Technical Case Study →</a>
      </div>
    </div>

    <div class="project-card-mini">
      <div class="card-image">
        <img src="{{ '/assets/images/ambmet-pipeline.png' | relative_url }}" alt="Ambmet Data Pipeline">
      </div>
      <div class="card-content">
        <h3>Ambmet: Meteorological ETL</h3>
        <p>A modular Python pipeline that automates global API data extraction (ECMWF/GFS), reducing executive reporting time from 2 hours to under 10 seconds.</p>
        <a href="{{ ambmet_post.url | relative_url }}" class="compact-link">Automation Logic →</a>
      </div>
    </div>

    <div class="project-card-mini">
      <div class="card-image">
        <img src="{{ '/assets/images/arbitrage-monitor.png' | relative_url }}" alt="E-commerce Arbitrage Monitor">
      </div>
      <div class="card-content">
        <h3>Scalable Arbitrage Monitor</h3>
        <p>Full-stack monitoring system built with Node.js and MongoDB. Uses stealth optimization for anti-bot evasion and real-time Discord alerting.</p>
        <a href="{{ arbitrage_post.url | relative_url }}" class="compact-link">System Architecture →</a>
      </div>
    </div>

  </div>
</section>

<section id="contact" class="one-page-section">
  <h2 class="section-title">Connect</h2>
  <div class="contact-grid">
    <div class="contact-info">
      <p style="margin-bottom: 1rem; color: #00D4FF;"><strong>Objective:</strong> <span style="color: #fff;">Seeking Internship Opportunities (Summer 2026)</span></p>
      <p>Available for discussions on Flight Dynamics, Computational Physics, and Data Architecture.</p>
      
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
  /* PADRONIZAÇÃO DE LARGURA DO TEXTO: Aplicado em blocos de conteúdo e contato alinhados à esquerda */
  .content-block, .contact-info {
    max-width: 750px; 
    line-height: 1.6;
  }

  .contact-info {
    font-size: 1.1rem; 
  }

  /* Controlador do Grid: Mantém os cards com largura fixa, evitando esticar */
  .project-grid-compact {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 400px)); 
    gap: 30px;
    justify-content: start;
  }

  /* Estrutura do Card */
  .project-card-mini {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 6px;
    overflow: hidden;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .project-card-mini:hover {
    border-color: #00D4FF;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
  }

  /* Área da Imagem */
  .card-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    opacity: 0.8;
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  }

  /* Placeholder em CSS para o projeto sem imagem */
  .coming-soon-box {
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 212, 255, 0.02),
      rgba(0, 212, 255, 0.02) 10px,
      rgba(0, 212, 255, 0.05) 10px,
      rgba(0, 212, 255, 0.05) 20px
    );
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
    color: rgba(0, 212, 255, 0.4);
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  /* Área do Texto */
  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-content h3 {
    color: #00D4FF;
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
    letter-spacing: 0.5px;
  }

  .card-content p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color: #E0E0E0;
    flex-grow: 1;
  }

  .compact-link {
    color: #00D4FF;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    align-self: flex-start;
  }
</style>
