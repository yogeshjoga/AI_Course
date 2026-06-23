---
title: "Introduction to Computers & AI Hardware"
topic: "Intro Module"
date: "2026-06-16"
timing: "9:00 AM - 10:00 AM IST"
description: "Understanding CPUs, GPUs, TPUs, VRAMs, NPUs, CUDA Cores, and NVIDIA GPU architectures."
---

# Introduction to Computers & AI Hardware
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 2 - Introduction to Computers & AI Hardware**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. What is the primary responsibility of a CPU?

A. Store files permanently
B. Display graphics only
C. Execute instructions and manage system operations
D. Train AI models only

Answer:

✅ C. Execute instructions and manage system operations

Explanation:

The CPU is the general-purpose processor that executes programs, runs operating systems, handles business logic, and coordinates other hardware components.

---

Q2. Why are GPUs preferred over CPUs for AI workloads?

A. GPUs have larger screens
B. GPUs consume no power
C. GPUs can perform many calculations simultaneously
D. GPUs replace RAM

Answer:

✅ C. GPUs can perform many calculations simultaneously

Explanation:

AI involves billions of similar mathematical operations. GPUs excel at parallel processing, allowing thousands of calculations to happen simultaneously.

---

Q3. Which statement best describes parallel processing?

A. Tasks executed one after another
B. Multiple tasks executed simultaneously
C. Storing data permanently
D. Compressing files

Answer:

✅ B. Multiple tasks executed simultaneously

Explanation:

Parallel processing allows many calculations to run at the same time, significantly speeding up AI workloads.

---

Q4. What is a CUDA Core?

A. GPU Storage Device
B. Small processing unit inside NVIDIA GPUs
C. CPU Cache Memory
D. Operating System Module

Answer:

✅ B. Small processing unit inside NVIDIA GPUs

Explanation:

CUDA Cores are the workers inside NVIDIA GPUs that perform mathematical operations in parallel.

---

Q5. Why is CUDA important for AI?

A. It increases monitor resolution
B. It allows developers to use GPUs for general-purpose computing and AI
C. It stores model files
D. It replaces CPUs

Answer:

✅ B. It allows developers to use GPUs for general-purpose computing and AI

Explanation:

CUDA transformed GPUs from graphics-only processors into programmable devices for AI, ML, and scientific computing.

---

Q6. Which company created CUDA?

A. Google
B. AMD
C. Intel
D. NVIDIA

Answer:

✅ D. NVIDIA

Explanation:

CUDA (Compute Unified Device Architecture) is NVIDIA's platform for GPU computing.

---

Q7. What is VRAM?

A. CPU Memory
B. Permanent Storage
C. GPU Memory
D. Network Cache

Answer:

✅ C. GPU Memory

Explanation:

VRAM stores AI model weights, tensors, and intermediate calculations directly on the GPU.

---

Q8. Why can't a 70B parameter model run on many laptops?

A. Laptop screens are too small
B. Insufficient VRAM and compute power
C. CPU is missing
D. Windows does not support AI

Answer:

✅ B. Insufficient VRAM and compute power

Explanation:

Large models require massive GPU memory and computational resources.

---

Q9. What does RAM primarily store?

A. Permanent Files
B. Temporary Working Data
C. GPU Drivers Only
D. Internet Connections

Answer:

✅ B. Temporary Working Data

Explanation:

RAM holds currently active applications and data while the system is running.

---

Q10. Which memory loses its contents when power is removed?

A. SSD
B. HDD
C. ROM
D. RAM

Answer:

✅ D. RAM

Explanation:

RAM is volatile memory, meaning its data disappears when power is lost.

---

Q11. What is ROM?

A. Read Only Memory
B. Random Operations Memory
C. Runtime Optimization Module
D. Rapid Output Machine

Answer:

✅ A. Read Only Memory

Explanation:

ROM stores firmware and startup instructions required for system booting.

---

Q12. What is a TPU?

A. Temporary Processing Unit
B. Tensor Processing Unit
C. Training Power Unit
D. Task Processing Unit

Answer:

✅ B. Tensor Processing Unit

Explanation:

TPUs are specialized chips designed specifically for AI and machine learning workloads.

---

Q13. Which company developed TPUs?

A. Microsoft
B. NVIDIA
C. Google
D. AMD

Answer:

✅ C. Google

Explanation:

Google developed TPUs to accelerate AI training and inference for products such as Gemini.

---

Q14. What is an NPU?

A. Neural Processing Unit
B. Network Processing Unit
C. Numeric Processing Unit
D. Node Processing Unit

Answer:

✅ A. Neural Processing Unit

Explanation:

NPUs are specialized AI accelerators commonly found in modern laptops and smartphones.

---

Q15. Which chip is commonly used for running AI locally on laptops and mobile devices?

A. TPU
B. GPU Cluster
C. NPU
D. HDD

Answer:

✅ C. NPU

Explanation:

NPUs provide efficient AI processing with lower power consumption.

---

Q16. Why is Matrix Multiplication important in AI?

A. It creates databases
B. It performs the core mathematical computations in neural networks
C. It stores images
D. It manages operating systems

Answer:

✅ B. It performs the core mathematical computations in neural networks

Explanation:

Most AI computations are based on matrix and tensor operations.

---

Q17. During LLM inference, what is happening internally?

A. Files are copied repeatedly
B. Massive matrix and tensor calculations occur to predict the next token
C. Only storage devices are used
D. The monitor generates responses

Answer:

✅ B. Massive matrix and tensor calculations occur to predict the next token

Explanation:

Every generated token requires neural network computations involving billions of parameters.

---

Q18. What is a Tensor?

A. A database table
B. A multidimensional array used in AI computations
C. A programming language
D. A network protocol

Answer:

✅ B. A multidimensional array used in AI computations

Explanation:

Tensors are the fundamental data structures used by frameworks like PyTorch and TensorFlow.

---

Q19. Which comparison is most accurate?

A. CPU = Thousands of workers, GPU = Manager
B. CPU = Manager, GPU = Thousands of workers
C. CPU = Storage, GPU = RAM
D. CPU = Internet, GPU = Database

Answer:

✅ B. CPU = Manager, GPU = Thousands of workers

Explanation:

The CPU coordinates and controls tasks, while the GPU performs large-scale parallel computations.

---

Q20. When ChatGPT generates a response, which sequence best represents the hardware stack?

A. Monitor → Keyboard → RAM
B. Storage → Internet → Mouse
C. CPU + RAM + GPU + VRAM working together
D. SSD only

Answer:

✅ C. CPU + RAM + GPU + VRAM working together

Explanation:

The CPU manages execution, RAM stores active data, GPU performs AI calculations, and VRAM stores model weights and tensors.

---

Q21. Which component will most likely limit running a very large LLM?

A. CPU cores
B. Keyboard
C. VRAM
D. Monitor

Answer:

✅ C. VRAM

Explanation:

For modern LLMs, GPU memory (VRAM) is usually the primary bottleneck because model weights must fit inside GPU memory for efficient inference.

