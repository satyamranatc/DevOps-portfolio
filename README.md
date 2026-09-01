# Nilesh Parmar — DevOps & Cloud Infrastructure Engineer Portfolio

A modern, high-performance portfolio featuring an interactive DevOps terminal, CI/CD pipeline simulator, Three.js 3D cloud infrastructure mesh, and production case studies.

---

## 🛠️ Tech Stack & Architecture

- **Frontend & UI:** React 19, Vite, Tailwind CSS v4, Lucide Icons
- **3D & Motion Engine:** Three.js (GPU mesh & particle parallax), Anime.js v4 (staggered entrance & physics)
- **Containerization & Web Server:** Multi-stage Dockerfile, Nginx Alpine with Gzip compression and security headers
- **CI/CD & Automation:** GitHub Actions automated lint, test, build, and container verification
- **Deployment Targets:** Vercel (CDN with security headers), Render (Static / Docker blueprint), AWS EC2

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Compile and verify production build
npm run build

# 4. Run linter
npm run lint
```

---

## 🐳 Docker Deployment

### 1. Build Production Container
```bash
docker build -t devops-portfolio:latest .
```

### 2. Run Container
```bash
docker run -d -p 80:80 --name portfolio devops-portfolio:latest
```

### 3. Verify Health Check
```bash
curl http://localhost/healthz
# Returns: healthy
```

---

## ☁️ Deployment Options

### Option 1: Vercel (Recommended)
This repository includes [`vercel.json`](./vercel.json) with pre-configured:
- Automatic SPA rewrites
- `Strict-Transport-Security` (HSTS), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
- Immutable 1-year caching for `/assets/*`

```bash
# Deploy via Vercel CLI
npx vercel
```

### Option 2: Render
This repository includes [`render.yaml`](./render.yaml) supporting:
- **Static Site:** Automatic global CDN deployment from `dist/`
- **Docker Web Service:** Containerized runtime using the multi-stage `Dockerfile` and custom `nginx.conf`

### Option 3: GitHub Actions CI/CD
The automated pipeline in [`.github/workflows/ci-cd.yml`](./.github/workflows/ci-cd.yml) automatically:
1. Validates code style and runs `npm run lint`
2. Compiles production assets with `npm run build`
3. Builds and tests the multi-stage Docker container
4. Optionally publishes tagged images to Docker Hub when `DOCKERHUB_TOKEN` and `DOCKERHUB_USERNAME` secrets are set.

---

## 🔒 Security & Performance Features

- **Security Headers:** Comprehensive CSP, HSTS, X-Frame-Options, and Referrer Policies.
- **Asset Optimization:** Gzip compression enabled in Nginx with immutable cache expiration.
- **Minimal Docker Footprint:** Multi-stage build strips development dependencies and source files, delivering a hardened Nginx Alpine image.
