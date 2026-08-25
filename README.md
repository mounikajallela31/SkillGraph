# SkillGraph

### Graph-Powered Skill Gap & Job Recommendation System

SkillGraph is a full-stack application that helps users identify suitable job roles based on their existing technical skills.

The application uses a graph database to represent relationships between students, skills, jobs, and required skills. These relationships are used to calculate skill matches, recommend suitable jobs, and identify missing skills.

---

## 📌 Project Overview

SkillGraph analyzes a user's current skill set and recommends job roles based on how closely their skills match the skills required for each job.

For each recommended job, the system provides:

- Current skills available in the user's profile
- Number of matched skills
- Total required skills
- Overall skill match percentage
- Skills that are missing for the selected job

The project demonstrates how a graph database can be used to build a skill-based job recommendation and skill-gap analysis system.

---

## 🎯 Use Case

Students and job seekers often know their current technical skills but may not know which job roles are the best match for their profile.

SkillGraph solves this problem by:

1. Identifying the skills associated with a student.
2. Finding job roles and their required skills.
3. Comparing the student's skills with job requirements.
4. Calculating the percentage of matching skills.
5. Ranking suitable job roles.
6. Identifying skills that the student is missing.

This helps users understand both their suitable career opportunities and the skills they need to improve.

---

## 🧠 Why a Graph Database?

A graph database is suitable for SkillGraph because the core of the application is based on relationships.

The system contains relationships such as:

- Student → HAS_SKILL → Skill
- Job → REQUIRES → Skill

For example:

Student
   |
   | HAS_SKILL
   ↓
 Skill
   ↑
   | REQUIRES
   |
  Job

Using a graph model makes it natural to traverse these relationships and determine which jobs are connected to the skills a student already has.

This approach is useful for:

- Skill matching
- Job recommendations
- Skill-gap analysis
- Relationship-based queries
- Future expansion to more students, skills, and jobs

---

## ✨ Key Features

- 👤 Student skill profile analysis
- 🔍 Skill-based job recommendations
- 📊 Job match percentage calculation
- 🎯 Best job match identification
- 📋 Detailed skill-gap analysis
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

                 ┌──────────────────────┐
                 │    React Frontend    │
                 │     SkillGraph UI    │
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
                 │    Graph Database    │
                 └──────────┬───────────┘
                            │
                ┌───────────┼───────────┐
                ▼           ▼           ▼
             Students     Skills       Jobs
                            │
                            ▼
                     Required Skills

---

## 🕸️ Data Model

The main entities and relationships are:

┌──────────────┐
│   Student    │
└──────┬───────┘
       │
       │ HAS_SKILL
       ▼
┌──────────────┐
│    Skill     │
└──────▲───────┘
       │
       │ REQUIRES
       │
┌──────┴───────┐
│     Job      │
└──────────────┘

### Main Nodes

- Student – represents a student's profile.
- Skill – represents a technical skill.
- Job – represents a job role.

### Main Relationships

- HAS_SKILL – connects a student with their existing skills.
- REQUIRES – connects a job with the skills required for that job.

---

## 🔄 Application Workflow

Student Profile
      │
      ▼
Retrieve Existing Skills
      │
      ▼
Compare With Job Requirements
      │
      ▼
Calculate Skill Match
      │
      ├───────────────┐
      ▼               ▼
Job Recommendation   Skill Gap
      │               │
      ▼               ▼
Match Percentage   Have / Missing

---

## 📊 Example

### User Skills

The application currently demonstrates a user profile containing:

Java
SQL
Spring Boot

### Job Recommendations

| Rank | Job Role | Matched Skills | Required Skills | Match |
|---|---|---:|---:|---:|
| #1 | Full Stack Developer | 3 | 4 | 75% |
| #2 | Java Backend Developer | 3 | 5 | 60% |

### Skill Gap Analysis

For Full Stack Developer:

| Required Skill | Status |
|---|---|
| Java | ✅ Have |
| SQL | ✅ Have |
| Spring Boot | ✅ Have |
| Git | ❌ Missing |

This allows users to understand which job roles best match their current skills and which additional skills they need to develop.

---

## 🔌 REST API Endpoints

### Test CognoDB Connection

GET /api/test/cognodb

Example:

http://localhost:8080/api/test/cognodb

Expected response:

CognoDB connection successful!

### Get Student Skills

GET /api/students/{name}/skills

Example:

http://localhost:8080/api/students/Mounika/skills

### Get Job Recommendations

GET /api/students/{name}/recommendations

Example:

http://localhost:8080/api/students/Mounika/recommendations

### Get Skill Gap

GET /api/students/{name}/job/{jobId}/skill-gap

Example:

http://localhost:8080/api/students/Mounika/job/2/skill-gap

---

## 🧾 Main Query Logic

SkillGraph uses Cypher queries to work with relationships between students, skills, and jobs.

### 1. Retrieve Student Skills

The application finds the skills connected to a student through the HAS_SKILL relationship.

### 2. Find Job Recommendations

