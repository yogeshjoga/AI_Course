---
title: "Day 16 - Designing WhatsApp: Part 2"
topic: "HLD"
date: "2026-07-04"
timing: "9:00 AM - 10:00 AM IST"
description: "Designing database schema for messages, media storage, group chats, and message delivery states."
---

# Day 16 - Designing WhatsApp: Part 2
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 16 - Designing WhatsApp: Part 2**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Which database type is best suited to store trillions of historical chat messages due to write throughput and horizontal scaling?

A. Relational Database (PostgreSQL)
B. NoSQL Wide-Column Store (Cassandra) or Key-Value Store (DynamoDB)
C. Memory cache (Redis)
D. Local Excel worksheets

Answer:

✅ B. NoSQL Wide-Column Store (Cassandra) or Key-Value Store (DynamoDB)

Explanation:

Wide-column NoSQL databases scale horizontally easily and can partition chat messages by `chat_id` for quick chronological lookups.

---

Q2. How should media files (images, audio, video) shared in chat messages be stored in high-scale system designs?

A. Stored as raw BLOB values inside NoSQL databases.
B. Uploaded to Object Storage (like AWS S3) and referencing the file URL in the database message record.
C. Stored in Redis cache clusters.
D. Saved directly in gateway server local filesystems.

Answer:

✅ B. Uploaded to Object Storage (like AWS S3) and referencing the file URL in the database message record.

Explanation:

Object storage is highly durable and scalable for unstructured files, keeping database sizes manageable.

---

Q3. How is message delivery status (Sent, Delivered, Read) coordinated?

A. Gateway servers listen to client ACK messages and update message state records asynchronously.
B. Databases automatically ping users every second.
C. Gateways query CDN caches.
D. By deleting the database record on successful read.

Answer:

✅ A. Gateway servers listen to client ACK messages and update message state records asynchronously.

Explanation:

Gateways process client ACK events and distribute read receipts to the sender via active WebSocket channels.

