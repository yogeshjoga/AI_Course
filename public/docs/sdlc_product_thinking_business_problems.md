---
title: "SDLC, Product Thinking, & Business Problems"
topic: "Intro Module"
date: "2026-06-18"
timing: "9:00 AM - 10:00 AM IST"
description: "Deep dive into Software Development Lifecycle, Product Thinking, and solving Business Problems."
---

### Day 4 Reference & Scoring Guide

| Score | Level |
| :--- | :--- |
| 36-40 | Architect Mindset |
| 30-35 | Strong Product Thinking |
| 20-29 | Good Understanding |
| 10-19 | Needs Revision |
| Below 10 | Revisit Day 4 Concepts |

### Golden Rule of Day 4

**Problem → User → Solution → Product → Technology → Code**

- ❌ **Technology First** is a common mistake.
- ✅ **Problem First** is the core of Product Thinking and System Design.

*Students who understand this will find HLD, System Design, Startups, AI Products, and Agentic AI much easier in the coming classes.*

### Choosing Tech Stack

#### Golden Rule

Don't start with technology.

Start with:

Problem → Users → Scale → Data Type → Latency Requirement → Architecture → Technology

Most beginners do:
- I know React → Let's use React

Architects do:
- Business Problem → Requirements → Choose Technology

#### 1. CRUD Application

- **Examples:** Employee Management, Student Management, HR Portal, CRM, Inventory System
- **Characteristics:** Forms, Reports, Login, Dashboard, Moderate Traffic
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | Spring Boot |
| Database | PostgreSQL |
| Cache | Redis |
| Deployment | Docker |

- **Why?** Relational data, Transactions, Stability, Enterprise friendly

#### 2. E-Commerce

- **Examples:** Amazon, Flipkart, Myntra
- **Characteristics:** Product Catalog, Search, Payments, Orders
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React / Next.js |
| Backend | Spring Boot |
| Database | PostgreSQL |
| Search | OpenSearch |
| Cache | Redis |
| Queue | Kafka |

- **Why?** Need Search, Scalability, and Order Processing.

#### 3. Chat Applications

- **Examples:** WhatsApp, Slack, Discord
- **Characteristics:** Real-Time Messaging, Online Status, Notifications
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | Node.js |
| Database | MongoDB |
| Realtime | WebSockets |
| Cache | Redis |

- **Why?** Need Low Latency, Realtime updates, and handling Millions of messages.

#### 4. Video Streaming

- **Examples:** YouTube, Netflix
- **Characteristics:** Large Videos, High Bandwidth, Recommendations
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | Go / Java |
| Storage | Object Storage (e.g. S3) |
| CDN | CloudFront |
| Metadata DB | PostgreSQL |

- **Why?** Need Fast streaming, Massive storage, and Global delivery.

#### 5. Ride Booking

- **Examples:** Uber, Ola
- **Characteristics:** GPS, Realtime Tracking, Payments
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | Flutter |
| Backend | Spring Boot |
| Database | PostgreSQL |
| Location Cache | Redis |
| Messaging | Kafka |

- **Why?** Need Realtime location tracking and Event processing.

#### 6. Social Media

- **Examples:** Instagram, Facebook, Threads
- **Characteristics:** Images, Likes, Followers, Feed Generation
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | Java / Go |
| DB | PostgreSQL |
| Feed Cache | Redis |
| Search | OpenSearch |
| Queue | Kafka |

- **Why?** Huge scale. Feed generation is computationally expensive.

#### 7. AI Chatbot

- **Examples:** ChatGPT, Customer Support Bot
- **Characteristics:** Prompt Input, LLM Calls, Context Memory
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | FastAPI |
| LLM | OpenAI / Claude |
| Vector DB | Qdrant |
| Cache | Redis |

- **Why?** Python ecosystem dominates AI development.

#### 8. RAG Applications

- **Examples:** Talk to PDF, Knowledge Assistant, Company Chatbot
- **Characteristics:** Search Documents, Retrieve Context, LLM Generation
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | FastAPI |
| Embeddings | OpenAI |
| Vector DB | Qdrant |
| LLM | GPT / Claude |

