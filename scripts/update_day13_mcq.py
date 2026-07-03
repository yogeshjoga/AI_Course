raw_text = """
Q1. WhatsApp is primarily a

A. Database

B. Real-time Messaging Application

C. Web Browser

D. Search Engine

✅ Answer: B

Explanation:
WhatsApp is a real-time communication platform.

Q2. Which communication model does WhatsApp mainly use?

A. Batch Processing

B. Real-time Messaging

C. FTP

D. Offline Sync

✅ Answer: B

Q3. Which protocol enables real-time communication?

A. HTTP Polling Only

B. WebSocket

C. SMTP

D. FTP

✅ Answer: B

Q4. Which feature is NOT part of WhatsApp?

A. Text Messaging

B. Voice Calls

C. Video Calls

D. SQL Query Builder

✅ Answer: D

Q5. Which component receives a user's message first?

A. Database

B. API Gateway

C. Redis

D. Kafka

✅ Answer: B

Q6. Before designing WhatsApp HLD, what should you identify first?

A. Database

B. Business Requirements

C. Redis

D. Docker

✅ Answer: B

Q7. Which is a Functional Requirement?

A. Send Messages

B. 100ms Latency

C. 99.99% Availability

D. Scalability

✅ Answer: A

Q8. Which is a Non-Functional Requirement?

A. Send Image

B. Send Sticker

C. High Availability

D. Delete Chat

✅ Answer: C

Q9. Which HLD step comes before APIs?

A. BOE

B. Docker

C. Redis

D. Kubernetes

✅ Answer: A

Q10. BOE helps estimate

A. Logo Design

B. Traffic & Infrastructure

C. UI

D. CSS

✅ Answer: B

Q11. DAU stands for

A. Daily Active Users

B. Daily API Usage

C. Database Access Unit

D. Data API User

✅ Answer: A

Q12. Formula for RPS?

A. Requests / 86400

B. Users × Cache

C. Storage × Users

D. API × DB

✅ Answer: A

Q13. Which metric determines server capacity?

A. RPS

B. HTML

C. CSS

D. Docker

✅ Answer: A

Q14. Which calculation estimates storage?

A. Records × Record Size

B. RPS × Users

C. Cache × API

D. Queue × Topics

✅ Answer: A

Q15. WhatsApp primarily stores

A. Messages

B. Conversations

C. Media

D. All of the Above

✅ Answer: D

Q16. Which table stores users?

A. users

B. chats

C. messages

D. media

✅ Answer: A

Q17. Which table stores conversations?

A. users

B. conversations

C. media

D. cache

✅ Answer: B

Q18. Which table stores individual messages?

A. users

B. messages

C. groups

D. API

✅ Answer: B

Q19. Which relationship exists? Conversation -> Messages

A. 1:1

B. 1:N

C. M:N

D. None

✅ Answer: B

Q20. Message table should contain

A. sender_id

B. receiver_id

C. message

D. All of the Above

✅ Answer: D

Q21. Which API sends messages?

A. GET /messages

B. POST /messages

C. DELETE /messages

D. PATCH /messages

✅ Answer: B

Q22. Which API retrieves chat history?

A. GET /messages

B. POST /messages

C. DELETE /messages

D. PATCH /messages

✅ Answer: A

Q23. Which API deletes a message?

A. DELETE /messages/{id}

B. POST /messages

C. GET /messages

D. PATCH /messages

✅ Answer: A

Q24. Which API uploads media?

A. POST /media

B. GET /media

C. DELETE /media

D. PATCH /media

✅ Answer: A

Q25. Which HTTP method updates a profile?

A. PATCH

B. GET

C. DELETE

D. OPTIONS

✅ Answer: A

Q26. Which data is best suited for Redis?

A. Frequently opened chats

B. User Sessions

C. Online Status

D. All of the Above

✅ Answer: D

Q27. Why cache chat history?

A. Faster Response

B. Reduce Database Load

C. Better User Experience

D. All of the Above

✅ Answer: D

Q28. Which storage is temporary?

A. PostgreSQL

B. Redis

C. MySQL

D. Oracle

✅ Answer: B

Q29. Cache mainly improves

A. Latency

B. CPU Clock

C. HTML

D. CSS

✅ Answer: A

Q30. Cache stores

A. Frequently Accessed Data

B. Permanent Data

C. Images Only

D. Logs

✅ Answer: A

Q31. Which technology is best for processing media uploads?

A. Kafka

B. RabbitMQ

C. SQS

D. All of the Above

✅ Answer: D

Q32. Why use Message Queues?

A. Async Processing

B. Better Scalability

C. Background Jobs

D. All of the Above

✅ Answer: D

Q33. Which task should be asynchronous?

A. Image Compression

B. Video Encoding

C. Notification

D. All of the Above

✅ Answer: D

Q34. Kafka mainly handles

A. Event Streaming

B. SQL

C. HTML

D. CSS

✅ Answer: A

Q35. RabbitMQ mainly handles

A. Background Tasks

B. CSS

C. Browser

D. Database

✅ Answer: A

Q36. AI Support Agent should

A. Understand User Intent

B. Search Knowledge Base

C. Generate Response

D. All of the Above

✅ Answer: D

Q37. AI Order Tracking Agent needs

A. Order Database

B. Logistics API

C. LLM

D. All of the Above

✅ Answer: D

Q38. AI Group Moderator should

A. Detect Spam

B. Remove Offensive Messages

C. Welcome New Members

D. All of the Above

✅ Answer: D

Q39. Which component decides which AI Agent should handle the request?

A. Planner Agent

B. Database

C. Redis

D. Browser

✅ Answer: A

Q40. Which statement represents an AI Solution Architect?

A. "I know WhatsApp APIs."

B. "I know PostgreSQL."

C. "I understand how APIs, Databases, Cache, Queues, LLMs, Planner Agents, Memory, and Business Logic work together to build a scalable WhatsApp AI platform."

D. "I know React."

✅ Answer: C
"""

import re

# Format answers
formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_text, flags=re.IGNORECASE)

md_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\designing_whatsapp_part_1.md'

frontmatter = '''---
title: "WhatsApp HLD + AI Agents"
topic: "HLD"
date: "2026-07-03"
timing: "9:00 AM - 10:00 AM IST"
description: "Designing high-level real-time messaging architecture, user presence, and AI integrations."
---

# WhatsApp HLD + AI Agents
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 13 - WhatsApp HLD + AI Agents**.
Please attempt all questions below. Explanations will unlock after submission.

'''

with open(md_path, 'w', encoding='utf-8') as out:
    out.write(frontmatter + '\n' + formatted)
print('Successfully wrote 40 questions for Day 13.')
