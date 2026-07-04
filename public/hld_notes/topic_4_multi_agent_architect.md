# Multi-Agent Systems & Production Architecture

## Multi-Agent Systems
- **Why Multiple Agents?** It separates responsibilities, makes the system more scalable, and reduces context confusion for the LLM. 
- **Roles:** 
  - *Planner Agent:* Receives the user request, breaks down the workflow, and orchestrates other tools/agents.
  - *SQL Agent:* Generates SQL queries for databases.
  - *RAG Agent:* Searches PDFs and Vector DBs.
  - *Invoice/Tool Agents:* Handle specific business logic.

## Production Architect Thinking
- **Human-in-the-Loop:** ALWAYS require human verification for high-risk actions (e.g., deleting a customer account, processing large refunds).
- **Monitoring & Security:** Every AI action should be logged. The most important metrics to track are Token Usage, Tool Success Rate, and Response Latency.
- **The AI Engineer Decision Tree:**
  - Need Business Data? -> **PostgreSQL**
  - Need Fast Access? -> **Redis**
  - Need Company Docs? -> **RAG + Vector DB**
  - Need External Action? -> **MCP Tool**
  - Need Long Running Task? -> **RabbitMQ**
  - Need Event Streaming? -> **Kafka**
  - Need Intelligence? -> **LLM**
  - Need Enterprise AI? -> **Combine Everything**
