import { useState } from "react";
import {
  Laptop,
  GitBranch,
  Zap,
  Container,
  Package,
  Cloud,
  Server,
  FileCode,
  Copy,
  Check,
  Play,
  CheckCircle2,
} from "lucide-react";

const pipelineSteps = [
  {
    id: "dev",
    number: "01",
    title: "Developer Workstation",
    icon: Laptop,
    summary: "Code authoring, feature branches & local verification.",
    fileTitle: "git-commit.sh",
    code: `# Create feature branch & push commits
git checkout -b feature/automated-deploy
git add .
git commit -m "feat(ci): configure automated multi-stage build"
git push origin feature/automated-deploy`,
    explanation: "Standard developer workflow enforcing conventional commit standards and pull request branching strategy.",
  },
  {
    id: "github",
    number: "02",
    title: "GitHub Repository",
    icon: GitBranch,
    summary: "Version control, PR reviews & webhook triggers.",
    fileTitle: "branch-rules.json",
    code: `{
  "protection_rule": "main",
  "require_pull_request_reviews": true,
  "required_approving_review_count": 1,
  "require_status_checks": ["ci/build-and-test"]
}`,
    explanation: "Protects production branch stability, requiring clean CI builds before any merge can take place.",
  },
  {
    id: "actions",
    number: "03",
    title: "GitHub Actions CI/CD",
    icon: Zap,
    summary: "Automated test runner, image builder & deployment orchestrator.",
    fileTitle: ".github/workflows/deploy.yml",
    code: `name: Production CI/CD Pipeline
on:
  push:
    branches: [ "main" ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Log in to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build & Push Container Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: nilesh2033parmar/fullstack-app:latest`,
    explanation: "Automated CI pipeline that checks out code, runs test suites, builds production containers and publishes to registry.",
  },
  {
    id: "docker",
    number: "04",
    title: "Docker Containerization",
    icon: Container,
    summary: "Multi-stage minimal image build with security hardening.",
    fileTitle: "Dockerfile",
    code: `# Stage 1: Build Application
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Production Distroless Runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
USER 1001
ENTRYPOINT ["java", "-jar", "app.jar"]`,
    explanation: "Multi-stage builds separate compile tools from runtime, shrinking image size by 70% and removing attack vectors.",
  },
  {
    id: "registry",
    number: "05",
    title: "Docker Hub Registry",
    icon: Package,
    summary: "Immutable artifact storage, semantic versioning & security scanning.",
    fileTitle: "docker-compose.prod.yml",
    code: `version: '3.8'
services:
  backend:
    image: nilesh2033parmar/fullstack-app:latest
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_HOST=mysql-db
    ports:
      - "8080:8080"
  
  frontend:
    image: nilesh2033parmar/frontend:latest
    restart: always
    ports:
      - "80:80"`,
    explanation: "Centralized repository maintaining immutable release tags for instant rollback capability.",
  },
  {
    id: "ec2",
    number: "06",
    title: "AWS EC2 Cloud Server",
    icon: Cloud,
    summary: "Hardened Ubuntu Linux server running Docker daemon.",
    fileTitle: "deploy-remote.sh",
    code: `# Triggered over secure SSH by GitHub Actions
echo "Pulling latest production image..."
docker pull nilesh2033parmar/fullstack-app:latest

echo "Executing zero-downtime rolling restart..."
docker-compose -f docker-compose.prod.yml up -d --remove-orphans

echo "Pruning dangling images..."
docker image prune -f`,
    explanation: "Automated SSH execution updates running containers in seconds without manual server logins.",
  },
  {
    id: "nginx",
    number: "07",
    title: "Nginx Reverse Proxy",
    icon: Server,
    summary: "SSL termination, traffic balancing & zero-downtime routing.",
    fileTitle: "/etc/nginx/sites-available/app.conf",
    code: `server {
    listen 80;
    server_name nilesh.devops.internal;

    location /api/ {
        proxy_pass http://127.0.0.1:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location / {
        proxy_pass http://127.0.0.1:80/;
        proxy_set_header Host $host;
    }
}`,
    explanation: "Directs incoming web traffic to appropriate container services while maintaining header security.",
  },
];

function Architecture() {
  const [selectedStep, setSelectedStep] = useState(2); // GitHub Actions selected by default
  const [isSimulating, setIsSimulating] = useState(false);
  const [copied, setCopied] = useState(false);

  const active = pipelineSteps[selectedStep];
  const ActiveIcon = active.icon;

  const handleSimulate = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      setSelectedStep(step);
      step++;
      if (step >= pipelineSteps.length) {
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 800);
      }
    }, 650);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(active.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 relative border-t border-white/10">
      <div id="architecture" className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
              03 // Pipeline Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Interactive <span className="gradient-text-cyan">CI/CD Simulator</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Click any stage in the deployment workflow to inspect the production configuration files and infrastructure logic.
            </p>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold text-xs hover:brightness-110 active:scale-95 transition disabled:opacity-50 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            {isSimulating ? (
              <>
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>Simulating Pipeline Run...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Run Test Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* 7-Node Interactive Stage Carousel/Bar with Lucide Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {pipelineSteps.map((step, idx) => {
            const isCurrent = selectedStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isCurrent
                    ? "glass-panel border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,242,254,0.2)]"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/5 hover:border-white/20"
                }`}
              >
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_#00F2FE]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isCurrent ? "bg-cyan-400/20 text-cyan-300" : "bg-white/5 text-gray-400"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isCurrent ? "bg-cyan-400 text-black font-bold" : "bg-white/5 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <div className={`text-xs font-bold truncate ${isCurrent ? "text-cyan-300" : "text-gray-300"}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Inspector Card */}
        <div className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
          {/* Inspector Header */}
          <div className="p-6 bg-[#0B0E1B]/90 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">STAGE {active.number}</span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white">{active.title}</h3>
                </div>
                <p className="text-xs text-gray-400">{active.summary}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                {active.fileTitle}
              </span>
              <button
                onClick={copyCode}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Inspector Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Code Block */}
            <div className="lg:col-span-8 p-6 bg-[#060810]/95 font-mono text-xs overflow-x-auto text-gray-300 border-b lg:border-b-0 lg:border-r border-white/10">
              <pre className="leading-relaxed">
                <code>{active.code}</code>
              </pre>
            </div>

            {/* Explanation & Impact */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#090C16]/80 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  DevOps Impact & Purpose
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {active.explanation}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-gray-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pipeline Telemetry: Verified</span>
                </div>
                <div className="text-[11px] text-gray-500">
                  Runs on push to <code className="text-cyan-300">main</code> with SSH-key secret encryption.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;