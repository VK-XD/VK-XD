import { PageView } from "../types";
import { ArrowRight, Compass, Bot, CheckSquare, Sparkles, BookOpen, Users, Search, Target, Shield, HeartPulse, GraduationCap, Building2, TrendingUp, Cpu, Award } from "lucide-react";
import GridBackground from "../components/GridBackground";
import ScrollReveal from "../components/ScrollReveal";
import MotionGraphic from "../components/MotionGraphic";

interface HomeViewProps {
  onNavigate: (view: PageView) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const trustHighlights = [
    { title: "AI-Powered Career Roadmaps", desc: "Predictive paths aligned to real vacancy demands" },
    { title: "Industry-Focused Learning", desc: "Value Added Programs centered on actual technology stacks" },
    { title: "Real-World Projects", desc: "Build evidence-backed proof of capability" },
    { title: "Career Growth Tools", desc: "Automated analysis of resume, LinkedIn, & speaking clarity" },
    { title: "Resume & Portfolio Building", desc: "Generate ATS-friendly presentation matrices" },
    { title: "Placement & Opportunity Readiness", desc: "End-to-end readiness support for global hires" },
  ];

  const features = [
    {
      title: "AI Career Roadmap",
      desc: "Personalized learning and career growth paths based on goals, strengths, and industry trends.",
      icon: Compass,
      view: "ai-career-roadmap" as PageView,
      badge: "GUIDANCE"
    },
    {
      title: "AI Skill Analyzer",
      desc: "Identify skill gaps and discover improvement areas for career advancement.",
      icon: Bot,
      view: "ai-skill-analyzer" as PageView,
      badge: "DIAGNOSTICS"
    },
    {
      title: "Resume Builder",
      desc: "Create professional, ATS-friendly resumes optimized for modern hiring standards.",
      icon: CheckSquare,
      view: "ai-resume-builder" as PageView,
      badge: "RESUME"
    },
    {
      title: "LinkedIn Optimization",
      desc: "Build stronger professional profiles and improve visibility for opportunities.",
      icon: Sparkles,
      view: "ai-linkedin-optimizer" as PageView,
      badge: "BRANDING"
    },
    {
      title: "Portfolio Builder",
      desc: "Showcase projects, achievements, certifications, and practical work professionally.",
      icon: BookOpen,
      view: "ai-portfolio-builder" as PageView,
      badge: "PORTFOLIO"
    },
    {
      title: "Mock Interviews",
      desc: "Practice interviews, improve confidence, and prepare for real hiring scenarios.",
      icon: Users,
      view: "ai-mock-interview" as PageView,
      badge: "PREPARATION"
    },
    {
      title: "Job & Opportunity Board",
      desc: "Explore internships, jobs, freelancing opportunities, and career pathways.",
      icon: Search,
      view: "opportunities-board" as PageView,
      badge: "OPPORTUNITIES"
    }
  ];

  const steps = [
    { step: "01", title: "Discover Your Direction", desc: "Understand strengths, goals, and skill gaps through AI-powered analysis." },
    { step: "02", title: "Build Industry-Relevant Skills", desc: "Access practical learning experiences aligned with modern industry requirements." },
    { step: "03", title: "Create Real-World Projects", desc: "Apply learning through projects that strengthen portfolios and professional credibility." },
    { step: "04", title: "Build Your Professional Presence", desc: "Optimize resumes, LinkedIn profiles, and personal branding for better opportunities." },
    { step: "05", title: "Prepare for Opportunities", desc: "Practice interviews, improve communication, and become career-ready." },
    { step: "06", title: "Continue Growing", desc: "Track progress, explore opportunities, and continuously upgrade your career journey." }
  ];

  const usps = [
    { title: "Career-Focused, Not Just Course-Focused", desc: "Emazyn is designed around long-term career outcomes instead of isolated learning sessions." },
    { title: "AI-Powered Personalization", desc: "Career paths, recommendations, and growth journeys are tailored to individual goals and progress." },
    { title: "Project-Based Learning", desc: "Focus on practical implementation and portfolio development instead of theory-only learning." },
    { title: "Industry-Relevant Ecosystem", desc: "Built around modern technology, employability trends, and real-world professional requirements." },
    { title: "Continuous Growth Platform", desc: "Learning, portfolio building, career preparation, and opportunity tracking happen in one ecosystem." },
    { title: "Flexible for Every Career Stage", desc: "Suitable for beginners, students, professionals, institutions, and organizations." }
  ];

