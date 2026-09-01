import { ArrowUp, Activity } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#040508] px-4 sm:px-6 py-12 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Status & Brand Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-heading font-bold text-white">Nilesh Parmar</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                DevOps Engineer
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-sm">
              Building automated, secure, and resilient cloud deployment infrastructure.
            </p>
          </div>

          {/* System Status Telemetry Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>All Systems Operational (99.99% Uptime)</span>
          </div>
        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#workflow" className="hover:text-cyan-400 transition">CI/CD Workflow</a>
            <a href="#journey" className="hover:text-cyan-400 transition">Journey</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px]">
              © {new Date().getFullYear()} Nilesh Parmar. Crafted for Performance.
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;