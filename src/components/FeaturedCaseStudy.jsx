import { ArrowRight, CheckCircle2, AlertTriangle, Cpu, Zap } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function FeaturedCaseStudy() {
  const steps = [
    { name: "1. Code Push", tool: "Git / GitHub", desc: "Developer pushes to main branch" },
    { name: "2. Test & Build", tool: "GitHub Actions", desc: "Automated test suite & multi-stage build" },
    { name: "3. Containerize", tool: "Docker Hub", desc: "Version-tagged lightweight image published" },
    { name: "4. Deploy via SSH", tool: "AWS EC2", desc: "Encrypted SSH trigger pulls & rolls update" },
    { name: "5. Route Traffic", tool: "Nginx Proxy", desc: "Reverse proxy routes zero-downtime requests" },
  ];

  return (
    <section id="case-study" className="py-24 px-4 sm:px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            Featured Engineering Case Study
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Automating Full-Stack Deployments to <br className="hidden sm:inline" />
            <span className="gradient-text-cyan">AWS with Zero-Downtime CI/CD</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
            A comprehensive breakdown of how I transformed a manual, error-prone deployment process into an automated, containerized pipeline delivering code from Git commit to production in under 2 minutes.
          </p>
        </div>

        {/* Case Study Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Problem & What I Built */}
          <div className="lg:col-span-7 space-y-6">
            {/* The Problem Card */}
            <div className="rounded-3xl glass-panel p-7 sm:p-8 border border-rose-500/20 bg-rose-950/10">
              <div className="flex items-center gap-3 mb-3 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-lg font-heading font-bold text-white">The Engineering Problem</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                The application relied on manual server logins, ad-hoc build scripts, and untracked environment variables. Each release took over 15 minutes, caused noticeable downtime, and risked configuration drift between local machines and production.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-rose-500/10 text-xs font-mono text-rose-300">
                <div>❌ 15+ min manual releases</div>
                <div>❌ Downtime during restarts</div>
                <div>❌ Environment inconsistency</div>
              </div>
            </div>

            {/* What Nilesh Built Card */}
            <div className="rounded-3xl glass-panel p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-cyan-400">
                <Cpu className="w-5 h-5" />
                <h3 className="text-lg font-heading font-bold text-white">The Solution & Implementation</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-Stage Docker Packaging:</strong> Decoupled Maven and Node build environments from production runtimes, shrinking final container sizes by 70%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Automated GitHub Actions Workflow:</strong> Configured automated triggers on push to <code className="text-cyan-300">main</code>, automating tests, image publishing to Docker Hub, and remote SSH execution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AWS EC2 & Nginx Reverse Proxy:</strong> Set up a hardened Ubuntu Linux EC2 instance running Docker Compose behind Nginx for smooth zero-downtime rolling updates.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Measurable Results & Architecture */}
          <div className="lg:col-span-5 space-y-6">
            {/* Measurable Impact Card */}
            <div className="rounded-3xl glass-panel p-7 sm:p-8 border border-emerald-500/20 bg-emerald-950/10 space-y-5">
              <div className="flex items-center gap-3 text-emerald-400">
                <Zap className="w-5 h-5" />
                <h3 className="text-lg font-heading font-bold text-white">Measurable Results</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">
                    &lt; 2m
                  </div>
                  <div className="text-xs text-gray-300 font-semibold mt-1">Deployment Time</div>
                  <div className="text-xs text-gray-400 font-mono">Reduced from 15m (87% faster)</div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan-400">
                    0
                  </div>
                  <div className="text-xs text-gray-300 font-semibold mt-1">Manual Server Steps</div>
                  <div className="text-xs text-gray-400 font-mono">100% Automated via CI/CD</div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">
                    70%
                  </div>
                  <div className="text-xs text-gray-300 font-semibold mt-1">Image Size Reduction</div>
                  <div className="text-xs text-gray-400 font-mono">Via Multi-Stage Dockerfiles</div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan-400">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-300 font-semibold mt-1">Target Uptime</div>
                  <div className="text-xs text-gray-400 font-mono">Zero-Downtime Nginx Proxy</div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-500/20 flex items-center justify-between">
                <span className="text-xs text-gray-300 font-mono">Live GitHub Repo Available</span>
                <a
                  href="https://github.com/nilesh2033parmarDevOps/AWS_First_Proj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-500/20 text-white hover:text-cyan-300 border border-white/10 text-xs font-semibold transition flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Architecture Pipeline Mini-Flow */}
            <div className="rounded-3xl glass-panel p-6 sm:p-7 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                End-to-End Release Pipeline
              </h4>

              <div className="space-y-2.5">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-[11px]">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-white">{s.name}</div>
                        <div className="text-gray-400 text-[11px]">{s.desc}</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-black/40 border border-white/5 font-mono text-cyan-300 text-[11px]">
                      {s.tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
