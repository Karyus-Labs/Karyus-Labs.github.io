---
layout: post
title: "Linear vs. Non-Linear: Validating Cessna 182 Dynamics in Simulink"
date: 2025-11-16
categories: [Aerospace, Simulation]
tags: [Flight Dynamics, MATLAB, Simulink, Nonlinear Systems, Aircraft Modeling]
image: /assets/images/Simulink_Cessna_Cover.png
description: "How I adapted analytical models and architected a Simulink simulator to test the limits of linear flight dynamics."
---

In aerospace engineering, we spend years studying linearized models. They are the bread and butter of control design, but they often feel like "paper planes"—elegant in theory, but detached from the messy, non-linear reality of flight.

During the **Flight Dynamics** (SAA0184) course at **EESC-USP**, my group (*Zona de Turbulência*) was challenged to bridge this gap. My specific role was to take the analytical framework provided in class, adapt the numerical solvers, and architect a high-fidelity **Simulink** environment to see if our linear predictions would hold up under pressure.

---

## The Workflow: Adapting and Building
Engineering is rarely about reinventing the wheel; it’s about making the wheel turn precisely for your specific mission. 

### 1. From Script to Solver
Starting with the core MATLAB algorithms provided by Prof. Ricardo Angélico, I worked on adapting the **Newton-Raphson** routines to calculate the trim conditions for a **Cessna 182**. This involved mapping Roskam’s aerodynamic derivatives into a solver that could find the exact equilibrium ($V, \alpha, \delta_e, T$) for any flight condition.

### 2. Translating Physics into Blocks
The real challenge was the **Simulink implementation**. I translated the coupled longitudinal equations of motion into a modular block architecture. Instead of a single "black box," I separated the physics into Aerodynamics, Propulsion, and Kinematics. 

The system solves the non-linear state vector $x = [V, \alpha, q, \theta]^T$ in real-time:

$$
\begin{cases}
\dot{V} = \frac{1}{m} (T \cos\alpha - D - mg \sin(\theta - \alpha)) \\
\dot{\alpha} = \frac{q \cos\alpha - (L + T \sin\alpha - mg \cos(\theta - \alpha))}{mV} \\
\dot{q} = \frac{M}{I_y} \\
\dots
\end{cases}
$$

---

## The "Eureka" Moment
There is a specific kind of satisfaction in seeing two lines on a graph overlap perfectly. We injected a **1-degree elevator step input** to trigger the aircraft's natural modes: the fast **Short Period** and the slow, oscillating **Phugoid**.

When I overlaid the response of my **Non-Linear Simulink** model with the **Linear State-Space** model, the results were nearly identical for small perturbations.

![Comparison Results](/assets/images/Comparation_Models.png)
*Figure 1: Transient response comparison. The blue line (Non-Linear) perfectly tracking the red dashed line (Linear).*

**What this taught me:** It wasn't just about validating a classroom exercise. It was about building confidence in my tools. Seeing the linear model track the non-linear physics confirmed that these "simplifications" are actually powerful engineering surgical instruments—if you know how to calibrate them.

---

## Technical Repository
I have documented the entire process, including the adapted MATLAB scripts for trimming and the final Simulink `.slx` architecture.

**Project Repo:** [Karyus-Labs / Cessna182 Non-Linear Flight Simulator](https://github.com/Karyus-Labs/cessna182-nonlinear-simulator)

---

### Discuss this Project
Are you interested in high-fidelity simulation or flight control? I'm always open to technical discussions on aircraft modeling.

[**Discuss on LinkedIn**](https://www.linkedin.com/in/renato-filho-607b53207)
