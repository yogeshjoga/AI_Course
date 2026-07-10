import json
import os

docs_dir = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs'
sequence_file = os.path.join(docs_dir, 'sequence.json')

md_filename = "ai_eco_systems_overview.md"

md_content = """---
title: "AI Eco-Systems: Claude, ChatGPT & Gemini"
topic: "AI Eco-Systems"
date: "2026-08-15"
timing: "9:00 AM - 10:00 AM IST"
description: "Exploring the differences, strengths, and ecosystem integrations of Claude, ChatGPT, and Gemini."
---

# AI Eco-Systems: Claude, ChatGPT & Gemini
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **AI Eco-Systems**.
*Questions for this session are coming soon!*

---

Q1. Which of these is a major AI ecosystem?

A. Claude
B. ChatGPT
C. Gemini
D. All of the above

Answer:

**Answer:** D

Explanation:

Coming soon!
"""

# Write MD file
file_path = os.path.join(docs_dir, md_filename)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(md_content)

# Update sequence
with open(sequence_file, 'r', encoding='utf-8') as f:
    sequence = json.load(f)

if md_filename not in sequence:
    sequence.append(md_filename)

with open(sequence_file, 'w', encoding='utf-8') as f:
    json.dump(sequence, f, indent=2)

print("Created AI Eco-Systems placeholder and updated sequence.json.")
