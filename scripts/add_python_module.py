import json
import os

docs_dir = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs'
sequence_file = os.path.join(docs_dir, 'sequence.json')

sessions = [
    {
        "id": "python_intro_to_coding",
        "title": "Intro to Coding (Python)",
        "desc": "Basic introduction to programming concepts and Python syntax."
    },
    {
        "id": "python_datatypes",
        "title": "Datatypes & Variables",
        "desc": "Understanding integers, strings, floats, booleans, and variable assignment."
    },
    {
        "id": "python_loops",
        "title": "Loops & Control Flow",
        "desc": "Mastering if-else statements, for loops, and while loops."
    },
    {
        "id": "python_data_structures",
        "title": "Data Structures",
        "desc": "Working with Lists, Dictionaries, Tuples, and Sets in Python."
    },
    {
        "id": "python_libs_pydantic",
        "title": "Python Libs for AI & Pydantic",
        "desc": "Essential Python libraries for AI data manipulation and data validation using Pydantic."
    },
    {
        "id": "fastapi_basics",
        "title": "FastAPI Basics",
        "desc": "Introduction to FastAPI, routing, and asynchronous web servers."
    },
    {
        "id": "fastapi_api_design",
        "title": "API Design",
        "desc": "Designing RESTful APIs, request methods, query parameters, and JSON payloads."
    },
    {
        "id": "api_testing_postman",
        "title": "API Testing with Postman",
        "desc": "Testing and documenting your FastAPI endpoints using Postman."
    },
    {
        "id": "mcp_openmcp_design",
        "title": "MCP & openMCP Design",
        "desc": "Model Context Protocol architecture, building standard tools, and integrating with openMCP."
    }
]

# 1. Create the markdown files
for i, session in enumerate(sessions):
    md_content = f"""---
title: "{session['title']}"
topic: "Python & FastAPI"
date: "2026-07-15"
timing: "9:00 AM - 10:00 AM IST"
description: "{session['desc']}"
---

# {session['title']}
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **{session['title']}**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Placeholder Question 1 for {session['title']}?

A. Option A
B. Option B
C. Option C
D. Option D

Answer:

**Answer:** A

Explanation:

Placeholder explanation.

---

Q2. Placeholder Question 2 for {session['title']}?

A. Option A
B. Option B
C. Option C
D. Option D

Answer:

**Answer:** B

Explanation:

Placeholder explanation.

---

Q3. Placeholder Question 3 for {session['title']}?

A. Option A
B. Option B
C. Option C
D. Option D

Answer:

**Answer:** C

Explanation:

Placeholder explanation.
"""
    file_path = os.path.join(docs_dir, f"{session['id']}.md")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

# 2. Update sequence.json
with open(sequence_file, 'r', encoding='utf-8') as f:
    sequence = json.load(f)

for session in sessions:
    md_filename = f"{session['id']}.md"
    if md_filename not in sequence:
        sequence.append(md_filename)

with open(sequence_file, 'w', encoding='utf-8') as f:
    json.dump(sequence, f, indent=2)

print("Created 9 new Python/FastAPI sessions and updated sequence.json.")
