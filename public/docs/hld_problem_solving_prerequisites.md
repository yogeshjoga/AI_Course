---
title: "HLD Problem Solving Prerequisites"
topic: "HLD"
date: "2026-06-23"
timing: "9:00 AM - 10:00 AM IST"
description: "Transition from developer to system architect: Functional vs Non-Functional requirements, BOE, DAU, RPS, Scaling, and CAP Theorem."
---

# HLD Problem Solving Prerequisites
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 8 - HLD Problem Solving Prerequisites**.
Please attempt all questions below. Explanations will unlock after submission.

---

### Section 1 — HLD Thinking

Q1. Before drawing an HLD diagram, what should an architect do first?

A. Write Java code
B. Choose PostgreSQL
C. Understand requirements and assumptions
D. Create APIs

Answer:
✅ C. Understand requirements and assumptions

Explanation: 
Great architecture starts with understanding the problem, requirements, constraints, and assumptions—not technology.

---

Q2. Which sequence is correct?

A. Problem -> Code -> Design
B. Problem -> Database -> APIs
C. Problem -> Requirements -> Assumptions -> BOE -> Architecture
D. Problem -> React -> Spring Boot

Answer:
✅ C. Problem -> Requirements -> Assumptions -> BOE -> Architecture

---

Q3. Which mindset is closest to an architect?

A. Which framework should I use?
B. Which language is easiest?
C. How many users will this system support?
D. Which IDE is better?

Answer:
✅ C. How many users will this system support?

---

Q4. Functional Requirements describe:

A. System performance
B. What the system should do
C. Server capacity
D. Storage estimation

Answer:
✅ B. What the system should do

---

Q5. Which is a Functional Requirement?

A. Response time < 200 ms
B. Upload Image
C. 99.99% availability
D. 5000 RPS

Answer:
✅ B. Upload Image

---

Q6. Which is a Non-Functional Requirement?

A. Login
B. Search Products
C. High Availability
D. Add to Cart

Answer:
✅ C. High Availability

---

Q7. "System should respond within 300 ms" is:

A. Functional Requirement
B. Non-Functional Requirement
C. Assumption
D. API

Answer:
✅ B. Non-Functional Requirement

---

### Section 2 — Assumptions

Q8. Why do architects write assumptions?

A. To avoid coding
B. To estimate architecture
C. To reduce APIs
D. To remove databases

Answer:
✅ B. To estimate architecture

---

Q9. Which is a valid assumption?

A. Daily Active Users = 20 Million
B. Java is better than Python
C. React is fastest
D. Docker is mandatory

Answer:
✅ A. Daily Active Users = 20 Million

---

Q10. Assumptions affect:

A. BOE calculations
B. Capacity planning
C. Architecture decisions
D. All of the Above

Answer:
✅ D. All of the Above

---

### Section 3 — DAU & MAU

Q11. DAU stands for:

A. Daily Active Users
B. Database Access Unit
C. Data API User
D. Dynamic Access User

Answer:
✅ A. Daily Active Users

---

Q12. MAU stands for:

A. Monthly Active Users
B. Maximum API Users
C. Memory Access Unit
D. Main Active User

Answer:
✅ A. Monthly Active Users

---

Q13. If Total Users = 100 Million and DAU = 20%, Daily Active Users are:

A. 2 Million
B. 10 Million
C. 20 Million
D. 50 Million

Answer:
✅ C. 20 Million

---

### Section 4 — Requests & RPS

Q14. RPS means:

A. Requests Per Second
B. Response Per Server
C. Read Performance Speed
D. Request Packet Size

Answer:
✅ A. Requests Per Second

---

Q15. Formula for RPS?

A. 
```text
Users * Requests / 86400
```
B. 
```text
Users * Storage
```
C. 
```text
Bandwidth / Data
```
D. 
```text
Latency * Users
```

Answer:
✅ A. 
```text
Users * Requests / 86400
```

---

Q16. 20M DAU × 10 Requests/day = ?

A. 20 Million
B. 100 Million
C. 200 Million
D. 2 Billion

Answer:
✅ C. 200 Million

---

Q17. 200 Million Requests/day ≈ ?

A. 23 RPS
B. 231 RPS
C. 2315 RPS
D. 23150 RPS

Answer:
✅ C. 2315 RPS

---

### Section 5 — Storage

Q18. 100 Million messages/day. Average Message = 2 KB. Storage/day = ?

A. 20 GB
B. 200 GB
C. 2 TB
D. 20 TB

Answer:
✅ B. 200 GB

---

Q19. Why estimate storage?

A. Database sizing
B. Infrastructure planning
C. Cost estimation
D. All of the Above

Answer:
✅ D. All of the Above

---

Q20. Which consumes more storage?

A. Text Messages
B. Images
C. Emojis
D. URLs

Answer:
✅ B. Images

---

### Section 6 — Read vs Write

Q21. Instagram Feed mostly has:

