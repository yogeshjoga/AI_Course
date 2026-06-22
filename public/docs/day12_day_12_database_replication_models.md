---
title: "Day 12 - Database Replication Models"
topic: "HLD"
date: "2026-06-27"
timing: "9:00 AM - 10:00 AM IST"
description: "Comparing Synchronous vs Asynchronous replication, replication lag, multi-leader, and leaderless setups."
---

# Day 12 - Database Replication Models
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 12 - Database Replication Models**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the risk of Asynchronous database replication?

A. Transactions take double the time to commit on the primary node.
B. Data written to the leader might be lost if it crashes before replication succeeds to followers.
C. It blocks write requests completely.
D. SQL JOIN operations fail.

Answer:

✅ B. Data written to the leader might be lost if it crashes before replication succeeds to followers.

Explanation:

Because asynchronous commits return before data is sent to followers, any leader crash before syncing results in data loss.

---

Q2. What is "Replication Lag"?

A. The time it takes to boot a new server.
B. The delay between a write on the leader node and its reflection on follower nodes.
C. The download speed of client browsers.
D. The compile time of database queries.

Answer:

✅ B. The delay between a write on the leader node and its reflection on follower nodes.

Explanation:

Replication lag measures the delay in syncing writes from the primary database instance to replicas.

---

Q3. In a Leaderless replication system (e.g. Cassandra), how are writes and reads verified?

A. By querying a single leader server.
B. By using quorums (W + R > N) to ensure write overlap with read answers.
C. By routing calls through Load Balancers.
D. By disabling database caching.

Answer:

✅ B. By using quorums (W + R > N) to ensure write overlap with read answers.

Explanation:

Leaderless systems use read/write quorums to detect and resolve stale data version conflicts dynamically.

