---
title: Relational Databases & SQL
topic: Databases
date: 2026-06-13
description: Master relational databases, index optimizations, ACID transaction properties, and SQL execution strategies.
---

Day 4 - Relational Databases & SQL
Instructions
- Total Questions: 3
- Review explanations after attempting

---

Q1. What does the 'I' represent in ACID transaction properties?

A. Integration
B. Isolation
C. Indexing
D. Inheritance

Answer:

✅ B. Isolation

Explanation:

Isolation ensures that concurrent execution of transactions leaves the database in the same state that would be obtained if the transactions were executed sequentially.

---

Q2. Which index type is most efficient for searching ranges of values?

A. Hash Index
B. B-Tree Index
C. Bitmap Index
D. Inverted Index

Answer:

✅ B. B-Tree Index

Explanation:

B-Tree indexes maintain sorted order, allowing fast binary search traversals for range queries (e.g. `BETWEEN 10 AND 20`), whereas Hash indexes are only optimized for exact equality comparisons.

---

Q3. What is a primary key?

A. Any column with null values
B. A column that uniquely identifies each row in a table and cannot contain NULL values
C. A link to another database server
D. A backup storage key

Answer:

✅ B. A column that uniquely identifies each row in a table and cannot contain NULL values

Explanation:

A primary key enforces entity integrity by ensuring every row has a unique identifier, and null values are prohibited.