  const audiences = [
    { title: "Students", desc: "Build skills, portfolios, and career confidence to clear placements with ease.", icon: GraduationCap, tab: "Student" },
    { title: "Working Professionals", desc: "Upskill, switch careers, and stay industry-relevant in an AI-driven age.", icon: TrendingUp, tab: "Working Professional" },
    { title: "Career Switchers", desc: "Explore new domains and create structured transition pathways into technology.", icon: Target, tab: "Career Switcher" },
    { title: "Colleges & Institutions", desc: "Deliver career-focused learning and student development Value-Added Programs.", icon: GraduationCap, tab: "College / Institution" },
    { title: "Organizations & Teams", desc: "Enable workforce upskilling, technical growth, and productivity transformation.", icon: Building2, tab: "Corporate / Organization" }
  ];

  const domains = [
    "Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", 
    "Cloud Computing", "Full Stack Development", "Career Readiness", 
    "Resume Optimization", "Portfolio Development", "Interview Preparation", "Professional Branding"
  ];

  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 border-b border-black/[0.08] overflow-hidden">
        <GridBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/50 mb-6 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  AI-Powered Career Growth Ecosystem
                </span>
                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-3xl xl:text-5xl tracking-tight leading-[1.1] text-black">
                  Build Skills.<br className="hidden sm:inline" /> Grow Careers.<br className="hidden sm:inline" /> Unlock Opportunities.
                </h1>
                <p className="font-sans text-base text-gray-500 mt-6 leading-relaxed">
                  Emazyn is an AI-powered career growth ecosystem designed to help individuals improve their skills, build industry-ready portfolios, prepare for opportunities, and grow confidently in their professional journey.
                </p>
                <p className="font-sans text-sm text-gray-400 mt-3 leading-relaxed">
                  Whether you're a student, working professional, career switcher, institution, or organization — Emazyn helps transform learning into real career outcomes.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <button
                    onClick={() => onNavigate("contact-us")}
                    className="bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold rounded-lg px-6 py-3.5 flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate("contact-us")}
                    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-sans text-sm font-semibold rounded-lg px-6 py-3.5 transition-all shadow-sm"
                  >
                    Login to Portal
                  </button>
                </div>
              </div>

