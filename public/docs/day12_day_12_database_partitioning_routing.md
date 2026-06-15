---
title: "Day 12 - Database Partitioning & Routing"
topic: "HLD"
date: "2026-06-30"
timing: "9:00 AM - 10:00 AM IST"
description: "Understanding partitioning keys, secondary indexes, rebalancing, and request routing."
---

# Day 12 - Database Partitioning & Routing
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 12 - Database Partitioning & Routing**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the primary goal of Database Partitioning (Sharding)?

A. To encrypt databases.
B. To split large datasets across multiple database nodes to balance load and storage.
C. To create database schemas.
D. To backup master nodes.

Answer:

✅ B. To split large datasets across multiple database nodes to balance load and storage.

Explanation:

Sharding helps distribute datasets and queries across database instances when the volume exceeds single-machine limits.

---

Q2. What is a drawback of using secondary indexes on partitioned tables?

A. They are stored on CPU cache only.
B. Queries by secondary index might require querying every single partition (scatter-gather) if not routed by partition key.
C. They disable ACID transactions.
D. They make primary keys obsolete.

Answer:

✅ B. Queries by secondary index might require querying every single partition (scatter-gather) if not routed by partition key.

Explanation:

Scatter-gather queries scan all partitions to collect matching rows from secondary indexes, adding significant latency.

---

Q3. What is Consistent Hashing primarily used for?

A. Encrypting JSON fields.
B. Distributing sharded keys with minimal rebalancing overhead when nodes are added or removed.
C. Compiling SQL scripts.
D. Establishing WebSocket connection handshakes.

Answer:

✅ B. Distributing sharded keys with minimal rebalancing overhead when nodes are added or removed.

Explanation:

Consistent hashing ensures that when database nodes change, only a fraction of keys are remapped, minimizing partition migrations.

