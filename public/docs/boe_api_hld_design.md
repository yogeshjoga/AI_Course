---
title: "BOE, API Design & HLD Design"
topic: "HLD"
date: "2026-06-27"
timing: "9:00 AM - 10:00 AM IST"
description: "Back of the Envelope Estimations, API Design Principles, and High-Level Design Architecture."
---

# BOE, API Design & HLD Design
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 9 - BOE, API Design & HLD Design**.
Please attempt all questions below. Explanations will unlock after submission.

---

### Section 1 – Back of the Envelope (BOE) Estimation

Q1. Why are Back of the Envelope (BOE) estimations critical in the early stages of High-Level Design (HLD)?

A. To write the exact SQL schemas for the database.
B. To accurately calculate the precise cloud computing bill for the month.
C. To estimate system scale, storage, bandwidth, and evaluate if a proposed architecture is viable.
D. To decide which frontend framework to use.

Answer:
✅ C. To estimate system scale, storage, bandwidth, and evaluate if a proposed architecture is viable.

Explanation:
BOE estimations help architects gauge the scale (requests per second, storage per year, bandwidth) needed before investing time in detailed design. It acts as a sanity check for architectural feasibility.

---

### Section 2 – API Design

Q2. When designing an API for a high-traffic e-commerce application, which of the following is the most scalable approach for handling large lists of products?

A. Returning all 10,000 products in a single JSON array to minimize API calls.
B. Using cursor-based or offset-based pagination to fetch products in manageable chunks.
C. Creating a WebSocket connection to stream products continuously.
D. Sending the database directly to the client.

Answer:
✅ B. Using cursor-based or offset-based pagination to fetch products in manageable chunks.

Explanation:
Returning massive payloads degrades performance, consumes bandwidth, and causes memory exhaustion. Pagination (especially cursor-based for high scale) ensures efficient and fast API responses.

---

### Section 3 – HLD Design

Q3. In High-Level Design, if you determine your system is read-heavy (e.g., a Twitter timeline), which architectural choice makes the most sense?

A. Using a single monolithic SQL database to handle all reads and writes.
B. Writing everything to a massive text file.
C. Implementing caching layers (like Redis or Memcached) and using read replicas to offload read traffic.
D. Forcing clients to store all data locally.

Answer:
✅ C. Implementing caching layers (like Redis or Memcached) and using read replicas to offload read traffic.

Explanation:
Read-heavy systems benefit significantly from distributed caching and database read replicas, drastically reducing latency and load on the primary write database.