              {/* High-fidelity generated image column matching colleges/corporates style */}
              <div className="w-full relative select-none animate-float">
                {/* Decorative glows */}
                <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -left-10"></div>
                <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -right-10"></div>
                <div className="rounded-2xl overflow-hidden liquid-glass border border-white/40 p-3 shadow-lg">
                  <img
                    src="/src/assets/images/home_hero_dashboard_emazyn_1779637424525.png"
                    alt="Emazyn AI Career Growth Dashboard Mockup"
                    className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Grid Layout Trust Highlights resembling Indicium partner grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] bg-white/[0.6] rounded-xl overflow-hidden mt-16 shadow-sm">
            {trustHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-6 border-b border-r border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-b-0"
              >
                <div className="flex items-baseline gap-2.5 mb-1.5">
                  <span className="font-mono text-xs font-bold text-blue-600">0{idx + 1}</span>
                  <h4 className="font-sans text-xs font-bold text-gray-900">{highlight.title}</h4>
                </div>
                <p className="font-sans text-[11px] text-gray-500 mt-1 leading-normal">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — WHAT IS EMAZYN */}
      <section className="py-20 border-b border-black/[0.08] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Col */}
              <div>
                <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold px-2 py-0.5 border border-red-200/50 bg-red-50 rounded-full">
                  SECTION 01
                </span>
                <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3 leading-tight">
                  A Modern Career Growth Platform Built for the Real World
                </h2>
                <p className="font-sans text-sm text-gray-500 mt-5 leading-relaxed">
                  Traditional education frequently stops at certificates. However, recruiters care about proof of competence. Emazyn flips the paradigm by aligning learning outcomes with real professional visibility.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    "career clarity", "practical skills", "portfolio building",
                    "professional branding", "interview readiness", "long-term career growth"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                      <span className="font-sans text-xs font-semibold text-gray-800 uppercase tracking-wide text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Col - High-fidelity Motion Graphic */}
              <div className="w-full">
                <MotionGraphic type="roadmap" />
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — THE EMAZYN ECOSYSTEM (BENTO CELL GRID) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold px-2? py-0.5">
              THE CORE SUITE
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3 leading-tight">
              Everything Needed for Career Growth — In One Platform
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2 max-w-lg mx-auto">
              Our products are built on predictive analytics to analyze, structure, draft, optimize, and simulate your complete professional journey.
            </p>
          </div>

          {/* Grid Layout with hover reveals & Liquid Glass style cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <ScrollReveal key={feat.title} delay={idx * 0.05} scaleEffect={true}>
                  <div
                    onClick={() => onNavigate(feat.view)}
                    className="group relative p-8 rounded-2xl border border-black/[0.08] bg-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <IconComp className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <span className="font-mono text-[9px] font-semibold text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
                          {feat.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-sans text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                        {feat.title}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                      </h3>
                      <p className="font-sans text-[11px] text-gray-500 mt-2 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <span className="font-mono text-[9px] text-blue-600 uppercase font-semibold mt-4 flex items-center gap-1 self-end group-hover:underline">
                      Launch Tool <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3 — HOW EMAZYN WORKS (CHRONOLOGICAL TIMELINE CHART) */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-xl mb-16">
            <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
              METHODOLOGY
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              A Structured Path to Career Success
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2">
              Transforming your presence requires chronological steps designed to analyze, prepare, present, and align.
            </p>
          </div>

          {/* Chronological Vertical Timeline Chart instead of boxed cards */}
          <div className="relative border border-black/[0.08] bg-white rounded-2xl p-8 md:p-12 shadow-sm overflow-hidden min-h-[500px]">
            {/* The pipeline stripe */}
            <div className="absolute top-10 bottom-10 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-600 to-gray-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {steps.map((st, idx) => (
                <ScrollReveal key={st.step} delay={idx * 0.05}>
                  <div className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    
                    {/* Central Connecting Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.15)] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-125">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    
                    {/* Content Block */}
                    <div className={`pl-16 md:pl-0 w-full md:w-1/2 text-left ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-600 border border-blue-100 mb-2">
                        <span>Step {st.step}</span>
                      </div>
                      <h4 className="font-sans text-sm font-bold text-gray-950">{st.title}</h4>
                      <p className="font-sans text-[11px] text-gray-500 mt-1 max-w-sm leading-normal">{st.desc}</p>
                    </div>
                    
                    {/* Empty Space Column for Desktop */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHY EMAZYN (USP GRID) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              ADVANTAGE
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3 leading-tight">
              Why People Choose Emazyn
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Our unique value propositions provide long-term continuous alignment rather than isolated credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] bg-white rounded-xl overflow-hidden shadow-sm">
            {usps.map((usp, idx) => (
              <div key={idx} className="p-8 border-b border-r border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 [&:nth-child(4)]:border-b [&:nth-child(5)]:border-b lg:[&:nth-child(6)]:border-b-0">
                <p className="font-mono text-xs text-gray-400 mb-1">PROPOSITION 0{idx + 1}</p>
                <h4 className="font-sans text-xs font-bold text-gray-900">{usp.title}</h4>
                <p className="font-sans text-[11px] text-gray-500 mt-1 leading-normal">{usp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — WHO EMAZYN IS FOR (AUDIENCE CARDS WITH DYNAMIC FORUMS) */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
              TARGET GROUPS
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              Designed for Anyone Serious About Career Growth
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Whether you are looking to secure your first internship, pivot into an evolving industry, or upscale your university value-added courses, Emazyn provides tailored entry gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  onClick={() => onNavigate("contact-us")}
                  className="p-6 border border-black/10 rounded-xl bg-gray-50/50 cursor-pointer hover:border-blue-600 hover:bg-white transition-all group flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      <h4 className="font-sans text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {aud.title}
                      </h4>
                    </div>
                    <p className="font-sans text-[11px] text-gray-500 leading-normal">
                      {aud.desc}
                    </p>
                  </div>
                  <span className="font-mono text-[9px] text-blue-600 uppercase font-semibold mt-4 group-hover:underline flex items-center gap-1 justify-end">
                    Submit Query <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6 — LEARNING BEYOND CERTIFICATES & EMAZYN APPROACH */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
                THE DISCORDANCE
              </span>
              <h2 className="font-display font-medium text-3xl tracking-tight text-gray-900 leading-tight">
                Build Skills That Can Be Demonstrated, Not Just Mentioned
              </h2>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                As employers hire on skills rather than degrees alone, what really matters are the core assets they increasingly value:
              </p>
              
              <div className="grid grid-cols-2 gap-3 pl-2">
                {["practical skills", "real-world projects", "professional portfolios", "communication", "adaptability", "continuous learning"].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="font-sans text-xs font-semibold text-gray-800 uppercase tracking-wider text-[11px]">{v}</span>
                  </div>
                ))}
              </div>
              
              <p className="font-sans text-xs text-gray-400 italic">
                “Emazyn helps individuals build evidence-backed career profiles that reflect real capability and growth.”
              </p>
            </div>

            {/* Approach Panel */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
              <span className="font-mono text-[9px] text-gray-500 tracking-wider">THE EMAZYN APPROACH</span>
              <h3 className="font-display font-medium text-2xl text-black mt-2 mb-4">Learn. Build. Improve. Grow.</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                Modern professional development is no longer linear. It demands a fast-feedback cycle of learning a hard tech skill, putting it immediately into a project, drafting a resume update, and testing it with a custom mock simulator.
              </p>

              <div className="space-y-4">
                {[
                  { t: "Continuous Learning", d: "Adapt to emerging AI tool stacks" },
                  { t: "Practical Implementation", d: "Prioritize build execution over video watching" },
                  { t: "Personal Branding", d: "Keep LinkedIn & resume optimized constantly" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="p-1 rounded bg-blue-50 border border-blue-100 text-blue-600 font-mono text-[10px] w-5 h-5 flex items-center justify-center shrink-0">✓</div>
                    <div>
                      <p className="font-sans text-xs font-bold text-gray-900 leading-none">{item.t}</p>
                      <p className="font-sans text-[11px] text-gray-500 mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — FUTURE-READY LEARNING AREAS */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold">
              DOMAINS
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-2 leading-tight">
              Focused on Modern Career & Technology Domains
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Our automated models map learning pipelines to high-demand technical specializations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {domains.map((dom) => (
              <span
                key={dom}
                className="font-sans text-xs font-medium text-gray-800 bg-gray-50 border border-black/[0.08] rounded-full px-4 py-2 hover:border-blue-600 hover:text-blue-600 cursor-default transition-all shadow-[0_1px_1px_rgba(0,0,0,0.01)]"
              >
                {dom}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — FINAL CTA SECTION */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grid-bg-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="font-mono text-[10px] text-blue-400 tracking-wider bg-blue-900/45 border border-blue-800 rounded px-2.5 py-0.5">
            GET STARTED
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-white tracking-tight mt-6 max-w-2xl mx-auto leading-tight">
            Start Building Your Career Growth Journey
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Join Emazyn to access AI-powered career tools, practical growth systems, portfolio-building resources, and opportunity-focused learning experiences.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <button
              onClick={() => onNavigate("contact-us")}
              className="bg-white hover:bg-gray-150 text-black font-sans text-sm font-semibold rounded-lg px-7 py-3 transition-all"
            >
              Sign Up to Emazyn
            </button>
            <button
              onClick={() => onNavigate("contact-us")}
              className="border border-white/20 hover:bg-white/10 text-white font-sans text-sm font-semibold rounded-lg px-7 py-3 transition-all"
            >
              Login to Portal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
