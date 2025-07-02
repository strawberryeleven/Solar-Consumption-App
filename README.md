# Solar Consumption System

A minimal, database-driven web app to help households track, analyze, and optimize their solar energy usage from solar panels.

---

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

---

## Description
Solar Consumption System is a full-stack web application designed for households to monitor their solar energy production and consumption. Built as a Database Lab project, it provides clear dashboards, cost and savings analytics, and real-time alerts for abnormal usage. The system is structured for efficient querying and personalized insights.

---

## Features
- Input import/export readings for peak and non-peak hours
- Calculate net electricity usage, home consumption, and daily cost
- Visualize long-term production and savings trends
- Track installation payback and estimated savings
- Monitor reduced carbon footprint
- Alerts for abnormal usage

---

## Technologies Used
- React.js
- Tailwind CSS
- Node.js
- Express.js
- SQL Server

---

## Installation
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd Solar-Consumption-App
   ```
2. **Install dependencies:**
   ```bash
   cd client-frontend && npm install
   cd ../server-backend && npm install
   ```
3. **Configure the database:**
   - Set up a SQL Server instance and update backend config.
4. **Run the backend:**
   ```bash
   cd server-backend
   npm start
   ```
5. **Run the frontend:**
   ```bash
   cd client-frontend
   npm start
   ```

---

## Usage
- Access the frontend at [http://localhost:3000](http://localhost:3000)
- Enter your solar import/export readings and explore your energy dashboard

---

## Contributors
- Muhammad Ibrahim Zafar
- Hafiz Ibrahim Gul Butt
- Shaheer Hashmi
- Ahmad Nadeem 

---

## License
This project is for educational purposes only.

---

## Note from the Developer
> In my rookie days, I unknowingly uploaded the `.env` file to the repo. Luckily, the database was local, so no harm done—but hey, lesson learned: don't let your secrets go public! 😅 
