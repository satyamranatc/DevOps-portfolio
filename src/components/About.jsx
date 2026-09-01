import { Zap, ShieldCheck, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

function About() {
  const pillars = [
    {
      icon: Zap,
      title: "Automation First",
      desc: "Replacing repetitive manual operations with deterministic GitHub Actions, bash scripts, and declarative configs.",
    },
    {
      icon: ShieldCheck,
      title: "Resilient & Secure",
      desc: "Configuring strict AWS security groups, IAM least-privilege policies, and container isolation.",
    },
    {
      icon: TrendingUp,
      title: "Cloud Scalability",
      desc: "Designing multi-tier containerized architectures ready for horizontal pod autoscaling and rolling deployments.",
    },
  ];

  const learningStack = [
    { name: "Kubernetes (K8s)", level: "Active Pods & Services", progress: 80 },
    { name: "Terraform (IaC)", level: "AWS EC2, VPC, IAM HCL", progress: 75 },
    { name: "Ansible & Config", level: "Playbooks & Automation", progress: 65 },
    { name: "Grafana & Prometheus", level: "Metrics & Telemetry", progress: 60 },
    { name: "ArgoCD & GitOps", level: "Continuous Delivery", progress: 55 },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            01 // About & Mindset
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Bridging Business Logic with <br className="hidden sm:inline" />
            <span className="gradient-text-cyan">Cloud Infrastructure</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Story Bento Card */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00F2FE]" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  The Journey from Business to Cloud Engineering
                </h3>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                I'm <span className="text-white font-semibold">Nilesh Parmar</span>, a BBA graduate currently pursuing my <span className="text-cyan-300 font-semibold">Master of Computer Applications (MCA)</span>. This background gives me an analytical edge — I don't just write scripts; I understand <em className="text-gray-200">why</em> business uptime and developer velocity matter.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Over the past several years, I have immersed myself in hands-on cloud labs, orchestrating real Dockerized applications, building automated GitHub Actions deployment pipelines to AWS EC2, and codifying infrastructure with Terraform.
              </p>

              {/* Pillars with Lucide Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition group/item">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 group-hover/item:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">{p.title}</h4>
                      <p className="text-[11px] text-gray-400 leading-snug">{p.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Radar / Currently Learning Bento Card */}
          <div className="lg:col-span-5 rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Continuous Learning Radar
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    Skills actively being forged in lab projects
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                  <Sparkles className="w-3 h-3" /> 2026 Focus
                </span>
              </div>

              <div className="space-y-4">
                {learningStack.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-gray-200">{item.name}</span>
                      <span className="text-gray-400 font-mono text-[11px]">{item.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 shadow-[0_0_8px_rgba(0,242,254,0.5)]"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Next up: Grafana dashboards & ArgoCD GitOps</span>
              <a href="#projects" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                View Labs <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;