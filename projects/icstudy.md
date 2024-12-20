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

## What is a ICStudy?  
ICStudy is a web app that my group, ‘The Software Developers’, made to help UH Manoa students connect and study together. It’s built using a Next.js template and was our final project for ICS 314. The idea is simple: students are able to create study sessions on the site, and others can join them. It’s a way to make studying more social and productive.
<br/>

## Cool Features

### User Registration with Email Verification  
- To keep it exclusive to UH students, we added an email verification system. Only UH emails work for signing up. This was done using nodemailer and connecting it to a gmail account.

### Create and Join Study Sessions  
- Students are able to make their own study session with details like topic, time slot, location and other details that the student would like to add.  
- Other students are able to browse and join sessions that work for them.  

### Profile Page  
Every registered user can get a profile where they can:  
- See what study sessions they have joined.  
- Keep track of their activity on the app.  

### Leaderboard System  
- We made studying competitive by giving points for attending sessions.  
- There's a leaderboard to see whos the most active.  

### Admin Page  
Admins have their own page where they can:  
- Ban or unban users.  
- Manage study sessions to keep everything running smoothly. 
<br/> 

## How We Built It

### Tech Stack:  
- We used Next.js as the main framework since it’s great for server-side rendering and user experience.  
- PostgreSQL was our database since it’s reliable and scalable for handling user data, study session, and the leaderboard system.  
- The app is hosted on Vercel, which made deployment simple and ensured fast performance for users.  

### Teamwork:  
Our group of five divided tasks to cover everything, like frontend design, backend logic, and testing.  

### Challenges:  
- Setting up email verification was tricky, but after researching and testing, we got it working.  
- Designing the admin controls was also hard to make powerful but also fair.  
<br/>

## Why It’s Great  
ICStudy makes studying more fun and collaborative. It’s a good way for students to meet new people and stay on top of their work even with a little bit of competition with a leaderboard. This project shows what we learned in ICS 314 about building real-world, user-friendly apps.  


You can view the source code [here](https://github.com/thesoftwaredevelopers/TheSoftwareDevelopers).

<br/>