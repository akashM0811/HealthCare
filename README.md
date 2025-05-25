# 🩺 HealthCare Dashboard (React - Static Display)

This project is a **pixel-perfect static Healthcare Dashboard** built using **React**, styled with **Tailwind CSS**, and powered by **Vite** for fast development. The goal of this assignment was to accurately recreate the layout and design from the provided reference image, focusing on component reusability, clean styling, and full responsiveness.

### 🔗 Live Demo
👉 [View Hosted Dashboard](https://akashm0811.github.io/HealthCare/)  
👉 [Design Reference Image](https://i.ibb.co/B2DdGkgF/Screenshot-2025-05-23-at-3-31-31-PM.png)

---

## 📌 Objective

> Implement a **visually faithful, static** React-based healthcare dashboard that mirrors the provided UI reference without adding interactive logic or backend integrations.

---

## 🛠️ Tech Stack

- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

---

## 🧩 Components Overview

### 🧱 App.jsx
- Root component managing layout with Sidebar, Header, and main dashboard content.

### 📌 Sidebar.jsx
- Vertical navigation with static links like Dashboard, History, Calendar, etc.

### 🧭 Header.jsx
- Contains logo/title, search bar, notification icon, user avatar.

### 📊 DashboardMainContent.jsx
- Wraps all sub-components rendered inside the main dashboard area.

### 🧬 AnatomySection.jsx
- Displays a human anatomy image with status tags (e.g., Healthy Heart, Bone).

### 💳 HealthStatusCards.jsx
- Static cards for health indicators like Lungs, Teeth, Bone.

### 🗓️ CalendarView.jsx
- A static monthly calendar with static appointment highlights and appointment cards.

### 📆 UpcomingSchedule.jsx
- Shows "The Upcoming Schedule" organized by day using `SimpleAppointmentCard`.

### 📈 ActivityFeed.jsx
- A bar-chart styled section showing weekly appointment stats.

### 🧾 SimpleAppointmentCard.jsx
- Reusable card component used in the schedule list.

---

## 🧪 Static Data Handling

- All components receive **hardcoded mock data via props**.
- No hooks like `useState` or `useEffect` are used.
- Pure static rendering as per assignment instructions.

---

## 📱 Responsiveness

- Tailwind CSS used extensively to make the layout responsive across:
  - Mobile 📱
  - Tablet 💻
  - Desktop 🖥️

---

## 🚀 Getting Started

### Clone & Run

```bash
git clone https://github.com/akashm0811/HealthCare.git
cd HealthCare
npm install
npm run dev

