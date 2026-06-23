---
title: "Designing Uber/Ola Ride-Hailing: Part 2"
topic: "HLD"
date: "2026-07-10"
timing: "9:00 AM - 10:00 AM IST"
description: "Ride matching algorithms, trip state management, database write scaling, and ETA computation."
---

# Designing Uber/Ola Ride-Hailing: Part 2
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 21 - Designing Uber/Ola Ride-Hailing: Part 2**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. How is a rider matched with a nearby driver without locking the entire geospatial database?

A. By executing global database table locks.
B. By querying drivers within a localized bounding box/hexagon and queueing matching requests asynchronously.
C. By disabling replication.
D. By having the client browser run the driver search.

Answer:

✅ B. By querying drivers within a localized bounding box/hexagon and queueing matching requests asynchronously.

Explanation:

Querying localized geospatial sectors keeps database transactions small, while match brokers handle pairing asynchronously.

---

Q2. Which database type is best to persist historical trip receipts and billing data due to financial compliance?

A. Redis Memory Cache
B. ACID-Compliant Relational Database (SQL)
C. Wide-column NoSQL
D. Local document folders

Answer:

✅ B. ACID-Compliant Relational Database (SQL)

Explanation:

Financial receipt and billing records require absolute consistency, transactions, and audit trails provided by SQL systems.

---

Q3. What is a typical way to compute Estimated Time of Arrival (ETA)?

A. Direct straight-line distance calculations.
B. Routing engines calculating actual road network routes combined with historical and real-time traffic updates.
C. Gateway connection latency logs.
D. Consistent hashing index nodes.

Answer:

✅ B. Routing engines calculating actual road network routes combined with historical and real-time traffic updates.

Explanation:

ETA relies on road network graphs and traffic speeds rather than absolute physical distances.

