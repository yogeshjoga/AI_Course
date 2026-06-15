---
title: "Day 5 - Introduction to HLD & Components"
topic: "HLD"
date: "2026-06-19"
timing: "9:00 AM - 10:00 AM IST"
description: "Understanding High Level Design (HLD) importance and key components (Frontend, Backend, Database, APIs)."
---

# Day 5 - Introduction to HLD & Components
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 5 - Introduction to HLD & Components**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What does High-Level Design (HLD) primarily focus on?

A. Class names, function parameters, and inline variable declarations.
B. Overall system architecture, data flows, and interactions between major service blocks.
C. Operating system kernel configurations.
D. CSS styles and button animation speeds.

Answer:

✅ B. Overall system architecture, data flows, and interactions between major service blocks.

Explanation:

HLD defines the macro-architecture, system blocks, database selections, messaging queues, and system data flows.

---

Q2. Which HLD component is responsible for orchestrating business logic and processing API requests?

A. Frontend
B. Backend Server
C. Database
D. CDN

Answer:

✅ B. Backend Server

Explanation:

The backend server executes core logic, processes queries, and coordinates communications.

---

Q3. Why do we separate the Database from the stateless Application Server in scale designs?

A. To allow servers to scale up or down dynamically based on traffic without losing persistent data.
B. Because application servers do not support network ports.
C. Application servers are written in binary whereas databases use text files.
D. Stateless servers are required by load balancers to execute SQL scripts.

Answer:

✅ A. To allow servers to scale up or down dynamically based on traffic without losing persistent data.

Explanation:

Keeping backend servers stateless allows you to scale them horizontally since database state is decoupled.

