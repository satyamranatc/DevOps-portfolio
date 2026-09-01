import { Cloud, Container, Zap, Server, CheckCircle2 } from "lucide-react";

const architectureLayers = [
  {
    layerNumber: "Layer 01",
    layerName: "Cloud & Network Foundation",
    role: "Core compute, network isolation, and access control",
    icon: Cloud,
    color: "cyan",
    technologies: [
      { name: "AWS EC2", role: "Hardened Linux compute hosts" },
      { name: "AWS VPC & Subnets", role: "Private & public subnet routing" },
      { name: "IAM Security", role: "Least-privilege policies & credentials" },
      { name: "Security Groups", role: "Inbound firewall & SSH whitelisting" },
    ],
  },
  {
    layerNumber: "Layer 02",
    layerName: "Container & Orchestration Runtime",
    role: "Standardized environments, multi-tier isolation, and scaling",
    icon: Container,
    color: "blue",
    technologies: [
      { name: "Docker", role: "Multi-stage minimal image builds" },
      { name: "Docker Compose", role: "Multi-container local & prod stacks" },
      { name: "Docker Hub", role: "Versioned immutable image registry" },
      { name: "Kubernetes (K8s)", role: "Declarative pods, services & rollouts" },
    ],
  },
  {
    layerNumber: "Layer 03",
    layerName: "CI/CD & Infrastructure as Code",
    role: "Automating test lifecycles, artifact publishing, and cloud provisioning",
    icon: Zap,
    color: "emerald",
    technologies: [
      { name: "GitHub Actions", role: "Automated test, build & SSH deploy" },
      { name: "Terraform (IaC)", role: "Declarative AWS infrastructure HCL" },
      { name: "Linux / Bash", role: "Systemd, cron jobs & maintenance scripts" },
      { name: "Git Version Control", role: "Trunk-based & PR review workflows" },
    ],
  },
  {
    layerNumber: "Layer 04",
    layerName: "Edge Routing & Application Runtimes",
    role: "Secure traffic routing, SSL termination, and application integration",
    icon: Server,
    color: "purple",
    technologies: [
      { name: "Nginx Proxy", role: "Reverse proxy, SSL termination & headers" },
      { name: "Spring Boot", role: "Java backend REST API containerization" },
      { name: "React (Vite)", role: "Frontend UI build & Nginx static serving" },
      { name: "MySQL 8.0", role: "Persistent database volume orchestration" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            Infrastructure Stack & Relational Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            How My DevOps Toolchain <br className="hidden sm:inline" />
            <span className="gradient-text-cyan">Fits Together</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
            Rather than a disconnected list of tools, here is how each layer of my infrastructure stack interacts in real production deployments.
          </p>
        </div>

        {/* Stack Layers Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architectureLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.layerNumber}
                className="rounded-3xl glass-panel p-7 sm:p-8 flex flex-col justify-between hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Layer Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      {layer.layerNumber}
                    </span>
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {layer.layerName}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    {layer.role}
                  </p>

                  {/* Technology Items */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {layer.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="text-sm font-semibold text-white">{tech.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-mono text-right">{tech.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;