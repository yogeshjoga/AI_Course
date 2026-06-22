---
title: "Day 10 - Cache Systems & Messaging Baselines"
topic: "Databases"
date: "2026-06-25"
timing: "9:00 AM - 10:00 AM IST"
description: "Deep dive into caching with Redis and message queue systems like Kafka."
---

# Day 10 - Cache Systems & Messaging Baselines
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 10 - Cache Systems & Messaging Baselines**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Where does Redis store its data by default to achieve microsecond read/write latencies?

A. On local Solid State Drives (SSD)
B. In-Memory (RAM)
C. In relational tables
D. In distributed object buckets

Answer:

✅ B. In-Memory (RAM)

Explanation:

Redis is an in-memory data store, which allows extremely high-throughput and low-latency lookups.

---

Q2. What is the primary architectural purpose of a Message Queue like Apache Kafka?

A. To display statistics to users.
B. To decouple services, buffer write spikes, and allow asynchronous event-driven communications.
C. To execute SQL JOIN queries.
D. To route client DNS queries.

Answer:

✅ B. To decouple services, buffer write spikes, and allow asynchronous event-driven communications.

Explanation:

Kafka acts as a highly-scalable event bus to decouple data producers from consumers and buffer spikes asynchronously.

---

Q3. What does the Cache-Aside pattern imply?

A. The application database automatically updates the cache directly.
B. The application checks the cache first; if a miss occurs, it queries the DB, stores result in cache, and returns it.
C. The application deletes the database after caching all rows.
D. Caches are only written to, and never read from.

Answer:

✅ B. The application checks the cache first; if a miss occurs, it queries the DB, stores result in cache, and returns it.

Explanation:

In Cache-Aside, the application actively coordinates reading/writing from cache first, falling back to DB on misses.