- **Why?** Vector search is the core requirement.

#### 9. Agentic AI Systems

- **Examples:** AI Employee, Support Agent, Sales Agent
- **Characteristics:** Tool Calling, Memory, Planning, Multi-Step Reasoning
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | FastAPI |
| Agent Framework | LangGraph |
| Memory | PostgreSQL |
| Vector DB | Qdrant |
| LLM | GPT / Claude |

- **Why?** Need Agent workflows, Memory, and Tool execution.

#### 10. Multi-Agent Systems

- **Examples:** AI Software Team, AI Research Team
- **Characteristics:** Agent Communication, Agent Orchestration, Long Running Tasks
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Orchestration | LangGraph |
| Messaging | Kafka |
| Database | PostgreSQL |
| Vector DB | Qdrant |
| LLM | GPT / Claude |

- **Why?** Need coordinate orchestration and communication between agents.

#### 11. Analytics Platform

- **Examples:** Power BI, Business Reports
- **Characteristics:** Large Queries, Aggregations, Dashboards
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Frontend | React |
| Backend | Spring Boot |
| Data Warehouse | BigQuery |
| Visualization | Apache Superset |

- **Why?** Optimized for analytical queries.

#### 12. IoT Systems

- **Examples:** Smart Home, Factory Sensors
- **Characteristics:** Millions of Events, Sensor Data
- **Recommended Stack:**

| Layer | Tech |
| :--- | :--- |
| Backend | Go |
| Broker | MQTT |
| Queue | Kafka |
| DB | TimescaleDB |

- **Why?** Handles time-series efficiently.

#### Database Selection Cheat Sheet

| Requirement | Database |
| :--- | :--- |
| Banking | PostgreSQL |
| E-Commerce | PostgreSQL |
| ERP | PostgreSQL |
| Logs | OpenSearch |
| Chat Messages | MongoDB |
| Analytics | BigQuery |
| AI Memory | PostgreSQL |
| Vector Search | Qdrant |
| Graph Relationships | Neo4j |
| Time Series | TimescaleDB |

#### API Selection Cheat Sheet

| Requirement | API Type |
| :--- | :--- |
| CRUD APIs | REST |
| Mobile Apps | REST |
| Internal Microservices | gRPC |
| Banking | SOAP |
| Flexible Frontend Queries | GraphQL |
| Live Chat | WebSocket |
| Stock Market Feed | WebSocket |
| Event Notifications | Webhook |
| AI Agent Tool Calling | REST |
| Multi-Agent Communication | gRPC |

#### Backend Selection Cheat Sheet

| Requirement | Technology |
| :--- | :--- |
| Enterprise Software | Spring Boot |
| AI Systems | FastAPI |
| Realtime Systems | Node.js |
| High Performance APIs | Go |
| Data Science Apps | Python |
| Agentic AI | FastAPI + LangGraph |

#### Queue Selection Cheat Sheet

| Requirement | Technology |
| :--- | :--- |
| Enterprise Events | Kafka |
| Simple Queue | RabbitMQ |
| Cloud Native | SQS |
| Agent Workflows | Kafka |

#### Cache Selection Cheat Sheet

| Requirement | Technology |
| :--- | :--- |
| Session Storage | Redis |
| API Caching | Redis |
| Feed Caching | Redis |
| AI Context Cache | Redis |

#### Architect's Decision Tree

```text
Is it AI?
│
├── No
│   │
│   ├── CRUD?
│   │   └── Spring Boot + PostgreSQL
│   │
│   ├── Chat?
│   │   └── Node.js + MongoDB + WebSocket
│   │
│   ├── E-Commerce?
│   │   └── Spring Boot + PostgreSQL + Redis
│   │
│   └── Analytics?
│       └── BigQuery
│
└── Yes
    │
    ├── Chatbot?
    │   └── FastAPI + OpenAI
    │
    ├── RAG?
    │   └── FastAPI + Qdrant
    │
    ├── Agent?
    │   └── LangGraph + FastAPI
    │
    └── Multi-Agent?
        └── LangGraph + Kafka
```

