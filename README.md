# Developer Portfolio (React + Vite + Tailwind)

A modern, animated developer portfolio built with React (Vite), Tailwind CSS, Framer Motion, and EmailJS.

## What’s inside

- React + Vite for fast dev/build
- Tailwind CSS utility styling
- Framer Motion animations (hero, blobs, toasts)
- EmailJS contact form (no backend)
- Responsive, full-viewport sections (Hero, About, Skills, Projects, Work, Contact)

## Prerequisites

- Node.js 18+ (recommended) and npm 9+
- Git (optional, for cloning)

Check your versions:

```bash
node -v
npm -v
```

## Quick start (this repo)

1) Install dependencies

```bash
npm install
```

2) Start the dev server (opens on http://localhost:5173)

```bash
npm run dev
```

3) Build for production

```bash
npm run build
```

4) Preview the production build (http://localhost:5174)

```bash
npm run preview
```

Notes for Windows users:
- Commands above work in Git Bash, WSL, or PowerShell. If using PowerShell, the commands are the same.
- If you previously deleted `node_modules`, run `npm install` again before `npm run dev`.

## Project scripts (package.json)

- `npm run dev` – Start Vite dev server
- `npm run build` – Build static assets to `dist/`
- `npm run preview` – Preview the built site locally on port 5174

## Configure EmailJS (Contact form)

The contact form uses EmailJS via `@emailjs/browser`. In `src/components/Contact.jsx`, replace the placeholders with your actual IDs:

```js
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
```

How to get these values:
- Create a free account at https://www.emailjs.com/
- Create an Email Service and a Template
- Copy your Service ID, Template ID, and Public Key
- Replace the placeholders in `Contact.jsx`

Tip: For production, consider moving secrets to environment variables (e.g., Vite `VITE_*` vars) and import them via `import.meta.env`.

## Screenshots

Add your screenshots to `public/screenshots/` and reference them below. Example file names:

- `public/screenshots/hero.png`
- `public/screenshots/contact.png`
- `public/screenshots/projects.png`

Then embed them in Markdown (these paths work when hosted):

```md
![Hero](./public/screenshots/hero.png)
![Contact](./public/screenshots/contact.png)
![Projects](./public/screenshots/projects.png)
```

## Project structure (key files)

```
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
public/
  screenshots/            
src/
  App.jsx
  main.jsx
  index.css
  tailwind.css            
  components/
    Hero.jsx
    About.jsx
    Skills.jsx
    SkillsMarquee.jsx
    Projects.jsx
    Work.jsx
    Contact.jsx
    Navbar.jsx
    Footer.jsx
    ScrollProgress.jsx
    AccentBlob.jsx
```

## Create this project from scratch (optional)

Use these steps if you want to bootstrap a new project like this one.

1) Scaffold a React + Vite app

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

2) Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3) Configure Tailwind (tailwind.config.js)

Set the `content` to scan your files:

```js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}
```

4) Add Tailwind directives

Create or edit `src/tailwind.css` and include:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import it in `src/main.jsx` or `src/index.css` (and include that in your app).

5) Install extras used here

```bash
npm install framer-motion react-icons @emailjs/browser
```

6) Start coding

```bash
npm run dev
```

Add components (Hero, Navbar, Contact, etc.), Tailwind classes for styling, and Framer Motion for animations. Wire EmailJS in your contact form.

## Troubleshooting

- Command not found: `nup` – It’s a typo. Use `npm run dev`.
- Missing packages / types – Run `npm install` after cloning or deleting `node_modules`.
- Port already in use – Stop other Vite instances or set a different port in `vite.config.js`.
- Email not sending – Check your EmailJS Service/Template IDs and Public Key. Inspect the browser console for errors.

## Deployment

- Static hosting: Run `npm run build` and deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, etc.
- Preview locally with `npm run preview` to validate before pushing live.

---

Maintained by Tanmay Patel. PRs and suggestions are welcome.
