import json
import re
import os

log_path = r'C:\Users\yogeshjoga\.gemini\antigravity\brain\8fcd1de6-4a4b-4cad-a718-bb3ab46abbdb\.system_generated\logs\transcript.jsonl'
with open(log_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

user_requests = []
for line in lines:
    try:
        step = json.loads(line)
        if step.get('type') == 'USER_INPUT':
            user_requests.append(step.get('content', ''))
    except:
        pass

last_req = user_requests[-1] if user_requests else ''

# Clean up any XML tags or extra text if necessary
if '<USER_REQUEST>' in last_req:
    last_req = last_req.split('<USER_REQUEST>')[1].split('</USER_REQUEST>')[0]

# Extract everything from 'Q1.' to the end
match = re.search(r'(Q1\..*)', last_req, re.DOTALL)
if match:
    raw_qs = match.group(1)
    
    # Clean up the end in case the user prompt included extra text at the end
    end_text = "add all 60 question into the day 10 mcqs"
    if end_text in raw_qs:
        raw_qs = raw_qs.split(end_text)[0].strip()
        
    # Replace "✅ Answer: B" with "**Answer:** B"
    formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_qs, flags=re.IGNORECASE)
    
    # Replace "Explanation:" with "**Explanation:**"
    formatted = re.sub(r'\bExplanation:', r'**Explanation:**', formatted)
    
    # Ensure options A, B, C, D are separated by newlines
    # (The markdown parser in quizParser.js usually expects clean newlines)
    
    # Write to the markdown file
    md_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\schema_design_sql_databases.md'
    
    frontmatter = '''---
title: "Schema Design & SQL Databases"
topic: "Databases"
date: "2026-06-24"
timing: "9:00 AM - 10:00 AM IST"
description: "Introduction to schema, ACID compliance, SQL databases, and PostgreSQL."
---

# Schema Design & SQL Databases
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 10 - Schema Design & SQL Databases**.
Please attempt all questions below. Explanations will unlock after submission.

'''
    
    with open(md_path, 'w', encoding='utf-8') as out:
        out.write(frontmatter + '\n' + formatted)
    print('Successfully wrote 60 questions.')
else:
    print('Could not find questions in the transcript.')
