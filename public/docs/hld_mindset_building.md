---
title: "HLD Mindset Building for AI & Agentic Systems"
topic: "HLD"
date: "2026-06-22"
timing: "9:00 AM - 10:00 AM IST"
description: "Architect-Level thinking questions training students on problem-solving mindsets and Agentic AI HLD structures."
---

# HLD Mindset Building for AI & Agentic Systems
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the assessment for **HLD Mindset Building**.
These questions train you to think like an Architect rather than just a tool user:
- ❌ **Tool Mindset**: Which framework should I use?
- ✅ **Architect Mindset**: What problem am I solving?

---

### Class Discussion & Reflection Questions
Review these open scenario questions to practice high-level conceptual thinking:

#### Reflection 1: AI Doctor Assistant
You are asked to build an AI Doctor Assistant. What are the first 5 HLD questions you would ask before selecting any technology?

#### Reflection 2: Missing Context
A company says: *"We need an AI Agent."* What information is missing before architecture can begin?

#### Reflection 3: Core Value
If GPT-6 replaces GPT-5 tomorrow, which skills from this course remain valuable?
- **Expected Core Skills**: Problem Solving, Product Thinking, HLD, System Design, Trade-off Analysis, Architecture Thinking, and User-Centric Design.

---

### Day 6 Reference & Scoring Guide

| Score | Level |
| :--- | :--- |
| 22 - 25 | Senior Architect Mindset |
| 18 - 21 | Architect Mindset |
| 14 - 17 | Strong Builder |
| 10 - 13 | AI Builder |
| Below 10 | AI User |

---

Q1. Which mindset represents an Architect?

A. Which AI tool should I use?
B. Which framework is trending?
C. How do I solve this business problem?
D. Which programming language is easiest?

Answer:

✅ C. How do I solve this business problem?

Explanation:

Architects focus on problems first and technology second.

---

Q2. What is the biggest difference between an AI User and an AI Builder?

A. Builder knows more prompts
B. Builder pays for ChatGPT
C. Builder designs systems that solve problems
D. Builder uses GPUs

Answer:

✅ C. Builder designs systems that solve problems

Explanation:

AI Users interact with existing AI tools to consume content, whereas AI Builders architect systems and workflows that integrate models to solve specific operational or business problems.

---

Q3. Which statement demonstrates Product Thinking?

A. Let's use GPT-5
B. Let's use LangGraph
C. Let's identify the user's pain point first
D. Let's use FastAPI

Answer:

✅ C. Let's identify the user's pain point first

Explanation:

Product thinking is user-centric; before choosing models or coding frameworks, you must deeply define the target user's problem and how the product solves it.

---

Q4. Why is HLD even more important in Agentic AI than traditional software?

A. Agents use colorful UIs
B. Agentic systems have more components and interactions
C. Agents don't need databases
D. Agents don't need APIs

Answer:

✅ B. Agentic systems have more components and interactions

Explanation:

Agentic systems introduce planners, memory systems, tool integrations, vector databases, guardrails, and orchestration layers. Managing these complex interactions requires solid HLD.

---

Q5. Which architecture is closer to a real AI Support Agent?

A. Ticket -> ChatGPT -> Answer
B. Ticket -> Knowledge Base -> Retriever -> Context Builder -> LLM -> Human Review -> Customer

Answer:

✅ B. Ticket -> Knowledge Base -> Retriever -> Context Builder -> LLM -> Human Review -> Customer

Explanation:

Real enterprise support agents require retrieval of relevant context, validation of inputs/outputs, guardrails, and human-in-the-loop checks for critical decisions rather than a simple direct prompt call.

---

Q6. What failed in this scenario?
- Month 1: Works
- Month 2: 100 Users
- Month 3: 10,000 Users (Slow, Expensive, Hallucinations, Failures)

A. GPT
B. Database
C. Architecture
D. Users

Answer:

✅ C. Architecture

Explanation:

A failure to handle scaling, latency, API costs, and hallucinations points directly to a lack of proper High-Level Architecture (e.g. lack of caching, queueing, rate-limiting, and retrieval validation).

---

Q7. Company receives 5000 support tickets daily. Which question should be asked first?

A. GPT or Claude?
B. FastAPI or Spring Boot?
C. How do we design a system that solves this problem?
D. MongoDB or PostgreSQL?

Answer:

✅ C. How do we design a system that solves this problem?

Explanation:

Always design the system requirements and workflows first. Technology stack choices (languages, databases, models) are selected later based on design constraints.

---

Q8. Which sequence reflects proper architectural thinking?

A. Technology -> Problem -> User
B. Problem -> Users -> Requirements -> Architecture -> Technology

Answer:

✅ B. Problem -> Users -> Requirements -> Architecture -> Technology

Explanation:

Architects follow a top-down approach: defining the problem and users first, deriving functional/non-functional requirements, laying out system blocks, and lastly choosing the technology.

---

Q9. A student says: "I want to build an AI chatbot." What is the architect's next question?

A. Which LLM?
B. Which vector database?
C. Who is the user and what problem are we solving?
D. Which cloud provider?

Answer:

✅ C. Who is the user and what problem are we solving?

Explanation:

A general "chatbot" has no defined business value. You must understand who the user is and what problem they are trying to solve to design a suitable conversation system.

---

Q10. Which engineer is most valuable?

A. Knows 50 frameworks
B. Memorizes APIs
C. Understands systems and trade-offs
D. Knows every React hook

Answer:

✅ C. Understands systems and trade-offs

Explanation:

Frameworks and libraries change constantly. An engineer who understands system design patterns and trade-offs can solve any technical problem regardless of the specific technology.