The application compares the student's existing skills with the skills required by available jobs.

### 3. Calculate Skill Match

The matching skills are counted and compared with the total number of skills required by a job.

Match Percentage =
(Matched Skills / Total Required Skills) × 100

### 4. Identify Skill Gap

For a selected job, the application compares the student's skills with the required skills and identifies:

Have
Missing

The Cypher query logic used by the application is implemented in the backend source code.

---

## 📁 Project Structure

SkillGraph/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/skillgraph/
│   │   │       └── skillgraph_backend/
│   │   │           ├── SkillgraphBackendApplication.java
│   │   │           └── config/
│   │   │               ├── CognoDBConfig.java
│   │   │               └── CognoDBTestController.java
│   │   └── resources/
│   │       └── application.properties
│   │
│   └── test/
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md

---

# ⚙️ Backend Setup

## 1. Clone the Repository

git clone https://github.com/mounikajallela31/SkillGraph.git
cd SkillGraph

## 2. Configure CognoDB

Update the CognoDB connection details in:

src/main/resources/application.properties

The application requires:

CognoDB URI
Username
Password

> Security: Never commit database passwords, API keys, or other sensitive credentials to a public GitHub repository.

## 3. Run the Spring Boot Backend

From the project root:

mvnw spring-boot:run

On Windows, you can also use:

mvnw.cmd spring-boot:run

The backend runs on:

http://localhost:8080

Keep this terminal running while using the application.

---

# 💻 Frontend Setup

Open a new terminal and navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm run dev

The frontend will be available at:

http://localhost:5173

Keep this terminal running while using the application.

---

# 🗄️ CognoDB Setup

The application uses CognoDB as its graph database.

The CognoDB connection details are configured in:

src/main/resources/application.properties

Configure the CognoDB URI, username, and password according to the CognoDB instance used for the project.

After configuring the database and starting the Spring Boot backend, test the connection using:

GET /api/test/cognodb

Expected response:

CognoDB connection successful!

For security, database credentials should be stored using environment variables or secure configuration mechanisms when deploying the application.

---

# 🧪 Testing

The application was tested using the following APIs.

### CognoDB Connection

CognoDB connection successful!

### Student Skills

[
  {
    "skill": "Java"
  },
  {
    "skill": "SQL"
  },
  {
    "skill": "Spring Boot"
  }
]

### Job Recommendations

[
  {
    "job": "Full Stack Developer",
    "matchedSkills": 3,
    "totalSkills": 4,
    "matchPercentage": 75.0
  },
  {
    "job": "Java Backend Developer",
    "matchedSkills": 3,
    "totalSkills": 5,
    "matchPercentage": 60.0
  }
]

### Skill Gap

For the Full Stack Developer role:

Java        → Have
SQL         → Have
Spring Boot → Have
Git         → Missing

---

# 🖥️ UI Screenshots

Screenshots of the running SkillGraph application should be added to this section.

Recommended screenshots:

1. Main SkillGraph dashboard
2. Student skills section
3. Job recommendations
4. Skill-gap analysis

After uploading screenshots to the repository, use:

![SkillGraph Dashboard](screenshots/dashboard.png)

![Job Recommendations](screenshots/recommendations.png)

![Skill Gap Analysis](screenshots/skill-gap.png)

---

# 🎯 Use Cases

SkillGraph can be useful for:

- Students exploring suitable career paths
- Job seekers identifying suitable roles
- Developers identifying technical skill gaps
- Career guidance platforms
- Educational platforms
- Skill assessment systems
- Personalized learning recommendations

---

# 🚀 Future Enhancements

Potential future improvements include:

- User authentication and authorization
- Support for multiple student profiles
- More job roles and technical skills
- Personalized learning recommendations
- Skill-priority based learning paths
- Job-market based recommendations
- Interactive graph visualization
- Admin dashboard for managing jobs and skills
- Advanced recommendation algorithms

---

# 🔐 Security Note

Sensitive credentials such as database passwords should be stored using environment variables or secure configuration mechanisms instead of committing them directly to source control.

For production deployments, environment-specific configuration and secret management should be used.

---

# 🌐 Demo

Hosted application:

https://skill-graph-brown.vercel.app/

---

# 🎥 Screen Recording

A short screen recording demonstrating the SkillGraph application should be submitted along with the assignment.

The recording should demonstrate:

1. Opening the SkillGraph application
2. Student skill information
3. Job recommendations
4. Match percentage
5. Skill-gap analysis
6. CognoDB connection/API functionality

---

# 📦 Assignment Deliverables

The project submission includes:

- GitHub repository containing the complete source code
- README with project overview and use case
- Explanation of why a graph database is used
- Data model and system architecture
- CognoDB configuration and setup instructions
- Main REST API endpoints
- Query logic explanation
- UI screenshots
- Hosted application demo link
- Short screen recording

---

# 👩‍💻 Author

Mounika Jallela

Java | Spring Boot | React | CognoDB

---

# 📄 License

This project was developed for learning, demonstration, and assessment purposes.
