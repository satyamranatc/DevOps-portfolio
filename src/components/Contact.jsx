import { useState } from "react";
import { Mail, Send, Copy, Check, MapPin, Zap, ArrowRight, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "nilesh2033parmar@gmail.com";
  const github = "https://github.com/nilesh2033parmarDevOps";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
          Direct Contact & Hiring
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-6">
          Have a deployment bottleneck? <br />
          <span className="gradient-text-cyan">Let's solve it.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
          I am actively interviewing for <strong className="text-white">Junior DevOps Engineer</strong>, <strong className="text-white">Cloud Infrastructure</strong>, and <strong className="text-white">Site Reliability</strong> positions. Whether you have an immediate hiring need or want to review my architecture setups, let's talk.
        </p>

        {/* Contact Bento Box */}
        <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 shadow-2xl space-y-8">
          {/* Availability Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>ROLES</span>
              </div>
              <div className="text-sm font-semibold text-white">Full-Time DevOps / Cloud</div>
              <div className="text-xs text-gray-400">Junior & Associate levels</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION</span>
              </div>
              <div className="text-sm font-semibold text-white">Remote & On-Site</div>
              <div className="text-xs text-gray-400">Open to relocation</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>RESPONSE</span>
              </div>
              <div className="text-sm font-semibold text-white">&lt; 12 Hours</div>
              <div className="text-xs text-gray-400">Direct response guaranteed</div>
            </div>
          </div>

          {/* Email Copy Card */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#060810]/80 border border-white/10">
            <div className="flex items-center gap-3 text-left">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase">Direct Email Address</p>
                <p className="text-base sm:text-lg font-mono font-semibold text-white">{email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-xs hover:brightness-110 transition shadow-md flex items-center justify-center gap-2"
              >
                <span>Email Nilesh</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/40 hover:bg-white/[0.05] transition flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">@nilesh2033parmarDevOps</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/40 hover:bg-white/[0.05] transition flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">Connect & Message Directly</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;