---
layout: post
title: "Linear vs. Non-Linear: Validating Cessna 182 Flight Dynamics in Simulink"
date: 2025-11-16
categories: [Aerospace, Simulation]
tags: [Flight-Dynamics, MATLAB, Simulink, Control-Systems]
image: /assets/images/Simulink_Cessna_Cover.png
description: "A high-fidelity longitudinal dynamics study comparing classic state-space linearization against full non-linear simulation for a Cessna 182."
---

In aerospace engineering, we rely heavily on simplifications. We use **linearized models** to predict aircraft behavior—they are faster, easier to compute, and essential for control law design.

But a fundamental question remains: **How far can we push these simplifications before they break?**

For my final project in **Flight Dynamics (SAA0184)** at **EESC-USP**, titled *Zona de Turbulência*, our team (Beatriz Figueirêdo, Gabriel Nobuaki, Helena Aoki, Lívia Máris, and Rodrigo Amancio) set out to bridge the gap between theory and high-fidelity simulation.

---

## The Challenge
The mission was to validate the classic linearized state-space model of a **Cessna 182** against a full, non-linear longitudinal model. My specific role was to architect the non-linear simulator in **Simulink**, implementing the raw equations of motion (EOM) directly from the physics of flight.

This required solving the 3-DOF longitudinal equations, accounting for the coupling between pitch, velocity, and angle of attack without the "small angles" assumptions.

---

## The Engineering Workflow
A professional aerospace workflow separates **Trimming** from **Simulation**. 

### Step 1 — Trim & Equilibrium (MATLAB)
Before running the simulator, the aircraft must be in a steady-state flight condition. I developed scripts to solve the non-linear algebraic system for a specific airspeed ($V_0$) and altitude.

**Key Tools:**
* `parameters.m`: Loads aerodynamic derivatives (Roskam, Appendix B).
* `MainSimulator.m`: The core trim solver using numerical optimization.

### Step 2 — Non-Linear Implementation (Simulink)
Instead of using pre-built blocks, I implemented the differential equations of motion:

$$\dot{q} = \frac{M}{I_y}$$
$$\dot{\alpha} = \frac{q \cos(\alpha) - (L + T\sin(\alpha) - mg\cos(\theta))/mV}{ \cos(\alpha) }$$

The model architecture followed a modular approach, separating Aerodynamics, Propulsion, and Kinematics.

![Simulink Model Architecture](/assets/images/Simulink.png)
*Figure 1: High-fidelity Simulink blocks for longitudinal dynamics.*

---

## The Test: Step Response Validation
We injected a **1-degree elevator step input** ($\Delta\delta_e$) to compare the transient response of the Short Period and Phugoid modes.

### The Result
The results were nearly **identical** for small perturbations. The linear model, derived through Taylor series expansion, captured the damping and frequency of the oscillations with remarkable precision.

![Comparison Models](/assets/images/Comparation_Models.png)
*Figure 2: Linear (State-Space) vs. Non-Linear (ODE) comparison.*

> **Insight:** This project validated that for standard flight envelopes, the lightweight linear model is not just a simplification—it is a powerful tool that, when grounded in correct aerodynamic data, predicts reality with surgical accuracy.

---

## Repository & Technical Discussion
The full source code, including the MATLAB scripts and the Simulink `.slx` model, is open-source.

**Project Repo:** [Karyus-Labs / Cessna182 Non-Linear Flight Simulator](https://github.com/Karyus-Labs/cessna182-nonlinear-simulator)

---

### Discuss this Project
Interested in flight dynamics or autonomous GNC? Let's connect and discuss this implementation.

[**Discuss on LinkedIn**](https://www.linkedin.com/in/renato-filho-607b53207)
