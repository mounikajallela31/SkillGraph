# SkillGraph

### Graph-Powered Skill Gap & Job Recommendation System

SkillGraph is a full-stack application that helps users identify suitable job roles based on their existing technical skills. It uses a graph database to establish relationships between students, skills, jobs, and required skills, enabling skill matching and skill-gap analysis.

---

## 📌 Project Overview

SkillGraph analyzes a user's current skill set and recommends job roles based on how closely their skills match the skills required for each job.

For each recommended job, the system provides:

- Current skills available in the user's profile
- Number of matched skills
- Total required skills
- Overall skill match percentage
- Skills that are missing for the selected job

The application demonstrates how graph database relationships can be used to build a skill-based job recommendation system.

---

## ✨ Key Features

- 👤 User skill profile analysis
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

```text
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
```

---

## 🔄 Application Workflow

```text
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
```

---

## 📊 Example

### User Skills

The application currently demonstrates a user profile containing:

- Java
- SQL
- Spring Boot

### Job Recommendations

| Rank | Job Role | Matched Skills | Required Skills | Match |
|---|---|---:|---:|---:|
| #1 | Full Stack Developer | 3 | 4 | 75% |
| #2 | Java Backend Developer | 3 | 5 | 60% |

### Skill Gap Analysis

For **Full Stack Developer**:

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

`GET /api/test/cognodb`

### Get Student Skills

`GET /api/students/{name}/skills`

Example:

`GET /api/students/Mounika/skills`

### Get Job Recommendations

`GET /api/students/{name}/recommendations`

Example:

`GET /api/students/Mounika/recommendations`

### Get Skill Gap

`GET /api/students/{name}/job/{jobId}/skill-gap`

Example:

`GET /api/students/Mounika/job/{jobId}/skill-gap`

---

## 📁 Project Structure

```text
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
│   │   └── resources/
│   │       └── application.properties
│   │
│   └── test/
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

## ⚙️ Backend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mounikajallela31/SkillGraph.git
cd SkillGraph
```

### 2. Configure CognoDB

Update the CognoDB connection details in:

`src/main/resources/application.properties`

The application requires:

- CognoDB URI
- Username
- Password

> **Security:** Never commit database passwords or other sensitive credentials to a public GitHub repository.

### 3. Run the Spring Boot Backend

Using the Maven Wrapper:

```bash
mvnw spring-boot:run
```

The backend runs on:

`http://localhost:8080`

---

## 💻 Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will be available on:

`http://localhost:5173`

---

## 🧪 Testing

The application was tested using the following APIs.

### CognoDB Connection

```text
CognoDB connection successful!
```

### Student Skills

```json
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
```

### Job Recommendations

```json
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
```

### Skill Gap

For the Full Stack Developer role:

```text
Java        → Have
SQL         → Have
Spring Boot → Have
Git         → Missing
```

---

## 🎯 Use Cases

SkillGraph can be useful for:

- Students exploring suitable career paths
- Job seekers identifying suitable roles
- Developers identifying technical skill gaps
- Career guidance platforms
- Educational platforms
- Skill assessment systems
- Personalized learning recommendations

---

## 🚀 Future Enhancements

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

## 🔐 Security Note

Sensitive credentials such as database passwords should be stored using environment variables or secure secret-management systems instead of committing them to source control.

For production deployments, environment-specific configuration and secret management should be used.

---

## 👩‍💻 Author

**Mounika Jallela**

Java | Spring Boot | React | CognoDB

---

## 📄 License

This project was developed for learning, demonstration, and assessment purposes.
