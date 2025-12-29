---
layout: post
title: "Linear vs. Non-Linear: Validating Cessna 182 Dynamics"
date: 2025-11-16
categories: [Aerospace, Simulation]
tags: [Flight Dynamics, MATLAB, Simulink, SAA0184, USP, Aircraft Modeling]
image: /assets/images/Simulink_Cessna_Cover.png
description: "Implementing a non-linear 3-DOF simulator to validate flight stability theory."
math: true
---

In aerospace engineering, linearized models are the cornerstone of control design. However, they are approximations. To truly understand the limits of an aircraft, you must look at the non-linear physics that take over when the "small perturbation" assumption fails.

During the **Flight Dynamics (SAA0184)** course at **EESC-USP**, the *Zona de Turbulência* group was tasked with a rigorous challenge: characterize the stability of a **Cessna 182**. Under the guidance of **Prof. Ricardo Angélico**, my role was to architect the computational environment, implementing the non-linear equations of motion to cross-validate our analytical predictions.

---

## The Engineering Workflow

The project went beyond simple analysis. We needed to build a simulation environment capable of reproducing the aircraft's dynamic behavior in the time domain.

### 1. Trimming the Aircraft
Before flying, you must find equilibrium. Leveraging the base scripts provided in the course, I adapted the **Newton-Raphson** routines to solve for the specific trim state ($V_{trim}, \alpha_{trim}, \delta_{e}, T$) of the Cessna 182. Using aerodynamic derivatives from **Roskam (Appendix B)**, we defined the cruise condition at 5000ft:

$$
CL_{trim} = \frac{mg}{\frac{1}{2} \rho U_{\infty}^2 S}
$$

### 2. Implementation: First Principles
The core of the simulation was built in **Simulink** using a "First Principles" approach. Instead of relying on black-box models, I constructed the 3-DOF longitudinal equations block-by-block using standard mathematical operators (Integrators, Gains, Sums).

This manual implementation ensures full transparency of the physics, integrating the state vector over time:

$$
\begin{cases}
\dot{V} = \frac{1}{m} (T \cos\alpha - D - mg \sin(\theta - \alpha)) \\
\dot{\alpha} = \frac{q \cos\alpha - (L + T \sin\alpha - mg \cos(\theta - \alpha))}{mV} \\
\dot{q} = \frac{M}{I_y}
\end{cases}
$$



The resulting model outputs the complete state vector $x = [u, w, q, \theta, x_e, z_e]^T$, creating a high-fidelity "virtual aircraft" for our tests.

![Simulink Architecture](/assets/images/Simulink.png)
*Figure 1: The Simulink environment I assembled to integrate the non-linear dynamics.*

---

## The Validation: Linear vs. Non-Linear

The "Eureka" moment came during the comparison phase. By linearizing the system into a State-Space representation ($\dot{x} = Ax + Bu$), we obtained the natural modes: the **Short Period** (fast, damped) and the **Phugoid** (slow, oscillatory).

When I injected a **1-degree elevator step** into both models simultaneously:
* The **Short Period** response was nearly identical, proving the linear model is highly accurate for fast transients.
* The **Phugoid** started to show slight divergence over long time-scales, identifying exactly where non-linear gravity and drag couplings become relevant.

![Comparison Results](/assets/images/Comparation_Models.png)
*Figure 2: Validation results showing the non-linear simulation (Blue) tracking the linear prediction (Red).*

---

## Engineering Insight

This project reinforced a critical lesson in Model-Based Design: **trust, but verify.** By building the non-linear simulator from the ground up, we could mathematically validate the limitations of our linear control models. It was a practical exercise in understanding the trade-off between model complexity and computational cost.

---

### Technical Assets

The complete implementation, including the adapted scripts and the Simulink model, is available here:

<a href="https://github.com/Karyus-Labs/cessna182-nonlinear-simulator" class="btn btn--primary">Access GitHub Repository</a>

---

### Discuss this Project

Are you interested in aircraft modeling or flight dynamics? Let's discuss simulation architectures.
