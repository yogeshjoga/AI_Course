raw_text = """
Q1. What does Cardinality represent?

A. Number of APIs

B. Relationship between two database tables

C. Database Size

D. Cache Size

✅ Answer: B

Explanation:
Cardinality defines how records in one table relate to records in another table.

Q2. Which cardinality means "One User can have many Orders"?

A. 1 : 1

B. 1 : N

C. N : N

D. 0 : 0

✅ Answer: B

Q3. Which relationship exists between Customer and Order?

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: A

Q4. Which relationship exists between Student and Course?

A. 1 : 1

B. 1 : N

C. N : N

D. 0 : 1

✅ Answer: C

Q5. Many-to-Many relationships are usually implemented using

A. Cache

B. Bridge (Junction) Table

C. API

D. Redis

✅ Answer: B

Q6. Which relationship exists between Order and Order Items?

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: A

Q7. Which relationship exists between User and Profile?

A. 1 : 1

B. 1 : N

C. N : N

D. 0 : N

✅ Answer: A

Q8. Which relationship exists between Country and State?

A. 1 : N

B. N : N

C. 1 : 1

D. N : 1

✅ Answer: A

Q9. Which relationship exists between State and City?

A. 1 : N

B. N : N

C. 1 : 1

D. 0 : N

✅ Answer: A

Q10. Which relationship exists between Chat Group and Users?

A. 1 : 1

B. 1 : N

C. N : N

D. None

✅ Answer: C

Q11. What is the purpose of a Foreign Key?

A. Improve UI

B. Connect two tables

C. Increase RAM

D. Create APIs

✅ Answer: B

Q12. A Foreign Key references

A. Primary Key of another table

B. Cache Key

C. Redis

D. API

✅ Answer: A

Q13. Which key uniquely identifies every row?

A. Foreign Key

B. Primary Key

C. Composite Key

D. Unique Key

✅ Answer: B

Q14. Which table should contain the Foreign Key? User (1) Orders (Many)

A. Users

B. Orders

C. Redis

D. API

✅ Answer: B

Q15. Which is correct?
Users: id, name
Orders: id, user_id, amount
user_id is

A. Primary Key

B. Foreign Key

C. Unique Key

D. Index

✅ Answer: B

Q16. Before designing a database, what should you identify first?

A. Relationships

B. Tables

C. Entities

D. Indexes

✅ Answer: C

Q17. Which is an Entity?

A. Customer

B. Order

C. Product

D. All of the Above

✅ Answer: D

Q18. Which is an Attribute?

A. Customer Name

B. Email

C. Phone Number

D. All of the Above

✅ Answer: D

Q19. Which is NOT an Entity?

A. Customer

B. Order

C. Database Connection

D. Product

✅ Answer: C

Q20. ER Diagram mainly shows

A. Classes

B. Relationships

C. HTML

D. REST APIs

✅ Answer: B

Q21. AI Chat Application. One User -> Many Conversations. Relationship?

A. 1 : 1

B. 1 : N

C. N : N

D. 0 : 1

✅ Answer: B

Q22. One Conversation -> Many Messages. Relationship?

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: A

Q23. One AI Agent -> Many Tool Calls. Relationship?

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: A

Q24. One Tool -> Used by Multiple Agents. Relationship?

A. 1 : N

B. N : N

C. 1 : 1

D. 0 : 0

✅ Answer: B

Q25. AI Support Bot. Customer -> Support Tickets. Relationship?

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: A

Q26. Why avoid storing repeated customer names in every order?

A. Normalization

B. Caching

C. Docker

D. HTML

✅ Answer: A

Q27. Which Normal Form removes duplicate data?

A. Normalization

B. Caching

C. Sharding

D. Replication

✅ Answer: A

Q28. Which relationship requires a Junction Table?

A. Student <-> Course

B. Country <-> State

C. User <-> Profile

D. Conversation <-> Messages

✅ Answer: A

Q29. Which table is needed? Students -> Courses -> ?

A. Student_Course

B. Cache

C. Orders

D. Payments

✅ Answer: A

Q30. Best schema for WhatsApp Groups?

A. Users, Groups, Group_Members

B. Users Only

C. Groups Only

D. Redis

✅ Answer: A

Q31. Before creating APIs, an architect should design

A. ER Diagram

B. React Components

C. Dockerfile

D. CSS

✅ Answer: A

Q32. Good schema design mainly improves

A. Maintainability

B. Scalability

C. Performance

D. All of the Above

✅ Answer: D

Q33. Which relationship exists in Amazon? Customer -> Orders

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: A

Q34. Which relationship exists? Products -> Categories (Multiple Categories)

A. 1 : N

B. N : N

C. 1 : 1

D. None

✅ Answer: B

Q35. Which schema is easier to scale?

A. Normalized Schema

B. Repeated Data Everywhere

C. Single Huge Table

D. CSV File

✅ Answer: A

Q36. Good database design starts with

A. Writing SQL

B. Understanding Business Relationships

C. Creating APIs

D. Writing Code

✅ Answer: B

Q37. Schema Design belongs to

A. High-Level Design

B. Frontend

C. Networking

D. DevOps

✅ Answer: A

Q38. Why do interviewers ask ER Diagram questions?

A. To test database thinking

B. To test syntax

C. To test HTML

D. To test CSS

✅ Answer: A

Q39. Which statement is TRUE?

A. Good APIs cannot fix a bad database design.

B. Database design is optional.

C. Foreign Keys are unnecessary.

D. Relationships are not important.

✅ Answer: A

Q40. Which statement represents a Database Architect?

A. "I know SQL syntax."

B. "I know JOIN queries."

C. "I understand business entities, relationships, cardinality, normalization, keys, indexes, and schema design before writing any code."

D. "I know React."

✅ Answer: C
"""

import re

# Format answers
formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_text, flags=re.IGNORECASE)

md_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\schema_design_reference.md'

frontmatter = '''---
title: "Schema Design & Cardinality (Reference Quiz)"
topic: "Databases"
date: "2026-07-05"
timing: "Practice"
description: "Practice schema relationships, cardinality, and ER diagrams."
isReference: "true"
---

# Schema Design & Cardinality (Reference Quiz)
Class Timing: Practice Session

Welcome to the reference assessment for **Schema Design & Cardinality**.
Please attempt all 40 questions below. Explanations will unlock after submission.

'''

with open(md_path, 'w', encoding='utf-8') as out:
    out.write(frontmatter + '\n' + formatted)
print('Successfully wrote 40 questions for Schema Design Reference.')
