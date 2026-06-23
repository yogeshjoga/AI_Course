---
title: "Introduction to HLD & Components"
topic: "HLD"
date: "2026-06-19"
timing: "9:00 AM - 10:00 AM IST"
description: "Understanding High Level Design (HLD) importance and key components (Frontend, Backend, Database, APIs)."
---

# Introduction to HLD & Components
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 5 - Introduction to HLD & Components**.
Please attempt all questions below. Explanations will unlock after submission.

---

### Day 5 Reference & Scoring Guide

| Score | Level |
| :--- | :--- |
| 25+ | Architect Mindset Developing |
| 20-24 | Strong Understanding |
| 15-19 | Good Foundation |
| 10-14 | Needs Revision |
| Below 10 | Review HLD Concepts Again |

---

Q1. What does HLD stand for?

A. Hardware Level Design
B. High Level Design
C. Hyper Level Database
D. High Logic Development

Answer:
✅ B. High Level Design

Explanation:
HLD is the architectural blueprint of a software system before development starts.

---

Q2. What is the primary purpose of HLD?

A. Writing code faster
B. Designing system architecture before coding
C. Creating database tables
D. Testing applications

Answer:
✅ B. Designing system architecture before coding

Explanation:
The primary purpose of HLD is to outline the system's architecture, including its main modules, databases, and key design decisions, before coding begins.

---

Q3. Which comes first?

A. Coding
B. Deployment
C. HLD
D. Testing

Answer:
✅ C. HLD

Explanation:
Architecture should be planned before development begins.

---

Q4. HLD is most similar to:

A. Car engine
B. Building blueprint
C. Calculator
D. Mobile charger

Answer:
✅ B. Building blueprint

Explanation:
A High Level Design acts as a blueprint, describing how the overall components fit together, just like a building blueprint shows the floor plan and structural layout.

---

Q5. Complete the flow:

Problem → ? → Code

A. Testing
B. HLD
C. Deployment
D. Database

Answer:
✅ B. HLD

Explanation:
System design (HLD) bridges the gap between understanding the business problem and implementing the solution in code.

---

Q6. Which of the following is NOT a benefit of HLD?

A. Scalability
B. Reliability
C. Performance
D. Eliminating all bugs

Answer:
✅ D. Eliminating all bugs

Explanation:
Good design reduces issues and architectural flaws but cannot completely eliminate implementation bugs.

---

Q7. Which HLD concern asks:

"Can this system support 10 million users?"

A. Security
B. Scalability
C. Logging
D. Testing

Answer:
✅ B. Scalability

Explanation:
Scalability refers to the capability of a system to handle a growing amount of work or potential to be enlarged to accommodate that growth (e.g., millions of users).

---

Q8. Which HLD concern asks:

"What happens if one server fails?"

A. Reliability
B. Frontend
C. API
D. Deployment

Answer:
✅ A. Reliability

Explanation:
Reliability is about ensuring the system remains operational and can recover from failures (like a server crash) without data loss or downtime.

---

Q9. Which concern focuses on reducing infrastructure costs?

A. Reliability
B. Cost Optimization
C. Security
D. UI Design

Answer:
✅ B. Cost Optimization

Explanation:
Cost Optimization in HLD ensures the system uses resources efficiently, avoiding over-provisioning and minimizing cloud or hardware expenses.

---

Q10. Which diagram best represents a basic software architecture?

A. User → Database
B. User → Frontend → API → Backend → Database
C. User → RAM → CPU
D. Frontend → User

Answer:
✅ B. User → Frontend → API → Backend → Database

Explanation:
A classic modern multi-tier web application architecture routes the user through the UI (Frontend), which calls backend services (Backend) via interfaces (API) to persist data (Database).

---

Q11. Which component interacts directly with users?

A. Database
B. Backend
C. Frontend
D. Cache

Answer:
✅ C. Frontend

Explanation:
The frontend is the client-facing presentation layer where users view data, click buttons, and submit forms.

---

Q12. Which component contains business logic?

A. Backend
B. Frontend
C. Database
D. DNS

Answer:
✅ A. Backend

Explanation:
The backend acts as the application's brain, containing the core logic, authorization rules, algorithms, and business flows.

---

Q13. Which component stores data permanently?

A. API
B. Frontend
C. Database
D. Browser

Answer:
✅ C. Database

Explanation:
Databases are persistent storage engines optimized to save and query data across application restarts and server crashes.

---

