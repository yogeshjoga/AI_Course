---
title: "Day 11 - Scaling, Load Balancer, CDN, & CAP/PAELC"
topic: "HLD"
date: "2026-06-26"
timing: "9:00 AM - 10:00 AM IST"
description: "Understanding CDN, Load Balancers, CAP and PAELC Theorems, and service discovery."
---

# Day 11 - Scaling, Load Balancer, CDN, & CAP/PAELC
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 11 - Scaling, Load Balancer, CDN, & CAP/PAELC**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What does the CAP Theorem state about a distributed database system in the event of a network partition?

A. The system will operate faster.
B. You must choose between Consistency (returning latest data) or Availability (returning immediate responses).
C. You must add SSD storage blocks to resolve partitions.
D. Partitioning is impossible with DNS configurations.

Answer:

✅ B. You must choose between Consistency (returning latest data) or Availability (returning immediate responses).

Explanation:

CAP Theorem asserts that during a network partition, a distributed system can maintain Consistency (C) or Availability (A), but not both.

---

Q2. In the PAELC theorem, what does "EL" represent?

A. Elastic Load-balancing
B. Else Latency (what happens when there is no network partition).
C. Execution Layer
D. Encrypted Links

Answer:

✅ B. Else Latency (what happens when there is no network partition).

Explanation:

PAELC states: if there is a Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C).

---

Q3. What is the primary role of a CDN (Content Delivery Network)?

A. To run complex user authorization queries.
B. To cache and serve static assets close to users to reduce latency.
C. To backup database servers.
D. To load-balance websocket requests.

Answer:

✅ B. To cache and serve static assets close to users to reduce latency.

Explanation:

CDNs store static resources (images, JS, CSS, videos) at edge nodes geographically closer to users, improving load speeds.

