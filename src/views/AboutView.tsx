import { PageView } from "../types";
import { ArrowRight, Compass, Bot, CheckSquare, Sparkles, BookOpen, Users, Compass as CompassIcon, Cpu, Globe, Rocket, Shield, Server, Award, Check } from "lucide-react";
import GridBackground from "../components/GridBackground";
import ScrollReveal from "../components/ScrollReveal";
import MotionGraphic from "../components/MotionGraphic";

interface AboutViewProps {
  onNavigate: (view: PageView) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  
  const achievements = [
    { title: "Career Clarity", desc: "Help individuals understand career directions, growth opportunities, and learning priorities." },
    { title: "Skill Development", desc: "Support practical skill-building aligned with modern industry expectations." },
    { title: "Professional Branding", desc: "Improve resumes, portfolios, LinkedIn profiles, and professional visibility." },
    { title: "Career Readiness", desc: "Enable interview preparation, confidence building, and opportunity readiness." },
    { title: "Opportunity Access", desc: "Connect individuals with jobs, internships, freelance work, and growth opportunities." },
    { title: "Continuous Growth", desc: "Support long-term learning, adaptability, and professional development." }
  ];

  const corePillars = [
    { title: "AI-Powered Career Ecosystem", desc: "Emazyn combines AI-driven guidance with practical career development systems." },
    { title: "Career-Focused Approach", desc: "Focused on real career growth instead of only course completion." },
    { title: "Practical Implementation", desc: "Encourages project building, portfolio development, and real-world application." },
    { title: "Continuous Learning Philosophy", desc: "Supports long-term career growth instead of one-time learning experiences." },
    { title: "Modern Industry Alignment", desc: "Built around evolving technology trends, employability requirements, and future-ready skills." },
    { title: "Integrated Growth Platform", desc: "Career roadmaps, resumes, portfolios, interviews, and opportunities connected in one ecosystem." },
    { title: "Flexible for Every Career Stage", desc: "Designed for students, professionals, career switchers, institutions, and organizations." }
  ];

  const technologyAreas = [
    "Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning",
    "Full Stack Development", "Cloud Computing", "Cybersecurity", "Digital Marketing",
    "Career Readiness", "Portfolio Development", "Professional Branding"
  ];

