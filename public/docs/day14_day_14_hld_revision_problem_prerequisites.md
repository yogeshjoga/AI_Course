---
title: "Day 14 - HLD Revision & Problem Prerequisites"
topic: "HLD"
date: "2026-07-02"
timing: "9:00 AM - 10:00 AM IST"
description: "Comprehensive HLD review session before solving complex system design challenges."
---

# Day 14 - HLD Revision & Problem Prerequisites
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 14 - HLD Revision & Problem Prerequisites**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Which architecture pattern scales horizontal workloads by removing session state from application nodes?

A. Stateful Server Architecture
B. Stateless Server Architecture
C. Leaderless DB Setup
D. Local File Storage

Answer:

✅ B. Stateless Server Architecture

Explanation:

Stateless design lets any app node handle client requests, routing state queries directly to central DBs or cache clusters.

---

Q2. How does caching write transactions using Write-Back differs from Write-Through?

A. Write-Back deletes the cache on read.
B. Write-Back writes to the cache immediately, returning success, and updates the DB asynchronously in the background.
C. Write-Back writes to the DB first, then cache.
D. Write-Back disables transactional ACID properties.

Answer:

✅ B. Write-Back writes to the cache immediately, returning success, and updates the DB asynchronously in the background.

Explanation:

Write-Back updates the database asynchronously to maximize write speeds. Write-Through commits to cache and database synchronously.

---

Q3. Which component resolves client requests to healthy backend service locations in high-scale configurations?

A. CDN
B. Service Discovery & Registry Engine
C. Caching systems
D. Transaction coordinators

Answer:

✅ B. Service Discovery & Registry Engine

Explanation:

Service registries dynamically monitor instance health and map IP targets for stateless load balancing.

