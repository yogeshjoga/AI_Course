# Caching, Message Queues, & AI Optimization

## Redis & Caching
- **Purpose:** Improve latency, reduce redundant LLM calls, and save API token costs.
- **What to Cache:** Customer sessions, recently asked questions (Cache Hits), cached product info.
- **What NOT to Cache:** Permanent data like finalized customer orders or PII tokens without expiration.
- **Cache Hit vs Miss:** A Cache Hit means data was found directly in Redis, skipping database/LLM execution.

## Message Queues (Kafka, RabbitMQ, SQS)
- **Why Queue?** To process long-running jobs or background tasks asynchronously without blocking the user response.
- **Kafka:** Best for Event Streaming (e.g., publishing business events, recommendation pipelines, AI analytics tracking).
- **RabbitMQ / SQS:** Best for Background Tasks (e.g., Invoice generation, sending emails, processing refunds).

## Token & Prompt Optimization
- **Token Optimization:** Reduces LLM cost and speeds up responses. Techniques include retrieving *only* relevant documents (filtering) and Conversation Summarization (rather than sending the whole 10,000 token chat history every time).
- **System Prompts:** Define the AI's behavior, safety guardrails, and role. They must remain hidden from the user and act as the first line of defense against Prompt Injections.
