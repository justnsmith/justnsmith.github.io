---
layout: project
type: project
image: img/icstudy/logo.png
title: "ICStudy Project"
date: 2024
published: true
labels:
  - Full Stack Development
  - Team Project
  - Educational Tool
summary: "Web application to help UH Manoa students conect through creating and joining study sessions."
---

<div class="text-center p-4">
  <img width="700px" src="../img/icstudy/homepage.png" class="img-thumbnail">
</div>

## What is ICStudy?  
**ICStudy** is a web app that our group, **The Software Developers**, created to help UH Mānoa students connect and study together. It’s built using a Next.js template and served as the final project for ICS 314. The idea is simple: students can create study sessions on the site, and others can join them, making studying more social and productive.

---

## Cool Features

### 1. User Registration with Email Verification  
- Exclusively for UH students, registration requires email verification through **Nodemailer**, which connects to a Gmail account.  

### 2. Create and Join Study Sessions  
- Students can create their own study sessions with details like:  
  - **Topic**  
  - **Time Slot**  
  - **Location**  
  - Other session-specific details.  
- Other users can browse and join sessions that fit their schedule.

### 3. Profile Page  
Each registered user has a profile where they can:  
- View all the study sessions they’ve joined.  
- Track their activity on the app.  

### 4. Leaderboard System  
- **Points System:** Earn points by attending study sessions.  
- **Leaderboard:** See who’s the most active and competitive!  

### 5. Admin Page  
Admins have special privileges to:  
- Ban or unban users.  
- Manage study sessions to keep the platform organized.

---

## My Contributions
I contributed the following features to the ICStudy project:  
- Designed and implemented the **session mock-up page**.  
- Integrated **email verification** for new users.  
- Developed the **forgot password** feature linked with email.  
- Styled the **log in**, **log out**, and **sign-up** pages for a user-friendly interface.  

---

## What I Learned  
Working on ICStudy taught me:  
- How to effectively collaborate with a team to divide tasks and integrate individual contributions into a cohesive project.  
- The fundamentals of working with both **frontend** and **backend** technologies, including styling and database interaction.  

---

## How We Built It

### Tech Stack  
- **Next.js:** Chosen for its server-side rendering and smooth user experience.  
- **PostgreSQL:** Used as the database to handle:  
  - User data.  
  - Study sessions.  
  - The leaderboard system.  
- **Vercel:** Made deployment simple and ensured the app runs quickly and reliably.

### Teamwork  
Our group of five divided the workload to focus on:  
- Frontend design.  
- Backend logic.  
- Testing and debugging.  

### Challenges  
- **Email Verification:** Setting it up was a challenge, but research and persistence paid off.  
- **Admin Controls:** Designing them to be both functional and fair required careful planning.

---

## Why It’s Great  
ICStudy makes studying more enjoyable and collaborative. It’s a great way to meet new people, stay productive, and have a little friendly competition via the leaderboard. This project highlights everything we learned in ICS 314 about developing real-world, user-focused applications.  

You can view the source code [here](https://github.com/thesoftwaredevelopers/TheSoftwareDevelopers).

You can view the project page [here](https://thesoftwaredevelopers.github.io).