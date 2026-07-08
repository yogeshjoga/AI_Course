file_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\designing_uber_ola_ride_hailing_part_2.md'

new_content = """---
title: "Design Thinking & Design IDE Tools"
topic: "HLD"
date: "2026-07-10"
timing: "9:00 AM - 10:00 AM IST"
description: "Understanding user-centric design thinking, UI/UX prototyping tools like Figma, and modern IDE workflows."
---

# Design Thinking & Design IDE Tools
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 18 - Design Thinking & Design IDE Tools**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the primary purpose of Design Thinking in software development?

A. Writing faster code
B. Understanding user needs and defining the problem
C. Setting up CI/CD pipelines
D. Managing databases

Answer:

**Answer:** B

Explanation:

Design Thinking is a human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and the requirements for business success.

---

Q2. Which tool is widely used by UI/UX designers to create mockups, wireframes, and prototypes?

A. Figma
B. PostgreSQL
C. Redis
D. Kubernetes

Answer:

**Answer:** A

Explanation:

Figma is a collaborative web application for interface design, widely used for prototyping and creating UI/UX workflows.

---

Q3. What is an IDE (Integrated Development Environment) primarily used for?

A. Graphic Design
B. Writing, debugging, and compiling source code
C. Video editing
D. Load balancing

Answer:

**Answer:** B

Explanation:

An IDE provides comprehensive facilities to computer programmers for software development, typically consisting of a source code editor, build automation tools, and a debugger.

"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Day 18 successfully.")
