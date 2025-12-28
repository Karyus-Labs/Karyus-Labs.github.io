---
layout: post
title: "Linear vs. Non-Linear: Validating Cessna 182 Dynamics from Scratch"
date: 2025-11-16
categories: [Aerospace, Simulation]
tags: [Flight Dynamics, MATLAB, Simulink, SAA0184, USP, Aircraft Modeling]
image: /assets/images/Simulink_Cessna_Cover.png
description: "How I built a non-linear 3-DOF simulator from first principles to validate the limits of linear flight stability theory."
math: true
---

In aerospace engineering, linearized models are the cornerstone of control design. However, they are approximations. To truly understand the limits of an aircraft, you must look at the non-linear physics that take over when the "small perturbation" assumption fails.

During the **Flight Dynamics (SAA0184)** course at **EESC-USP**, I led the computational architecture for the *Zona de Turbulência* group. My challenge was twofold: adapt legacy MATLAB trim routines for a specific **Cessna 182** cruise envelope and, more importantly, **build a non-linear Simulink simulator from scratch** to validate our linear predictions.

---

## The Engineering Workflow: From Equations to Blocks

While many student projects stop at the provided scripts, I wanted to see the "physics in motion." I took the fundamental longitudinal equations and implemented them block-by-block in Simulink.

### 1. The Trimming Challenge
Before flying, you must find equilibrium. I adapted the **Newton-Raphson** scripts to solve for the trim state ($V_{trim}, \alpha_{trim}, \delta_{e}, T$). Using aerodynamic derivatives from **Roskam (Appendix B)**, we defined the cruise condition at 5000ft:

$$
CL_{trim} = \frac{mg}{\frac{1}{2} \rho U_{\infty}^2 S}
$$

### 2. Building the Non-Linear Core
Instead of using pre-built library blocks, I implemented the 3-DOF longitudinal equations of motion. This allowed me to integrate the aircraft state over time, capturing the non-linear coupling between velocity, angle of attack, and pitch rate:

$$
\begin{cases}
\dot{V} = \frac{1}{m} (T \cos\alpha - D - mg \sin(\theta - \alpha)) \\
\dot{\alpha} = \frac{q \cos\alpha - (L + T \sin\alpha - mg \cos(\theta - \alpha))}{mV} \\
\dot{q} = \frac{M}{I_y}
\end{cases}
$$



This implementation returns the complete state vector $x = [u, w, q, \theta, x_e, z_e]^T$, providing a high-fidelity "truth model" to test against the simplified linear version.

![Simulink Architecture](/assets/images/Simulink.png)
*Figure 1: My modular Simulink environment, integrating non-linear dynamics with real-time state extraction.*

---

## The Comparison: Linear vs. Non-Linear

The "Eureka" moment came when comparing the results. By linearizing the system into a State-Space representation ($\dot{x} = Ax + Bu$), we obtained the natural modes of the Cessna: the **Short Period** (fast, damped) and the **Phugoid** (slow, oscillatory).

When I injected a **1-degree elevator step** into both models simultaneously:
* The **Short Period** response was nearly identical, proving the linear model is highly accurate for fast transients.
* The **Phugoid** started to show slight divergence over long time-scales, where non-linear gravity and drag couplings become relevant.

![Comparison Results](/assets/images/Comparation_Models.png)
*Figure 2: Validation results showing the non-linear simulation (Blue) perfectly tracking the linear prediction (Red) for small perturbations.*

---

## Engineering Insight

Building this from the ground up taught me that **simulation architecture is as important as the math.** A well-structured Simulink model isn't just a diagram; it's a verification tool. By comparing the "Scratch" non-linear model with the analytical linear model, I validated not just the aircraft's stability, but the integrity of my own code and logic.

---

### Technical Assets

The complete implementation, including the cruise-adapted trim scripts and the non-linear Simulink logic, is available for technical review:

<a href="https://github.com/Karyus-Labs/cessna182-nonlinear-simulator" class="btn btn--primary">Access GitHub Repository</a>

---

### Discuss this Project

Are you interested in aircraft modeling or high-fidelity simulation? I'm always open to discussing flight dynamics and control system architecture.
