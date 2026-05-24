import { useState } from "react";
import { PageView } from "../types";
import { ArrowRight, ChevronDown, Check, Building2, HelpCircle, Laptop, GraduationCap } from "lucide-react";
import GridBackground from "../components/GridBackground";
import ScrollReveal from "../components/ScrollReveal";
import MotionGraphic from "../components/MotionGraphic";

interface ForCollegesViewProps {
  onNavigate: (view: PageView) => void;
}

export default function ForCollegesView({ onNavigate }: ForCollegesViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pillars = [
    { title: "NEP-Aligned Programs", desc: "Designed around National Education Policy mandates." },
    { title: "Real Industry Projects", desc: "Focuses on hands-on deployment rather than theory." },
    { title: "Free AI Tools", desc: "Gives access to builder, analyzer, and optimizer tool suites." },
    { title: "AI Career Roadmaps", desc: "Personalized growth charts matching industry trends." },
    { title: "Placement Readiness Focused", desc: "Dedicated mock interviews & resume optimization." },
    { title: "Verifiable Certificates", desc: "Secure digital credentials for student portfolios." }
  ];

  const collegeVacs = [
    "Data Analytics with AI",
    "Generative AI",
    "AI & Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Cybersecurity",
    "Full Stack with Python & AI",
    "Full Stack with Java & AI",
    "Digital Marketing with AI",
    "Embedded IoT"
  ];

  const globalPartners = [
    "Harvard University",
    "Stanford University",
    "Google Career Certificates",
    "IBM SkillsBuild",
    "freeCodeCamp",
    "Coursera",
    "NPTEL",
    "Kaggle"
  ];

  const implementationSteps = [
    { num: 1, title: "Partnership Discussion", desc: "Identify institutional goals and department requirements." },
    { num: 2, title: "Department Onboarding", desc: "Facilitate direct alignment with faculty coordinators." },
    { num: 3, title: "VAC Scheduling", desc: "Arrange training timetables, batch scopes, and platform logs." },
    { num: 4, title: "Program Execution", desc: "Deliver hands-on projects, roadmaps, and support systems." },
    { num: 5, title: "Students Dashboard Onboarding", desc: "Distribute individual logins and resume optimizer templates." },
    { num: 6, title: "Certification & Reporting", desc: "Host evaluation tests, dispatch verifiable certs, and report outcomes." }
  ];

  const collegeFaqs = [
    { q: "Is it NEP aligned?", a: "Yes. All value-added programs are aligned with National Education Policy (NEP) guidelines, supporting credit frameworks and hands-on skill execution mandates." },
    { q: "Which departments can participate?", a: "CSE, IT, AI & DS, ECE, EEE, Mechanical, Civil, MBA, and BCA / MCA are fully supported with custom specialized syllabus roadmaps." },
    { q: "Online or offline?", a: "We offer flexible hybrid deployment modes including structured online platform access, offline workshops, or complete integrated hybrid schedules depending on college requirements." },
    { q: "Are certificates included?", a: "Yes, students receive industry-recognized verifiable certificates upon successfully completing coursework and building their portfolio projects." },
    { q: "Can colleges customize programs?", a: "Absolutely. Our academic committee designs role-based, department-specific, or industry-aligned custom syllabi based on specific university goals." },
    { q: "How does onboarding work?", a: "We handle end-to-end administration: onboarding departmental coordinators, scheduling milestones, and setting up student platforms with zero administrative burden on the college." }
  ];

  return (
    <div className="w-full">
      
      {/* COLLEGE HERO */}
      <section className="relative pt-24 pb-20 border-b border-black/[0.08] overflow-hidden">
        <GridBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/50 mb-6 uppercase tracking-wider">
                  For Colleges & Institutions
                </span>
                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-black">
                  AI-Powered Value Added Programs for Placement-Ready Students
                </h1>
                <p className="font-sans text-sm text-gray-500 mt-6 leading-relaxed">
                  Deliver industry-focused Value Added Programs with AI career mapping, real-world projects, resume optimization, and placement readiness support through one integrated platform.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <button
                    onClick={() => onNavigate("contact-us")}
                    className="bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold rounded-lg px-6 py-3.5 flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Schedule Discussion</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dynamic colleges vector motion graphic */}
              <div className="w-full">
                <MotionGraphic type="colleges" />
              </div>
            </div>
          </ScrollReveal>

          {/* Six Pillar grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] bg-white/[0.60] rounded-xl overflow-hidden mt-16 shadow-sm">
            {pillars.map((pil, idx) => (
              <div key={idx} className="p-6 border-r border-b border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-b [&:nth-child(4)]:border-b [&:nth-child(5)]:border-b [&:nth-child(6)]:border-b-0">
                <span className="font-mono text-2xl font-bold text-gray-300 block mb-2">0{idx + 1}</span>
                <h4 className="font-sans text-xs font-bold text-gray-950 mb-1">{pil.title}</h4>
                <p className="font-sans text-[11px] text-gray-500">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PROBLEM VS SOLUTION */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
              ANALYSIS
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              Most Students Graduate Without Placement Readiness
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-2 max-w-md mx-auto">
              Bridging the extreme performance disconnect between classical certificates & competitive hiring filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Problems core */}
            <div className="bg-red-50/20 border border-red-200/50 rounded-2xl p-8">
              <span className="font-mono text-[9px] text-red-600 tracking-wider uppercase font-semibold">Standard Challenges</span>
              <h3 className="font-display font-bold text-lg text-gray-900 mt-1 mb-6">Student Barriers</h3>
              <ul className="space-y-4">
                {["No career clarity", "Weak generic resumes", "No real project deployment", "Low interview speaking confidence", "Generic outdated training programs"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span className="font-sans text-xs font-semibold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emazyn Solution */}
            <div className="bg-blue-50/20 border border-blue-200/50 rounded-2xl p-8">
              <span className="font-mono text-[9px] text-blue-600 tracking-wider uppercase font-semibold">Emazyn System</span>
              <h3 className="font-display font-bold text-lg text-blue-700 mt-1 mb-6">Platform Solution</h3>
              <ul className="space-y-4">
                {["AI career roadmaps", "ATS-ready optimized resumes", "Interactive project portfolios", "Custom simulated mock interviews", "Placement-focused continuous learning"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono text-[10px]">✓</div>
                    <span className="font-sans text-xs font-bold text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: VAC LIST & GLOBAL STANDARDS */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Vac List panel */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
              <span className="font-mono text-[10px] text-blue-600 uppercase font-semibold">CURRICULA MENU</span>
              <h3 className="font-display font-medium text-2xl text-black mt-2 mb-6">Industry-Focused Value Added Programs</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {collegeVacs.map((vac) => (
                  <div key={vac} className="flex items-center gap-2.5 p-2 hover:bg-gray-50 rounded transition-colors border border-transparent hover:border-black/[0.04]">
                    <Laptop className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="font-sans text-xs font-semibold text-gray-800 leading-normal">{vac}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 bg-blue-50/30 p-4 rounded-xl border border-blue-100/50">
                <p className="font-sans text-xs font-bold text-blue-900">Couldn't find the program you want?</p>
                <p className="font-sans text-[11px] text-blue-700 mt-1">Speak to our academic team to customise any training program based on your university's explicit branch standards.</p>
                <button onClick={() => onNavigate("contact-us")} className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-bold text-blue-600 hover:text-blue-700">
                  Speak to Team <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Global Industry Alignment */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
                CURATED CHANNELS
              </span>
              <h2 className="font-display font-medium text-3xl tracking-tight text-black">
                Access Learning Pathways Inspired by Global Industry & University Standards
              </h2>
              <p className="font-sans text-xs text-gray-550 leading-relaxed">
                Emazyn guides student cohorts toward globally recognized learning resources, certifications, and high-demand specializations offered independently by globally recognized institutions:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {globalPartners.map((item) => (
                  <div key={item} className="p-3 border border-black/[0.06] bg-white rounded-lg text-center shadow-[0_1px_1px_rgba(0,0,0,0.01)] cursor-default hover:border-blue-600 transition-colors">
                    <span className="font-sans text-xs font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: IMPLEMENTATION STREAK */}
      <section className="py-20 border-b border-black/[0.08] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              ADMINISTRATION
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-2">
              Simple Implementation for Colleges
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Emazyn manages course scheduling, portal roll-out, project evaluations, and parent coordination reports seamlessly.
            </p>
          </div>

          {/* Chronological Vertical Timeline path */}
          <div className="relative border border-black/[0.08] bg-white rounded-2xl p-8 md:p-12 shadow-sm overflow-hidden">
            <div className="absolute top-10 bottom-10 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-blue-600 to-indigo-600 -translate-x-1/2"></div>

            <div className="space-y-12">
              {implementationSteps.map((step, idx) => (
                <ScrollReveal key={step.num} delay={idx * 0.05}>
                  <div className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    
                    {/* Interactive Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-600 shadow-sm flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
                    </div>

                    {/* Content */}
                    <div className={`pl-16 md:pl-0 w-full md:w-1/2 text-left ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="font-mono text-xs font-bold text-blue-600">Phase 0{step.num}</span>
                      <h4 className="font-sans text-sm font-bold text-gray-950 mt-1">{step.title}</h4>
                      <p className="font-sans text-[11px] text-gray-500 mt-1 max-w-sm leading-normal">{step.desc}</p>
                    </div>

                    <div className="hidden md:block w-1/2"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: FAQ ACCORDION */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <HelpCircle className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h2 className="font-display font-medium text-2xl text-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {collegeFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-black/10 rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center bg-gray-50/30 hover:bg-gray-50/80 transition-colors"
                >
                  <span className="font-sans text-xs font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeFaq === idx ? "rotate-180 text-blue-650" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 py-4 border-t border-black/[0.05] animate-fade-in">
                    <p className="font-sans text-xs text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL COLLABORATE CTA */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grid-bg-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="font-display font-medium text-3xl text-white tracking-tight leading-tight">
            Ready to Build Placement-Ready Students?
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            Partner with Emazyn to deliver AI-powered value added programs focused on employability, practical skills, and direct corporate alignment.
          </p>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => onNavigate("contact-us")}
              className="bg-white hover:bg-gray-150 text-black font-sans text-sm font-semibold rounded-lg px-8 py-3.5 flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
