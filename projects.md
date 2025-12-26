---
layout: post
title: "Engineering Hangar"
permalink: /projects/
---

## Technical Implementations

[cite_start]Each project represents a deep dive into the "Engineering Workflow," moving from theoretical physics to high-fidelity implementation[cite: 558, 680].

<div class="project-showcase">
  <div class="project-image-container">
    <img src="{{ '/assets/images/cessna_hero.png' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
    <div class="project-overlay">
      <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
      [cite_start]<p>High-fidelity nonlinear simulator built in Simulink by implementing raw equations of motion block-by-block[cite: 562, 683]. [cite_start]Validated against linearized state-space models to assess aerodynamic limits[cite: 563, 684].</p>
      
      <a href="{{ '/2025/11/16/linear-vs-non-linear-what-building-a-simulink-flight-simulator-taught-me-about-engineering/' | relative_url }}" class="futuristic-btn">View Technical Report</a>
    </div>
  </div>
</div>

<style>
.project-showcase {
    margin-top: 3rem;
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
  opacity: 0.4;
  transition: 0.5s;
  display: block;
}
.project-overlay {
  padding: 3rem;
  background: linear-gradient(0deg, rgba(1, 8, 11, 0.95) 40%, transparent);
  position: relative;
}
.project-overlay h3 {
    color: var(--karyus-earth);
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1rem;
}
.project-overlay p {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    color: var(--text-primary);
}
.project-image-container:hover {
    border-color: var(--karyus-neon);
    box-shadow: 0 0 30px var(--karyus-earth-glow);
}
.project-image-container:hover .project-hero-img {
  opacity: 0.7;
  transform: scale(1.03);
}
</style>

**Renato Filho @ Founder Karyus-Labs**
