# 🎓 Online Agentic AI & High-Level Design (HLD) Course Portal

Welcome to the **Online Agentic AI Course Portal** created by **Yogesh**. This interactive React application serves as a daily assessment hub where students can test their knowledge on foundations, system design architectures, and Agentic workflows.

---

## 📅 Course Schedule & Timings

* **Days:** Tuesday to Saturday (weekly)
* **Time:** 9:00 AM - 10:00 AM IST
* **Syllabus PDF:** Available for download directly from the portal's navigation header.

---

## 📚 21-Day Syllabus & Curriculum

### 🟢 WEEK 1: Foundation
* **Day 1 (Saturday, June 13):** Course Introduction & AI Revolution
  * *Topics:* Course Introduction, AI Revolution, What is AI?, What is Gen-AI?, What is Agentic AI?, Career Roadmap
* **Day 2 (Tuesday, June 16):** Introduction to Computers & AI Hardware
  * *Topics:* CPUs, RAM, GPUs, TPUs, VRAM, NPUs, CUDA Cores, NVIDIA GPU Architectures
* **Day 3 (Wednesday, June 17):** Internet Basics & APIs
  * *Topics:* Internet Basics, Browsers, Client-Server Architectures, DNS, APIs
* **Day 4 (Thursday, June 18):** SDLC, Product Thinking, & Business Problems
  * *Topics:* Software Development Lifecycle, Product Thinking, Business Problems
* **Day 5 (Friday, June 19):** Introduction to HLD & Components
  * *Topics:* HLD definition and importance, Frontend, Backend, Database, APIs
* **Day 6 (Saturday, June 20):** Data Exchange & API Architectures
  * *Topics:* Data exchange types, REST APIs, WebSockets, HTTP methods, JSON
* **Day 7 (Tuesday, June 23):** HLD Problem Solving Prerequisites
  * *Topics:* HLD problem solving basics, Back-of-the-Envelope (BOE) calculations, Assumptions

### 🔵 WEEK 2: HLD Fundamentals
* **Day 8 (Wednesday, June 24):** Schema Design & SQL Databases
  * *Topics:* Intro to schema, ACID properties, SQL Databases, Agentic PostgreSQL DB
* **Day 9 (Thursday, June 25):** Cache Systems & Messaging Baselines
  * *Topics:* Caching (Redis), Message Queues (Kafka Basics)
* **Day 10 (Friday, June 26):** Scaling, Load Balancer, CDN, & CAP/PAELC
  * *Topics:* Load Balancers, CDN, Service Discovery, HLD application designs, CAP / PAELC Theorems
* **Day 11 (Saturday, June 27):** Database Replication Models
  * *Topics:* Synchronous vs. Asynchronous replications, Replication Lag problems, Multi-leader & Leaderless replications
* **Day 12 (Tuesday, June 30):** Database Partitioning & Routing
  * *Topics:* Sharding, Partitioning keys, Secondary indexes, Rebalancing, Request routing
* **Day 13 (Wednesday, July 01):** Distributed Transactions in HLD
  * *Topics:* Transactions in HLD, ACID guarantees
* **Day 14 (Thursday, July 02):** HLD Revision & Problem Prerequisites
  * *Topics:* HLD review session before building complex systems

### 🟠 WEEK 3: HLD Problem Solving
* **Day 15 (Friday, July 03):** Designing WhatsApp: Part 1
  * *Topics:* Real-time messaging connections, WebSocket gateways, and presence tracking
* **Day 16 (Saturday, July 04):** Designing WhatsApp: Part 2
  * *Topics:* Chat database schema, wide-column stores, group chats, message delivery states
* **Day 17 (Tuesday, July 07):** Designing YouTube: Part 1
  * *Topics:* Video upload pipelines, transcoding architectures, object storage integration
* **Day 18 (Wednesday, July 08):** Designing YouTube: Part 2
  * *Topics:* CDN caching, video streaming protocols (HLS/DASH), view count scaling
