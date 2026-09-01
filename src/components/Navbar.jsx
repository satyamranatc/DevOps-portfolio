import { useState, useEffect } from "react";
import { Copy, Check, Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("nilesh2033parmar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { name: "Case Study", href: "#case-study" },
    { name: "CI/CD Simulator", href: "#workflow" },
    { name: "Projects", href: "#projects" },
    { name: "Toolchain Stack", href: "#skills" },
    { name: "Journey", href: "#journey" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`mx-auto rounded-full border transition-all duration-300 px-5 sm:px-6 py-3 flex items-center justify-between ${
            scrolled
              ? "bg-[#060810]/85 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              : "bg-white/[0.03] backdrop-blur-md border-white/10 shadow-lg"
          }`}
        >
          {/* Logo & Status Indicator */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Nilesh<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for Hire
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] p-1 border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={copyEmail}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5 border border-white/10 transition flex items-center gap-1.5 cursor-pointer"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-xs hover:brightness-110 transition shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              Hire Nilesh
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#090C16]/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={copyEmail}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-mono text-gray-300 bg-white/5 border border-white/10 hover:border-cyan-400/40 transition flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied (nilesh2033parmar@gmail.com)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy: nilesh2033parmar@gmail.com</span>
                    </>
                  )}
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 rounded-xl text-center font-semibold text-xs text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 transition shadow-md"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;