#### One-Line Rule

| Requirement | Technology Stack |
| :--- | :--- |
| CRUD | Spring Boot + PostgreSQL |
| Realtime Chat | Node.js + MongoDB + WebSocket |
| E-Commerce | Spring Boot + PostgreSQL + Redis |
| Search | OpenSearch |
| AI Chatbot | FastAPI + LLM |
| RAG | FastAPI + Qdrant |
| Agentic AI | LangGraph + FastAPI |
| Multi-Agent | LangGraph + Kafka |
| Analytics | BigQuery |
| IoT | MQTT + Kafka + TimescaleDB |

*This cheat sheet is sufficient for beginners to make 80% of HLD technology decisions correctly before learning deeper topics like scalability, load balancing, sharding, caching, CQRS, event-driven architectures, and Agentic AI HLD.*

### Cheatsheets

![HLD System Design Cheatsheet](/docs/hld_cheatsheet.png)

---

Q1. Why does software exist?

A. To use programming languages
B. To write code
C. To solve business problems
D. To use databases

Answer:

✅ C. To solve business problems

Explanation:

Software is a tool. The real goal is solving business or user problems.

---

Q2. What should come first?

A. Database Design
B. Code
C. Technology Selection
D. Problem Identification

Answer:

✅ D. Problem Identification

Explanation:

Many projects fail because teams start coding before understanding the actual problem.

---

Q3. Which mindset represents Product Thinking?

A. Start coding immediately
B. Select technology first
C. Understand users and problems before building
D. Buy cloud servers first

Answer:

✅ C. Understand users and problems before building

Explanation:

Product thinking starts with understanding user pain points and designing solutions that add business value.

---

Q4. Which sequence is correct?

A. Technology → User → Problem
B. Problem → User → Solution → Technology
C. Code → Problem → User
D. Database → API → Problem

Answer:

✅ B. Problem → User → Solution → Technology

Explanation:

First identify the problem, understand the user, design the solution, and only then choose the technology stack.

---

Q5. Which is NOT a business problem?

A. High operational costs
B. Customer complaints
C. Slow manual process
D. Laptop color preference

Answer:

✅ D. Laptop color preference

Explanation:

Business problems affect efficiency, cost, accuracy, or customer satisfaction. Personal preferences like laptop color do not.

---

Q6. A company spends 8 hours daily preparing reports manually. This is:

A. Time Problem
B. Storage Problem
C. Browser Problem
D. Hardware Problem

Answer:

✅ A. Time Problem

Explanation:

Spending excessive hours on manual work represents a Time Problem that automation can solve.

---

Q7. A company hires 50 support engineers because ticket volume is huge. This is primarily:

A. Cost Problem
B. GPU Problem
C. DNS Problem
D. Browser Problem

Answer:

✅ A. Cost Problem

Explanation:

Hiring excess staff to solve manual workload raises operations cost significantly, indicating a Cost Problem.

---

Q8. Manual data entry causes incorrect invoices. This is:

A. Network Problem
B. Accuracy Problem
C. Browser Problem
D. AI Problem

Answer:

✅ B. Accuracy Problem

Explanation:

Human errors in manual processes lead to inaccuracies and billing errors.

---

Q9. System works for 100 users but crashes with 1 million users. This is:

A. Accuracy Problem
B. Scalability Problem
C. DNS Problem
D. Security Problem

Answer:

✅ B. Scalability Problem

Explanation:

A system failing under high load points to a scalability problem that requires high-level system design.

---

Q10. Which is the most important question before building software?

A. Which language should we use?
B. Which cloud provider?
C. What problem are we solving?
D. Which IDE?

Answer:

✅ C. What problem are we solving?

Explanation:

Before picking any tools or code structures, you must identify the target problem clearly.

---

Q11. Which statement identifies a real pain point?

A. We need React
B. We need Java
C. Customers wait 30 minutes for support responses
D. We need Kubernetes

Answer:

✅ C. Customers wait 30 minutes for support responses

Explanation:

