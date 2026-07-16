import re
import os

docs_dir = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs'
md_filename = "python_intro_to_coding.md"
file_path = os.path.join(docs_dir, md_filename)

raw_text = """
Q1. Which statement is most accurate?

A.

Programming is remembering syntax.

B.

Programming is solving problems using logical thinking.

C.

Programming is typing fast.

D.

Programming is using ChatGPT.

✅ Answer: B

Q2. Syntax is mainly

A.

Logic

B.

Language grammar

C.

Mathematics

D.

Algorithms

✅ Answer: B

Q3. Logic is

A.

Independent of programming language

B.

Different in every language

C.

Only for Python

D.

Only for Java

✅ Answer: A

Q4. Which changes between Python and Java?

A.

Logic

B.

Problem Statement

C.

Syntax

D.

Mathematics

✅ Answer: C

Q5. Which remains the same across all programming languages?

A.

Keywords

B.

Semicolons

C.

Problem-solving logic

D.

Brackets

✅ Answer: C

Mathematics → Programming
Q6. Mathematical Equation
2 + 3 = 5

Programming mainly teaches

A.

How to express this logic in a programming language

B.

A new mathematics

C.

Database Design

D.

Networking

✅ Answer: A

Q7. Which is closest to programming?

A.

Drawing

B.

Logical Mathematics

C.

Painting

D.

Music

✅ Answer: B

Q8. Before writing code, a programmer should first

A.

Understand the problem

B.

Choose a framework

C.

Install Python

D.

Open VS Code

✅ Answer: A

Q9. Good programmers first think in

A.

Logic

B.

Syntax

C.

Frameworks

D.

Libraries

✅ Answer: A

Q10. Which formula best represents programming?

A.

Logic → Syntax → Program

B.

Syntax → Logic

C.

Framework → Logic

D.

ChatGPT → Job

✅ Answer: A

Everyday Logic
Q11. Traffic Signal represents

A.

Conditional Logic

B.

Loop

C.

Function

D.

API

✅ Answer: A

Q12. If it rains, carry an umbrella.

This represents

A.

if condition

B.

Loop

C.

Function

D.

Database

✅ Answer: A

Q13. Which everyday activity uses algorithms?

A.

Making Tea

B.

Cooking Rice

C.

Following Google Maps

D.

All of the Above

✅ Answer: D

Q14. A recipe is similar to

A.

Algorithm

B.

Database

C.

API

D.

Compiler

✅ Answer: A

Q15. Google Maps calculates the

A.

Best Route

B.

HTML

C.

CSS

D.

RAM

✅ Answer: A

Coding Mindset
Q16. Why do beginners struggle with coding?

A.

Weak syntax

B.

Weak logical thinking

C.

Slow typing

D.

Laptop speed

✅ Answer: B

Q17. Which skill improves programming the most?

A.

Problem Solving

B.

Keyboard Speed

C.

IDE Theme

D.

Internet Speed

✅ Answer: A

Q18. What does an algorithm describe?

A.

Step-by-step solution

B.

Programming language

C.

Database

D.

Framework

✅ Answer: A

Q19. Which comes first?

A.

Code

B.

Logic

C.

Compiler

D.

Framework

✅ Answer: B

Q20. AI Agents also follow

A.

Logical Decision Making

B.

Random Decisions

C.

Hardcoded Answers Only

D.

No Logic

✅ Answer: A

Language Neutral Thinking
Q21. The logic for finding the largest number is

A.

Same in Python, Java, and C++

B.

Different in every language

C.

Only possible in Python

D.

Only possible in Java

✅ Answer: A

Q22. Which is easier to learn after mastering one language?

A.

Another programming language

B.

Mathematics

C.

Operating System

D.

Networking

✅ Answer: A

Q23. Why?

A.

Logic remains the same

B.

CPU changes

C.

RAM changes

D.

Internet changes

✅ Answer: A

Q24. Which statement is TRUE?

A.

Python programmers cannot learn Java.

B.

Java programmers cannot learn C++.

C.

Logic transfers between languages.

D.

Every language requires different mathematics.

✅ Answer: C

Q25. What does a compiler/interpreter mainly expect?

A.

Correct Syntax

B.

Good Logic

C.

Database

D.

API

✅ Answer: A

AI Engineer Mindset
Q26. Planner Agents in AI mainly perform

A.

Logical Decision Making

B.

Drawing UI

C.

Managing CSS

D.

Writing HTML

✅ Answer: A

Q27. When an AI Agent decides between RAG, SQL, or MCP, it is performing

A.

Logical Routing

B.

Database Normalization

C.

Image Processing

D.

Caching

✅ Answer: A

Q28. Which statement is closest to AI Engineering?

A.

Prompt → Think → Decide → Execute

B.

Prompt → Print

C.

Prompt → Restart

D.

Prompt → Database

✅ Answer: A

Q29. A strong software engineer is someone who

A.

Memorizes every syntax

B.

Builds logical solutions and learns syntax when needed

C.

Knows only Python

D.

Knows only Java

✅ Answer: B

Q30. Which statement best represents a future AI Engineer?

A.

"I memorize every programming language."

B.

"I focus on mathematical thinking, logical reasoning, algorithms, and problem solving. Programming languages are simply tools used to express those ideas."

C.

"I only use ChatGPT to generate code."

D.

"I only learn syntax."

✅ Answer: B
"""

# Format answers and collapse massive newlines in options
formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_text, flags=re.IGNORECASE)
# The user's input has A. \n\n Something \n\n B. \n\n Something
formatted = re.sub(r'([A-D]\.)\s*\n\n(.*?)(?=\n\n[A-D]\.|\n\n\*\*Answer|\Z)', r'\1 \2', formatted, flags=re.DOTALL)

# Add standard explanation stub so parser works nicely
formatted = re.sub(r'(\*\*Answer:\*\* [A-D])', r'\1\n\nExplanation:\n\nDetailed explanation unlocked after submission.', formatted)

frontmatter = '''---
title: "Intro to Coding (Python)"
topic: "Python with FastAPI"
date: "2026-07-15"
timing: "9:00 AM - 10:00 AM IST"
description: "Before diving into Python syntax, we focus heavily on language-neutral logical thinking, algorithms, and the true mindset of an AI Engineer."
---

# Intro to Coding (Python)
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Intro to Coding (Python)**.
Please attempt all 30 questions below. Explanations will unlock after submission.

> 🌟 **Final Motivation for Students**
>
> Mathematics teaches you how to think.
> Algorithms organize your thinking.
> Programming languages simply give your thinking a voice.
> 
> **Think (Mathematics) → Logic (Algorithm) → Pseudocode → Programming Syntax → Executable Software**
> 
> ❌ Don't learn Python first. ✅ Learn how to think first.
> ❌ Don't memorize syntax. ✅ Understand the logic.
> ❌ Don't fear coding. ✅ Treat coding as writing mathematical logic.

---

'''

with open(file_path, 'w', encoding='utf-8') as out:
    out.write(frontmatter + formatted.strip())

print("Successfully wrote 30 questions for Day 19.")
