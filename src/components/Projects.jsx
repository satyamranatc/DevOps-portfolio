import { useState } from "react";
import { Clock, Zap, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

const projectFilters = [
  { id: "all", name: "All Projects" },
  { id: "cicd", name: "CI/CD & Cloud" },
  { id: "iac", name: "IaC & Containers" },
];

const projects = [
  {
    id: 1,
    category: "cicd",
    title: "Full Stack DevOps CI/CD Deployment",
    subtitle: "End-to-end automated deployment pipeline to AWS EC2",
    description:
      "Engineered an automated CI/CD pipeline triggering on Git push, compiling React frontend and Spring Boot backend, generating minimal Docker containers, pushing versioned images to Docker Hub, and executing SSH rolling restarts on AWS EC2.",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "AWS EC2",
      "Nginx",
    ],
    highlights: [
      "Zero-touch GitHub Actions pipeline triggering on push to main",
      "Multi-container service isolation using Docker Compose",
      "Nginx reverse proxy for SSL & HTTP traffic routing",
      "Automated SSH deployment keys securely managed via GitHub Secrets",
    ],
    metrics: {
      uptime: "99.9%",
      buildTime: "2m 14s",
      containers: "3 Services",
    },
    status: "Production Ready",
    statusColor: "emerald",
    github: "https://github.com/nilesh2033parmarDevOps/AWS_First_Proj",
    live: null,
  },
  {
    id: 2,
    category: "cicd",
    title: "AWS EC2 Cloud Application Server",
    subtitle: "Hardened Linux compute instance with Docker runtime",
    description:
      "Provisioned and hardened a Linux EC2 instance on AWS, configuring custom Security Group rules (SSH, HTTP, HTTPS), setting up Docker daemon, and running containerized web applications behind Nginx.",
    technologies: ["AWS EC2", "Ubuntu Linux", "Docker", "Nginx", "SSH Hardening"],
    highlights: [
      "VPC Security Group rules isolating administrative SSH to whitelist IPs",
      "Systemd daemon services ensuring automatic recovery on reboot",
      "Docker storage and log rotation management",
    ],
    metrics: {
      uptime: "100%",
      buildTime: "Instant",
      containers: "Multi-tier",
    },
    status: "Deployed",
    statusColor: "cyan",
    github: "https://github.com/nilesh2033parmarDevOps/AWS_First_Proj",
    live: null,
  },
  {
    id: 3,
    category: "iac",
    title: "Dockerized Multi-Tier Microservices",
    subtitle: "Decoupled frontend, backend API, and database architecture",
    description:
      "Constructed a multi-container Docker Compose setup separating client UI, REST API, and persistent MySQL database with bridge networking and persistent Docker volumes.",
    technologies: ["Docker", "Docker Compose", "React", "Spring Boot", "MySQL 8.0"],
    highlights: [
      "Isolated internal database network unreachable from public internet",
      "Persistent Docker volume mounts preventing data loss across restarts",
      "Multi-stage Dockerfiles achieving sub-100MB production image sizes",
    ],
    metrics: {
      uptime: "99.95%",
      buildTime: "1m 40s",
      containers: "Docker Compose",
    },
    status: "Completed",
    statusColor: "cyan",
    github: "https://github.com/nilesh2033parmarDevOps/AWS_First_Proj",
    live: null,
  },
  {
    id: 4,
    category: "iac",
    title: "Terraform AWS Infrastructure as Code",
    subtitle: "Declarative AWS resource provisioning via HCL",
    description:
      "Developing modular Terraform code to provision repeatable AWS infrastructure including custom VPCs, subnets, route tables, internet gateways, and EC2 instances.",
    technologies: ["Terraform", "AWS", "EC2", "VPC", "IAM", "HCL"],
    highlights: [
      "Modular structure separating compute, network, and security definitions",
      "Remote state locking and variable outputs",
      "Deterministic plan and apply execution cycles",
    ],
    metrics: {
      uptime: "IaC Managed",
      buildTime: "Automated",
      containers: "AWS Native",
    },
    status: "In Progress",
    statusColor: "amber",
    github: "https://github.com/nilesh2033parmarDevOps/AWS_First_Proj",
    live: null,
  },
  {
    id: 5,
    category: "iac",
    title: "Kubernetes Cluster Application Scaling",
    subtitle: "Container orchestration, Pods, Deployments & ClusterIP Services",
    description:
      "Hands-on Kubernetes labs configuring declarative YAML manifests for stateless application deployments, replica sets, self-healing pod policies, and service discovery.",
    technologies: ["Kubernetes", "Docker", "YAML", "kubectl", "Minikube/K8s"],
    highlights: [
      "Declarative Deployments with rolling update rollout strategy",
      "ClusterIP and NodePort service traffic routing",
      "Resource request and limit quotas to prevent noisy neighbors",
    ],
    metrics: {
      uptime: "Self-Healing",
      buildTime: "Zero-Downtime",
      containers: "K8s Pods",
    },
    status: "Active Lab",
    statusColor: "amber",
    github: "https://github.com/nilesh2033parmarDevOps/AWS_First_Proj",
    live: null,
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
              04 // Featured Implementations
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Hands-On <span className="gradient-text-cyan">DevOps Projects</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Production-grade applications and automated infrastructure created with modern DevOps best practices.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl glass-panel p-7 sm:p-8 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_15px_40px_rgba(0,242,254,0.12)] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Status & Category Bar */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {proj.subtitle}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                      proj.statusColor === "emerald"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                        : proj.statusColor === "cyan"
                        ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                        : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                    }`}
                  >
                    ● {proj.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Highlights Checklist */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 mb-6">
                  <p className="text-xs font-bold text-gray-200">Architecture Highlights:</p>
                  <ul className="space-y-1.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Metrics & Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {proj.metrics.buildTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    {proj.metrics.uptime}
                  </span>
                </div>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/30 text-white hover:text-cyan-300 border border-white/10 text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;