Pain points describe actual user issues (like long waiting times) rather than a list of tools.

---

Q12. Which is a good product idea?

A. Build AI because AI is trending
B. Build blockchain because it's cool
C. Solve a verified customer problem
D. Use latest technology

Answer:

✅ C. Solve a verified customer problem

Explanation:

A successful product starts with a verified user pain point rather than hype.

---

Q13. Restaurant customers wait 40 minutes for food delivery.

Best software solution?

A. Gaming App
B. Food Ordering Application
C. Browser Extension
D. Database Tool

Answer:

✅ B. Food Ordering Application

Explanation:

A food ordering system streamlines delivery tracking and menu management to reduce delay.

---

Q14. HR receives 500 resumes daily.

Best solution?

A. AI Resume Screening System
B. DNS Server
C. VPN
D. Router

Answer:

✅ A. AI Resume Screening System

Explanation:

An automated screening system saves time by scanning and filtering resumes automatically.

---

Q15. Support team handles 5000 tickets monthly.

Best solution?

A. AI Support Agent
B. Gaming Website
C. Email Client
D. Browser

Answer:

✅ A. AI Support Agent

Explanation:

An AI support agent helps deflect common queries instantly, reducing the load on humans.

---

Q16. What should be selected AFTER understanding the problem?

A. Tech Stack
B. Logo Design
C. Office Location
D. Salary Structure

Answer:

✅ A. Tech Stack

Explanation:

A tech stack selection must be driven by the technical requirements of the solution.

---

Q17. Which is wrong?

A. Problem First
B. User First
C. Technology First
D. Solution First

Answer:

✅ C. Technology First

Explanation:

Focusing on technology before the user or the problem leads to building incorrect solutions.

---

Q18. A small internal company tool needs CRUD operations.

Best backend?

A. Spring Boot REST API
B. Multi-Agent System
C. Blockchain
D. Supercomputer

Answer:

✅ A. Spring Boot REST API

Explanation:

Simple CRUD operations are best served by simple, well-established REST API backends.

---

Q19. Real-time chat application requires:

A. REST only
B. WebSockets
C. Excel
D. FTP

Answer:

✅ B. WebSockets

Explanation:

Real-time message synchronization requires persistent, low-latency bidirectional connections (WebSockets).

---

Q20. AI Customer Support Assistant requires:

A. LLM
B. Vector Database
C. APIs
D. All of the above

Answer:

✅ D. All of the above

Explanation:

Building an AI assistant requires an LLM for generation, a Vector Database for retrieval, and APIs to connect them.

---

Q21. Online Food Delivery App needs location tracking.

Best technology?

A. GPS APIs
B. Printer
C. SSD
D. BIOS

Answer:

✅ A. GPS APIs

Explanation:

GPS APIs provide location-tracking capabilities for real-time driver delivery mapping.

---

Q22. AI Chat Application requires conversations over documents.

Best choice?

A. RAG
B. Router
C. FTP
D. Firewall

Answer:

✅ A. RAG

Explanation:

Retrieval-Augmented Generation (RAG) allows LLMs to query external documents for answers.

---

Q23. Company wants instant stock price updates.

Best API style?

A. REST
B. SOAP
C. WebSocket
D. CSV

Answer:

✅ C. WebSocket

Explanation:

WebSocket allows the server to push real-time changes to the client instantly.

---

Q24. Internal microservices communication.

Best API?

A. gRPC
B. SOAP
C. FTP
D. SMTP

Answer:

✅ A. gRPC

Explanation:

gRPC is designed for fast, efficient, low-latency binary RPC communication between services.

---

Q25. Who is the first stakeholder in Product Thinking?

A. Database
B. User
C. API
D. Server

Answer:

✅ B. User

Explanation:

The user is the central focus in Product Thinking.

---

Q26. What is the primary goal of Product Thinking?

A. Write more code
B. Understand user pain points
C. Buy cloud infrastructure
D. Use AI everywhere

Answer:

✅ B. Understand user pain points

Explanation:

Product thinking focuses on user issues to design systems that add real value.

