---
title: Python Structures & Lists
topic: Python
date: 2026-06-14
description: Test your comprehension of Python built-in data types, list comprehensions, and generators.
---

Day 5 - Python Structures & Lists
Instructions
- Total Questions: 3
- Review explanations after attempting

---

Q1. What is the output of the following list comprehension: `[x**2 for x in range(4) if x % 2 == 0]`?

A. [0, 4]
B. [0, 1, 4, 9]
C. [1, 9]
D. [0, 16]

Answer:

✅ A. [0, 4]

Explanation:

The range contains [0, 1, 2, 3]. Only 0 and 2 are even. Squaring them yields [0, 4].

---

Q2. What is the primary difference between a list and a generator in Python?

A. List has no length limits
B. List stores elements in memory; Generator yields elements dynamically and has lower memory footprints
C. Generator is written in C only
D. List can only store strings

Answer:

✅ B. List stores elements in memory; Generator yields elements dynamically and has lower memory footprints

Explanation:

Generators compute values on-the-fly (lazy evaluation) using the `yield` keyword, making them highly memory-efficient for large data streams.

---

Q3. Which Python dictionary method is safest to retrieve a value without throwing a KeyError if the key is missing?

A. dict[key]
B. dict.get(key, default)
C. dict.pop(key)
D. dict.find(key)

Answer:

✅ B. dict.get(key, default)

Explanation:

The `get()` method returns `None` or the specified default value if the key does not exist, whereas bracket notation `dict[key]` raises a `KeyError`.
