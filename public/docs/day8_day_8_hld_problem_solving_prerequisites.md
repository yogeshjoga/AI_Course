---
title: "Day 8 - HLD Problem Solving Prerequisites"
topic: "HLD"
date: "2026-06-23"
timing: "9:00 AM - 10:00 AM IST"
description: "Learn HLD problem-solving basics, Back-of-the-Envelope (BOE) calculations, and design assumptions."
---

# Day 8 - HLD Problem Solving Prerequisites
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 8 - HLD Problem Solving Prerequisites**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the purpose of Back-of-the-Envelope (BOE) calculations in system design?

A. To write microservice test cases.
B. To estimate memory, storage, bandwidth, and processing requirements before writing code.
C. To calculate budget expenditures for marketing.
D. To verify SQL syntax compiles correctly.

Answer:

✅ B. To estimate memory, storage, bandwidth, and processing requirements before writing code.

Explanation:

BOE calculations help design architects size hardware, verify network bandwidth constraints, and pick storage engines.

---

Q2. If a service handles 10 million daily active users, and each user performs 5 read actions per day, what is the average QPS (Queries Per Second)?

A. ~58 QPS
B. ~580 QPS
C. ~5,800 QPS
D. ~58,000 QPS

Answer:

✅ B. ~580 QPS

Explanation:

Total requests = 10M * 5 = 50 Million requests/day. Seconds in a day = 86,400. QPS = 50,000,000 / 86,400 ≈ 578.7 QPS.

---

Q3. Why should design assumptions (like Read-to-Write ratio) be clarified during HLD interviews?

A. They dictate whether the database design should be read-heavy (using cache) or write-heavy (using message queues).
B. Assumptions tell developers what IDE to use.
C. They are required by DNS servers to establish domain routing.
D. Interviews cannot start without active mathematical equations.

Answer:

✅ A. They dictate whether the database design should be read-heavy (using cache) or write-heavy (using message queues).

Explanation:

Knowing the system profile (e.g. 100:1 read-to-write ratio) dictates architectural structures, like CDNs, database replications, and caches.

