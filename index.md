---
layout: page
title: ""
permalink: /
---

<section class="hero-manifesto">
  <h1 class="glitch-text">KARYUS LABS</h1>
  <p class="subtitle">Aerospace Engineering | Applied Intelligence | Mathematical Rigor</p>

  <div class="mission-statement">
    "Bridging the gap between classical Aeronautical Engineering and the transformative power of AI".
  </div>

  <div class="tech-grid">
    <div class="tech-item">
      <i class="fas fa-microchip"></i>
      <span>Double Degree Candidate: Centrale Méditerranée & EESC-USP </span>
    </div>
    <div class="tech-item">
      <i class="fas fa-trophy"></i>
      <span>Winner: Embraer HackaSEA Challenge </span>
    </div>
  </div>

  <a href="{{ '/projects/' | relative_url }}" class="futuristic-btn">Access R&D Portfolio</a>
</section>

<style>
.hero-manifesto {
  text-align: center;
  padding: 4rem 0;
}
.glitch-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  color: var(--karyus-earth);
  letter-spacing: 10px;
  margin-bottom: 1rem;
}
.subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: var(--karyus-neon);
    letter-spacing: 2px;
}
.mission-statement {
  font-family: 'JetBrains Mono', monospace;
  font-style: italic;
  font-size: 1.2rem;
  margin: 3rem 0;
  color: var(--text-primary);
  opacity: 0.8;
}
.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 4rem;
}
.tech-item {
  background: rgba(0, 47, 69, 0.4);
  padding: 20px;
  border: 1px solid var(--karyus-blue);
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
}
.tech-item i {
    color: var(--karyus-earth);
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    .glitch-text { font-size: 3rem; letter-spacing: 5px; }
    .tech-grid { grid-template-columns: 1fr; }
}
</style>

**Renato Filho @ Founder Karyus-Labs**