A. 90% Writes
B. 90% Reads
C. Equal
D. No Reads

Answer:
✅ B. 90% Reads

---

Q22. Chat Applications are usually:

A. Read Heavy
B. Write Heavy
C. Approximately Balanced
D. Storage Only

Answer:
✅ C. Approximately Balanced

---

Q23. Read-heavy systems usually benefit from:

A. Cache
B. More Writes
C. No Database
D. GPU

Answer:
✅ A. Cache

---

### Section 7 — Performance

Q24. Latency means:

A. Data transferred
B. Time taken for request-response
C. Number of CPUs
D. Number of APIs

Answer:
✅ B. Time taken for request-response

---

Q25. Lower latency is:

A. Better
B. Worse
C. Equal
D. Irrelevant

Answer:
✅ A. Better

---

Q26. Throughput means:

A. Requests processed per second
B. Storage Capacity
C. Network Cable
D. Database Size

Answer:
✅ A. Requests processed per second

---

Q27. Bandwidth refers to:

A. CPU Speed
B. Data transferred per second
C. RAM
D. Storage

Answer:
✅ B. Data transferred per second

---

### Section 8 — Scaling

Q28. Vertical Scaling means:

A. Add more servers
B. Increase CPU/RAM of one server
C. Reduce storage
D. Add APIs

Answer:
✅ B. Increase CPU/RAM of one server

---

Q29. Horizontal Scaling means:

A. Bigger server
B. More servers
C. Faster Internet
D. More databases

Answer:
✅ B. More servers

---

Q30. Which is easier to scale indefinitely?

A. Vertical
B. Horizontal
C. Single Server
D. Laptop

Answer:
✅ B. Horizontal

---

### Section 9 — Stateless vs Stateful

Q31. Stateless Service:

A. Stores user session locally
B. Every request is independent
C. Requires one server only
D. Cannot scale

Answer:
✅ B. Every request is independent

---

Q32. REST APIs are generally:

A. Stateful
B. Stateless
C. Offline
D. Persistent Connections

Answer:
✅ B. Stateless

---

### Section 10 — Replication & Partitioning

Q33. Replication is mainly used for:

A. Increasing Availability
B. Increasing GPU Speed
C. Improving UI
D. DNS

Answer:
✅ A. Increasing Availability

---

Q34. Partitioning (Sharding) primarily helps:

A. Split large datasets
B. Compress Images
C. Reduce APIs
D. Increase CPU Clock

Answer:
✅ A. Split large datasets

---

### Section 11 — Availability

Q35. High Availability means:

A. System is accessible most of the time
B. Large Storage
C. High RAM
D. Many APIs

Answer:
✅ A. System is accessible most of the time

---

Q36. 99.99% Availability means:

A. System is always down
B. Very little downtime
C. Fast database
D. Unlimited users

Answer:
✅ B. Very little downtime

---

### Section 12 — CAP Theorem (Introduction)

Q37. CAP stands for:

A. Consistency, Availability, Partition Tolerance
B. Cache, API, Processing
C. Capacity, API, Performance
D. CPU, API, Protocol

Answer:
✅ A. Consistency, Availability, Partition Tolerance

---

Q38. During a network partition, a distributed system can guarantee at most:

A. Consistency and Availability simultaneously
B. Consistency or Availability (along with Partition Tolerance)
C. Unlimited scalability
D. Infinite throughput

Answer:
✅ B. Consistency or Availability (along with Partition Tolerance)

Explanation: 
CAP Theorem states that when a partition occurs, a distributed system must choose between Consistency and Availability while tolerating the partition.

---

Q39. Which database is commonly associated with prioritizing Consistency + Partition Tolerance (CP)?

A. Redis
B. PostgreSQL (in many distributed configurations)
C. Traditional relational systems emphasizing strong consistency
D. Both B and C

Answer:
✅ D. Both B and C

---

Q40. Which application is more likely to prioritize Availability over immediate consistency?

A. Banking Transaction System
B. Payment Ledger
C. Social Media Feed
D. Core Inventory Management

Answer:
✅ C. Social Media Feed

Explanation: 
Seeing a post a few seconds late is usually acceptable. In contrast, banking systems require strict consistency.

---

### Architect Reflection Questions (Not Graded)

1. You are designing an AI Customer Support Agent for 50 million users. What assumptions would you write before creating the HLD?

2. An AI Agent receives 10 million prompts every day.
Estimate:
- DAU
- Requests/day
- Approximate RPS
- Storage/day (assume average prompt + response size)

3. Your system currently handles 200 RPS but is expected to reach 20,000 RPS in a year. Which architectural changes would you start considering before implementation?
- Horizontal scaling
- Load balancing
- Caching
- Database replication
- Sharding
- Queueing
- Stateless services

> [!NOTE]
> These reflection questions encourage you to apply BOE calculations and HLD principles rather than simply recalling definitions. Think deeply!
