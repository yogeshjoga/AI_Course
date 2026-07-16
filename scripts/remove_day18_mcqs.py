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

Welcome to **Day 18 - Design Thinking & Architecture Tools**.

> **Notice: No MCQs for this session!**
> Today's class focuses entirely on practical, hands-on design skills rather than theoretical questions. 

## Learning Resources
Please check the **Cheatsheets Library** in the Module Resources tab for your Day 18 Cheatsheet! You will learn how to visually design architectures using:
- **dbdiagram.io** for Database Schemas
- **Whimsical** for rapid wireframing and flowcharts
- **draw.io** for complex UML diagrams and structural architectures.

Take this time to practice drawing out your own High Level Designs using these tools!
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Day 18 successfully to remove MCQs.")
