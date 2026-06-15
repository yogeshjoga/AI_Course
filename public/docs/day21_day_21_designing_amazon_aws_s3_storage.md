---
title: "Day 21 - Designing Amazon AWS S3 Storage"
topic: "HLD"
date: "2026-07-11"
timing: "9:00 AM - 10:00 AM IST"
description: "Designing highly-durable object storage (AWS S3) with metadata databases, data partitioning, and replicas."
---

# Day 21 - Designing Amazon AWS S3 Storage
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 21 - Designing Amazon AWS S3 Storage**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Why does object storage (S3) separate file metadata from the actual binary file contents?

A. Because metadata cannot be stored on disk.
B. To query and update metadata (size, ACL, type) quickly in a structured database without opening massive binary files.
C. To encrypt the files.
D. Object storage does not store files.

Answer:

✅ B. To query and update metadata (size, ACL, type) quickly in a structured database without opening massive binary files.

Explanation:

Separating metadata (stored in NoSQL or SQL indexes) from the actual binary data (stored on object blocks) improves throughput and lookup speeds.

---

Q2. How does object storage ensure 99.999999999% (11 9s) of data durability?

A. By keeping files on client systems.
B. By replicating object chunks across multiple servers, racks, and availability zones, or using erasure coding.
C. By caching database logs.
D. By storing files in RAM.

Answer:

✅ B. By replicating object chunks across multiple servers, racks, and availability zones, or using erasure coding.

Explanation:

Durability is achieved by distributing copies globally across racks or splitting files into parity fragments using erasure coding.

---

Q3. What is the role of the Directory Service (Index) in Object Storage?

A. To transcode media.
B. To map the file key to the specific physical block storage nodes where file chunks reside.
C. To verify client payment status.
D. To compress local system files.

Answer:

✅ B. To map the file key to the specific physical block storage nodes where file chunks reside.

Explanation:

The directory service translates user-facing keys (e.g. `bucket/img.png`) into physical block locations on storage nodes.

