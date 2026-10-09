# Career Explorer Dataset & Import Guide

This dataset contains structured, genuine career information for the **Career Explorer** project.

---

## 📁 Dataset Files Overview

All dataset files are located in `backend/data/`:

| File Name | Document Count | Description | Referenced By |
|---|---|---|---|
| [`categories.json`](file:///c:/Users/durga/OneDrive/Desktop/career%20explorer/backend/data/categories.json) | 8 Categories | Major academic & industry categories requested (Technology, Engineering, Healthcare, Business and Finance, Science and Research, Arts and Design, Education, Government and Public Services). | Careers, Subjects, Skills |
| [`subjects.json`](file:///c:/Users/durga/OneDrive/Desktop/career%20explorer/backend/data/subjects.json) | 20 Subjects | High school and college academic subjects. | Careers |
| [`skills.json`](file:///c:/Users/durga/OneDrive/Desktop/career%20explorer/backend/data/skills.json) | 20 Skills | Technical, analytical, and professional skill sets. | Careers |
| [`careers.json`](file:///c:/Users/durga/OneDrive/Desktop/career%20explorer/backend/data/careers.json) | 20 Careers | Full career profiles matching all 20 specified careers with salary ranges, job outlook, education, and work environment. | Roadmaps, AlternativeCareers |
| [`roadmaps.json`](file:///c:/Users/durga/OneDrive/Desktop/career%20explorer/backend/data/roadmaps.json) | 20 Roadmaps | Structured milestone learning roadmaps with estimated times and curated learning resources. | Careers |
| [`alternativeCareers.json`](file:///c:/Users/durga/OneDrive/Desktop/career%20explorer/backend/data/alternativeCareers.json) | 14 Mappings | Meaningful alternative/related career mappings with detailed similarity notes. | Careers |

---

## 🔗 Reference Graph & ObjectIds

All documents utilize deterministic 24-character hexadecimal ObjectIds (`"$oid"` Extended JSON format) to guarantee relational integrity across MongoDB collections:

```
Category (650000000000000000000101..108)
  │
  ├──► Subject (650000000000000000000201..220) ──┐
  ├──► Skill (650000000000000000000301..320) ────┼──► Career (650000000000000000000401..420)
  │                                                                 │
  └─────────────────────────────────────────────────────────────────┼──► Roadmap (650000000000000000000501..520)
                                                                    └──► AlternativeCareer (650000000000000000000601..614)
```

---

## 🚀 How to Import Data into MongoDB Atlas

### Option 1: Using the Included Standalone Script (Recommended)

From the `backend` folder, run the following command when you are ready to seed your MongoDB database:

```bash
cd backend
node scripts/importData.js --import
```

> **Note**: This script will connect to the `MONGODB_URI` in your `backend/.env` file, populate all 6 collections, and preserve existing User accounts, Saved Careers, and Roadmap Progress records.

---

### Option 2: Using `mongoimport` CLI Tool

If you prefer using the native MongoDB Command Line Tools:

```bash
mongoimport --uri "<YOUR_MONGODB_URI>" --collection categories --file backend/data/categories.json --jsonArray
mongoimport --uri "<YOUR_MONGODB_URI>" --collection subjects --file backend/data/subjects.json --jsonArray
mongoimport --uri "<YOUR_MONGODB_URI>" --collection skills --file backend/data/skills.json --jsonArray
mongoimport --uri "<YOUR_MONGODB_URI>" --collection careers --file backend/data/careers.json --jsonArray
mongoimport --uri "<YOUR_MONGODB_URI>" --collection roadmaps --file backend/data/roadmaps.json --jsonArray
mongoimport --uri "<YOUR_MONGODB_URI>" --collection alternativecareers --file backend/data/alternativeCareers.json --jsonArray
```

---

## 🔍 How to Verify the Imported Records

1. **Via Web API**:
   - `GET http://localhost:5000/api/categories` -> Returns 8 categories.
   - `GET http://localhost:5000/api/careers` -> Returns 20 populated career profiles.
   - `GET http://localhost:5000/api/roadmaps` -> Returns 20 career learning roadmaps.

2. **Via MongoDB Compass**:
   - Connect MongoDB Compass to your Atlas cluster.
   - Inspect the `career_explorer` database collections: `categories`, `subjects`, `skills`, `careers`, `roadmaps`, and `alternativecareers`.

---

## ⚠️ Important Compliance Notes

- **No Auto-Seeding**: The application server (`server.js`) does NOT execute dataset seeding automatically on startup.
- **Zero Database Writes Performed**: No database connection or write operations were executed during dataset preparation stage.
- **Data Integrity**: Salary ranges are estimates provided in USD. No fake passwords, mock user accounts, or fake statistics were generated.
