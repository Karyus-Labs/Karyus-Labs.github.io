---
layout: post
title: "Linear vs. Non-Linear: What Building a Simulink Flight Simulator Taught Me About Engineering"
date: 2025-11-16
categories: aerospace simulink flight-dynamics cessna182 nonlinear
---

In aerospace engineering, we have a deep reliance on simplifications. We use **linearized models** all the time to predict how an aircraft will behave — they're faster, simpler, and easier to compute.

But I always wondered:

> **How much can we really trust them?**

For my final project in **Flight Dynamics (SAA0184)** at **EESC-USP**, titled *Zona de Turbulência*, our group set out to answer that question.

---

## The Challenge
Our team's mission (Beatriz Figueirêdo, Gabriel Nobuaki, Helena Aoki, Lívia Máris, and Rodrigo Amancio) was to compare:

- **The classic linearized state-space model of a Cessna 182**
- **A full, high-fidelity non-linear model**

My specific contribution was to build that high-fidelity non-linear longitudinal dynamics simulator visually in **Simulink** — implementing the raw equations of motion directly (Chapter 3 of the report).

This meant translating physics into simulation, block by block.

---

## The Engineering Workflow
This project revealed a workflow used in real aerospace development: separating trimming from simulation.

### **Step 1 — Trim Calculation (MATLAB scripts)**
Before running the simulator, I needed the aircraft **trim equilibrium point**.

Scripts used:

- `parameters.m` — loads Cessna 182 parameters (Roskam, Appendix B)
- `MainSimulator.m` — the core trim solver
- `LongSimulator.m` — differential equations + `ode45`

Output examples:

u0 = 67.0860 m/s

w0 = -0.2438 m/s


### **Step 2 — Dynamic Simulation (Simulink .slx)**
With trim conditions computed, I entered them manually into the **Initial Conditions** of the `Motion` block in the model `Simulator.slx`.

Project architecture:

![Simulink Model](/assets/images/Simulink.png)

---

## The Test
We injected a **1 degree elevator step input** to compare responses between:

- Simple **linear model**
- Full **non-linear Simulink model**

### **The Result**
They were nearly **identical**.

![Comparation Models](/assets/images/Comparation_Models.png)

> The lightweight linear model predicted the aircraft behavior with remarkable accuracy.

---

## Repository
I open-sourced everything — documentation (English), MATLAB scripts and Simulink model.

**Full project repo:**  
**[https://github.com/Karyus-Labs/cessna182-nonlinear-simulator](https://github.com/Karyus-Labs/cessna182-nonlinear-simulator)**

If you're in aerospace simulation or autonomous systems, I’d love to hear feedback.

---

**Renato Filho @ Founder Karyus-Labs**