* **Day 19 (Thursday, July 09):** Designing Uber/Ola Ride-Hailing: Part 1
  * *Topics:* Geospatial indexing (H3 Hexagons, S2), location tracking, active driver updates
* **Day 20 (Friday, July 10):** Designing Uber/Ola Ride-Hailing: Part 2
  * *Topics:* Dispatch matching, trip state machines, transactional receipt DBs, ETA calculation
* **Day 21 (Saturday, July 11):** Designing Amazon AWS S3 Storage
  * *Topics:* Highly durable object storage, metadata index segregation, block stores, and replication

---

## ⚡ Key Application Features

1. **Two-Level Navigation Flow:**
   * **Dashboard View:** Shows course modules (Intro Module, HLD, Databases) with customized colors, total class count, and active progress bar representation.
   * **Classes List View:** Displays chronological cards representing each day's class, complete with descriptions, question counts, times, and day-name dates.
   * **Workspace View:** An IDE-styled splitscreen workspace for active learning and question answering.

2. **Workspace Layout:**
   * **Question Sidebar:** A clean, borderless list of question pills (`Q1`, `Q2`...) with generous margins (`16px`).
   * **Problem List Table:** A grid-free tabular list of questions with a custom light-blue header (`#e8f2fc`) displaying columns: *Name of the Problem*, *Difficulty*, *Score*, *Status*, and *Actions*.
   * **Interactive Question Solver:** Enables options selection, immediate feedback showing correct option alongside a step-by-step explanation, and an interactive "Use Hint" toggle that reveals correct answers dynamically.
   * **Scoped Pagination:** Previous/Next navigation footer buttons are strictly scoped to the active module. Shows friendly fallback messaging like *"No more classes in this module"* at boundaries.

3. **Progress Resets:**
   * Solving records are transient (reset on browser page reload) to allow repeating quizzes endlessly. A manual "Clear Progress" action is also accessible in the header.

---

## 🛠️ Setup & Development Commands

Follow these instructions to run the application locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### 2. Installation
Clone the repository and install packages:
```bash
npm install
```

### 3. Generate Syllabus Class Content
To regenerate or update the markdown class files inside `public/docs/`:
```bash
node scratch/populate-syllabus.js
```

### 4. Compile Quizzes Catalog Manifest
The app scans Markdown files dynamically. Re-generate the index manifest catalog by running:
```bash
node generate-manifest.js
```
*(Note: This compiles the list of classes in ascending chronological order automatically).*

### 5. Running the Development Server
Start the local development server (this automatically triggers the predev manifest compilation):
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 6. Building for Production
To bundle and optimize the application for static deployment:
```bash
npm run build
```
The output assets will be saved to the `dist/` directory.

---

## 📂 Project Structure

```text
├── public/
│   ├── docs/                   # Day-wise class MCQ markdown files
│   │   └── manifest.json       # Generated index catalog of class files
│   ├── favicon.svg             # Portal brand icon
│   └── syllabus.pdf            # Downloadable course syllabus
├── src/
│   ├── components/             # Reusable UI component layout files
│   │   ├── ClassWorkspace.jsx  # Primary workspace split-layout
│   │   ├── ProblemListTable.jsx# Grid-free questions table
│   │   ├── QuestionSolver.jsx  # MCQ selection renderer and hint container
│   │   └── QuizCard.jsx        # Class metadata card
│   ├── utils/
│   │   └── quizParser.js       # Markdown parser for MCQ files
│   ├── App.jsx                 # Core router and module state coordinator
│   ├── App.css                 # Common portal styles
│   └── index.css               # Core styling variables and Tailwind directives
├── scratch/                    # Developer utility utilities
│   └── populate-syllabus.js    # Node script defining and writing daily assessments
├── generate-manifest.js        # Automated catalog index compiler script
├── package.json
└── vite.config.js
```