Q14. Which is a Frontend technology?

A. PostgreSQL
B. Redis
C. React
D. Kafka

Answer:
✅ C. React

Explanation:
React is a popular frontend library used for building user interfaces. PostgreSQL, Redis, and Kafka are backend/database/infrastructure tools.

---

Q15. Which responsibility belongs to Frontend?

A. Store orders permanently
B. Execute SQL queries
C. Display information to users
D. Manage servers

Answer:
✅ C. Display information to users

Explanation:
Frontend's main goal is to render the interface and present data in a user-friendly way.

---

Q16. A Login Page primarily belongs to:

A. Backend
B. Frontend
C. Database
D. Cache

Answer:
✅ B. Frontend

Explanation:
Although credentials verification happens on the backend, the actual login page (username/password form) is rendered on the frontend.

---

Q17. What happens after a Login Request reaches the Backend?

A. Validate credentials
B. Store image files
C. Render UI
D. DNS Lookup

Answer:
✅ A. Validate credentials

Explanation:
The backend intercepts the login credentials, runs security checks (like hashing), and queries the database to validate the username and password.

---

Q18. Which technology is commonly used for Backend development?

A. React
B. Angular
C. Spring Boot
D. Photoshop

Answer:
✅ C. Spring Boot

Explanation:
Spring Boot (Java) is a very popular backend framework. React and Angular are frontend frameworks, and Photoshop is a design tool.

---

Q19. Backend is often called:

A. User Interface
B. Application Brain
C. Browser
D. Network

Answer:
✅ B. Application Brain

Explanation:
The backend runs the business logic and makes decisions, acting as the brain of the application.

---

Q20. Which database is SQL-based?

A. MongoDB
B. PostgreSQL
C. Redis
D. Cassandra

Answer:
✅ B. PostgreSQL

Explanation:
PostgreSQL is an open-source object-relational (SQL) database. MongoDB, Redis, and Cassandra are NoSQL systems.

---

Q21. Which database is NoSQL?

A. PostgreSQL
B. MySQL
C. MongoDB
D. Oracle

Answer:
✅ C. MongoDB

Explanation:
MongoDB is a document-based NoSQL database. PostgreSQL, MySQL, and Oracle are relational (SQL) databases.

---

Q22. Instagram likely stores which information in databases?

A. Users
B. Photos
C. Followers
D. All of the Above

Answer:
✅ D. All of the Above

Explanation:
Any persistent application state (user profile data, media metadata/links, and social graphs like followers) is stored in databases.

---

Q23. What is the primary role of an API?

A. Store files
B. Connect Frontend and Backend
C. Replace Database
D. Replace Backend

Answer:
✅ B. Connect Frontend and Backend

Explanation:
An API (Application Programming Interface) acts as a bridge or contract allowing different systems (like frontend and backend) to communicate.

---

Q24. In the restaurant analogy, API acts as:

A. Customer
B. Kitchen
C. Waiter
D. Table

Answer:
✅ C. Waiter

Explanation:
The API carries requests from users (customers) to backend systems (kitchen) and returns responses.

---

Q25. Which architecture best represents an AI Agent System?

A. User → Database
B. User → Frontend → API → Agent Backend → LLM → Tools → Response
C. Frontend → User
D. Database → User

Answer:
✅ B. User → Frontend → API → Agent Backend → LLM → Tools → Response

Explanation:
Modern Agentic AI systems involve orchestration layers (Agent Backend), LLMs for reasoning, tools for action execution, memory, and APIs.

---

Q26. You are building WhatsApp for 10 users. Do you need a highly complex architecture?

A. Yes
B. No

Answer:
✅ B. No

Explanation:
For 10 users, a single server and database are more than enough. Simple applications can start with simple architectures to keep development fast and inexpensive.

---

Q27. You are building WhatsApp for 100 million users. What becomes important?

A. Scalability
B. Reliability
C. Storage
D. All of the Above

Answer:
✅ D. All of the Above

Explanation:
When scaling to 100 million users, you must design for high scalability, continuous reliability/availability, and massive distributed storage capabilities.

---

Q28. Which mindset belongs to an Architect?

A. How do I write this function?
B. How do I scale this system to 10 million users?
C. How do I format code?
D. How do I rename variables?

Answer:
✅ B. How do I scale this system to 10 million users?

Explanation:
Architects focus on the macro-level system attributes like scalability, failover, cost optimization, and overall modular structure rather than micro-level coding implementation details.
