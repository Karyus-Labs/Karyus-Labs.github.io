---
layout: post
title: "Linear vs. Non-Linear: Validating Cessna 182 Dynamics in Simulink"
date: 2025-11-16
categories: [Aerospace, Simulation]
tags: [Flight Dynamics, MATLAB, Simulink, Nonlinear Systems, Aircraft Modeling]
image: /assets/images/Simulink_Cessna_Cover.png
description: "How I adapted analytical models and architected a Simulink environment to bridge the gap between theory and flight physics."
---

In aerospace engineering, we spend years studying linearized models. They are the bread and butter of control design, but they often feel like "paper planes"—elegant in theory, but detached from the messy, non-linear reality of flight.

During the **Flight Dynamics** (SAA0184) course at **EESC-USP**, I had the chance to bridge this gap. My goal wasn't to reinvent the math, but to take the analytical framework and the base scripts provided by **Prof. Ricardo Angélico**, adapt them, and architect a modular **Simulink** simulator to see if the linear predictions would actually hold up.

---

## The Scope: Adaptation and Architecture

Engineering is often about taking a solid foundation and making it work for a specific, complex mission. My contribution to the *Zona de Turbulência* group focused on the computational integration and the transition from static code to dynamic visual simulation.

### 1. From Script to Solver
Starting with the core MATLAB algorithms, I adapted the **Newton-Raphson** routines to calculate the trim conditions for a **Cessna 182**. This meant ensuring the solver could handle the aerodynamic derivatives from **Roskam (Appendix B)** to find the equilibrium ($V, \alpha, \delta_e, T$) for our specific flight envelope.

### 2. High-Fidelity Implementation
In the Simulink environment, I translated the longitudinal equations of motion into a modular block architecture. My goal was to track the complete state of the aircraft, integrating the dynamics to return the full state vector and trajectory:

$$
x = [u, w, q, \theta, x_e, z_e]^T
$$

By outputting both body-fixed velocities ($u, w$) and Earth-fixed coordinates ($x_e, z_e$), I could recover the angle of attack ($\alpha$) and visualize the aircraft's path in 2D space. The system solves the non-linear coupling in real-time:

$$
\begin{cases}
\dot{V} = \frac{1}{m} (T \cos\alpha - D - mg \sin(\theta - \alpha)) \\
\dot{\alpha} = \frac{q \cos\alpha - (L + T \sin\alpha - mg \cos(\theta - \alpha))}{mV} \\
\dot{q} = \frac{M}{I_y}
\end{cases}
$$

![Simulink Model Architecture](/assets/images/Simulink.png)
*Figure 1: My modular Simulink architecture for 3-DOF longitudinal flight.*

---

## The "Eureka" Moment

There’s a unique satisfaction in seeing two lines on a graph overlap perfectly after hours of debugging signal routings and unit conversions. To test the models, we injected a **1-degree elevator step input** to trigger the aircraft's natural modes: the fast **Short Period** and the slow **Phugoid**.

When I overlaid the response of my **Non-Linear Simulink** model with the **Linear State-Space** model, the tracking for the states $u, w, \theta$ and $\alpha$ was almost perfect for small perturbations.

![Comparison Results](/assets/images/Comparation_Models.png)
*Figure 2: Transient response comparison. The blue line (Non-Linear) perfectly tracking the red dashed line (Linear).*

**The Lesson Learned:** This project wasn't just a validation of a classroom exercise; it was a validation of the tools. Seeing the linear model track the non-linear physics built my confidence in knowing when a simple model is a surgical instrument and when the full non-linear physics must take over.

---

## Technical Assets

The complete implementation, including the adapted MATLAB trim scripts, the non-linear integration logic, and the final Simulink `.slx` model, is available for technical review:

**[Access the GitHub Repository: Cessna 182 Simulator](https://github.com/Karyus-Labs/cessna182-nonlinear-simulator)**

---

### Discuss this Project

Are you working on flight control or high-fidelity simulation? Let's connect and discuss the technical nuances of aircraft modeling.
