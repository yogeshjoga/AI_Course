file_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\designing_uber_ola_ride_hailing_part_2.md'

new_content = """---
title: "Design Thinking & Architecture Tools"
topic: "HLD"
date: "2026-07-10"
timing: "9:00 AM - 10:00 AM IST"
description: "Mastering system design tools: dbdiagram.io for database schemas, Whimsical for fast HLD wireframing, and draw.io for detailed architectures."
---

# Design Thinking & Architecture Tools
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 18 - Design Thinking & Architecture Tools**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Which tool is specifically optimized for designing Database Schemas and exporting them as SQL scripts?

A. draw.io
B. dbdiagram.io
C. Whimsical
D. Figma

Answer:

**Answer:** B

Explanation:

dbdiagram.io allows you to quickly draw ER (Entity-Relationship) diagrams by just writing code, making it the perfect tool for database schema design.

---

Q2. Which tool is widely used by architects for rapid, collaborative wireframing and High-Level Design (HLD) flowcharting due to its speed and pre-built components?

A. Whimsical
B. PostgreSQL
C. Redis
D. Visual Studio Code

Answer:

**Answer:** A

Explanation:

Whimsical is highly regarded for its speed, offering fast, opinionated UI components that allow architects to quickly sketch out system workflows and HLDs.

---

Q3. What is draw.io (diagrams.net) primarily used for in System Design?

A. Writing backend API code
B. Creating detailed technical architectures, UML diagrams, and free-form flowcharts
C. Generating database embeddings
D. Load balancing network traffic

Answer:

**Answer:** B

Explanation:

draw.io is a versatile, free-form diagramming tool heavily used by engineers to create detailed class diagrams, UML diagrams, and complete system architecture blueprints.

"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Day 18 specifically for dbdiagram, whimsical, and draw.io.")
