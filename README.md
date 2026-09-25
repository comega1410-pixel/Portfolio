# Choudhary Arpit Shailendra — MERN Stack Developer Portfolio

A professional, high-performance, responsive developer portfolio application built for **Choudhary Arpit Shailendra**, a MERN Stack Developer / Full-Stack JavaScript Developer based in Surat, Gujarat, India.

---

## Candidate Profile & Summary

- **Name**: Choudhary Arpit Shailendra
- **Location**: Surat, Gujarat, India
- **Role**: MERN Stack Developer / Full-Stack JavaScript Developer
- **Email**: `240610107013@gecpalanpur.ac.in`
- **Phone**: `+91-9558315513`
- **Education**: B.E. Computer Engineering, Government Engineering College Palanpur (2024–2028)
- **Academic Rank**: CGPA 9.5 / 10

---

## Key Features & Highlights

1. **Recruiter-Friendly Design**: Clean typography, dark navy & emerald/cyan aesthetic, glassmorphism, zero clutter, and WCAG-compliant color contrast.
2. **Interactive Robot Assistant**: Floating AI Bot avatar widget matching futuristic metallic styling. Displays candidate contact card (Name, Email, Mobile, LinkedIn, GitHub) on hover or click.
3. **Structured Tech Stack Grid**: Grouped technical skills (Languages, Frontend, Backend, Database, Tools) without misleading percentage bars.
4. **Featured Projects & Architectural Modals**:
   - **Airbnb Clone** (Major MERN Project)
   - **Full-Stack E-commerce Website** (React + Context API + Express + MongoDB)
   - **Blog Application** (JWT Authentication + Mongoose REST APIs)
   - *Includes deep-dive modal detailing frontend/backend architecture, database schemas, auth flows, REST endpoints, challenges & solutions.*
5. **Technology Filtering**: Dynamic filter buttons to inspect projects by tech stack (React, Node.js, MongoDB, Full Stack).
6. **Currently Improving Section**: Transparent learning roadmap highlighting next-level skills (TypeScript, Jest, Docker, CI/CD) with clear resume inclusion notice.
7. **Verified Education & Training**: Academic CGPA highlights + Delta MERN Stack Development Batch credentials.
8. **Contact Form**: Responsive contact form with client-side field validation, loading indicators, and clean feedback messaging.
9. **Dark / Light Theme Toggle**: Persistent theme switcher powered by React Context and `localStorage`.

---

## Technology Stack

- **Frontend**: React 18, JavaScript ES6+, React Router DOM, React Hooks, Context API
- **Icons**: Lucide React
- **Styling**: Vanilla CSS Modules with CSS Variables & Glassmorphic Utilities
- **Build Tool**: Vite

---

## Getting Started & Local Setup

### Prerequisites
- **Node.js**: v18+ or v20+
- **npm**: v9+ or v10+

### Installation & Launch

1. **Clone or Navigate to Project**:
   ```bash
   cd Portfolio-2
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

5. **Preview Production Build Locally**:
   ```bash
   npm run preview
   ```

---

## List of Placeholder URLs to Replace

Replace the following placeholder values in `src/data/candidate.js` and `src/data/projects.js` with your real production links before sharing with recruiters:

| Location | Key / Property | Current Placeholder | What to Replace With |
| :--- | :--- | :--- | :--- |
| `src/data/candidate.js` | `github` | `https://github.com/arpitchoudhary` | Your actual GitHub Profile URL |
| `src/data/candidate.js` | `linkedin` | `https://linkedin.com/in/arpitchoudhary` | Your actual LinkedIn Profile URL |
| `src/data/candidate.js` | `resumeUrl` | `#` | Direct link to your Resume PDF file |
| `src/data/projects.js` | `liveUrl` (Airbnb Clone) | `https://example.com/airbnb-clone-demo` | Your deployed Live Demo URL on Render |
| `src/data/projects.js` | `githubUrl` (Airbnb Clone) | `https://github.com/arpitchoudhary/airbnb-clone` | Your Airbnb Clone GitHub Repo URL |
| `src/data/projects.js` | `liveUrl` (E-commerce) | `https://example.com/ecommerce-demo` | Your deployed Live Demo URL |
| `src/data/projects.js` | `githubUrl` (E-commerce) | `https://github.com/arpitchoudhary/ecommerce-mern` | Your E-commerce GitHub Repo URL |
| `src/data/projects.js` | `liveUrl` (Blog App) | `https://example.com/blog-app-demo` | Your Blog App Live Demo URL |
| `src/data/projects.js` | `githubUrl` (Blog App) | `https://github.com/arpitchoudhary/blog-mern-app` | Your Blog App GitHub Repo URL |

---

## Deployment Instructions

### Option 1: Deploy on Render
1. Push your repository to GitHub.
2. Log into [Render Dashboard](https://render.com/).
3. Click **New Static Site**.
4. Connect your GitHub repository.
5. Set Build & Publish Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click **Create Static Site**.

### Option 2: Deploy on Vercel
1. Install Vercel CLI or import GitHub repo on [Vercel Dashboard](https://vercel.com).
2. Framework Preset: **Vite**.
3. Output Directory: `dist`.
4. Click **Deploy**.

### Option 3: Deploy on Netlify
1. Connect repository on [Netlify](https://netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.

---

## Quality & Testing Checklist

- [x] **Zero Console Errors**: Verified build bundling and execution clean.
- [x] **Responsiveness**: Tested on mobile (320px+), tablet (768px), and desktop (1024px+).
- [x] **Modal Accessibility**: Keydown Escape handler, overlay backdrop dismiss, scroll lock when modal opens.
- [x] **Form Validation**: Checks required fields, email formatting, minimum message length.
- [x] **Theme Persistence**: Light/Dark mode choice saved in `localStorage`.
- [x] **SEO Meta**: Configured Title, Description, and OpenGraph tags in `index.html`.
- [x] **Robot Assistant**: Interactive hover/click dialog box displaying verified candidate contact channels.
