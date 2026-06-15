import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public', 'docs');

const days = [
  {
    day: 1,
    date: '2026-06-13',
    title: 'Day 1 - Course Introduction & AI Revolution',
    topic: 'Intro Module',
    description: 'Introduction to the course, the AI revolution, and the career roadmap.',
    questions: [
      {
        q: 'What is the primary focus of this course?',
        options: [
          'A. Excel formatting and equations',
          'B. Traditional web page designs only',
          'C. Building AI-powered systems and Agentic AI workflows',
          'D. Learning only basic chat commands'
        ],
        ans: 'C',
        exp: 'The course focuses on building production-ready AI-powered systems and Agentic workflows.'
      },
      {
        q: 'Which career milestone comes immediately after "AI User" in the course career roadmap?',
        options: [
          'A. Workflow Builder',
          'B. Prompt Engineer',
          'C. AI Agent Developer',
          'D. Agentic Architect'
        ],
        ans: 'B',
        exp: 'The roadmap flows: AI User -> Prompt Engineer -> Workflow Builder -> AI Agent Developer -> Agentic Architect.'
      },
      {
        q: 'What characterizes Agentic AI compared to standard Generative AI?',
        options: [
          'A. It runs on local CPUs only',
          'B. It performs actions, uses tools, and evaluates progress autonomously',
          'C. It only generates plain text responses without APIs',
          'D. It requires constant user prompts for every single action'
        ],
        ans: 'B',
        exp: 'Agentic AI uses autonomous loops, planning, reflection, and external tools to complete tasks with minimal user intervention.'
      }
    ]
  },
  {
    day: 2,
    date: '2026-06-16',
    title: 'Day 2 - Introduction to Computers & AI Hardware',
    topic: 'Intro Module',
    description: 'Understanding CPUs, GPUs, TPUs, VRAMs, NPUs, CUDA Cores, and NVIDIA GPU architectures.',
    questions: [
      {
        q: 'Why are GPUs preferred over CPUs for training deep learning models?',
        options: [
          'A. CPUs do not support arithmetic operations.',
          'B. GPUs excel at parallel execution of matrix multiplications across thousands of cores.',
          'C. GPUs have larger sequential cache systems than CPUs.',
          'D. GPUs run single-threaded tasks faster.'
        ],
        ans: 'B',
        exp: 'GPUs are designed for highly parallel matrix computations, which are the core mathematical operations in deep learning.'
      },
      {
        q: 'What is the function of CUDA Cores in NVIDIA GPUs?',
        options: [
          'A. They compile python code into binary executables.',
          'B. They manage browser API requests.',
          'C. They perform parallel floating-point mathematical computations.',
          'D. They act as central databases for storage.'
        ],
        ans: 'C',
        exp: 'CUDA cores are the parallel processing units on NVIDIA GPUs responsible for executing mathematical calculations.'
      },
      {
        q: 'Which processor is purpose-built by Google specifically for machine learning workloads?',
        options: [
          'A. Central Processing Unit (CPU)',
          'B. Tensor Processing Unit (TPU)',
          'C. Network Processing Unit (NPU)',
          'D. CUDA Hub'
        ],
        ans: 'B',
        exp: 'TPUs (Tensor Processing Units) are custom ASICs developed by Google to accelerate machine learning workloads.'
      }
    ]
  },
  {
    day: 3,
    date: '2026-06-17',
    title: 'Day 3 - Internet Basics & APIs',
    topic: 'Intro Module',
    description: 'Understanding browsers, client-server architectures, DNS, and APIs.',
    questions: [
      {
        q: 'What is the role of a DNS (Domain Name System) server?',
        options: [
          'A. To encrypt raw user passwords.',
          'B. To translate human-readable domain names (like google.com) into machine IP addresses.',
          'C. To route websocket connections.',
          'D. To host database transaction logs.'
        ],
        ans: 'B',
        exp: 'DNS translates human-friendly domain names to numerical IP addresses to locate systems on the internet.'
      },
      {
        q: 'In a typical Client-Server architecture, what role does the browser play?',
        options: [
          'A. It executes backend database transactions.',
          'B. It acts as the Client, requesting resources and rendering the UI.',
          'C. It acts as the Server, processing REST methods.',
          'D. It routes messages inside Kafka brokers.'
        ],
        ans: 'B',
        exp: 'The browser is a client that sends requests to the server and displays the returned HTML/CSS/JS content.'
      },
      {
        q: 'What does API stand for in software development?',
        options: [
          'A. Automated Program Integration',
          'B. Application Programming Interface',
          'C. Algorithmic Process Index',
          'D. Asynchronous Packet Interceptor'
        ],
        ans: 'B',
        exp: 'API stands for Application Programming Interface, which allows different software components to communicate.'
      }
    ]
  },
  {
    day: 4,
    date: '2026-06-18',
    title: 'Day 4 - SDLC, Product Thinking, & Business Problems',
    topic: 'Intro Module',
    description: 'Deep dive into Software Development Lifecycle, Product Thinking, and solving Business Problems.',
    questions: [
      {
        q: 'Which phase of the SDLC focuses on defining the exact scope and requirements of the product?',
        options: [
          'A. Implementation',
          'B. Requirements Analysis & Planning',
          'C. Testing',
          'D. Deployment'
        ],
        ans: 'B',
        exp: 'Planning and requirements analysis determine product scope, feasibility, and student/customer needs.'
      },
      {
        q: 'What is the core principle of "Product Thinking"?',
        options: [
          'A. Writing code as fast as possible without tests.',
          'B. Focusing on the user\'s real problems and finding the right features to solve them.',
          'C. Designing database partitions first.',
          'D. Copying competitors\' features blindly.'
        ],
        ans: 'B',
        exp: 'Product thinking starts with understanding user pain points and designing solutions that add business value.'
      },
      {
        q: 'Why must developers understand the business problem before choosing an AI model?',
        options: [
          'A. The choice of architecture, constraints, and latency depends on what the business is trying to achieve.',
          'B. Business problems dictate GPU physical hardware assembly.',
          'C. Without a business problem, AI models cannot run compilation scripts.',
          'D. Models require business documents as standard training input.'
        ],
        ans: 'A',
        exp: 'You must map technical features directly to business constraints (like latency, budget, and accuracy) to design effective systems.'
      }
    ]
  },
  {
    day: 5,
    date: '2026-06-19',
    title: 'Day 5 - Introduction to HLD & Components',
    topic: 'HLD',
    description: 'Understanding High Level Design (HLD) importance and key components (Frontend, Backend, Database, APIs).',
    questions: [
      {
        q: 'What does High-Level Design (HLD) primarily focus on?',
        options: [
          'A. Class names, function parameters, and inline variable declarations.',
          'B. Overall system architecture, data flows, and interactions between major service blocks.',
          'C. Operating system kernel configurations.',
          'D. CSS styles and button animation speeds.'
        ],
        ans: 'B',
        exp: 'HLD defines the macro-architecture, system blocks, database selections, messaging queues, and system data flows.'
      },
      {
        q: 'Which HLD component is responsible for orchestrating business logic and processing API requests?',
        options: [
          'A. Frontend',
          'B. Backend Server',
          'C. Database',
          'D. CDN'
        ],
        ans: 'B',
        exp: 'The backend server executes core logic, processes queries, and coordinates communications.'
      },
      {
        q: 'Why do we separate the Database from the stateless Application Server in scale designs?',
        options: [
          'A. To allow servers to scale up or down dynamically based on traffic without losing persistent data.',
          'B. Because application servers do not support network ports.',
          'C. Application servers are written in binary whereas databases use text files.',
          'D. Stateless servers are required by load balancers to execute SQL scripts.'
        ],
        ans: 'A',
        exp: 'Keeping backend servers stateless allows you to scale them horizontally since database state is decoupled.'
      }
    ]
  },
  {
    day: 6,
    date: '2026-06-20',
    title: 'Day 6 - Data Exchange & API Architectures',
    topic: 'HLD',
    description: 'Understanding data exchange types, REST APIs, WebSockets, HTTP methods, and JSON.',
    questions: [
      {
        q: 'What is the primary difference between standard HTTP REST APIs and WebSockets?',
        options: [
          'A. REST APIs support JSON, WebSockets do not.',
          'B. REST is stateless request-response; WebSockets provide persistent bidirectional stateful connections.',
          'C. WebSockets only run on local servers.',
          'D. REST APIs require HTTPS whereas WebSockets are completely unencrypted.'
        ],
        ans: 'B',
        exp: 'HTTP REST follows a request-response pattern. WebSockets open a single persistent TCP connection allowing real-time push events from both sides.'
      },
      {
        q: 'Which HTTP method is idempotent and designed to update an existing resource or create it if missing?',
        options: [
          'A. POST',
          'B. GET',
          'C. PUT',
          'D. DELETE'
        ],
        ans: 'C',
        exp: 'PUT is idempotent, meaning multiple identical requests yield the same system state.'
      },
      {
        q: 'What is JSON in API exchanges?',
        options: [
          'A. Java Socket Open Network',
          'B. JavaScript Object Notation - a lightweight text format for structured data.',
          'C. Joint Server Output Node',
          'D. A binary protocol for image compressions.'
        ],
        ans: 'B',
        exp: 'JSON (JavaScript Object Notation) is the standard lightweight format used to transmit structured data in modern APIs.'
      }
    ]
  },
  {
    day: 7,
    date: '2026-06-23',
    title: 'Day 7 - HLD Problem Solving Prerequisites',
    topic: 'HLD',
    description: 'Learn HLD problem-solving basics, Back-of-the-Envelope (BOE) calculations, and design assumptions.',
    questions: [
      {
        q: 'What is the purpose of Back-of-the-Envelope (BOE) calculations in system design?',
        options: [
          'A. To write microservice test cases.',
          'B. To estimate memory, storage, bandwidth, and processing requirements before writing code.',
          'C. To calculate budget expenditures for marketing.',
          'D. To verify SQL syntax compiles correctly.'
        ],
        ans: 'B',
        exp: 'BOE calculations help design architects size hardware, verify network bandwidth constraints, and pick storage engines.'
      },
      {
        q: 'If a service handles 10 million daily active users, and each user performs 5 read actions per day, what is the average QPS (Queries Per Second)?',
        options: [
          'A. ~58 QPS',
          'B. ~580 QPS',
          'C. ~5,800 QPS',
          'D. ~58,000 QPS'
        ],
        ans: 'B',
        exp: 'Total requests = 10M * 5 = 50 Million requests/day. Seconds in a day = 86,400. QPS = 50,000,000 / 86,400 ≈ 578.7 QPS.'
      },
      {
        q: 'Why should design assumptions (like Read-to-Write ratio) be clarified during HLD interviews?',
        options: [
          'A. They dictate whether the database design should be read-heavy (using cache) or write-heavy (using message queues).',
          'B. Assumptions tell developers what IDE to use.',
          'C. They are required by DNS servers to establish domain routing.',
          'D. Interviews cannot start without active mathematical equations.'
        ],
        ans: 'A',
        exp: 'Knowing the system profile (e.g. 100:1 read-to-write ratio) dictates architectural structures, like CDNs, database replications, and caches.'
      }
    ]
  },
  {
    day: 8,
    date: '2026-06-24',
    title: 'Day 8 - Schema Design & SQL Databases',
    topic: 'Databases',
    description: 'Introduction to schema, ACID compliance, SQL databases, and PostgreSQL.',
    questions: [
      {
        q: 'What does the "I" in ACID stand for in database transactions?',
        options: [
          'A. Integration',
          'B. Isolation - ensuring concurrent transactions do not interfere with each other.',
          'C. Indexing',
          'D. Idempotency'
        ],
        ans: 'B',
        exp: 'Isolation guarantees that concurrent execution of transactions leaves the database in the same state as if they were executed sequentially.'
      },
      {
        q: 'When should you choose a Relational (SQL) database like PostgreSQL over a NoSQL database?',
        options: [
          'A. When schema is highly dynamic and columns change on every row.',
          'B. When you require strict ACID guarantees and complex JOIN operations across normalized tables.',
          'C. When you only need simple key-value lookups with zero relations.',
          'D. When raw storage capacity is the only system requirement.'
        ],
        ans: 'B',
        exp: 'SQL databases excel at maintaining relationships, complex query structures, and strict ACID transaction properties.'
      },
      {
        q: 'What is a Database Schema?',
        options: [
          'A. The physical location of database servers.',
          'B. The logical layout, structure, tables, and relationships defined in the database.',
          'C. The network bandwidth rating of connection logs.',
          'D. The query analyzer logs.'
        ],
        ans: 'B',
        exp: 'Schema refers to the configuration structure of database tables, constraints, fields, and foreign keys.'
      }
    ]
  },
  {
    day: 9,
    date: '2026-06-25',
    title: 'Day 9 - Cache Systems & Messaging Baselines',
    topic: 'Databases',
    description: 'Deep dive into caching with Redis and message queue systems like Kafka.',
    questions: [
      {
        q: 'Where does Redis store its data by default to achieve microsecond read/write latencies?',
        options: [
          'A. On local Solid State Drives (SSD)',
          'B. In-Memory (RAM)',
          'C. In relational tables',
          'D. In distributed object buckets'
        ],
        ans: 'B',
        exp: 'Redis is an in-memory data store, which allows extremely high-throughput and low-latency lookups.'
      },
      {
        q: 'What is the primary architectural purpose of a Message Queue like Apache Kafka?',
        options: [
          'A. To display statistics to users.',
          'B. To decouple services, buffer write spikes, and allow asynchronous event-driven communications.',
          'C. To execute SQL JOIN queries.',
          'D. To route client DNS queries.'
        ],
        ans: 'B',
        exp: 'Kafka acts as a highly-scalable event bus to decouple data producers from consumers and buffer spikes asynchronously.'
      },
      {
        q: 'What does the Cache-Aside pattern imply?',
        options: [
          'A. The application database automatically updates the cache directly.',
          'B. The application checks the cache first; if a miss occurs, it queries the DB, stores result in cache, and returns it.',
          'C. The application deletes the database after caching all rows.',
          'D. Caches are only written to, and never read from.'
        ],
        ans: 'B',
        exp: 'In Cache-Aside, the application actively coordinates reading/writing from cache first, falling back to DB on misses.'
      }
    ]
  },
  {
    day: 10,
    date: '2026-06-26',
    title: 'Day 10 - Scaling, Load Balancer, CDN, & CAP/PAELC',
    topic: 'HLD',
    description: 'Understanding CDN, Load Balancers, CAP and PAELC Theorems, and service discovery.',
    questions: [
      {
        q: 'What does the CAP Theorem state about a distributed database system in the event of a network partition?',
        options: [
          'A. The system will operate faster.',
          'B. You must choose between Consistency (returning latest data) or Availability (returning immediate responses).',
          'C. You must add SSD storage blocks to resolve partitions.',
          'D. Partitioning is impossible with DNS configurations.'
        ],
        ans: 'B',
        exp: 'CAP Theorem asserts that during a network partition, a distributed system can maintain Consistency (C) or Availability (A), but not both.'
      },
      {
        q: 'In the PAELC theorem, what does "EL" represent?',
        options: [
          'A. Elastic Load-balancing',
          'B. Else Latency (what happens when there is no network partition).',
          'C. Execution Layer',
          'D. Encrypted Links'
        ],
        ans: 'B',
        exp: 'PAELC states: if there is a Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C).'
      },
      {
        q: 'What is the primary role of a CDN (Content Delivery Network)?',
        options: [
          'A. To run complex user authorization queries.',
          'B. To cache and serve static assets close to users to reduce latency.',
          'C. To backup database servers.',
          'D. To load-balance websocket requests.'
        ],
        ans: 'B',
        exp: 'CDNs store static resources (images, JS, CSS, videos) at edge nodes geographically closer to users, improving load speeds.'
      }
    ]
  },
  {
    day: 11,
    date: '2026-06-27',
    title: 'Day 11 - Database Replication Models',
    topic: 'HLD',
    description: 'Comparing Synchronous vs Asynchronous replication, replication lag, multi-leader, and leaderless setups.',
    questions: [
      {
        q: 'What is the risk of Asynchronous database replication?',
        options: [
          'A. Transactions take double the time to commit on the primary node.',
          'B. Data written to the leader might be lost if it crashes before replication succeeds to followers.',
          'C. It blocks write requests completely.',
          'D. SQL JOIN operations fail.'
        ],
        ans: 'B',
        exp: 'Because asynchronous commits return before data is sent to followers, any leader crash before syncing results in data loss.'
      },
      {
        q: 'What is "Replication Lag"?',
        options: [
          'A. The time it takes to boot a new server.',
          'B. The delay between a write on the leader node and its reflection on follower nodes.',
          'C. The download speed of client browsers.',
          'D. The compile time of database queries.'
        ],
        ans: 'B',
        exp: 'Replication lag measures the delay in syncing writes from the primary database instance to replicas.'
      },
      {
        q: 'In a Leaderless replication system (e.g. Cassandra), how are writes and reads verified?',
        options: [
          'A. By querying a single leader server.',
          'B. By using quorums (W + R > N) to ensure write overlap with read answers.',
          'C. By routing calls through Load Balancers.',
          'D. By disabling database caching.'
        ],
        ans: 'B',
        exp: 'Leaderless systems use read/write quorums to detect and resolve stale data version conflicts dynamically.'
      }
    ]
  },
  {
    day: 12,
    date: '2026-06-30',
    title: 'Day 12 - Database Partitioning & Routing',
    topic: 'HLD',
    description: 'Understanding partitioning keys, secondary indexes, rebalancing, and request routing.',
    questions: [
      {
        q: 'What is the primary goal of Database Partitioning (Sharding)?',
        options: [
          'A. To encrypt databases.',
          'B. To split large datasets across multiple database nodes to balance load and storage.',
          'C. To create database schemas.',
          'D. To backup master nodes.'
        ],
        ans: 'B',
        exp: 'Sharding helps distribute datasets and queries across database instances when the volume exceeds single-machine limits.'
      },
      {
        q: 'What is a drawback of using secondary indexes on partitioned tables?',
        options: [
          'A. They are stored on CPU cache only.',
          'B. Queries by secondary index might require querying every single partition (scatter-gather) if not routed by partition key.',
          'C. They disable ACID transactions.',
          'D. They make primary keys obsolete.'
        ],
        ans: 'B',
        exp: 'Scatter-gather queries scan all partitions to collect matching rows from secondary indexes, adding significant latency.'
      },
      {
        q: 'What is Consistent Hashing primarily used for?',
        options: [
          'A. Encrypting JSON fields.',
          'B. Distributing sharded keys with minimal rebalancing overhead when nodes are added or removed.',
          'C. Compiling SQL scripts.',
          'D. Establishing WebSocket connection handshakes.'
        ],
        ans: 'B',
        exp: 'Consistent hashing ensures that when database nodes change, only a fraction of keys are remapped, minimizing partition migrations.'
      }
    ]
  },
  {
    day: 13,
    date: '2026-07-01',
    title: 'Day 13 - Distributed Transactions in HLD',
    topic: 'Databases',
    description: 'Deep dive into transaction management and ACID properties in high-level distributed systems.',
    questions: [
      {
        q: 'What is the role of Two-Phase Commit (2PC) in distributed transactions?',
        options: [
          'A. To double replication speed.',
          'B. To ensure all participating databases commit or abort a transaction atomically.',
          'C. To verify DNS requests.',
          'D. To write local cache values.'
        ],
        ans: 'B',
        exp: '2PC coordinates distributed nodes through a prepare phase and commit phase to guarantee atomic transactions.'
      },
      {
        q: 'What is a major limitation of Two-Phase Commit (2PC) systems?',
        options: [
          'A. It does not support SQL databases.',
          'B. It is blocking; if the coordinator crashes during the vote, resource locks are held indefinitely.',
          'C. It disables transaction logging.',
          'D. It requires GPU cores to operate.'
        ],
        ans: 'B',
        exp: '2PC is a blocking protocol. If the coordinator dies during consensus, databases hold lock records indefinitely, impacting availability.'
      },
      {
        q: 'How does the Saga pattern solve distributed transaction constraints?',
        options: [
          'A. By running a single database transaction across all nodes.',
          'B. By executing a sequence of local transactions, triggering compensating transactions if any step fails.',
          'C. By disabling database partitions.',
          'D. By caching results in Redis.'
        ],
        ans: 'B',
        exp: 'Sagas decouple distributed transactions into local steps with compensating workflows, prioritizing availability over immediate consistency.'
      }
    ]
  },
  {
    day: 14,
    date: '2026-07-02',
    title: 'Day 14 - HLD Revision & Problem Prerequisites',
    topic: 'HLD',
    description: 'Comprehensive HLD review session before solving complex system design challenges.',
    questions: [
      {
        q: 'Which architecture pattern scales horizontal workloads by removing session state from application nodes?',
        options: [
          'A. Stateful Server Architecture',
          'B. Stateless Server Architecture',
          'C. Leaderless DB Setup',
          'D. Local File Storage'
        ],
        ans: 'B',
        exp: 'Stateless design lets any app node handle client requests, routing state queries directly to central DBs or cache clusters.'
      },
      {
        q: 'How does caching write transactions using Write-Back differs from Write-Through?',
        options: [
          'A. Write-Back deletes the cache on read.',
          'B. Write-Back writes to the cache immediately, returning success, and updates the DB asynchronously in the background.',
          'C. Write-Back writes to the DB first, then cache.',
          'D. Write-Back disables transactional ACID properties.'
        ],
        ans: 'B',
        exp: 'Write-Back updates the database asynchronously to maximize write speeds. Write-Through commits to cache and database synchronously.'
      },
      {
        q: 'Which component resolves client requests to healthy backend service locations in high-scale configurations?',
        options: [
          'A. CDN',
          'B. Service Discovery & Registry Engine',
          'C. Caching systems',
          'D. Transaction coordinators'
        ],
        ans: 'B',
        exp: 'Service registries dynamically monitor instance health and map IP targets for stateless load balancing.'
      }
    ]
  },
  {
    day: 15,
    date: '2026-07-03',
    title: 'Day 15 - Designing WhatsApp: Part 1',
    topic: 'HLD',
    description: 'Designing high-level real-time messaging architecture, user presence, and connection flows.',
    questions: [
      {
        q: 'Which protocol is best suited to maintain the persistent bidirectional connection required for real-time chat?',
        options: [
          'A. HTTP GET polling',
          'B. WebSockets',
          'C. REST PUT method',
          'D. DNS lookup'
        ],
        ans: 'B',
        exp: 'WebSockets maintain a long-lived connection, allowing the chat server to push messages instantly to clients.'
      },
      {
        q: 'How should the "User Presence" (Online/Offline status) service track connection states dynamically at scale?',
        options: [
          'A. Writing heartbeat timestamps to SQL database on every user movement.',
          'B. Keeping heartbeat/connection status in memory (like Redis) and updating it on websocket close/open.',
          'C. Querying CDN edges.',
          'D. Asking other users to check IP availability.'
        ],
        ans: 'B',
        exp: 'Using Redis allows user heartbeat updates every few seconds with very low latency and memory footprints.'
      },
      {
        q: 'What is the role of a Chat Gateway service?',
        options: [
          'A. To transcode media files.',
          'B. To manage client WebSocket connections and route incoming/outgoing events.',
          'C. To store historical message records.',
          'D. To coordinate database partition rebalancing.'
        ],
        ans: 'B',
        exp: 'Chat gateways terminate WebSocket connections, keeping track of active user connection channels.'
      }
    ]
  },
  {
    day: 16,
    date: '2026-07-04',
    title: 'Day 16 - Designing WhatsApp: Part 2',
    topic: 'HLD',
    description: 'Designing database schema for messages, media storage, group chats, and message delivery states.',
    questions: [
      {
        q: 'Which database type is best suited to store trillions of historical chat messages due to write throughput and horizontal scaling?',
        options: [
          'A. Relational Database (PostgreSQL)',
          'B. NoSQL Wide-Column Store (Cassandra) or Key-Value Store (DynamoDB)',
          'C. Memory cache (Redis)',
          'D. Local Excel worksheets'
        ],
        ans: 'B',
        exp: 'Wide-column NoSQL databases scale horizontally easily and can partition chat messages by `chat_id` for quick chronological lookups.'
      },
      {
        q: 'How should media files (images, audio, video) shared in chat messages be stored in high-scale system designs?',
        options: [
          'A. Stored as raw BLOB values inside NoSQL databases.',
          'B. Uploaded to Object Storage (like AWS S3) and referencing the file URL in the database message record.',
          'C. Stored in Redis cache clusters.',
          'D. Saved directly in gateway server local filesystems.'
        ],
        ans: 'B',
        exp: 'Object storage is highly durable and scalable for unstructured files, keeping database sizes manageable.'
      },
      {
        q: 'How is message delivery status (Sent, Delivered, Read) coordinated?',
        options: [
          'A. Gateway servers listen to client ACK messages and update message state records asynchronously.',
          'B. Databases automatically ping users every second.',
          'C. Gateways query CDN caches.',
          'D. By deleting the database record on successful read.'
        ],
        ans: 'A',
        exp: 'Gateways process client ACK events and distribute read receipts to the sender via active WebSocket channels.'
      }
    ]
  },
  {
    day: 17,
    date: '2026-07-07',
    title: 'Day 17 - Designing YouTube: Part 1',
    topic: 'HLD',
    description: 'Designing high-level video upload pipelines, encoding/transcoding architectures.',
    questions: [
      {
        q: 'Why is a "Video Transcoding" pipeline necessary for systems like YouTube?',
        options: [
          'A. To encrypt video titles.',
          'B. To convert uploaded videos into multiple resolutions and formats (e.g. 1080p, 480p, HLS, DASH) for different devices and bandwidths.',
          'C. To detect copyright issues using GPU memory.',
          'D. To compress databases.'
        ],
        ans: 'B',
        exp: 'Transcoding converts source videos to adaptive bitrate streaming profiles to play smoothly across varying network speeds.'
      },
      {
        q: 'How should video upload tasks be processed to avoid overloading backend web servers?',
        options: [
          'A. Synchronously, locking the web thread until the entire file is fully processed.',
          'B. Asynchronously, uploading chunks to object storage and queueing transcoding tasks in message queues (like Kafka) for workers.',
          'C. Restricting uploads to local systems.',
          'D. Caching entire raw videos in Redis memory.'
        ],
        ans: 'B',
        exp: 'Using message queues lets transcoding worker clusters consume and process video files asynchronously at their own pace.'
      },
      {
        q: 'What is the role of a Coordinator server in video upload steps?',
        options: [
          'A. To compress audio files.',
          'B. To manage upload sessions, assign target storage regions, and update metadata DB entries.',
          'C. To display visual player controls.',
          'D. To configure CDN routers.'
        ],
        ans: 'B',
        exp: 'Coordinators track upload status and trigger encoding actions once the file chunk upload finishes.'
      }
    ]
  },
  {
    day: 18,
    date: '2026-07-08',
    title: 'Day 18 - Designing YouTube: Part 2',
    topic: 'HLD',
    description: 'Designing YouTube content delivery (CDN), video streaming protocols, caching, and view-count scaling.',
    questions: [
      {
        q: 'Which technology is critical to stream videos with sub-second start latencies globally?',
        options: [
          'A. Multi-Leader SQL database',
          'B. CDN (Content Delivery Network) caching video segments at edge servers.',
          'C. High-throughput Redis cluster',
          'D. Websocket gateways'
        ],
        ans: 'B',
        exp: 'Serving static video chunks from CDN edges near the user drastically decreases network roundtrip times.'
      },
      {
        q: 'How should view count numbers for highly popular viral videos be updated to avoid database write lock bottlenecks?',
        options: [
          'A. Writing a direct `UPDATE ... SET views = views + 1` query to SQL database for every single view.',
          'B. Buffering view counts in memory (e.g. Redis) and flushing them in batches to the database asynchronously.',
          'C. Caching the database locally on web servers.',
          'D. Running view operations on CUDA GPU cores.'
        ],
        ans: 'B',
        exp: 'Batching writes in Redis reduces disk updates on relational databases, resolving write contention bottlenecks.'
      },
      {
        q: 'Which video streaming protocol is standard for modern web browsers?',
        options: [
          'A. FTP',
          'B. HTTP Live Streaming (HLS)',
          'C. WebSocket Push',
          'D. SMTP'
        ],
        ans: 'B',
        exp: 'HLS divides videos into segments delivered over standard HTTP, making it widely supported by browsers.'
      }
    ]
  },
  {
    day: 19,
    date: '2026-07-09',
    title: 'Day 19 - Designing Uber/Ola Ride-Hailing: Part 1',
    topic: 'HLD',
    description: 'High-level architecture for ride-hailing, geo-spatial indexing (H3, S2), and real-time driver tracking.',
    questions: [
      {
        q: 'Which data structure is designed to efficiently index and query geographical coordinates in system designs?',
        options: [
          'A. B-Tree index',
          'B. Geo-spatial index (like Google\'s S2 or Uber\'s H3 Hexagons)',
          'C. Inverted Index',
          'D. Redis hash map'
        ],
        ans: 'B',
        exp: 'S2 and H3 divide the earth\'s surface into nested grids/hexagons to query nearby locations within constant time.'
      },
      {
        q: 'Why is a relational database not suitable to store driver GPS location updates happening every 4 seconds?',
        options: [
          'A. Relational databases do not support coordinates.',
          'B. The massive write volume would quickly saturate disk I/O and locks in transactional tables.',
          'C. Location coordinates require GPU acceleration.',
          'D. Active drivers cannot run SQL queries.'
        ],
        ans: 'B',
        exp: 'Frequent location writes create database bottlenecks. Fast-changing GPS updates are stored in fast in-memory key-value caches like Redis.'
      },
      {
        q: 'What is the role of the Location Service in a ride-hailing app?',
        options: [
          'A. To compute trip fares.',
          'B. To ingest coordinate feeds from drivers and cache active locations in geospatial structures.',
          'C. To assign target drivers.',
          'D. To dispatch SMS alerts.'
        ],
        ans: 'B',
        exp: 'The location service consumes coordinate heartbeats and keeps the geospatial database updated with driver coordinates.'
      }
    ]
  },
  {
    day: 20,
    date: '2026-07-10',
    title: 'Day 20 - Designing Uber/Ola Ride-Hailing: Part 2',
    topic: 'HLD',
    description: 'Ride matching algorithms, trip state management, database write scaling, and ETA computation.',
    questions: [
      {
        q: 'How is a rider matched with a nearby driver without locking the entire geospatial database?',
        options: [
          'A. By executing global database table locks.',
          'B. By querying drivers within a localized bounding box/hexagon and queueing matching requests asynchronously.',
          'C. By disabling replication.',
          'D. By having the client browser run the driver search.'
        ],
        ans: 'B',
        exp: 'Querying localized geospatial sectors keeps database transactions small, while match brokers handle pairing asynchronously.'
      },
      {
        q: 'Which database type is best to persist historical trip receipts and billing data due to financial compliance?',
        options: [
          'A. Redis Memory Cache',
          'B. ACID-Compliant Relational Database (SQL)',
          'C. Wide-column NoSQL',
          'D. Local document folders'
        ],
        ans: 'B',
        exp: 'Financial receipt and billing records require absolute consistency, transactions, and audit trails provided by SQL systems.'
      },
      {
        q: 'What is a typical way to compute Estimated Time of Arrival (ETA)?',
        options: [
          'A. Direct straight-line distance calculations.',
          'B. Routing engines calculating actual road network routes combined with historical and real-time traffic updates.',
          'C. Gateway connection latency logs.',
          'D. Consistent hashing index nodes.'
        ],
        ans: 'B',
        exp: 'ETA relies on road network graphs and traffic speeds rather than absolute physical distances.'
      }
    ]
  },
  {
    day: 21,
    date: '2026-07-11',
    title: 'Day 21 - Designing Amazon AWS S3 Storage',
    topic: 'HLD',
    description: 'Designing highly-durable object storage (AWS S3) with metadata databases, data partitioning, and replicas.',
    questions: [
      {
        q: 'Why does object storage (S3) separate file metadata from the actual binary file contents?',
        options: [
          'A. Because metadata cannot be stored on disk.',
          'B. To query and update metadata (size, ACL, type) quickly in a structured database without opening massive binary files.',
          'C. To encrypt the files.',
          'D. Object storage does not store files.'
        ],
        ans: 'B',
        exp: 'Separating metadata (stored in NoSQL or SQL indexes) from the actual binary data (stored on object blocks) improves throughput and lookup speeds.'
      },
      {
        q: 'How does object storage ensure 99.999999999% (11 9s) of data durability?',
        options: [
          'A. By keeping files on client systems.',
          'B. By replicating object chunks across multiple servers, racks, and availability zones, or using erasure coding.',
          'C. By caching database logs.',
          'D. By storing files in RAM.'
        ],
        ans: 'B',
        exp: 'Durability is achieved by distributing copies globally across racks or splitting files into parity fragments using erasure coding.'
      },
      {
        q: 'What is the role of the Directory Service (Index) in Object Storage?',
        options: [
          'A. To transcode media.',
          'B. To map the file key to the specific physical block storage nodes where file chunks reside.',
          'C. To verify client payment status.',
          'D. To compress local system files.'
        ],
        ans: 'B',
        exp: 'The directory service translates user-facing keys (e.g. `bucket/img.png`) into physical block locations on storage nodes.'
      }
    ]
  }
];

const timing = '9:00 AM - 10:00 AM IST';

const formatMarkdown = (day) => {
  let content = `---
title: "${day.title}"
topic: "${day.topic}"
date: "${day.date}"
timing: "${day.timing || timing}"
description: "${day.description}"
---

# ${day.title}
Class Timing: ${day.timing || timing}

Welcome to the daily assessment for **${day.title}**.
Please attempt all questions below. Explanations will unlock after submission.

`;

  day.questions.forEach((q, qidx) => {
    content += `---

Q${qidx + 1}. ${q.q}

`;
    q.options.forEach(opt => {
      content += `${opt}\n`;
    });
    content += `
Answer:

✅ ${q.ans}. ${q.options.find(o => o.startsWith(q.ans)).substring(3)}

Explanation:

${q.exp}

`;
  });

  return content;
};

// Write files
days.forEach(day => {
  const filename = `day${day.day}_${day.title.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_')}.md`;
  const filepath = path.join(docsDir, filename);
  const markdown = formatMarkdown(day);
  fs.writeFileSync(filepath, markdown, 'utf-8');
  console.log(`Saved: ${filename}`);
});

console.log('🎉 All 21 syllabus assessments written successfully!');
