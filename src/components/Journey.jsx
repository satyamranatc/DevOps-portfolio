const journey = [
  {
    number: "01",
    phase: "Foundation",
    title: "Linux Systems & Bash Scripting",
    description:
      "Mastered Linux CLI internals, process handling, user privileges, file systems, systemd service management, and automated shell scripts.",
    skills: ["Linux (Ubuntu)", "Bash", "Systemd", "Cron Jobs", "SSH"],
    status: "Completed",
  },
  {
    number: "02",
    phase: "Collaboration",
    title: "Version Control & Git Best Practices",
    description:
      "Deepened proficiency in Git branching conventions, collaborative GitHub workflows, merge conflict resolutions, and repository automation.",
    skills: ["Git", "GitHub", "Branch Protection", "PR Review"],
    status: "Completed",
  },
  {
    number: "03",
    phase: "Packaging",
    title: "Docker & Multi-Container Composition",
    description:
      "Containerized full-stack applications with multi-stage builds, minimal production images, network bridges, and Docker Compose orchestration.",
    skills: ["Docker", "Multi-stage Builds", "Docker Compose", "Docker Hub"],
    status: "Completed",
  },
  {
    number: "04",
    phase: "Automation",
    title: "Automated CI/CD Pipelines",
    description:
      "Constructed automated build, test, package, and deploy workflows using GitHub Actions with encrypted secret management and SSH deployments.",
    skills: ["GitHub Actions", "Secrets", "Automated Testing", "Artifact Push"],
    status: "Completed",
  },
  {
    number: "05",
    phase: "Cloud Hosting",
    title: "AWS Cloud Infrastructure",
    description:
      "Provisioned and managed AWS infrastructure including EC2 instances, VPC subnets, custom Security Groups, IAM security policies, and S3.",
    skills: ["AWS EC2", "VPC", "IAM", "Security Groups", "Nginx"],
    status: "Completed",
  },
  {
    number: "06",
    phase: "Infrastructure as Code",
    title: "Terraform Resource Provisioning",
    description:
      "Codifying AWS resources declaratively with Terraform HCL, modular architectures, state management, and repeatable provisioning plans.",
    skills: ["Terraform", "AWS Provider", "HCL", "State Locking"],
    status: "In Progress",
    current: true,
  },
  {
    number: "07",
    phase: "Orchestration",
    title: "Kubernetes Cluster Management",
    description:
      "Building expertise in declarative YAML manifests, Pod lifecycle, ReplicaSets, ClusterIP & NodePort services, and rolling deployments.",
    skills: ["Kubernetes", "Pods", "Deployments", "Services", "kubectl"],
    status: "In Progress",
    current: true,
  },
  {
    number: "08",
    phase: "GitOps & Observability",
    title: "Ansible, Grafana & ArgoCD",
    description:
      "Next evolution: configuration management with Ansible, metrics telemetry with Prometheus & Grafana, and GitOps delivery with ArgoCD.",
    skills: ["Ansible", "Grafana", "Prometheus", "ArgoCD"],
    status: "Target 2026",
    current: true,
  },
];

function Journey() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 relative border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            05 // Engineering Trajectory
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Learning. Building. <span className="gradient-text-cyan">Mastering.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
            A structured roadmap dedicated to mastering modern cloud infrastructure and DevOps engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Laser Track Line */}
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_10px_rgba(0,242,254,0.3)]" />

          <div className="space-y-8 sm:space-y-10">
            {journey.map((item) => (
              <div key={item.number} className="relative flex items-start gap-6 sm:gap-8 group">
                {/* Checkpoint Node */}
                <div
                  className={`relative z-10 shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all duration-300 ${
                    item.current
                      ? "bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.4)] group-hover:scale-110"
                      : "bg-[#090C16] border border-white/20 text-gray-400 group-hover:border-cyan-400/50 group-hover:text-white"
                  }`}
                >
                  {item.number}
                </div>

                {/* Milestone Content Card */}
                <div className="flex-1 rounded-2xl glass-panel p-5 sm:p-7 group-hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                        {item.phase}
                      </span>
                      <span className="text-gray-600">•</span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                        item.current
                          ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                          : "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-mono text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;