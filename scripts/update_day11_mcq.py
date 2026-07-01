raw_text = """
Q1. Why do modern applications use Cache?

A. To increase monitor resolution

B. To reduce database load and improve response time

C. To increase storage

D. To replace APIs

✅ Answer: B

Explanation:
Cache stores frequently accessed data in memory, reducing database queries and making applications much faster.

Q2. What is Cache?

A. Permanent Storage

B. Temporary High-Speed Storage

C. Programming Language

D. Database Table

✅ Answer: B

Explanation:
Cache stores frequently used data temporarily in RAM for faster access.

Q3. Which storage is fastest?

A. HDD

B. SSD

C. RAM (Cache)

D. Tape Drive

✅ Answer: C

Explanation:
Redis and Memcached store data in RAM, making them significantly faster than disk-based storage.

Q4. Which statement best describes Cache?

A. Stores every application record permanently

B. Stores frequently accessed data temporarily

C. Replaces databases completely

D. Stores only images

✅ Answer: B

Explanation:
Cache improves performance but is not a replacement for permanent storage.

Q5. Which applications commonly use Cache?

A. Instagram

B. YouTube

C. Amazon

D. All of the Above

✅ Answer: D

Explanation:
Nearly every large-scale application uses caching.

Q6. Which storage should contain permanent business data?

A. Redis

B. Memcached

C. PostgreSQL

D. Browser Cache

✅ Answer: C

Explanation:
Databases permanently store business data.

Q7. Which storage provides the fastest read performance?

A. MySQL

B. PostgreSQL

C. Redis

D. MongoDB

✅ Answer: C

Explanation:
Redis stores data in RAM.

Q8. Which statement is TRUE?

A. Cache is slower than Database

B. Cache is faster because it stores data in memory

C. Database always responds faster

D. Cache stores unlimited data

✅ Answer: B

Explanation:
Cache stores data in memory.

Q9. Cache is mainly used for

A. Frequently accessed data

B. Archived data

C. Backup storage

D. Log files

✅ Answer: A

Explanation:
Frequently accessed data is cached to improve performance.

Q10. Which analogy best represents Cache?

A. Warehouse

B. Kitchen Shelf

C. Airport

D. Railway Station

✅ Answer: B

Explanation:
Frequently used items are kept on the kitchen shelf, while the warehouse stores everything.

Q11. Redis stands for

A. Remote Disk Server

B. Remote Dictionary Server

C. Real Distributed Storage

D. Reliable Data Service

✅ Answer: B

Explanation:
Remote Dictionary Server.

Q12. Redis primarily stores data in

A. Hard Disk

B. SSD

C. RAM

D. GPU

✅ Answer: C

Explanation:
Redis stores data in RAM.

Q13. Which feature makes Redis extremely fast?

A. Java

B. RAM Storage

C. SSD

D. Docker

✅ Answer: B

Explanation:
RAM Storage makes Redis extremely fast.

Q14. Which data structure is NOT supported by Redis?

A. Strings

B. Lists

C. Sets

D. SQL Tables

✅ Answer: D

Explanation:
Redis supports in-memory data structures, not relational tables.

Q15. Which is a common Redis use case?

A. User Session Storage

B. OTP Storage

C. API Response Cache

D. All of the Above

✅ Answer: D

Explanation:
Redis is used for all these cases.

Q16. What is Memcached mainly used for?

A. Permanent Storage

B. Simple Key-Value Caching

C. Video Streaming

D. SQL Queries

✅ Answer: B

Explanation:
Memcached is a simple key-value store.

Q17. Compared to Redis, Memcached

A. Supports fewer features

B. Supports more data structures

C. Is a relational database

D. Stores data on disk

✅ Answer: A

Explanation:
Memcached is simpler than Redis.

Q18. Which statement is TRUE?

A. Redis replaces PostgreSQL

B. Memcached replaces APIs

C. Redis offers richer functionality than Memcached

D. Memcached supports SQL JOINs

✅ Answer: C

Explanation:
Redis supports more advanced data structures than Memcached.

Q19. What happens during a Cache Hit?

A. Data is fetched directly from the database

B. Requested data is found in Cache and returned immediately

C. API crashes

D. Cache is deleted

✅ Answer: B

Explanation:
A cache hit avoids a database query.

Q20. What happens during a Cache Miss?

A. Cache immediately returns data

B. Database is queried, data is loaded into Cache, then returned

C. Application shuts down

D. API returns an error

✅ Answer: B

Explanation:
The application first fetches data from the database, stores it in the cache, and serves it to the user.

Q21. Why do Cache Eviction Policies exist?

A. To increase CPU speed

B. Cache memory is limited, so old data must be removed

C. To improve internet speed

D. To replace the database

✅ Answer: B

Explanation:
Cache has limited RAM. When it becomes full, it must remove some data to make room for new entries.

Q22. What does LRU stand for?

A. Last Recently Updated

B. Least Recently Used

C. Lowest RAM Usage

D. Large Redis Unit

✅ Answer: B

Explanation:
LRU removes the data that has not been accessed for the longest time.

Q23. Which eviction policy removes the least frequently accessed data?

A. FIFO

B. LRU

C. LFU

D. TTL

✅ Answer: C

Explanation:
LFU (Least Frequently Used) removes items that are rarely accessed.

Q24. Which eviction policy removes the oldest inserted item first?

A. LRU

B. LFU

C. FIFO

D. TTL

✅ Answer: C

Explanation:
FIFO (First In, First Out) removes entries in the order they were added.

Q25. TTL stands for

A. Total Time Load

B. Time To Live

C. Transfer Time Limit

D. Temporary Token Length

✅ Answer: B

Explanation:
TTL defines how long a cached item remains before expiring automatically.

Q26. Which data is best suited for TTL?

A. Aadhaar Number

B. OTP

C. Employee ID

D. Customer Name

✅ Answer: B

Explanation:
OTPs expire after a fixed duration, making TTL the ideal strategy.

Q27. Which eviction policy is most suitable for browser history?

A. FIFO

B. LRU

C. LFU

D. Random

✅ Answer: B

Explanation:
Recently visited pages are more likely to be revisited than old ones.

Q28. Which eviction policy is best for YouTube Trending Videos?

A. FIFO

B. LFU

C. LRU

D. None

✅ Answer: B

Explanation:
Popular videos are accessed frequently, so LFU helps keep them in cache.

Q29. Which cache strategy is most commonly used?

A. Cache Aside

B. Write Around

C. Write Through

D. Write Back

✅ Answer: A

Explanation:
Applications first check Redis. If data is missing, they query the database and populate the cache.

Q30. Cache Aside Flow is

A. Request -> Database -> Cache

B. Request -> Redis -> Cache Hit? -> Yes -> Response -> No -> Database -> Redis -> Response

C. Request -> Kafka

D. Request -> RabbitMQ

✅ Answer: B

Explanation:
This is the cache aside flow.

Q31. What happens in Write Through caching?

A. Data is written only to Redis

B. Data is written to Redis and Database simultaneously

C. Database is ignored

D. Cache is cleared

✅ Answer: B

Explanation:
Write Through keeps cache and database synchronized.

Q32. Which cache strategy provides the fastest writes but has a higher risk if cache is lost?

A. Cache Aside

B. Write Through

C. Write Back

D. FIFO

✅ Answer: C

Explanation:
Write Back updates the cache immediately and writes to the database later.

Q33. Which cache strategy offers the highest consistency?

A. Write Through

B. Write Back

C. FIFO

D. LRU

✅ Answer: A

Explanation:
Write Through provides highest consistency.

Q34. Why do Message Queues exist?

A. To increase RAM

B. To process long-running tasks asynchronously

C. To replace APIs

D. To increase database size

✅ Answer: B

Explanation:
Message queues allow slow tasks to execute in the background without blocking users.

Q35. Which of the following is a real-world example of a Message Queue?

A. ATM Queue

B. Airport Check-in Queue

C. Restaurant Waiting Queue

D. All of the Above

✅ Answer: D

Explanation:
Software message queues work similarly by processing tasks in order.

Q36. Which task is ideal for a Message Queue?

A. Sending Email

B. PDF Generation

C. Image Processing

D. All of the Above

✅ Answer: D

Explanation:
All are ideal for a message queue.

Q37. Without a Message Queue, uploading a large video would

A. Become asynchronous

B. Force the user to wait until processing completes

C. Improve performance

D. Reduce latency

✅ Answer: B

Explanation:
Without a queue, the API waits for compression, thumbnail generation, virus scanning, and other tasks.

Q38. Kafka is primarily designed for

A. SQL Queries

B. High-throughput Event Streaming

C. Image Storage

D. Authentication

✅ Answer: B

Explanation:
Kafka is built for handling millions of events with high throughput.

Q39. Kafka Architecture follows

A. Producer -> Topic -> Consumer

B. Producer -> Database -> Browser

C. Producer -> GPU

D. Producer -> Redis

✅ Answer: A

Explanation:
Producers publish events to Topics, and Consumers read those events.

Q40. Which applications commonly use Kafka?

A. Event Streaming

B. Activity Logs

C. Analytics Pipelines

D. All of the Above

✅ Answer: D

Explanation:
Kafka is widely used for large-scale event streaming, analytics, logging, clickstream processing, and real-time data pipelines.

Q41. RabbitMQ is primarily designed for

A. Streaming Videos

B. Reliable Task Queue Processing

C. Database Storage

D. Image Compression

✅ Answer: B

Explanation:
RabbitMQ is ideal for processing background jobs, emails, invoices, and task queues.

Q42. Which applications commonly use RabbitMQ?

A. Email Service

B. Payment Processing

C. Background Jobs

D. All of the Above

✅ Answer: D

Explanation:
All of the above.

Q43. RabbitMQ is best suited for

A. Continuous Event Streaming

B. One-time Task Processing

C. Database Replication

D. GPU Scheduling

✅ Answer: B

Explanation:
RabbitMQ is optimized for task queues where each message is processed once.

Q44. Which statement is TRUE?

A. Kafka replaces RabbitMQ

B. RabbitMQ replaces Database

C. RabbitMQ is ideal for reliable background task execution

D. Redis replaces RabbitMQ

✅ Answer: C

Explanation:
RabbitMQ is ideal for background tasks.

Q45. Amazon SQS is

A. Relational Database

B. Cloud Message Queue Service

C. Cache Server

D. API Gateway

✅ Answer: B

Explanation:
Amazon SQS (Simple Queue Service) is AWS's managed message queue.

Q46. Which cloud provider offers Amazon SQS?

A. Microsoft

B. Google

C. AWS

D. Oracle

✅ Answer: C

Explanation:
AWS provides SQS.

Q47. Which is a major advantage of Amazon SQS?

A. No infrastructure management

B. Automatic scalability

C. High availability

D. All of the Above

✅ Answer: D

Explanation:
All of the above.

Q48. What does Pub/Sub stand for?

A. Publish / Subscribe

B. Public / Server

C. Program / Submit

D. Push / Storage

✅ Answer: A

Explanation:
Publish / Subscribe.

Q49. In Pub/Sub architecture, the Publisher

A. Knows all Subscribers

B. Sends messages directly to one Consumer

C. Publishes events without knowing subscribers

D. Writes SQL Queries

✅ Answer: C

Explanation:
Publishers do not know their subscribers.

Q50. Which example best represents Pub/Sub?

A. Teacher announcing results to an entire class

B. Bank Cash Counter

C. Restaurant Queue

D. Elevator

✅ Answer: A

Explanation:
One publisher broadcasts information to many subscribers.

Q51. Which application commonly uses Pub/Sub?

A. Live Notifications

B. News Alerts

C. Weather Updates

D. All of the Above

✅ Answer: D

Explanation:
All use Pub/Sub.

Q52. Why does an AI Agent use Redis Cache?

A. Store Conversation Memory

B. Cache Prompt Responses

C. Store Tool Results

D. All of the Above

✅ Answer: D

Explanation:
All are valid caching uses.

Q53. Which information is NOT typically stored in Redis?

A. Session Tokens

B. Frequently Asked Questions

C. Permanent Financial Records

D. Prompt Cache

✅ Answer: C

Explanation:
Permanent business records belong in databases, not cache.

Q54. Why would an AI Agent publish events to Kafka?

A. Notify other services

B. Log Tool Executions

C. Trigger Analytics

D. All of the Above

✅ Answer: D

Explanation:
All of the above.

Q55. An AI Agent generates a PDF report that takes 20 seconds. Which technology should process this task?

A. Redis

B. RabbitMQ

C. Browser

D. CSS

✅ Answer: B

Explanation:
RabbitMQ is ideal for background tasks.

Q56. An AI Agent performs these steps: Search Documents, Call LLM, Generate Report, Send Email. Which steps are best executed asynchronously?

A. Report Generation

B. Email Sending

C. Indexing Documents

D. All of the Above

✅ Answer: D

Explanation:
All are good candidates for asynchronous execution.

Q57. Two AI Agents need to exchange events without directly calling each other. Which architecture is best?

A. Database

B. Pub/Sub

C. CSS

D. REST Only

✅ Answer: B

Explanation:
Pub/Sub enables loosely coupled communication where agents publish and subscribe to events.

Q58. In a Multi-Agent System, Kafka is commonly used for

A. Event Streaming

B. Agent Coordination

C. Workflow Events

D. All of the Above

✅ Answer: D

Explanation:
All are common uses for Kafka in MAS.

Q59. Which architecture best represents a scalable Agentic AI system?

A. User -> Database -> LLM

B. User -> API Gateway -> Planner Agent -> Redis Cache -> LLM -> Kafka -> Workers -> Database

C. User -> Frontend

D. User -> GPU

✅ Answer: B

Explanation:
Modern Agentic AI systems combine API gateways, planners, caches, message queues, workers, LLMs, and databases for scalability and resilience.

Q60. Which statement best represents an AI System Architect's mindset?

A. "I'll send every request directly to the database."

B. "Every task should be synchronous."

C. "I choose the right combination of Database, Cache, Queue, and Event Streaming based on scalability, latency, reliability, and business requirements."

D. "Redis can replace every other technology."

✅ Answer: C

Explanation:
An architect selects technologies based on the system's needs.
"""

import re

formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_text, flags=re.IGNORECASE)
formatted = re.sub(r'\bExplanation:', r'**Explanation:**', formatted)

md_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\cache_systems_messaging_baselines.md'

frontmatter = '''---
title: "Cache Systems & Messaging Baselines"
topic: "Databases"
date: "2026-06-25"
timing: "9:00 AM - 10:00 AM IST"
description: "Deep dive into caching with Redis and message queue systems like Kafka."
---

# Cache Systems & Messaging Baselines
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 11 - Cache Systems & Messaging Baselines**.
Please attempt all questions below. Explanations will unlock after submission.

'''

with open(md_path, 'w', encoding='utf-8') as out:
    out.write(frontmatter + '\n' + formatted)
print('Successfully wrote 60 questions for Day 11.')
