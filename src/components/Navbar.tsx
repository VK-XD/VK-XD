import { useState } from "react";
import { PageView } from "../types";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles, BookOpen, Users, Compass, Bot, CheckSquare, Search } from "lucide-react";

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const careerSolutions = [
    { name: "AI Career Roadmap", view: "ai-career-roadmap" as PageView, desc: "Personalized growth guidance", icon: Compass },
    { name: "AI Skill Analyser", view: "ai-skill-analyzer" as PageView, desc: "Evaluate career readiness", icon: Bot },
    { name: "Resume Builder", view: "ai-resume-builder" as PageView, desc: "ATS-friendly optimization", icon: CheckSquare },
    { name: "LinkedIn Optimisation", view: "ai-linkedin-optimizer" as PageView, desc: "Enhance professional branding", icon: Sparkles },
    { name: "Portfolio Builder", view: "ai-portfolio-builder" as PageView, desc: "Showcase real projects", icon: BookOpen },
    { name: "Mock Interview", view: "ai-mock-interview" as PageView, desc: "Prepare with simulated grids", icon: Users },
    { name: "Job Board", view: "opportunities-board" as PageView, desc: "Explore matching opportunities", icon: Search },
  ];

  const resourceLinks = [
    { name: "About Us", view: "about-us" as PageView },
    { name: "Contact Us", view: "contact-us" as PageView },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer select-none" onClick={() => handleLinkClick("home")}>
            <span className="font-display font-bold text-xl tracking-wider text-black flex items-center gap-1.5">
              EMAZYN <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-black/10 bg-black/5 text-gray-600 rounded">Ecosystem</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleLinkClick("home")}
              className={`font-sans text-sm font-medium transition-colors hover:text-black hover:underline underline-offset-4 ${
                currentView === "home" ? "text-blue-600 font-bold" : "text-gray-600"
              }`}
            >
              Home
            </button>

            {/* Dropdown 1: Career Solutions */}
            <div className="relative">
              <button
                onMouseEnter={() => setSolutionsOpen(true)}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-black py-2 ${
                  ["ai-career-roadmap", "ai-skill-analyzer", "ai-resume-builder", "ai-linkedin-optimizer", "ai-portfolio-builder", "ai-mock-interview", "opportunities-board"].includes(currentView)
                    ? "text-blue-600 font-bold"
                    : "text-gray-600"
                }`}
              >
                Career Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Dropdown */}
              {solutionsOpen && (
                <div
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[460px] bg-white border border-black/10 shadow-xl rounded-xl p-4 grid grid-cols-1 gap-1 transition-all duration-200"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {careerSolutions.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={item.name}
                          onClick={() => handleLinkClick(item.view)}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                        >
                          <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-sans text-xs font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </p>
                            <p className="font-sans text-[10px] text-gray-500 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick("for-colleges")}
              className={`font-sans text-sm font-medium transition-colors hover:text-black hover:underline underline-offset-4 ${
                currentView === "for-colleges" ? "text-blue-600 font-bold" : "text-gray-600"
              }`}
            >
              For Colleges
            </button>

            <button
              onClick={() => handleLinkClick("for-corporates")}
              className={`font-sans text-sm font-medium transition-colors hover:text-black hover:underline underline-offset-4 ${
                currentView === "for-corporates" ? "text-blue-600 font-bold" : "text-gray-600"
              }`}
            >
              For Corporates
            </button>

            {/* Dropdown 2: Resources */}
            <div className="relative">
              <button
                onMouseEnter={() => setResourcesOpen(true)}
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-black py-2 ${
                  ["about-us", "contact-us"].includes(currentView) ? "text-blue-600 font-bold" : "text-gray-600"
                }`}
              >
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>

              {resourcesOpen && (
                <div
                  onMouseLeave={() => setResourcesOpen(false)}
                  className="absolute right-0 top-full w-48 bg-white border border-black/10 shadow-xl rounded-xl p-2 flex flex-col gap-1 transition-all duration-200"
                >
                  {resourceLinks.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick(item.view)}
                      className="text-left font-sans text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-all"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("contact-us")}
              className="font-sans text-sm font-semibold text-gray-900 px-4 py-2 hover:text-blue-600 transition-colors"
            >
              Portal Login
            </button>
            <button
              onClick={() => handleLinkClick("contact-us")}
              className="relative inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white font-sans text-sm font-medium rounded-lg px-5 py-2.5 transition-all duration-200 shadow-sm border border-black group"
            >
              <span>Get Started</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-black transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/[0.08] shadow-inner py-4 px-6 flex flex-col gap-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick("home")}
              className="text-left font-sans text-sm font-medium py-1.5 text-gray-800 hover:text-blue-600"
            >
              Home
            </button>

            {/* solutions section expandable */}
            <div className="border-t border-gray-100 pt-3">
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Career Solutions</p>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {careerSolutions.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.view)}
                    className="text-left font-sans text-xs font-semibold py-1.5 text-gray-700 hover:text-blue-600 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-600"></span>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick("for-colleges")}
              className="text-left font-sans text-sm font-medium py-1.5 border-t border-gray-100 pt-3 text-gray-800 hover:text-blue-600"
            >
              For Colleges
            </button>

            <button
              onClick={() => handleLinkClick("for-corporates")}
              className="text-left font-sans text-sm font-medium py-1.5 text-gray-800 hover:text-blue-600"
            >
              For Corporates
            </button>

            {/* Resources list */}
            <div className="border-t border-gray-100 pt-3">
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Company</p>
              <div className="flex flex-col gap-1.5 pl-2">
                {resourceLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.view)}
                    className="text-left font-sans text-xs font-semibold py-1.5 text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => handleLinkClick("contact-us")}
              className="w-full text-center font-sans text-sm font-semibold py-3 text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              Portal Login
            </button>
            <button
              onClick={() => handleLinkClick("contact-us")}
              className="w-full text-center bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
