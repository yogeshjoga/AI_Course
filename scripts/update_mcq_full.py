raw_text = """
Q1. What is the primary purpose of a database?

A. Write frontend code

B. Store, organize, and retrieve data efficiently

C. Increase CPU speed

D. Design APIs

✅ Answer: B

Explanation:
A database stores data in a structured format so applications can efficiently create, read, update, and delete information.

Q2. What does RDBMS stand for?

A. Remote Database Management System

B. Relational Database Management System

C. Real Database Memory System

D. Reliable Data Management Service

✅ Answer: B

Explanation:
An RDBMS stores data in tables and manages relationships between them.

Q3. Which of the following is an RDBMS?

A. PostgreSQL

B. MySQL

C. Oracle

D. All of the Above

✅ Answer: D

Explanation:
PostgreSQL, MySQL, and Oracle are all relational database management systems.

Q4. What is a Database Schema?

A. A frontend design

B. The structure of tables, relationships, and constraints

C. A programming language

D. An API specification

✅ Answer: B

Explanation:
A schema defines how data is organized inside a database.

Q5. What is the first step in designing a database?

A. Write SQL queries

B. Understand the business requirements

C. Create indexes

D. Write APIs

✅ Answer: B

Explanation:
Good schema design always starts with understanding the business problem.

Q6. What is an Entity?

A. A CSS file

B. A real-world object stored in the database

C. An API endpoint

D. A Java class only

✅ Answer: B

Explanation:
Examples include Student, User, Product, Order, and Customer.

Q7. Which of the following is an Entity in an E-Commerce application?

A. Product

B. Customer

C. Order

D. All of the Above

✅ Answer: D

Explanation:
Each represents a real-world object that needs its own table.

Q8. What is an Attribute?

A. A database server

B. A property of an entity

C. A network protocol

D. A transaction

✅ Answer: B

Explanation:
For a Student entity, attributes include Name, Email, Phone, and Age.

Q9. Which of the following is an attribute of a Student?

A. Student Name

B. Email

C. Phone Number

D. All of the Above

✅ Answer: D

Explanation:
Attributes describe the properties of an entity.

Q10. Why should we avoid storing everything in a single table?

A. It increases data duplication

B. It makes maintenance difficult

C. It reduces performance

D. All of the Above

✅ Answer: D

Explanation:
Proper schema design separates entities into related tables.

Q11. Which design is better?

A. One Huge Table

B. Separate Tables

C. Both are equal

D. Depends only on programming language

✅ Answer: B

Explanation:
Splitting data into logical tables improves scalability and maintenance.

Q12. What is a Primary Key?

A. A duplicate column

B. A column that uniquely identifies each row

C. A nullable column

D. A cache

✅ Answer: B

Explanation:
Every row must have a unique Primary Key.

Q13. Which is the best Primary Key?

A. Student Name

B. Student ID

C. Phone Number

D. City

✅ Answer: B

Explanation:
IDs remain unique even if names change.

Q14. Can a Primary Key contain duplicate values?

A. Yes

B. No

✅ Answer: B

Explanation:
Primary Keys must always be unique.

Q15. Can a Primary Key contain NULL?

A. Yes

B. No

✅ Answer: B

Explanation:
A Primary Key must always have a value.

Q16. What is the purpose of a Foreign Key?

A. Increase RAM

B. Connect two tables

C. Replace Primary Key

D. Create APIs

✅ Answer: B

Explanation:
Foreign Keys establish relationships between tables.

Q17. Which table should contain the Foreign Key?

A. Students

B. Enrollments

C. Courses

D. Teachers

✅ Answer: B

Explanation:
The Enrollment table references Students and Courses.

Q18. Which flow correctly represents how a REST API stores data?

A. Client -> Database

B. Client -> API -> Controller -> Service -> Repository -> Database

C. Client -> Java Method

D. Client -> GPU

✅ Answer: B

Explanation:
Modern backend applications follow layered architecture before reaching the database.

Q19. You are designing an AI Chat Application. Which table should exist?

A. Conversations

B. Messages

C. Users

D. All of the Above

✅ Answer: D

Explanation:
AI chat systems typically store users, conversations, and individual messages in separate tables.

Q20. Which statement best represents an Architect's mindset during database design?

A. "Let's create tables quickly."

B. "Let's write SQL first."

C. "Let's understand the business entities, relationships, and future scalability before designing the schema."

D. "Let's start with APIs."

✅ Answer: C

Explanation:
Architects design databases around business domains, relationships, and future growth—not just immediate implementation.

Q21. What does Cardinality describe in a database?

A. Number of CPUs

B. Relationship between tables

C. SQL Query Speed

D. Number of APIs

✅ Answer: B

Explanation:
Cardinality defines how records in one table relate to records in another table.

Q22. Which relationship represents One-to-One (1:1)?

A. Customer -> Orders

B. Student -> Courses

C. Person -> Passport

D. Product -> Categories

✅ Answer: C

Explanation:
One person has one passport, and one passport belongs to one person.

Q23. Which relationship represents One-to-Many (1:N)?

A. Teacher -> Students

B. Student -> Aadhaar

C. Passport -> Person

D. Order -> Customer

✅ Answer: A

Explanation:
One teacher teaches many students.

Q24. Which relationship represents Many-to-One (N:1)?

A. Student -> Teacher

B. Teacher -> Students

C. User -> Profile

D. Passport -> Citizen

✅ Answer: A

Explanation:
Many students belong to one teacher.

Q25. Which relationship represents Many-to-Many (M:N)?

A. User -> Profile

B. Student <-> Course

C. Person -> Passport

D. Order -> Customer

✅ Answer: B

Explanation:
A student can enroll in many courses, and a course can have many students.

Q26. Which relationship exists in Instagram (Users -> Posts)?

A. 1:1

B. 1:N

C. M:N

D. None

✅ Answer: B

Explanation:
One user creates many posts.

Q27. Which relationship exists in WhatsApp (Conversation -> Messages)?

A. 1:N

B. M:N

C. 1:1

D. N:1

✅ Answer: A

Explanation:
One conversation contains many messages.

Q28. AI Agent (Agent -> Tool Calls) Which relationship?

A. 1:N

B. M:N

C. 1:1

D. N:N

✅ Answer: A

Explanation:
One AI Agent performs many tool calls.

Q29. Why do we use a Bridge (Junction) Table?

A. Increase RAM

B. Handle Many-to-Many relationships

C. Increase API speed

D. Reduce CPU usage

✅ Answer: B

Explanation:
Bridge tables connect two entities that have many-to-many relationships.

Q30. Which table is a bridge table? (Students -> Enrollment -> Courses)

A. Students

B. Courses

C. Enrollment

D. Teachers

✅ Answer: C

Explanation:
Enrollment stores the relationship between students and courses.

Q31. Which columns usually exist inside a Bridge Table?

A. student_id

B. course_id

C. enrollment_date

D. All of the Above

✅ Answer: D

Explanation:
Bridge tables store foreign keys and additional relationship information.

Q32. Which SQL command creates a table?

A. INSERT

B. CREATE TABLE

C. UPDATE

D. SELECT

✅ Answer: B

Explanation:
CREATE TABLE creates a new table in the database.

Q33. Which SQL command inserts new records?

A. CREATE

B. INSERT

C. SELECT

D. ALTER

✅ Answer: B

Explanation:
INSERT is used to insert new records into a table.

Q34. Which SQL command retrieves data?

A. SELECT

B. INSERT

C. UPDATE

D. DELETE

✅ Answer: A

Explanation:
SELECT is used to query data.

Q35. Which SQL command modifies existing data?

A. SELECT

B. UPDATE

C. INSERT

D. CREATE

✅ Answer: B

Explanation:
UPDATE modifies existing rows in a table.

Q36. Which SQL command removes records?

A. UPDATE

B. DELETE

C. INSERT

D. CREATE

✅ Answer: B

Explanation:
DELETE is used to remove records.

Q37. Why do we use JOIN?

A. Combine related data from multiple tables

B. Increase RAM

C. Reduce storage

D. Increase CPU speed

✅ Answer: A

Explanation:
JOIN combines rows from multiple tables using relationships.

Q38. Which SQL statement retrieves student names with course names?

A. SELECT * FROM students;

B. SELECT * FROM courses;

C. SELECT s.name,c.course_name FROM students s JOIN enrollments e ON s.student_id=e.student_id JOIN courses c ON e.course_id=c.course_id;

D. DELETE FROM students;

✅ Answer: C

Explanation:
This uses JOIN to link the students and courses via enrollments.

Q39. Why don't we store Course Name directly inside the Student table?

A. It increases duplication

B. Difficult maintenance

C. Violates normalization

D. All of the Above

✅ Answer: D

Explanation:
Relationships prevent duplicate data and make updates easier.

Q40. What is the primary purpose of Normalization?

A. Increase GPU Performance

B. Reduce data redundancy and improve database design

C. Improve Internet Speed

D. Increase RAM

✅ Answer: B

Explanation:
Normalization organizes data into logical tables to minimize duplication, improve consistency, and simplify maintenance.

Q41. What does ACID stand for?

A. Application, Cache, Index, Database

B. Atomicity, Consistency, Isolation, Durability

C. API, Controller, Interface, Database

D. Architecture, Cache, Index, Deployment

✅ Answer: B

Explanation:
ACID properties ensure reliable and safe database transactions.

Q42. Which ACID property means "Either all operations succeed or none succeed"?

A. Consistency

B. Durability

C. Atomicity

D. Isolation

✅ Answer: C

Explanation:
Atomicity ensures that a transaction is treated as a single unit.

Q43. In a bank transfer, ₹1000 is deducted from Account A, but the system crashes before adding it to Account B. Which ACID property prevents money loss?

A. Consistency

B. Atomicity

C. Durability

D. Isolation

✅ Answer: B

Explanation:
If one operation fails, the entire transaction rolls back.

Q44. Which ACID property ensures the database always remains in a valid state?

A. Consistency

B. Atomicity

C. Isolation

D. Durability

✅ Answer: A

Explanation:
Constraints and business rules remain valid before and after every transaction.

Q45. Which ACID property ensures two users updating the same row do not interfere with each other?

A. Atomicity

B. Consistency

C. Isolation

D. Durability

✅ Answer: C

Explanation:
Isolation prevents concurrent transactions from producing inconsistent results.

Q46. Which ACID property guarantees committed data survives a power failure?

A. Atomicity

B. Consistency

C. Durability

D. Isolation

✅ Answer: C

Explanation:
Committed transactions are permanently stored even after crashes.

Q47. Which SQL statement permanently saves a transaction?

A. SAVE

B. COMMIT

C. PUSH

D. MERGE

✅ Answer: B

Explanation:
COMMIT makes all transaction changes permanent.

Q48. Which SQL statement cancels an incomplete transaction?

A. DELETE

B. DROP

C. ROLLBACK

D. REMOVE

✅ Answer: C

Explanation:
ROLLBACK restores the database to its previous consistent state.

Q49. Which applications rely heavily on ACID transactions?

A. Banking

B. Payment Systems

C. E-Commerce Checkout

D. All of the Above

✅ Answer: D

Explanation:
Financial and transactional systems require data integrity.

Q50. Which table is most suitable for storing AI conversation history?

A. users

B. conversations

C. messages

D. Both B and C

✅ Answer: D

Explanation:
Conversations store sessions, while Messages store individual exchanges.

Q51. An AI Agent remembers previous chats. Which database concept enables this?

A. Browser Cache

B. Persistent Database Storage

C. CSS

D. GPU

✅ Answer: B

Explanation:
Conversation history must be stored persistently.

Q52. Which table stores every individual message?

A. users

B. conversations

C. messages

D. agents

✅ Answer: C

Explanation:
Each prompt and response is stored as a separate message.

Q53. AI Agents calling external tools should log those calls in which table?

A. products

B. tool_calls

C. attendance

D. salary

✅ Answer: B

Explanation:
Logging tool execution helps debugging, auditing, and analytics.

Q54. Which architecture correctly stores a student record?

A. Frontend -> Database

B. Frontend -> API -> Controller -> Service -> Repository -> Database

C. Frontend -> Java Class

D. Frontend -> RAM

✅ Answer: B

Explanation:
Modern layered architectures separate concerns for maintainability.

Q55. Which layer directly communicates with the database?

A. Frontend

B. Controller

C. Repository / DAO

D. Browser

✅ Answer: C

Explanation:
Repository (or DAO) is responsible for database operations.

Q56. Why are constraints important in databases?

A. Prevent invalid data

B. Maintain data integrity

C. Enforce business rules

D. All of the Above

✅ Answer: D

Explanation:
Constraints ensure that only valid and consistent data is stored.

Q57. Which constraint prevents duplicate values?

A. NOT NULL

B. UNIQUE

C. FOREIGN KEY

D. CHECK

✅ Answer: B

Explanation:
UNIQUE ensures no duplicate values exist in a column.

Q58. You are designing an E-Commerce database. Which entities should be identified first?

A. Tables

B. Business Objects (Customer, Product, Order, Payment)

C. APIs

D. SQL Queries

✅ Answer: B

Explanation:
Architects first identify business entities before designing tables.

Q59. What is the correct database design sequence?

A. SQL -> Tables -> Requirements

B. Requirements -> Entities -> Relationships -> Tables -> Keys -> SQL

C. APIs -> Database -> Users

D. Frontend -> Database

✅ Answer: B

Explanation:
A well-designed database starts with business requirements and entity modeling.

Q60. Which statement best represents a Database Architect's mindset?

A. "I know SQL syntax."

B. "I know CREATE TABLE."

C. "I understand business entities, relationships, transactions, scalability, and how data flows through the entire system."

D. "I know PostgreSQL commands."

✅ Answer: C

Explanation:
A Database Architect focuses on business modeling, scalability, consistency, performance, and maintainability—not just SQL syntax.
"""

import re

# Format the raw text to match the Markdown format expected
formatted = re.sub(r'✅\s*Answer:\s*([A-D])', r'**Answer:** \1', raw_text, flags=re.IGNORECASE)
formatted = re.sub(r'\bExplanation:', r'**Explanation:**', formatted)

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
