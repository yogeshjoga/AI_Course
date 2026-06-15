---
title: "Day 15 - Designing WhatsApp: Part 1"
topic: "HLD"
date: "2026-07-03"
timing: "9:00 AM - 10:00 AM IST"
description: "Designing high-level real-time messaging architecture, user presence, and connection flows."
---

# Day 15 - Designing WhatsApp: Part 1
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 15 - Designing WhatsApp: Part 1**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Which protocol is best suited to maintain the persistent bidirectional connection required for real-time chat?

A. HTTP GET polling
B. WebSockets
C. REST PUT method
D. DNS lookup

Answer:

✅ B. WebSockets

Explanation:

WebSockets maintain a long-lived connection, allowing the chat server to push messages instantly to clients.

---

Q2. How should the "User Presence" (Online/Offline status) service track connection states dynamically at scale?

A. Writing heartbeat timestamps to SQL database on every user movement.
B. Keeping heartbeat/connection status in memory (like Redis) and updating it on websocket close/open.
C. Querying CDN edges.
D. Asking other users to check IP availability.

Answer:

✅ B. Keeping heartbeat/connection status in memory (like Redis) and updating it on websocket close/open.

Explanation:

Using Redis allows user heartbeat updates every few seconds with very low latency and memory footprints.

---

Q3. What is the role of a Chat Gateway service?

A. To transcode media files.
B. To manage client WebSocket connections and route incoming/outgoing events.
C. To store historical message records.
D. To coordinate database partition rebalancing.

Answer:

✅ B. To manage client WebSocket connections and route incoming/outgoing events.

Explanation:

Chat gateways terminate WebSocket connections, keeping track of active user connection channels.

