---
layout: post
title: "Engineering Hangar"
permalink: /projects/
---

## Technical Implementations

Each project here is a transition from mathematical theory to high-fidelity code execution.

<div class="project-showcase">
  <div class="project-image-container">
    <img src="{{ '/assets/images/cessna_sim.gif' | relative_url }}" alt="Cessna 182 Simulation" class="project-hero-img">
    <div class="project-overlay">
      <h3>Cessna 182: Nonlinear Flight Dynamics</h3>
      <p>Simulink-based flight simulator implementing 6-DOF equations of motion from scratch.</p>
      <a href="https://github.com/Renatocmf023/Cessna-182-Sim" class="futuristic-btn">Review Codebase</a>
    </div>
  </div>
</div>

<style>
.project-image-container {
  position: relative;
  border: 1px solid var(--karyus-blue);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 3rem;
  background: #000;
}
.project-hero-img {
  width: 100%;
  opacity: 0.6;
  transition: 0.5s;
}
.project-overlay {
  padding: 3rem;
  background: linear-gradient(0deg, rgba(1, 8, 11, 0.9) 30%, transparent);
}
.project-image-container:hover .project-hero-img {
  opacity: 0.9;
  transform: scale(1.02);
}
</style>

**Renato Filho @ Founder Karyus-Labs**
