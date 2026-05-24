import { PageView } from "../types";
import FormContact from "../components/FormContact";
import { ArrowRight, Mail, Phone, MapPin, Check, ShieldCheck, Headphones, MessageSquare, Briefcase } from "lucide-react";
import GridBackground from "../components/GridBackground";
import ScrollReveal from "../components/ScrollReveal";

interface ContactViewProps {
  onNavigate: (view: PageView) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  
  const trustHighlights = [
    { title: "Personalized Support", desc: "Our advisors align directly with your explicit goal." },
    { title: "Faster Response Coordination", desc: "Direct feedback channel dispatched within 24 hours." },
    { title: "Dedicated Partnership Discussions", desc: "Meticulous structural scopes configured for universities or corporate firms." },
    { title: "Career & Learning Guidance", desc: "Comprehensive path advising based on real vacancy diagnostics." },
    { title: "Flexible Contact Scheduling", desc: "Schedule calls per your calendar availability." }
  ];

  const canHelpPoints = [
    { title: "Personalized Career Guidance", desc: "Receive support aligned with your goals and career stage." },
    { title: "Industry-Focused Learning Support", desc: "Explore modern technology and professional growth pathways." },
    { title: "Career Readiness Ecosystem", desc: "Build skills, portfolios, resumes, and interview confidence." },
    { title: "Institutional & Corporate Partnerships", desc: "Enable large-scale learning and workforce development initiatives." },
    { title: "AI-Powered Growth Systems", desc: "Leverage smarter career and learning tools for continuous improvement." }
  ];

  const processSteps = [
    { num: 1, title: "Our team reviews your requirement.", desc: "Specialists evaluate your designated industry profile & comments." },
    { num: 2, title: "We identify the right support.", desc: "Mapping your goals to exact platform tools or VAC curriculum tracks." },
    { num: 3, title: "Representative connects.", desc: "Our account manager contacts you during your selected preferred contact time." },
    { num: 4, title: "Onboarding & Launch.", desc: "Finalize customized solutions, launch platform access keys, and review pathways." }
  ];

  const handleScrollToForm = () => {
    const el = document.getElementById("contact-form-title");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      
      {/* CONTACT HERO */}
      <section className="relative pt-24 pb-20 border-b border-black/[0.08] overflow-hidden">
        <GridBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/50 mb-6 uppercase tracking-wider">
                  Contact Us Page &middot; Emazyn
                </span>
                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-3xl xl:text-5xl tracking-tight leading-[1.1] text-black">
                  Connect with the Emazyn Team
                </h1>
                <p className="font-sans text-xs text-blue-600 block mt-2 font-semibold uppercase">
                  Let’s Discuss Your Career Growth, Learning, or Partnership Requirements
                </p>
                <p className="font-sans text-sm text-gray-500 mt-6 leading-relaxed">
                  Whether you're looking for career guidance, learning support, workforce upskilling, institutional partnerships, or growth opportunities — our team is here to help. Fill out the form below and our team will connect with you based on your requirements.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <button
                    onClick={handleScrollToForm}
                    className="bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold rounded-lg px-6 py-3.5 flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Submit Your Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Glossy contact illustration */}
              <div className="w-full relative select-none animate-float">
                {/* Decorative glows */}
                <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -left-10"></div>
                <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -right-10"></div>
                <div className="rounded-2xl overflow-hidden liquid-glass border border-white/40 p-3 shadow-lg">
                  <img
                    src="/src/assets/images/contact_hero_illustration_1779637176350.png"
                    alt="Contact support graphics and indicators"
                    className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 border border-black/[0.08] bg-white/[0.60] rounded-xl overflow-hidden mt-16 shadow-sm">
            {trustHighlights.map((hl, idx) => (
              <div key={idx} className="p-5 border-r border-b border-black/[0.08] last:border-b-0 md:border-b-0 last:border-r-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block mb-2"></span>
                <h4 className="font-sans text-xs font-bold text-gray-950 mb-1">{hl.title}</h4>
                <p className="font-sans text-[10px] text-gray-500 leading-normal">{hl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — CORE FORM */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FormContact />
        </div>
      </section>

      {/* SECTION 2 — WHY CONTACT EMAZYN (CAN HELP LIST) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              ADVANTAGE
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-2">
              How Emazyn Can Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] bg-white rounded-xl overflow-hidden shadow-sm">
            {canHelpPoints.map((item, idx) => (
              <div key={idx} className="p-8 border-b border-r border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-b-0">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className="font-sans text-xs font-bold text-gray-905 mb-1">{item.title}</h4>
                <p className="font-sans text-[11px] text-gray-500 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — RESPONSE EXPECTATIONS */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
              PROCESS PIPELINE
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              What Happens After You Submit?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="p-6 border border-black/10 rounded-xl bg-gray-50/50">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-full w-7 h-7 flex items-center justify-center mb-4">
                  {step.num}
                </span>
                <h4 className="font-display font-bold text-xs text-gray-950 mb-1 leading-snug">{step.title}</h4>
                <p className="font-sans text-[10px] text-gray-500 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL COLLABORATE CTA */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grid-bg-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="font-display font-medium text-3xl text-white tracking-tight leading-tight">
            Let’s Build Your Career Growth Journey Together
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            Whether you're an individual, university institution, or corporate team — Emazyn is dedicated to resolving modern technology upskilling & direct vacancy match pipelines.
          </p>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleScrollToForm}
              className="bg-white hover:bg-gray-150 text-black font-sans text-sm font-semibold rounded-lg px-8 py-3.5 flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Connect Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