---

Q11. Which statement is TRUE?

A. Architects memorize everything
B. Architects never forget concepts
C. Architects understand patterns and problem solving
D. Architects know every framework

Answer:

✅ C. Architects understand patterns and problem solving

Explanation:

Architects focus on underlying design patterns, decoupling mechanisms, scalability constraints, and problem-solving strategies rather than simple rote memorization.

---

Q12. What should remain valuable after frameworks change?

A. Syntax
B. Library names
C. Problem-solving ability
D. Version numbers

Answer:

✅ C. Problem-solving ability

Explanation:

Syntax and library details change rapidly. Fundamental problem-solving ability, design patterns, and system design thinking are evergreen skills.

---

Q13. Resume Analyzer System: Which design is more scalable?

A. Resume -> ChatGPT -> Score
B. Resume -> Upload Service -> OCR -> Parser -> LLM -> Scoring Engine -> Database -> Report

Answer:

✅ B. Resume -> Upload Service -> OCR -> Parser -> LLM -> Scoring Engine -> Database -> Report

Explanation:

Design B decouples distinct tasks into dedicated components. This allows independent scaling, error isolation, parallel processing, and better overall system resilience.

---

Q14. Why is Design B superior?

A. Uses more technologies
B. Easier to explain
C. Better separation of responsibilities
D. More expensive

Answer:

✅ C. Better separation of responsibilities

Explanation:

Design B follows the Single Responsibility Principle. If parsing fails, we know it's the Parser; if OCR fails, it's the OCR. Components are decoupled, making maintenance and updates much easier.

---

Q15. Which component extracts text from scanned resumes?

A. Vector DB
B. OCR
C. API Gateway
D. Cache

Answer:

✅ B. OCR

Explanation:

Optical Character Recognition (OCR) is the specific technology used to convert scanned images or PDFs of resumes into machine-readable text.

---

Q16. Which question demonstrates architectural thinking?

A. Can I write this code?
B. Which button should be blue?
C. What happens when user count grows from 100 to 10 million?
D. Which IDE should I use?

Answer:

✅ C. What happens when user count grows from 100 to 10 million?

Explanation:

Architectural thinking prioritizes scalability, reliability, and non-functional requirements such as handling exponential traffic increases.

---

Q17. Which concern is MOST important for a system serving 100 million users?

A. Variable Names
B. Scalability
C. IDE Theme
D. Coding Font

Answer:

✅ B. Scalability

Explanation:

For a system serving 100 million users, ensuring the architecture can handle high concurrency, load distribute, and scale horizontally is of paramount importance.

---

Q18. Which concern is MOST important for a banking application?

A. Availability
B. Security
C. Data Consistency
D. All of the Above

Answer:

✅ D. All of the Above

Explanation:

Banking systems require the highest levels of security to protect assets, data consistency to prevent incorrect balances, and high availability to remain accessible to users.

---

Q19. Which component gives long-term memory to an AI Agent?

A. Browser
B. Monitor
C. Memory Store / Database
D. GPU Fan

Answer:

✅ C. Memory Store / Database

Explanation:

A memory store or persistent database enables an agent to save conversation histories, user preferences, and state across sessions, serving as long-term memory.

---

Q20. Which component helps an Agent access external systems?

A. DNS
B. Tools / APIs
C. RAM
D. Browser Tab

Answer:

✅ B. Tools / APIs

Explanation:

Agents interact with the outside world (checking databases, sending emails, executing code) using defined Tools and APIs.

---

Q21. What is the role of a Planner in Agentic AI?

A. Store files
B. Generate CSS
C. Break large goals into smaller tasks
D. Replace APIs

Answer:

✅ C. Break large goals into smaller tasks

Explanation:

The Planner decomposes a complex, high-level user request into a step-by-step sequence of execution tasks and coordinates their execution.

---

Q22. Your AI application is too expensive. What should an architect analyze FIRST?

A. Buy a bigger laptop
B. Replace developers
C. System architecture and cost drivers
D. Change company logo

Answer:

✅ C. System architecture and cost drivers

Explanation:

To optimize cost, an architect must analyze the cost drivers: identifying which components consume the most API credits, whether prompt length can be reduced, or where caching/cheaper models can be used.

---

Q23. Your AI application gives wrong answers. What should be investigated?

A. Retrieval strategy
B. Context quality
C. Knowledge source
D. All of the Above

Answer:

✅ D. All of the Above

Explanation:

Wrong answers (hallucinations) in RAG systems are typically caused by fetching irrelevant documents (retrieval strategy), poor prompts (context quality), or outdated/inaccurate source documents (knowledge source).

---

Q24. Which statement is closest to a Senior Architect mindset?

A. I know React.
B. I know Spring Boot.
C. I understand how systems behave under load, failure, scale, and business constraints.
D. I know 100 API endpoints.

Answer:

✅ C. I understand how systems behave under load, failure, scale, and business constraints.

Explanation:

Senior architects focus on system behaviors, trade-offs (e.g. latency vs cost), disaster recovery, scalability bottlenecks, and business outcomes rather than knowing specific coding syntax.

---

Q25. Which statement best summarizes the purpose of this course?

A. Learn ChatGPT
B. Learn Prompt Engineering
C. Learn frameworks
D. Learn how to think, design systems, solve problems, and build real-world AI solutions

Answer:

✅ D. Learn how to think, design systems, solve problems, and build real-world AI solutions

Explanation:

The primary goal of this course is to elevate you from a tool consumer to a system designer who can build scalable, robust, and functional Agentic AI solutions that solve actual business problems.
