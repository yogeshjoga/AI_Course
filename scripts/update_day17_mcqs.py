raw_text = """
Q1. Traditional software architecture is primarily based on

A. Frontend -> Backend -> Database

B. LLM -> RAG -> Vector DB

C. Planner -> Tools -> MCP

D. Redis -> Kafka -> RabbitMQ

✅ Answer: A

Q2. Modern AI-native architecture introduces which new core component?

A. CSS

B. Planner Agent

C. HTML

D. Bootstrap

✅ Answer: B

Q3. The Planner Agent is responsible for

A. Storing files

B. Deciding the execution workflow

C. Generating thumbnails

D. Managing CSS

✅ Answer: B

Q4. Which architecture is correct for an AI-native application?

A. User -> Database

B. User -> API -> Planner -> AI Workflow -> Tools -> Response

C. User -> Redis

D. User -> Kafka

✅ Answer: B

Q5. AI-native systems differ from traditional systems because AI can

A. Only generate text

B. Reason and decide which actions to perform

C. Replace databases

D. Replace APIs

✅ Answer: B

Q6. Customer asks: "Track my order." Which component first decides how to handle the request?

A. Planner Agent

B. Database

C. Redis

D. RabbitMQ

✅ Answer: A

Q7. Customer asks: "What is your return policy?" The Planner should route the request to

A. RAG

B. SQL Agent

C. Payment API

D. Redis

✅ Answer: A

Q8. Customer asks: "Show my last five orders." The Planner should route the request to

A. RAG

B. SQL Agent

C. CDN

D. Vector DB

✅ Answer: B

Q9. Customer uploads a passport image. Which model should the Planner choose?

A. LLM

B. VLM

C. Redis

D. RabbitMQ

✅ Answer: B

Q10. Customer asks: "What is today's weather?" The Planner should use

A. RAG

B. Weather API Tool

C. SQL Agent

D. Vector DB

✅ Answer: B

Q11. RAG is best suited for

A. Static company knowledge

B. Live bank balance

C. OTP verification

D. Payment processing

✅ Answer: A

Q12. Which information is ideal for RAG?

A. Company Policies

B. Employee Handbook

C. Product Manuals

D. All of the Above

✅ Answer: D

Q13. Customer asks: "Explain our refund policy." Best solution?

A. RAG

B. SQL Agent

C. Redis

D. Kafka

✅ Answer: A

Q14. Which component retrieves relevant chunks?

A. Retriever

B. Browser

C. Docker

D. RabbitMQ

✅ Answer: A

Q15. Vector Database stores

A. Embeddings

B. SQL Tables

C. HTML Pages

D. Videos

✅ Answer: A

Q16. Vectorless RAG mainly relies on

A. Keyword Search

B. Embeddings

C. Redis

D. RabbitMQ

✅ Answer: A

Q17. Which technology commonly powers Vectorless RAG?

A. BM25

B. CUDA

C. Redis

D. Docker

✅ Answer: A

Q18. Vectorless RAG is suitable when

A. Documents are small and keyword-based

B. Image analysis is required

C. GPU inference is needed

D. Live banking data is needed

✅ Answer: A

Q19. Which search combines semantic and keyword retrieval?

A. Hybrid Search

B. Binary Search

C. Linear Search

D. DFS

✅ Answer: A

Q20. Hybrid Search combines

A. Dense Search + Sparse Search

B. SQL + Redis

C. Kafka + RabbitMQ

D. LLM + GPU

✅ Answer: A

Q21. SQL Agent converts

A. Natural Language -> SQL

B. Images -> Text

C. Video -> Audio

D. HTML -> CSS

✅ Answer: A

Q22. SQLCoder is mainly used for

A. Generating SQL Queries

B. Creating Images

C. Compressing Files

D. Generating Embeddings

✅ Answer: A

Q23. Before executing AI-generated SQL, the system should

A. Validate the SQL

B. Delete the query

C. Restart the server

D. Store it in Redis

✅ Answer: A

Q24. Which database stores transactional business data?

A. PostgreSQL

B. Vector Database

C. Redis

D. Kafka

✅ Answer: A

Q25. Which question is best answered by SQL?

A. How many orders were placed today?

B. Explain company policy

C. Summarize PDF

D. Analyze image

✅ Answer: A

Q26. MCP stands for

A. Model Context Protocol

B. Multi Cloud Processing

C. Machine Code Platform

D. Memory Control Process

✅ Answer: A

Q27. MCP primarily enables

A. Standardized access to tools and enterprise systems

B. Video transcoding

C. Image compression

D. SQL indexing

✅ Answer: A

Q28. Which task should use MCP?

A. Transfer Money

B. Create Jira Ticket

C. Check CRM

D. All of the Above

✅ Answer: D

Q29. Tool Calling is used when

A. The AI must perform external actions

B. The AI summarizes a paragraph

C. The AI caches data

D. The AI stores embeddings

✅ Answer: A

Q30. Which component manages tool execution?

A. Tool Manager

B. CDN

C. Browser

D. Redis

✅ Answer: A

Q31. Short-term memory stores

A. Current Conversation

B. Company Policies

C. Videos

D. Images

✅ Answer: A

Q32. Long-term memory stores

A. User Preferences

B. Conversation History

C. Personalization Data

D. All of the Above

✅ Answer: D

Q33. Workflow Engines like LangGraph are used to

A. Orchestrate multi-step AI workflows

B. Store PDFs

C. Replace LLMs

D. Replace APIs

✅ Answer: A

Q34. Which workflow can a Workflow Engine support?

A. Sequential

B. Parallel

C. Conditional

D. All of the Above

✅ Answer: D

Q35. Multi-Agent Systems improve

A. Scalability

B. Modularity

C. Specialization

D. All of the Above

✅ Answer: D

Q36. Why is a Harness/Evaluation layer important?

A. Check AI output quality before responding

B. Increase GPU memory

C. Replace Redis

D. Replace PostgreSQL

✅ Answer: A

Q37. Which evaluation checks whether an AI answer is supported by retrieved documents?

A. Groundedness

B. Latency

C. Bandwidth

D. Cache Hit Rate

✅ Answer: A

Q38. High-risk banking operations should include

A. Human Approval

B. Redis Cache

C. CDN

D. Video Processing

✅ Answer: A

Q39. Which production AI pipeline is correct?

A. User -> Database

B. User -> API -> Planner -> Memory -> RAG/SQL/MCP -> LLM -> Harness -> Response

C. User -> Redis

D. User -> Kafka

✅ Answer: B

Q40. Which statement best represents an Enterprise AI Solution Architect?

A. "I know ChatGPT."

B. "I know Prompt Engineering."

C. "I understand how Business Requirements, HLD, Planner Agents, Memory, RAG, Vectorless RAG, SQL Agents, MCP, Workflow Engines, LLMs, VLMs, APIs, Evaluation, Guardrails, and Human Approval work together to build production-ready Agentic AI systems."

D. "I know Python."

✅ Answer: C
"""

import re

# Format answers and strip quotes from options
formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_text, flags=re.IGNORECASE)
formatted = re.sub(r'([A-D]\.)\s+"(.*?)"', r'\1 \2', formatted)

md_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\designing_uber_ola_ride_hailing_part_1.md'

frontmatter = '''---
title: "Enterprise Agentic AI Architecture Design"
topic: "HLD"
date: "2026-07-10"
timing: "9:00 AM - 10:00 AM IST"
description: "From Traditional Software to AI Native Software: Understanding Planner Agents, Memory, RAG, and Workflow Engines."
---

# Enterprise Agentic AI Architecture Design
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 17 - Enterprise Agentic AI Architecture Design**.
Please attempt all 40 questions below. Explanations will unlock after submission.

'''

with open(md_path, 'w', encoding='utf-8') as out:
    out.write(frontmatter + '\n' + formatted)
print('Successfully wrote 40 questions for Day 17.')
