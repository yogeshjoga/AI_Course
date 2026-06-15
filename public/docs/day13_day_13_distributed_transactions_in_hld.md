---
title: "Day 13 - Distributed Transactions in HLD"
topic: "Databases"
date: "2026-07-01"
timing: "9:00 AM - 10:00 AM IST"
description: "Deep dive into transaction management and ACID properties in high-level distributed systems."
---

# Day 13 - Distributed Transactions in HLD
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 13 - Distributed Transactions in HLD**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the role of Two-Phase Commit (2PC) in distributed transactions?

A. To double replication speed.
B. To ensure all participating databases commit or abort a transaction atomically.
C. To verify DNS requests.
D. To write local cache values.

Answer:

✅ B. To ensure all participating databases commit or abort a transaction atomically.

Explanation:

2PC coordinates distributed nodes through a prepare phase and commit phase to guarantee atomic transactions.

---

Q2. What is a major limitation of Two-Phase Commit (2PC) systems?

A. It does not support SQL databases.
B. It is blocking; if the coordinator crashes during the vote, resource locks are held indefinitely.
C. It disables transaction logging.
D. It requires GPU cores to operate.

Answer:

✅ B. It is blocking; if the coordinator crashes during the vote, resource locks are held indefinitely.

Explanation:

2PC is a blocking protocol. If the coordinator dies during consensus, databases hold lock records indefinitely, impacting availability.

---

Q3. How does the Saga pattern solve distributed transaction constraints?

A. By running a single database transaction across all nodes.
B. By executing a sequence of local transactions, triggering compensating transactions if any step fails.
C. By disabling database partitions.
D. By caching results in Redis.

Answer:

✅ B. By executing a sequence of local transactions, triggering compensating transactions if any step fails.

Explanation:

Sagas decouple distributed transactions into local steps with compensating workflows, prioritizing availability over immediate consistency.

