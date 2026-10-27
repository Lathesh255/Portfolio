# Lathesha N — Personal Developer Portfolio

Modern, professional, and recruiter-friendly personal portfolio website built for **Lathesha N** (Aspiring Software Engineer / MCA Graduate).

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── Lathesha_A_N_Resume.pdf          # Lathesha's actual resume PDF
│   ├── Lathesha_AN_Research_Paper.pdf   # IEEE Conference Research Paper PDF
│   └── favicon.svg                      # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Sticky glassmorphism header & mobile navigation
│   │   ├── Hero.jsx                     # Hero section with recruiter status, CTAs & code terminal
│   │   ├── About.jsx                    # MCA education, software fundamentals, and background
│   │   ├── Skills.jsx                   # Categorized technical competencies with filter tabs
│   │   ├── Experience.jsx               # Edutainer internship & ICT Academy timeline
│   │   ├── Projects.jsx                 # Memory Matching Game, EzyPark, and Vibe Checker AI
│   │   ├── Publication.jsx              # Distinct IEEE Xplore ICEMCSI 2026 research showcase
│   │   ├── Education.jsx                # MCA, BCA, PUC, SSLC academic timeline
│   │   ├── Certifications.jsx           # IBM AI, IBM Customer Engagement & Django workshops
│   │   ├── Contact.jsx                  # Direct email/phone copy & interactive contact form
│   │   ├── Footer.jsx                   # Branding, quick jump links, back-to-top button
│   │   └── Icons.jsx                    # Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js             # Centralized single source of truth for all content
│   ├── App.jsx                          # Main application layout
│   ├── index.css                        # Tailwind v4 configuration & base styles
│   └── main.jsx                         # Application root
├── index.html                           # SEO meta tags, title & font links
├── vite.config.js                       # Vite + Tailwind v4 plugin configuration
└── package.json
```

---

## 🛠️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ⚙️ Updating Content & Links

All personal details, project details, skills, and links are cleanly decoupled and maintained inside:
👉 `src/data/portfolioData.js`

### 1. Updating Resume PDF
- The portfolio currently serves `public/Lathesha_A_N_Resume.pdf`.
- To update your resume, simply replace that file in the `public/` directory with your new PDF (keeping the same name) or update `personalInfo.resumePath` in `src/data/portfolioData.js`.

### 2. Updating GitHub & LinkedIn URLs
In `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  // ...
  socialLinks: {
    github: "https://github.com/Lathesh255",
    linkedin: "https://www.linkedin.com/in/latheshn07",
    email: "mailto:latheshaan@gmail.com"
  },
  // ...
};
```

### 3. Updating the IEEE Xplore Publication URL
In `src/data/portfolioData.js`, add your link to `publicationData.ieeeUrl`:
```javascript
export const publicationData = {
  // ...
  ieeeUrl: "https://ieeexplore.ieee.org/document/YOUR_ID_HERE"
};
```
Once added, an **"IEEE Xplore Record"** button will automatically appear in the Research section.

### 4. Updating Project Repositories & Live Demos
In `src/data/portfolioData.js`, locate each project object under `projectsData`:
```javascript
{
  id: "ezypark-smart-parking",
  title: "EzyPark — Cloud-Based Smart Parking System",
  github: "https://github.com/Lathesh255/ezypark", // Your repo link
  demo: "https://ezypark.vercel.app",             // Your live deployment link (optional)
  // ...
}
```

---

## 🌐 Deployment

### Deploying to Vercel
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com/).
2. Set build command to `npm run build` and publish directory to `dist`.
3. Click **Deploy Site**.