  return (
    <div className="w-full">
      
      {/* ABOUT HERO */}
      <section className="relative pt-24 pb-20 border-b border-black/[0.08] overflow-hidden">
        <GridBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/50 mb-6 uppercase tracking-wider">
                  About Emazyn
                </span>
                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-3xl xl:text-5xl tracking-tight leading-[1.1] text-black">
                  Helping People Learn Better, Build Better & Grow Better in Their Careers
                </h1>
                <p className="font-sans text-xs text-blue-600 block mt-2 font-semibold uppercase">
                  Building Smarter Career Growth Ecosystems for the Modern World
                </p>
                <p className="font-sans text-sm text-gray-500 mt-6 leading-relaxed">
                  Emazyn is an AI-powered career growth ecosystem designed to help individuals improve skills, build professional credibility, explore opportunities, and grow confidently in a rapidly evolving professional world.
                </p>
                <p className="font-sans text-sm text-gray-400 mt-3 leading-relaxed">
                  We combine AI-driven guidance, practical learning, career readiness tools, and growth-focused systems to support long-term professional development.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <button
                    onClick={() => onNavigate("ai-career-roadmap")}
                    className="bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold rounded-lg px-6 py-3.5 flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Explore Career Tools</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Success 3D constellation graphic */}
              <div className="w-full relative select-none animate-float">
                {/* Decorative glows */}
                <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -left-10"></div>
                <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -right-10"></div>
                <div className="rounded-2xl overflow-hidden liquid-glass border border-white/40 p-3 shadow-lg">
                  <img
                    src="/src/assets/images/about_hero_illustration_1779637158906.png"
                    alt="Emazyn Vision and Outcomes"
                    className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1 — WHO WE ARE */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
                WHO WE ARE
              </span>
              <h2 className="font-display font-medium text-2xl tracking-tight text-black mt-3">
                A Modern Career Growth Platform Built Around Real Career Outcomes
              </h2>
              <p className="font-sans text-xs text-gray-500 mt-5 leading-relaxed">
                Traditional learning systems often focus only on completing courses or earning certificates. However, modern career growth requires much more.
              </p>
              <p className="font-sans text-xs text-gray-500 mt-3 leading-relaxed">
                Emazyn was created to bridge the wide gap between learning and actual career growth. Our ecosystem is designed to help people continuously improve themselves through AI-guided practical career tools.
              </p>
            </div>

            <div className="bg-gray-50/50 border border-black/10 rounded-xl p-6">
              <h4 className="font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
                Necessary Modern Career Outcomes:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "practical implementation", "continuous upskilling", "portfolio building",
                  "professional branding", "interview readiness", "opportunity discovery", "long-term adaptability"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-sans text-xs font-medium text-gray-800 capitalize">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
              <Rocket className="w-8 h-8 text-blue-600 mb-6" />
              <h3 className="font-display font-medium text-xl text-black mb-3">Our Mission</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                To help individuals grow confidently in their careers by making career development smarter, more practical, more personalized, and more accessible through AI-powered ecosystems and modern growth tools. We aim to support lifelong learning, practical implementation, and opportunity readiness for people across different career stages.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
              <Globe className="w-8 h-8 text-blue-600 mb-6" />
              <h3 className="font-display font-medium text-xl text-black mb-3">Our Vision</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                To build a globally accessible career growth ecosystem where individuals, institutions, and organizations can continuously learn, adapt, improve, and stay future-ready in an evolving world driven by technology and innovation. We envision a future where career growth is personalized, practical, AI-assisted, continuously evolving, and focused on real-world outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>      {/* WHAT EMAZYN DOES / ACHIEVE */}
      <section className="py-20 border-b border-black/[0.08] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase font-semibold px-2 py-0.5 bg-blue-50 border border-blue-100/50 rounded-full">
              OUTCOMES
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              What We Help People Achieve
            </h2>
          </div>

          {/* Premium layout of Liquid Glass cards with hover lifts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} scaleEffect={true}>
                <div className="group relative p-8 rounded-2xl border border-black/[0.08] bg-white hover:border-blue-550 hover:shadow-lg transition-all duration-300">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider block mb-4">Outcome 0{idx + 1}</span>
                  <h4 className="font-sans text-xs font-bold text-gray-950 group-hover:text-blue-600 transition-colors">{ach.title}</h4>
                  <p className="font-sans text-[11px] text-gray-500 mt-2 leading-relaxed">{ach.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* WHY EMAZYN (SPECIFIC CORE PILLARS GIVING IT THE UNIQUE STANDOUT) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-3 py-1 bg-red-100/50 rounded-full">
              DIFFERENTIATORS
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              What Makes Emazyn Different
            </h2>
          </div>

          {/* Sizable grid with staggered reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pil, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} scaleEffect={true}>
                <div className="group relative p-8 rounded-2xl border border-black/[0.08] bg-white hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                  <span className="font-mono text-[9px] text-gray-400 block mb-4">Pillar 0{idx + 1}</span>
                  <h4 className="font-sans text-xs font-bold text-gray-950 group-hover:text-indigo-600 transition-colors">{pil.title}</h4>
                  <p className="font-sans text-[11px] text-gray-500 mt-2 leading-relaxed">{pil.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* OUR APPROACH TO GROWTH */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-mono text-[10px] text-blue-600 uppercase font-semibold">GROWTH TIMELINE</span>
          <h2 className="font-display font-medium text-3xl tracking-tight text-gray-950 mt-2 mb-4 leading-tight">
            Learn. Build. Improve. Grow.
          </h2>
          <p className="font-sans text-xs text-gray-500 max-w-lg mx-auto leading-relaxed mb-10">
            Career growth today is no longer linear. Modern professionals need custom tools geared for continuous learning, adaptability, practical implementation, and professional visibility.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {technologyAreas.map((area) => (
              <span key={area} className="font-sans text-[11px] font-medium text-gray-800 bg-gray-55 border border-black/[0.08] rounded-full px-4 py-2 hover:border-blue-600 hover:text-blue-600 cursor-default transition-all shadow-[0_1px_1px_rgba(0,0,0,0.01)]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL ABOUT CTA */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grid-bg-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Award className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="font-display font-medium text-3xl text-white tracking-tight leading-tight">
            Start Building Your Career Growth Journey with Emazyn
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            Access AI-powered career tools, practical growth systems, portfolio-building resources, and opportunity-focused ecosystems designed for long-term professional growth.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => onNavigate("ai-career-roadmap")}
              className="bg-white hover:bg-gray-150 text-black font-sans text-sm font-semibold rounded-lg px-8 py-3.5 flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Explore Career Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
