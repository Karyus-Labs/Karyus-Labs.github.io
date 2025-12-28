---
layout: post
title: "Linear vs. Non-Linear: What building a Cessna 182 Simulator taught me about Flight Dynamics"
date: 2025-11-16
categories: [Aerospace, Simulation]
tags: [Flight Dynamics, Nonlinear Systems, MATLAB, Simulink, Control Theory, Aircraft Modeling]
image: /assets/images/Simulink_Cessna_Cover.png
description: "A deep dive into high-fidelity longitudinal dynamics: implementing a 3-DOF simulator from scratch and validating linear approximations."
---

In aerospace engineering, we rely heavily on simplifications. We use **linearized models** to predict aircraft behavior, they are faster, easier to compute, and essential for control law design.

But as I progressed through my studies at **EESC-USP**, one question kept bothering me: **Exactly when does the linear model fail?**

To find out, I took the lead in developing a high-fidelity flight simulator for a **Cessna 182** as part of the *Flight Dynamics* (SAA0184) curriculum. My mission was clear: architect the entire simulation environment in MATLAB/Simulink, from trim algorithms to non-linear integration.

---

## The Challenge: Physics from Scratch
The project required comparing a classic State-Space model against a full Non-Linear system. Instead of using "black-box" flight simulators, I implemented the **3-DOF Longitudinal Equations of Motion** directly.

This involved handling the non-linear coupling of velocity ($V$), angle of attack ($\alpha$), pitch rate ($q$), and pitch angle ($\theta$):

$$\dot{q} = \frac{M}{I_y}$$
$$\dot{\alpha} = \frac{q \cos(\alpha) - (L + T\sin(\alpha) - mg\cos(\theta))/mV}{ \cos(\alpha) }$$

The "Hero's Journey" here wasn't just writing the math, but ensuring the **numerical stability** of the solver while maintaining physical consistency with Roskam’s aerodynamic derivatives.

---

## The Engineering Workflow
A professional simulator is more than just a model; it's a toolchain. I structured the project in two main phases:

### 1. The Search for Equilibrium (Trim Calculation)
An aircraft cannot fly if it isn't balanced. I developed a **Newton-Raphson based trim script** in MATLAB (`trim_aircraft.m`) to find the exact elevator deflection ($\delta_e$) and angle of attack ($\alpha$) for steady-state cruise at various airspeeds.

### 2. Implementation in Simulink
In the Simulink environment, I focused on **modularity**. I built a custom block architecture where Aerodynamics, Propulsion, and Kinematics were isolated. This allowed us to swap aerodynamic data or engine models without rebuilding the entire solver.

![Simulink Model Architecture](/assets/images/Simulink.png)
*Figure 1: My modular Simulink architecture for 3-DOF longitudinal flight.*

---

## The Moment of Truth: Step Response Comparison
We subjected both models to a **1-degree elevator step input**. We were looking for the two fundamental longitudinal modes: the fast **Short Period** and the slow, energy-exchanging **Phugoid**.

### The Result
The comparison was a revelation of engineering precision. For small perturbations, the linear State-Space model (derived via Taylor expansion) and the Non-Linear Simulink model were **nearly identical**.

![Comparison Results](/assets/images/Comparation_Models.png)
*Figure 2: Non-Linear (Blue) vs. Linear (Red) response. Notice the perfect tracking during the Short Period oscillation.*

> **The Insight:** This project taught me that "Linear" isn't a synonym for "Imprecise". It is a powerful tool for control design, provided the engineer knows the boundaries of the flight envelope where the linearization holds true.

---

## Repository & Technical Documentation
I’ve open-sourced the full toolchain, including the trim scripts, the non-linear ODE implementations, and the Simulink `.slx` files.

**Project Repo:** [Karyus-Labs / Cessna182 Non-Linear Flight Simulator](https://github.com/Karyus-Labs/cessna182-nonlinear-simulator)

---

### Discuss this Project
Are you interested in GNC (Guidance, Navigation, and Control) or high-fidelity flight simulation? Let's connect and discuss the nuances of aircraft modeling.

[**Discuss on LinkedIn**](https://www.linkedin.com/in/renato-filho-607b53207)
