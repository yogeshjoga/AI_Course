---
title: "REST APIs, FastAPI, API Design & Agentic AI"
topic: "HLD"
date: "2026-06-25"
timing: "9:00 AM - 10:00 AM IST"
description: "Architectural thinking for REST APIs, WebSockets, Webhooks, FastAPI, and Agentic AI APIs."
---

# REST APIs, FastAPI, API Design & Agentic AI
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 7 - REST APIs, FastAPI, API Design & Agentic AI**.
Please attempt all questions below. Explanations will unlock after submission.

---

### Section 1 – API Fundamentals

Q1. What is an API?

A. A Database
B. A Programming Language
C. A communication bridge between two software applications
D. A Web Browser

Answer:
✅ C. A communication bridge between two software applications

Explanation:
An API (Application Programming Interface) allows one software application to communicate with another.

---

Q2. Why do we expose methods using APIs?

A. Methods cannot be called directly by external applications
B. APIs make methods public over a network
C. APIs increase RAM
D. APIs store data

Answer:
✅ B. APIs make methods public over a network

---

Q3. Consider this code: 

```java
public User getUser(long id)
```

Can a mobile application directly call this method?

A. Yes
B. No

Answer:
✅ B. No

Explanation:
Methods live inside backend applications. They become accessible only after exposing them through APIs.

---

Q4. Which architecture is correct?

A. 
```text
Mobile App
   ↓
  API
   ↓
Backend Method
```
B. 
```text
Mobile App
   ↓
Java Method
```
C. 
```text
Mobile App
   ↓
Database
```
D. 
```text
Browser -> CPU
```

Answer:
✅ A. 
```text
Mobile App
   ↓
  API
   ↓
Backend Method
```

---

### Section 2 – URI Design

Q5. Which URI follows REST best practices?

A. `/getAllUsers`
B. `/FetchUsers`
C. `/users`
D. `/doUserList`

Answer:
✅ C. `/users`

---

Q6. Which URI gets a single user?

A. `/users`
B. `/users/123`
C. `/users?id=123`
D. Both B and C are valid, but `/users/123` is the preferred REST resource style.

Answer:
✅ D. Both B and C are valid, but `/users/123` is the preferred REST resource style.

---

Q7. Which URI creates a user?

A. `GET /users`
B. `POST /users`
C. `DELETE /users`
D. `PATCH /users`

Answer:
✅ B. `POST /users`

---

### Section 3 – Path Variables

Q8. Which value is a Path Variable in `/users/123`?

A. `users`
B. `123`
C. `/`
D. `GET`

Answer:
✅ B. `123`

---

Q9. Path Variables are mainly used for:

A. Filtering
B. Sorting
C. Identifying a specific resource
D. Authentication

Answer:
✅ C. Identifying a specific resource

---

### Section 4 – Query Parameters

Q10. Which request searches users?

A. `/users/india`
B. `/users?country=India`
C. `/users=India`
D. `/India/users`

Answer:
✅ B. `/users?country=India`

---

Q11. Which request supports pagination?

A. `/users?page=1&size=20`
B. `/users/20`
C. `/20/users`
D. `/users?page`

Answer:
✅ A. `/users?page=1&size=20`

---

Q12. Query Parameters are commonly used for:

A. Filtering
B. Searching
C. Pagination
D. All of the Above

Answer:
✅ D. All of the Above

---

### Section 5 – Request Body

Q13. Which HTTP methods usually contain Request Body?

A. POST
B. PUT
C. PATCH
D. All of the Above

Answer:
✅ D. All of the Above

---

Q14. Which JSON is better?

A. 
```json
{
  "a": "John",
  "b": "India"
}
```
B. 
```json
{
  "name": "John",
  "country": "India"
}
```

Answer:
✅ B. 
```json
{
  "name": "John",
  "country": "India"
}
```

---

### Section 6 – HTTP Methods

Q15. Which method retrieves data?

A. POST
B. GET
C. DELETE
D. PATCH

Answer:
✅ B. GET

---

Q16. Which method creates data?

A. GET
B. POST
C. PATCH
D. DELETE

Answer:
✅ B. POST

---

Q17. Which method completely replaces a resource?

A. PATCH
B. PUT
C. GET
D. OPTIONS

Answer:
✅ B. PUT

---

Q18. Which method updates only a few fields?

A. PATCH
B. PUT
C. GET
D. DELETE

Answer:
✅ A. PATCH

---

Q19. Which method removes data?

A. DELETE
B. GET
C. POST
D. PATCH

Answer:
✅ A. DELETE

---

### Section 7 – FastAPI

Q20. Which decorator creates a GET API? 

```python
@app.____("/users")
```

A. `get`
B. `create`
C. `read`
D. `fetch`

Answer:
✅ A. `get`

---

Q21. Which decorator creates a POST API?

