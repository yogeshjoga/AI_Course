file_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\designing_uber_ola_ride_hailing_part_1.md'

new_content = """---
title: "Enterprise Agentic AI Architecture Design"
topic: "HLD"
date: "2026-07-10"
timing: "9:00 AM - 10:00 AM IST"
description: "From Traditional Software to AI Native Software: Moving past 'Where do I call ChatGPT?' to 'Where should AI exist inside my architecture?'"
---

# Enterprise Agentic AI Architecture Design
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 17 - Enterprise Agentic AI Architecture Design**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the fundamental shift when designing "AI Native Software" compared to traditional software?

A. Adding a ChatGPT chatbox to the UI
B. Using AI purely for code auto-completion
C. Integrating AI agents as core architectural components rather than isolated API calls
D. Storing data in CSV files

Answer:

**Answer:** C

Explanation:

AI Native Architecture requires treating AI as an integrated component of the system (like databases or queues) that can orchestrate workflows, rather than just an external endpoint you ping for text generation.

---

Q2. An architect shifting to Enterprise Agentic AI should stop asking "Where do I call ChatGPT?" and instead ask:

A. "How can I avoid using Python?"
B. "Where should AI exist inside my architecture?"
C. "What is the cheapest API tier?"
D. "How do I build my own LLM from scratch?"

Answer:

**Answer:** B

Explanation:

The core theme of Agentic AI is architectural integration. You must decide if the AI acts as a router, a validator, a planner, or an execution node within your broader High-Level Design (HLD).

---

Q3. In an Enterprise Agentic Architecture, which component typically determines the user's intent and decides which tools/APIs to invoke?

A. The Frontend React App
B. A Relational Database (SQL)
C. A Planner / Router Agent
D. An S3 Bucket

Answer:

**Answer:** C

Explanation:

A Planner Agent or Router Agent is responsible for receiving the initial request, understanding the context, and orchestrating downstream API calls or delegating to sub-agents.

"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Day 17 successfully.")
