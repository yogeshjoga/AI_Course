---
title: "Schema Design & SQL Databases"
topic: "Databases"
date: "2026-06-24"
timing: "9:00 AM - 10:00 AM IST"
description: "Introduction to schema, ACID compliance, SQL databases, and PostgreSQL."
---

# Schema Design & SQL Databases
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 9 - Schema Design & SQL Databases**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What does the "I" in ACID stand for in database transactions?

A. Integration
B. Isolation - ensuring concurrent transactions do not interfere with each other.
C. Indexing
D. Idempotency

Answer:

✅ B. Isolation - ensuring concurrent transactions do not interfere with each other.

Explanation:

Isolation guarantees that concurrent execution of transactions leaves the database in the same state as if they were executed sequentially.

---

Q2. When should you choose a Relational (SQL) database like PostgreSQL over a NoSQL database?

A. When schema is highly dynamic and columns change on every row.
B. When you require strict ACID guarantees and complex JOIN operations across normalized tables.
C. When you only need simple key-value lookups with zero relations.
D. When raw storage capacity is the only system requirement.

Answer:

✅ B. When you require strict ACID guarantees and complex JOIN operations across normalized tables.

Explanation:

SQL databases excel at maintaining relationships, complex query structures, and strict ACID transaction properties.

---

Q3. What is a Database Schema?

A. The physical location of database servers.
B. The logical layout, structure, tables, and relationships defined in the database.
C. The network bandwidth rating of connection logs.
D. The query analyzer logs.

Answer:

✅ B. The logical layout, structure, tables, and relationships defined in the database.

Explanation:

Schema refers to the configuration structure of database tables, constraints, fields, and foreign keys.

