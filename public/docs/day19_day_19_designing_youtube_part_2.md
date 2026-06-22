---
title: "Day 19 - Designing YouTube: Part 2"
topic: "HLD"
date: "2026-07-08"
timing: "9:00 AM - 10:00 AM IST"
description: "Designing YouTube content delivery (CDN), video streaming protocols, caching, and view-count scaling."
---

# Day 19 - Designing YouTube: Part 2
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 19 - Designing YouTube: Part 2**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Which technology is critical to stream videos with sub-second start latencies globally?

A. Multi-Leader SQL database
B. CDN (Content Delivery Network) caching video segments at edge servers.
C. High-throughput Redis cluster
D. Websocket gateways

Answer:

✅ B. CDN (Content Delivery Network) caching video segments at edge servers.

Explanation:

Serving static video chunks from CDN edges near the user drastically decreases network roundtrip times.

---

Q2. How should view count numbers for highly popular viral videos be updated to avoid database write lock bottlenecks?

A. Writing a direct `UPDATE ... SET views = views + 1` query to SQL database for every single view.
B. Buffering view counts in memory (e.g. Redis) and flushing them in batches to the database asynchronously.
C. Caching the database locally on web servers.
D. Running view operations on CUDA GPU cores.

Answer:

✅ B. Buffering view counts in memory (e.g. Redis) and flushing them in batches to the database asynchronously.

Explanation:

Batching writes in Redis reduces disk updates on relational databases, resolving write contention bottlenecks.

---

Q3. Which video streaming protocol is standard for modern web browsers?

A. FTP
B. HTTP Live Streaming (HLS)
C. WebSocket Push
D. SMTP

Answer:

✅ B. HTTP Live Streaming (HLS)

Explanation:

HLS divides videos into segments delivered over standard HTTP, making it widely supported by browsers.

