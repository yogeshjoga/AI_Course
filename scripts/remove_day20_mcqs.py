file_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\python_ide_env_setup.md'

new_content = """---
title: "Coding IDE & Env Setup (UV Package Management)"
topic: "Python with FastAPI"
date: "2026-07-15"
timing: "9:00 AM - 10:00 AM IST"
description: "Setting up a professional Python coding environment using modern IDEs, LM Studio, essential Python libraries, and managing dependencies at lightning speed with the UV package manager."
---

# Coding IDE & Env Setup
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to **Day 20 - Coding IDE & Env Setup**.

> **Notice: No MCQs for this session!**
> This session is heavily hands-on. Please follow along with the instructor to properly configure your development environment.

## Today's Setup Checklist:
1. **IDEs**: Installing and configuring VS Code with Python extensions.
2. **LM Studio**: Setting up local Language Models for offline inference and API mocking.
3. **Python Libraries**: Installing essential initial libraries for AI and data validation.
4. **UV Package Management**: Replacing traditional `pip` with `uv` for lightning-fast environment creation and dependency resolution.

Make sure your environment is fully working before moving on to tomorrow's coding lessons!
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Day 20 successfully to remove MCQs.")
