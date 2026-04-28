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
  
  <div class="engineer-container" style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap; max-width: 950px;">
    
    <div class="engineer-photo" style="flex: 0 0 320px; margin: 0 auto;">
      <img src="{{ '/assets/images/renato-aero.jpeg' | relative_url }}" alt="Renato Martins Filho - Aerodesign" style="width: 100%; height: auto; object-fit: cover; border-radius: 8px; border: 2px solid rgba(0, 212, 255, 0.3); box-shadow: 0 0 20px rgba(0, 212, 255, 0.1); filter: grayscale(20%) contrast(110%);">
    </div>

    <div style="flex: 1; min-width: 320px; line-height: 1.6; font-size: 1rem;">
      <p class="highlight-text" style="margin-top: 0;">Renato Martins Filho | Founder & Lead Developer</p>
      <p>Currently pursuing a <strong>Double Degree</strong> in Aerospace Engineering at <strong>EESC-USP</strong> and <strong>Centrale Méditerranée</strong>. My work focuses on the intersection of physical modeling, data-driven optimization, and autonomous systems management.</p>

      <h3 style="margin-top: 2rem;">Technical & Operational Arsenal</h3>
      <ul class="tech-list" style="padding-left: 1.2rem;">
        <li style="margin-bottom: 0.8rem;"><strong>Aero & Flight Mechanics:</strong> High-fidelity simulation (6-DOF) and Non-linear dynamics implementation in MATLAB/Simulink. Stability & Control analysis via XFLR5 and AVL.</li>
        <li style="margin-bottom: 0.8rem;"><strong>Autonomous Systems:</strong> Development of real-time navigation algorithms, integration with Optitrack motion capture systems, and obstacle avoidance in Mixed Reality (AR) environments.</li>
        <li style="margin-bottom: 0.8rem;"><strong>Data Engineering:</strong> Specialist in architecting resilient ETL pipelines for diverse data sources, Web Scraping (Stealth/Puppeteer), and managing NoSQL databases (MongoDB).</li>
        <li><strong>Engineering Operations & B2B Negotiation:</strong> Managed a portfolio of 17 corporate partners and negotiated international contracts for the EESC-USP Aerodesign team. Expertise in stakeholder management and supply chain coordination.</li>
      </ul>
    </div>
    
  </div>
</section>

<section id="research" class="one-page-section">
  <h2 class="section-title">Research & Intelligence</h2>
  <div class="content-block">
    <p style="margin-bottom: 2rem; opacity: 0.8;"><em>Advancing autonomous navigation and data-driven engineering through mathematical rigor.</em></p>
    
    <div style="margin-bottom: 2.5rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">Autonomous Navigation & Mixed Reality (Centrale Méditerranée)</h3>
      <p>Developing a real-time autonomous piloting system for mobile robots within an Optitrack-equipped arena. Implementation of navigation algorithms capable of handling system latency and virtual obstacle avoidance via Augmented Reality. Targeted at advancing robust autonomy in complex aerial and ground environments.</p>
    </div>

    <div style="margin-bottom: 2.5rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">Data Intelligence & NLP (PICME / USP)</h3>
      <p>Applied research focused on extracting actionable insights from large unstructured datasets. Developed a platform processing <strong>140,000+ consumer reviews</strong> using Natural Language Processing and automated Web Scraping to map industrial market trends.</p>
    </div>

    <div style="margin-bottom: 2.5rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">Algorithmic Logic & Graph Theory (PICME / IMPA)</h3>
      <p>Scientific initiation at the <strong>Institute for Pure and Applied Mathematics (IMPA)</strong>. Deep dive into the mathematical foundations of Computer Science, focusing on graph-based optimization and algorithmic efficiency.</p>
    </div>

    <div style="margin-bottom: 2.5rem;">
      <h3 style="color: #00D4FF; margin-bottom: 0.5rem;">ActinSpace 2026 (CNES/ESA) | 3rd Place Local (Toulon)</h3>
      <p>Developed a space-data-driven solution for industrial monitoring under high-pressure hackathon conditions. Validated the ability to deploy innovative tech solutions within the strict timelines of the French aerospace ecosystem.</p>
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
      <p>Available for discussions on Autonomous Systems, Flight Dynamics, and Data Architecture.</p>
      
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
  .content-block, .contact-info {
    max-width: 750px; 
    line-height: 1.6;
  }
  .contact-info {
    font-size: 1.1rem; 
  }
  .project-grid-compact {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 400px)); 
    gap: 30px;
    justify-content: start;
  }
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
  .card-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    opacity: 0.8;
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  }
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
