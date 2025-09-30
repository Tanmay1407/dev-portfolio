import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const avatarSrc = "/hero_profile.jpg";
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-px mx-auto">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#home"
              className="flex items-center gap-3 text-lg font-semibold tracking-tight"
            >
              <div className="relative h-8 w-8">
                <span
                  aria-hidden
                  className="absolute -inset-4 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(6,182,212,1) 0%, rgba(139,92,246,0.95) 40%, rgba(245,158,11,0.85) 75%, rgba(245,158,11,0) 92%)",
                    filter: "blur(22px)",
                  }}
                />
                <img
                  src={avatarSrc}
                  alt="Tanmay Patel"
                  className="relative z-10 h-8 w-8 rounded-full object-cover"
                />
              </div>
              <span className="animated-gradient bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Tanmay Patel
              </span>
            </a>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-white/80 ${
                    activeSection === link.href.substring(1)
                      ? "text-sky-400"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docsend.com/v/f262h/tanmaycv"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:brightness-110"
              >
                Resume
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg backdrop-blur-lg">
            <div className="flex flex-col items-center gap-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-center rounded-md py-2 transition hover:bg-white/5 ${
                    activeSection === link.href.substring(1)
                      ? "text-sky-400 font-semibold"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docsend.com/v/f262h/tanmaycv"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:brightness-110"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