---

Q27. What does SDLC stand for?

A. Software Development Lifecycle
B. Software Design Logic Cycle
C. System Deployment Logic Cycle
D. Software Data Layer Cycle

Answer:

✅ A. Software Development Lifecycle

Explanation:

SDLC stands for Software Development Lifecycle.

---

Q28. Which comes first in SDLC?

A. Testing
B. Deployment
C. Requirements
D. Maintenance

Answer:

✅ C. Requirements

Explanation:

Requirements gathering and analysis always come first to define what needs to be built.

---

Q29. Correct SDLC sequence?

A. Development → Design → Requirements
B. Requirements → Design → Development → Testing → Deployment
C. Testing → Design → Deployment
D. Development → Deployment → Requirements

Answer:

✅ B. Requirements → Design → Development → Testing → Deployment

Explanation:

This sequence represents the standard phases of the Software Development Lifecycle.

---

Q30. Why is testing important?

A. To increase RAM
B. To find bugs before production
C. To create databases
D. To improve DNS

Answer:

✅ B. To find bugs before production

Explanation:

Testing verifies the system works as expected and catches bugs before they impact users.

---

Q31. What happens after deployment?

A. Project is finished forever
B. Maintenance and improvements
C. Delete source code
D. Remove users

Answer:

✅ B. Maintenance and improvements

Explanation:

Once deployed, software requires continuous monitoring, bug fixing, and product upgrades.

---

Q32. Why does scalability become important?

A. More users arrive
B. Browser updates
C. Mouse upgrades
D. SSD size changes

Answer:

✅ A. More users arrive

Explanation:

Scalability measures a system's ability to handle increasing amounts of work or users.

---

Q33. Startup supports 100 users today and expects 10 million users next year. What should architects think about?

A. Scalability
B. Wallpaper
C. Keyboard
D. Monitor

Answer:

✅ A. Scalability

Explanation:

When user volume grows exponentially, design decisions must ensure system components scale horizontally.

---

Q34. Which company heavily focuses on scalability?

A. WhatsApp
B. YouTube
C. Amazon
D. All of the above

Answer:

✅ D. All of the above

Explanation:

All high-traffic web applications must optimize their architecture for high scalability and availability.

---

Q35. Why do architects care about scalability?

A. To support growth without system failure
B. To reduce screen size
C. To increase keyboard speed
D. To replace browsers

Answer:

✅ A. To support growth without system failure

Explanation:

Scalability guarantees that the system doesn't crash or slow down as traffic grows.

---

Q36. User Pain Point:

"Customers forget to pay monthly bills."

Best Product?

A. Reminder Application
B. Browser
C. Router
D. GPU

Answer:

✅ A. Reminder Application

Explanation:

A billing reminder app targets the user pain point directly.

---

Q37. User Pain Point:

"Students struggle to prepare for interviews."

Best Product?

A. AI Interview Coach
B. DNS Server
C. VPN
D. Firewall

Answer:

✅ A. AI Interview Coach

Explanation:

An AI interview coach helps students practice mock interviews and get instant feedback.

---

Q38. Which is the BEST startup idea?

A. Use AI because it's trending
B. Use Blockchain because it's trending
C. Solve a painful problem affecting many users
D. Build random software

Answer:

✅ C. Solve a painful problem affecting many users

Explanation:

Solving a verified user pain point is the highest predictor of startup success.

---

Q39. Which statement represents an architect mindset?

A. Which framework should I use?
B. Which database should I use?
C. What problem am I solving and how will it scale?
D. Which IDE should I install?

Answer:

✅ C. What problem am I solving and how will it scale?

Explanation:

Architects focus on problem scope, data flows, components, scalability, and long-term durability.

---

Q40. Complete the correct flow:

A. Code → Technology → Problem
B. Problem → User → Solution → Product → Technology → Software
C. Technology → Product → User
D. Database → Backend → Problem

Answer:

✅ B. Problem → User → Solution → Product → Technology → Software

Explanation:

This is the logical sequence of Product Thinking, High-Level Design, System Design, and software engineering.
