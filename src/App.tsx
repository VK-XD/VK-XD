import { useState, useEffect } from "react";
import { PageView } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import ServiceView from "./views/ServiceView";
import ForCollegesView from "./views/ForCollegesView";
import ForCorporatesView from "./views/ForCorporatesView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import { Sparkles, Compass, CheckSquare, Search, GraduationCap, Building2 } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>("home");

  // Track page navigation to scroll to top automatically
  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Synchronize hash routing if user manually edits URL hashes (optional, but premium feel!)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as PageView;
      const validPages: PageView[] = [
        "home",
        "ai-career-roadmap",
        "ai-skill-analyzer",
        "ai-resume-builder",
        "ai-linkedin-optimizer",
        "ai-portfolio-builder",
        "ai-mock-interview",
        "opportunities-board",
        "for-colleges",
        "for-corporates",
        "about-us",
        "contact-us"
      ];
      if (validPages.includes(hash)) {
        setCurrentView(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when view state changes
  useEffect(() => {
    window.location.hash = currentView;
  }, [currentView]);

  return (
    <div id="emazyn-app-container" className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0C0C0E] antialiased">
      
      {/* Top Banner / Trust notice representing Indicium premium identity */}
      <div className="bg-black text-[10px] text-gray-400 font-mono text-center py-2.5 px-4 tracking-wider uppercase border-b border-white/[0.05] flex items-center justify-center gap-4 select-none">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-blue-400" />
          AI-Powered Career Performance Ecosystem
        </span>
        <span className="hidden sm:inline-block text-white/20">|</span>
        <span className="hidden sm:flex items-center gap-1">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
          NEP-Aligned University Models
        </span>
        <span className="hidden sm:inline-block text-white/20">|</span>
        <span className="hidden sm:flex items-center gap-1">
          <Building2 className="w-3.5 h-3.5 text-blue-400" />
          Enterprise Scalability Standard
        </span>
      </div>

      {/* Navigation Header */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <main className="flex-1 w-full relative">
        <div key={currentView} className="transition-all duration-300 animate-fade-in">
          
          {currentView === "home" && (
            <HomeView onNavigate={handleNavigate} />
          )}

          {[
            "ai-career-roadmap",
            "ai-skill-analyzer",
            "ai-resume-builder",
            "ai-linkedin-optimizer",
            "ai-portfolio-builder",
            "ai-mock-interview",
            "opportunities-board"
          ].includes(currentView) && (
            <ServiceView viewId={currentView} onNavigate={handleNavigate} />
          )}

          {currentView === "for-colleges" && (
            <ForCollegesView onNavigate={handleNavigate} />
          )}

          {currentView === "for-corporates" && (
            <ForCorporatesView onNavigate={handleNavigate} />
          )}

          {currentView === "about-us" && (
            <AboutView onNavigate={handleNavigate} />
          )}

          {currentView === "contact-us" && (
            <ContactView onNavigate={handleNavigate} />
          )}

        </div>
      </main>

      {/* Platform global footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
