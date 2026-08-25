# SkillGraph

### Graph-Powered Skill Gap & Job Recommendation System

SkillGraph is a full-stack application that helps users identify suitable job roles based on their existing technical skills. It uses a graph database to establish relationships between students, skills, jobs, and required skills, enabling skill matching and gap analysis.

---

## 📌 Project Overview

SkillGraph analyzes a user's current skill set and recommends job roles based on how closely their skills match the skills required for each job.

For each recommended job, the system provides:

- Current skills available in the user's profile
- Number of matched skills
- Total required skills
- Overall skill match percentage
- Skills that are missing for the selected job

The application demonstrates how graph database relationships can be used to build a skill-based recommendation system.

---

## ✨ Key Features

- 👤 User skill profile management
- 🔍 Skill-based job recommendations
- 📊 Job match percentage calculation
- 🎯 Best job match identification
- 📋 Detailed skill gap analysis
- ✅ Identification of available skills
- ❌ Identification of missing skills
- 🌐 REST APIs using Spring Boot
- ⚛️ Interactive React dashboard
- 🗄️ Graph-based data management using CognoDB

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Backend | Java, Spring Boot |
| Database | CognoDB |
| Query Language | Cypher |
| Build Tool | Maven |
| Frontend Tool | Vite |
| Version Control | Git & GitHub |

---

## 🏗️ System Architecture

```text
                ┌──────────────────────┐
                │    React Frontend    │
                │   SkillGraph UI      │
                └──────────┬───────────┘
                           │
                           │ REST API
                           ▼
                ┌──────────────────────┐
                │    Spring Boot       │
                │      Backend         │
                └──────────┬───────────┘
                           │
                           │ Cypher Queries
                           ▼
                ┌──────────────────────┐
                │       CognoDB        │
                │   Graph Database     │
                └──────────────────────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           Students      Skills        Jobs
                           │
                           ▼
                    Required Skills
