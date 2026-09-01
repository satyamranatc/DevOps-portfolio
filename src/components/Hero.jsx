import InteractiveTerminal from "./InteractiveTerminal";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cloud,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "./Icons";

function Hero() {
  const proofMetrics = [
    { label: "Deployed Cloud Projects", value: "3+", sub: "AWS EC2 & Linux Live", icon: Cloud },
    { label: "Automated CI/CD Workflows", value: "100%", sub: "GitHub Actions & Docker", icon: Zap },
    { label: "Deployment Velocity", value: "< 2 min", sub: "Down from 15m manual", icon: CheckCircle2 },
    { label: "Release Reliability", value: "Zero Downtime", sub: "Nginx & Docker Compose", icon: ShieldCheck },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md text-xs sm:text-sm text-cyan-200 shadow-[0_0_20px_rgba(0,242,254,0.15)] animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono font-medium">Nilesh Parmar • Open for Junior DevOps / Cloud Roles</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Humanized, High-Converting Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          I build reliable infrastructure that <br className="hidden sm:inline" />
          <span className="gradient-text-cyan">ships software automatically.</span>
        </h1>

        {/* Clear Positioning Subtitle */}
        <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-xl leading-relaxed mb-10 font-normal">
          Junior DevOps & Cloud Engineer focused on <strong className="text-white">AWS</strong>, <strong className="text-white">Docker</strong>, <strong className="text-white">Kubernetes</strong>, <strong className="text-white">Terraform</strong>, and automated <strong className="text-white">CI/CD pipelines</strong> that eliminate manual deployments and maximize uptime.
        </p>

        {/* High-Converting Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#case-study"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>View Featured Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/nilesh2033parmarDevOps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-pill text-white font-medium text-sm hover:text-cyan-300 hover:border-cyan-400/40 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <span className="text-xs text-cyan-400">↗</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-pill text-gray-300 font-medium text-sm hover:text-white hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Proof Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          {proofMetrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="p-4 sm:p-5 rounded-2xl glass-panel text-left relative overflow-hidden group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    <span className="gradient-text-cyan">{m.value}</span>
                  </span>
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-200">{m.label}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">{m.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Interactive Live Terminal Widget */}
        <div className="mb-8">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}

export default Hero;