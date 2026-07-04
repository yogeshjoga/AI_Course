# MCP and Tool Calling Quick Reference

## Model Context Protocol (MCP)
- **What is it?** MCP provides a standard way for AI models (like Claude, GPT-4) to communicate with external tools, APIs, and resources.
- **Why use it?** It prevents the need to build custom tool integrations from scratch for every new API. Standardized interfaces reduce maintenance.

## Tool Calling & Execution
- **How it works:** 
  1. User asks a question (e.g., "Book an appointment").
  2. The Planner Agent understands the intent.
  3. The Agent searches the available MCP Tools.
  4. The Agent executes the selected tool (e.g., Scheduling Tool/API).
  5. The API returns a result which the Agent formats into a response.
- **Access scope:** Through MCP, an AI agent can securely access Databases, REST APIs, CRM tools, File Systems, and more.
- **Best Practice:** The Planner Agent should decide *which* tool to call, rather than hardcoding business logic inside the application code.
