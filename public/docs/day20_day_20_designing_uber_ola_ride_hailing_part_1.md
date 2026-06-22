---
title: "Day 20 - Designing Uber/Ola Ride-Hailing: Part 1"
topic: "HLD"
date: "2026-07-09"
timing: "9:00 AM - 10:00 AM IST"
description: "High-level architecture for ride-hailing, geo-spatial indexing (H3, S2), and real-time driver tracking."
---

# Day 20 - Designing Uber/Ola Ride-Hailing: Part 1
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 20 - Designing Uber/Ola Ride-Hailing: Part 1**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Which data structure is designed to efficiently index and query geographical coordinates in system designs?

A. B-Tree index
B. Geo-spatial index (like Google's S2 or Uber's H3 Hexagons)
C. Inverted Index
D. Redis hash map

Answer:

✅ B. Geo-spatial index (like Google's S2 or Uber's H3 Hexagons)

Explanation:

S2 and H3 divide the earth's surface into nested grids/hexagons to query nearby locations within constant time.

---

Q2. Why is a relational database not suitable to store driver GPS location updates happening every 4 seconds?

A. Relational databases do not support coordinates.
B. The massive write volume would quickly saturate disk I/O and locks in transactional tables.
C. Location coordinates require GPU acceleration.
D. Active drivers cannot run SQL queries.

Answer:

✅ B. The massive write volume would quickly saturate disk I/O and locks in transactional tables.

Explanation:

Frequent location writes create database bottlenecks. Fast-changing GPS updates are stored in fast in-memory key-value caches like Redis.

---

Q3. What is the role of the Location Service in a ride-hailing app?

A. To compute trip fares.
B. To ingest coordinate feeds from drivers and cache active locations in geospatial structures.
C. To assign target drivers.
D. To dispatch SMS alerts.

Answer:

✅ B. To ingest coordinate feeds from drivers and cache active locations in geospatial structures.

Explanation:

The location service consumes coordinate heartbeats and keeps the geospatial database updated with driver coordinates.

