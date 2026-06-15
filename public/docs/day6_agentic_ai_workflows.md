---
title: Multi-Agent Workflows
topic: Agentic AI workflows
date: 2026-06-15
description: Learn how to design robust Agentic AI routing, state orchestration, and structured multi-agent collaboration flows.
---

Day 6 - Multi-Agent Workflows
Instructions
- Total Questions: 3
- Review explanations after attempting

---

Q1. What is the key advantage of a Router workflow pattern in Agentic AI?

A. It makes all tool outputs run in parallel
B. It routes task execution to specialized LLMs or handlers based on user intent, optimizing accuracy and latency
C. It compiles the python code to javascript
D. It stores chat history in PostgreSQL automatically

Answer:

✅ B. It routes task execution to specialized LLMs or handlers based on user intent, optimizing accuracy and latency

Explanation:

Routing allows a general classifier prompt to redirect requests to specific subsets of tools or tailored LLM prompts, avoiding bloated context and slow evaluations.

---

Q2. In a multi-agent workflow, what is the role of "State"?

A. The physical location of the cloud server
B. A shared memory system or context that agents can read and write to coordinate their work
C. The binary state of the processor (0 or 1)
D. The country code of the network API

Answer:

✅ B. A shared memory system or context that agents can read and write to coordinate their work

Explanation:

State stores parameters, facts, and intermediate work results, allowing autonomous agents to build upon each other's outputs.

---

Q3. What is the main characteristic of an Orchestrator-Workers pattern?

A. The LLM handles worker threads manually
B. A central orchestrator LLM dynamically plans a list of sub-tasks and delegates them to worker agents, aggregate their results, and refines the response
C. The network server shuts down idle processes
D. All worker processes must write raw SQL

Answer:

✅ B. A central orchestrator LLM dynamically plans a list of sub-tasks and delegates them to worker agents, aggregate their results, and refines the response

Explanation:

The Orchestrator-Workers pattern is highly flexible for complex, unstructured problems where sub-tasks cannot be predicted in advance.
