# Imronbek — Premium Developer Portfolio

A production-ready personal developer portfolio engineered with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an award-winning creative digital agency aesthetic: futuristic minimalism, deep charcoal backgrounds, interactive physics particles, electric blue & violet accents, and editorial typography.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

---

## ⚡ Key Highlights & Architecture

- **Creative Agency Aesthetic:** Deep charcoal & obsidian backgrounds (`#05060A`), electric blue (`#38bdf8`) & violet (`#818cf8`) lighting, subtle glassmorphism, and editorial typography (`Syne` + `Plus Jakarta Sans` + `JetBrains Mono`).
- **Interactive Particle Matrix Hero:** Canvas-based interactive physics constellation that reacts to mouse position with inertia and smooth boundary physics.
- **Custom Precision Cursor:** Desktop magnetic micro-cursor that scales on clickable targets and gracefully hides on touch/mobile devices.
- **Dynamic Theme Mode:** Dark / Light mode toggle with state persistence in `localStorage`.
- **Production-Ready Component Architecture:** Modular, strictly typed React components with clean state separation.
- **Validated Contact System:** Client-side input validation, copy-to-clipboard email pill, and celebratory confetti effects upon submission.
- **Fully Responsive:** Tested and tuned across 375px/390px mobile screens, tablets, laptops, and 1920px ultra-wide displays.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Transitions:** [Framer Motion](https://www.framer.com/motion/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Interactive FX:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or newer recommended, LTS v26 installed)
- npm or pnpm or yarn

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imronbekgaipov/imronbek-portfolio.git
   cd imronbek-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the port specified by Vite).

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Netlify (Recommended)

You can deploy this portfolio to **Netlify** with continuous Git deployment in under 2 minutes:

### Option A: Via Netlify Web Dashboard
1. Go to [app.netlify.com](https://app.netlify.com/) and sign in with your GitHub account (**imronbekgaipov**).
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Choose **"GitHub"** as your Git provider and authorize Netlify.
4. Select your repository: **`imronbekgaipov/imronbek-portfolio`**.
5. Netlify will automatically detect settings from `netlify.toml`:
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy imronbek-portfolio"**.
7. Netlify will build the site and provide you with a live URL (e.g., `https://imronbek-portfolio.netlify.app`), with automatic deployments on every `git push`.

### Option B: Via Netlify CLI
```bash
npx netlify deploy --prod
```

---

## 🎨 How to Personalize & Edit

All personal data, projects, tech stack items, and contact links are centralized in a single configuration file:

📁 **`src/data/portfolioData.ts`**

### Editable Sections:
1. **Personal Information:**
   - Name, headline, educational details, and university information.
2. **Social & Contact Links:**
   - LinkedIn: `https://www.linkedin.com/in/imronbek-gaipov`
   - Telegram: `@Imronbek_10` (`https://t.me/Imronbek_10`)
   - Primary contact email: `imronbekgaipov2008@gmail.com`
3. **Projects:**
   - Replace the labeled project placeholders with your actual web applications, screenshots, and live demo URLs.
4. **Timeline Milestones:**
   - Add new academic achievements, semester milestones, or hackathon participations.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
