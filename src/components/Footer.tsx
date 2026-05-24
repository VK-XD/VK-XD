import { PageView } from "../types";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/[0.08] pt-20 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-black/[0.08]">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="font-display font-bold text-xl tracking-wider text-black flex items-center gap-1.5">
                EMAZYN <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-black/10 bg-black/5 text-gray-600 rounded">Ecosystem</span>
              </span>
              <p className="font-sans text-xs text-gray-500 mt-2">
                AI-Powered Career Growth Ecosystem
              </p>
            </div>
            <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-sm">
              Helping People Learn Better, Build Better, and Grow Better in Their Careers. Re-architecting modern career delivery through predictive roadmaps and real-world implementation.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href="mailto:support@emazyn.com" className="flex items-center gap-2 group text-xs text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                <span>support@emazyn.com</span>
              </a>
              <a href="mailto:partnerships@emazyn.com" className="flex items-center gap-2 group text-xs text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                <span>partnerships@emazyn.com</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span>90000 00009 / +91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-black uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button onClick={() => handleLinkClick("home")} className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("ai-career-roadmap")} className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors text-left">
                  Career Tools
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("for-colleges")} className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors text-left">
                  For Colleges
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("for-corporates")} className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors text-left">
                  For Corporates
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("about-us")} className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("contact-us")} className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Areas */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-black uppercase tracking-wider">
              Core Areas
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button onClick={() => handleLinkClick("ai-skill-analyzer")} className="text-sm text-gray-500 hover:text-black hover:underline cursor-pointer transition-colors text-left">
                  Career Readiness
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("ai-career-roadmap")} className="text-sm text-gray-500 hover:text-black hover:underline cursor-pointer transition-colors text-left">
                  AI Career Roadmaps
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("ai-resume-builder")} className="text-sm text-gray-500 hover:text-black hover:underline cursor-pointer transition-colors text-left">
                  Resume Builder
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("ai-portfolio-builder")} className="text-sm text-gray-500 hover:text-black hover:underline cursor-pointer transition-colors text-left">
                  Portfolio Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("ai-mock-interview")} className="text-sm text-gray-500 hover:text-black hover:underline cursor-pointer transition-colors text-left">
                  Mock Interviews
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("opportunities-board")} className="text-sm text-gray-500 hover:text-black hover:underline cursor-pointer transition-colors text-left">
                  Industry Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Location and Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-black uppercase tracking-wider">
              Ecosystem Status
            </h4>
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-green-50 text-green-700 border border-green-200/50 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Platform Status: Active
              </span>
              <p className="font-sans text-xs text-gray-500 leading-normal">
                Connecting top tier engineering institutions and Fortune 500 corporate partners directly into a unified network.
              </p>
              <div className="flex items-start gap-2 text-xs text-gray-500 mt-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Emazyn Global Headquarters,<br />Tech Hub, New Delhi, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-[11px] font-mono text-gray-400">
          <p>© {currentYear} Emazyn Ecosystem. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">NEP Alignment</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
