---
title: "Day 17 - Designing YouTube: Part 1"
topic: "HLD"
date: "2026-07-07"
timing: "9:00 AM - 10:00 AM IST"
description: "Designing high-level video upload pipelines, encoding/transcoding architectures."
---

# Day 17 - Designing YouTube: Part 1
Class Timing: 9:00 AM - 10:00 AM IST

Welcome to the daily assessment for **Day 17 - Designing YouTube: Part 1**.
Please attempt all questions below. Explanations will unlock after submission.

---

Q1. Why is a "Video Transcoding" pipeline necessary for systems like YouTube?

A. To encrypt video titles.
B. To convert uploaded videos into multiple resolutions and formats (e.g. 1080p, 480p, HLS, DASH) for different devices and bandwidths.
C. To detect copyright issues using GPU memory.
D. To compress databases.

Answer:

✅ B. To convert uploaded videos into multiple resolutions and formats (e.g. 1080p, 480p, HLS, DASH) for different devices and bandwidths.

Explanation:

Transcoding converts source videos to adaptive bitrate streaming profiles to play smoothly across varying network speeds.

---

Q2. How should video upload tasks be processed to avoid overloading backend web servers?

A. Synchronously, locking the web thread until the entire file is fully processed.
B. Asynchronously, uploading chunks to object storage and queueing transcoding tasks in message queues (like Kafka) for workers.
C. Restricting uploads to local systems.
D. Caching entire raw videos in Redis memory.

Answer:

✅ B. Asynchronously, uploading chunks to object storage and queueing transcoding tasks in message queues (like Kafka) for workers.

Explanation:

Using message queues lets transcoding worker clusters consume and process video files asynchronously at their own pace.

---

Q3. What is the role of a Coordinator server in video upload steps?

A. To compress audio files.
B. To manage upload sessions, assign target storage regions, and update metadata DB entries.
C. To display visual player controls.
D. To configure CDN routers.

Answer:

✅ B. To manage upload sessions, assign target storage regions, and update metadata DB entries.

Explanation:

Coordinators track upload status and trigger encoding actions once the file chunk upload finishes.

