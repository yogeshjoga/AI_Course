---
title: System Scaling & High-Level Architecture
topic: HLD
date: 2026-06-10
description: Learn scaling strategies, load balancing algorithms, database replication, and CDN mechanics.
---

High-Level Design & System Scaling
Instructions
- Total Questions: 3
- Review explanations after attempting

---

Q1. What is the main characteristic of horizontal scaling?

A. Adding more RAM and CPU capacity to a single database server
B. Adding more machine instances to the pool of resources, scaling out the system
C. Moving code from a local computer to the cloud
D. Compiling scripts into binaries

Answer:

✅ B. Adding more machine instances to the pool of resources, scaling out the system

Explanation:

Horizontal scaling (scale-out) adds more compute nodes to handle traffic, which is highly resilient and allows virtually infinite scaling, whereas vertical scaling (scale-up) adds power to a single server and is limited by hardware capacities.

---

Q2. What is the primary purpose of a Load Balancer in high-level architectures?

A. To encrypt all SQL queries
B. To distribute incoming network traffic across multiple backend servers to prevent overload and ensure high availability
C. To backup hard disks in real time
D. To download python packages in parallel

Answer:

✅ B. To distribute incoming network traffic across multiple backend servers to prevent overload and ensure high availability

Explanation:

A Load Balancer acts as a traffic cop, routing client requests to healthy backend nodes based on algorithms (like Round Robin or Least Connections), avoiding single points of failure.

---

Q3. In High-Level Design, what does a CDN (Content Delivery Network) optimize?

A. SQL transaction speeds
B. Delivery of static assets (images, CSS, JS) by caching them on servers geographically closer to users
C. Python thread execution times
D. Local network firewall rules

Answer:

✅ B. Delivery of static assets (images, CSS, JS) by caching them on servers geographically closer to users

Explanation:

CDNs cache static assets at edge servers globally, reducing latency by servicing requests from location-based proximity nodes rather than hitting the origin server.