A. 
```python
@app.post
```
B. 
```python
@app.create
```
C. 
```python
@app.save
```
D. 
```python
@app.add
```

Answer:
✅ A. 
```python
@app.post
```

---

Q22. Which FastAPI decorator deletes a user?

A. 
```python
@app.delete("/users/{id}")
```
B. 
```python
@app.remove()
```
C. 
```python
@app.destroy()
```
D. 
```python
@app.erase()
```

Answer:
✅ A. 
```python
@app.delete("/users/{id}")
```

---

### Section 8 – REST Design

Q23. Which endpoint is RESTful?

A. `/createUser`
B. `/users`
C. `/getUsers`
D. `/doLogin`

Answer:
✅ B. `/users`

---

Q24. Which endpoint follows versioning?

A. `/users`
B. `/api/v1/users`
C. `/v/users`
D. `/first/users`

Answer:
✅ B. `/api/v1/users`

---

### Section 9 – WebSockets

Q25. Which application should use WebSockets?

A. WhatsApp Chat
B. Live Stock Price
C. Multiplayer Games
D. All of the Above

Answer:
✅ D. All of the Above

---

Q26. REST is:

A. Real-Time Streaming
B. Request -> Response
C. Continuous Connection
D. Binary Protocol

Answer:
✅ B. Request -> Response

---

Q27. WebSocket provides:

A. One-time request
B. Full-duplex communication
C. Database Storage
D. Authentication

Answer:
✅ B. Full-duplex communication

---

### Section 10 – Webhooks

Q28. Payment Successful notification should use:

A. REST Polling
B. Webhook
C. GraphQL
D. FTP

Answer:
✅ B. Webhook

---

Q29. GitHub automatically triggering Jenkins uses:

A. Webhook
B. WebSocket
C. REST
D. SOAP

Answer:
✅ A. Webhook

---

### Section 11 – Performance

Q30. Large payloads generally:

A. Reduce latency
B. Increase bandwidth usage
C. Improve speed
D. Reduce memory

Answer:
✅ B. Increase bandwidth usage

---

Q31. Which improves API performance?

A. Pagination
B. Caching
C. Compression
D. All of the Above

Answer:
✅ D. All of the Above

---

Q32. What is Latency?

A. Amount of RAM
B. Time taken for request to travel and return
C. Number of APIs
D. Storage Size

Answer:
✅ B. Time taken for request to travel and return

---

Q33. What is Bandwidth?

A. Number of CPUs
B. Amount of data transferred per second
C. Storage Capacity
D. API Count

Answer:
✅ B. Amount of data transferred per second

---

### Section 12 – AI Agent APIs

Q34. An AI Agent books flights using:

A. Local Variables
B. Flight APIs
C. CSS
D. HTML

Answer:
✅ B. Flight APIs

---

Q35. AI Agent sends emails using:

A. Email API
B. GPU
C. RAM
D. Browser

Answer:
✅ A. Email API

---

Q36. AI Agent remembers previous conversations using:

A. Memory Store
B. Keyboard
C. Browser Cache Only
D. GPU Fan

Answer:
✅ A. Memory Store

---

Q37. Which API type is best for streaming LLM tokens?

A. REST
B. SOAP
C. WebSocket
D. FTP

Answer:
✅ C. WebSocket

---

Q38. Which API is ideal for CRUD operations?

A. REST
B. WebSocket
C. Webhook
D. MQTT

Answer:
✅ A. REST

---

Q39. Which statement is most architect-like?

A. I know GET and POST.
B. I know FastAPI syntax.
C. I know how to design APIs that are scalable, versioned, secure, and easy to consume.
D. I know Python.

Answer:
✅ C. I know how to design APIs that are scalable, versioned, secure, and easy to consume.

---

Q40. A company asks you to design an API for 100 million users. What should you think about before writing code?

A. URI Design
B. Pagination
C. Authentication
D. Payload Size
E. Versioning
F. Performance & Scalability
G. All of the Above

Answer:
✅ G. All of the Above

Explanation:
A professional API designer doesn't just write endpoints. They think about:
- Resource-oriented URI design
- Correct HTTP methods
- Path variables vs query parameters
- Request/response payloads
- Versioning (/api/v1)
- Authentication and authorization
- Pagination for large datasets
- Latency and bandwidth optimization
- Scalability and maintainability

### Professional API Designer Checklist (Memory Aid)
Before exposing any backend method as an API, ask:
✅ What is the resource? (users, orders, products)
✅ Which HTTP method fits? (GET, POST, PUT, PATCH, DELETE)
✅ Do I need a path variable?
✅ Do I need query parameters?
✅ Is a request body required?
✅ Is the response meaningful and consistent?
✅ Should I paginate the results?
✅ Is the endpoint versioned (/api/v1)?
✅ Is it secure?
✅ Will it still perform well with 10 million users?

If your students consistently answer these questions before writing an API, they'll begin thinking like API architects, not just API consumers.
