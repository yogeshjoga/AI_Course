---
title: AI Agents & Agentic Workflows
topic: AI Agents with memory
date: 2026-06-11
description: Learn about agent architectures, routing, planning, tool usage, reflection, and multi-agent collaboration frameworks.
---

# AI Agents: Architectures & Workflows

Test your understanding of modern LLM agents, tool calls, and orchestration.

---

## Question 1: What is an LLM Agent?
What distinguishes an LLM-based "Agent" from a standard LLM chat completion API call?
- [ ] A) The agent runs on faster GPUs and has lower latency.
- [ ] B) The agent uses a feedback loop, maintains state, and can autonomously choose tools, plan steps, and evaluate its progress.
- [ ] C) The agent is trained on private enterprise data rather than internet text.
- [ ] D) The agent only accepts structured JSON outputs rather than freeform text responses.

**Correct Answer:** B
**Explanation:** While standard LLMs respond directly to prompts, an "Agent" is characterized by autonomous loops where the model can call external tools, make decisions on what actions to take next, reflect on its own outputs, and adapt its execution plan until it reaches a goal.

---

## Question 2: Tool Use / Function Calling Loop
In a standard ReAct (Reason + Act) loop, how does an agent execute a tool call?
- [ ] A) The LLM directly invokes the Python function code in the client browser.
- [ ] B) The LLM outputs a structured request (like JSON or a specific text format) indicating a tool name and arguments. The orchestrating system runs the tool and sends the output back to the LLM as a new message.
- [ ] C) The database automatically detects that the LLM is running and runs the tool query.
- [ ] D) The agent halts execution and asks the user to manually type the tool result.

**Correct Answer:** B
**Explanation:** LLMs cannot execute code or access external systems themselves. In function calling, the LLM outputs "metadata" representing the intent to call a tool. The host runtime environment catches this metadata, executes the actual code (e.g., API call, DB query), and appends the result back into the chat history for the LLM to inspect.

---

## Question 3: Agentic Workflows - Reflection
What is the purpose of the "Reflection" pattern in agentic workflows?
- [ ] A) To compile the Python code into binary executable code for speed.
- [ ] B) To reverse the order of prompt tokens to check for bias.
- [ ] C) To have the LLM evaluate, critique, and refine its own output (or another model's output) before delivering the final answer to the user.
- [ ] D) To copy-paste code from StackOverflow automatically.

**Correct Answer:** C
**Explanation:** Reflection is an agentic pattern where the model is prompted to critique its own work, find errors, and correct them. For example, a code generation agent might write code, then a separate "critic" prompt reviews it for bugs, and the generator revises the code based on that feedback, leading to much higher success rates.
