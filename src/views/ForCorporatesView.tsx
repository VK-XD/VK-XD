import { useState } from "react";
import { PageView } from "../types";
import { ArrowRight, ChevronDown, Check, Building2, HelpCircle, HardDrive, Users, Sparkles, TrendingUp } from "lucide-react";
import GridBackground from "../components/GridBackground";
import ScrollReveal from "../components/ScrollReveal";
import MotionGraphic from "../components/MotionGraphic";

interface ForCorporatesViewProps {
  onNavigate: (view: PageView) => void;
}

export default function ForCorporatesView({ onNavigate }: ForCorporatesViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const trustHighlights = [
    "Industry-Focused Technical Training",
    "AI-Powered Learning Support",
    "Real-World Project-Based Learning",
    "Workforce Productivity Enablement",
    "Customized Corporate Training",
    "Verifiable Certifications"
  ];

  const challenges = [
    "Rapid technology changes rendering capabilities obsolete",
    "AI adoption and implementation gaps",
    "Skill gaps across technical or business teams",
    "Low practical project implementation focus",
    "Outdated legacy system technical knowledge",
    "Reduced workforce agility & adaptability",
    "Lack of aligned structured upskilling programs"
  ];

  const solutions = [
    "AI-powered continuous learning ecosystem",
    "Industry-relevant technical training catalogs",
    "Meticulous practical implementation focus",
    "Hands-on real-world corporate codebases",
    "Customized departmental learning pathways",
    "Career and skill development dashboard tracking",
    "Continuous growth platform-based support"
  ];

  const journeySteps = [
    { num: 1, title: "Skill Gap Assessment", desc: "Benchmark present employee capacity and identify deficiency bounds." },
    { num: 2, title: "Customized Training Roadmap", desc: "Design bespoke timelines matching designated roles." },
    { num: 3, title: "Instructor-Led Technical Training", desc: "Live, practical lectures curated by senior subject matter leads." },
    { num: 4, title: "Practical Projects & Implementation", desc: "Deploy actual files, scripts, or apps on sandboxed terminals." },
    { num: 5, title: "AI-Powered Learning Support", desc: "Access round-the-clock automated feedback diagnostics." },
    { num: 6, title: "Workforce Readiness & Productivity", desc: "Enable immediate workflow enhancement and upskilled deployments." }
  ];

  const corpVacs = [
    "Generative AI for Teams",
    "AI Productivity & Workflow Automation",
    "Data Analytics with AI",
    "AI & Machine Learning Foundations",
    "Cloud Computing & DevOps",
    "Cybersecurity Awareness & Essentials",
    "Full Stack Development with AI",
    "Python for Business Applications",
    "Java Enterprise Development",
    "Digital Marketing with AI",
    "Prompt Engineering for Business Teams",
    "AI Tools for Productivity & Operations"
  ];

  const benefits = [
    { title: "Industry-focused technical learning", desc: "Direct training on technologies currently used in high leverage environments." },
    { title: "AI-powered learning support", desc: "Assessments and instant feedback to reinforce material retention." },
    { title: "Practical implementation approach", desc: "Prioritizes coding, pipeline construction, and architecture build-outs." },
    { title: "Customized workforce training", desc: "Adapted to your company's explicit microservices & product goals." },
    { title: "Project-based upskilling", desc: "Teams construct actual systems that double as internal utility assets." },
    { title: "Scalable training delivery", desc: "Scale smoothly from small pilot divisions to thousands of employees." },
    { title: "Low operational burden", desc: "We manage curriculum scheduling, evaluations, and progress reports." },
    { title: "Continuous employee growth support", desc: "Long-term learning loops tracking workforce readiness month after month." }
  ];

  const comparisonRows = [
    {
      c: "Theory-heavy lecture sessions",
      e: "Practical implementation-focused learning"
    },
    {
      c: "One-time surface level workshops",
      e: "Continuous integrated growth ecosystem"
    },
    {
      c: "Generic templates & training content",
      e: "Customized industry-focused programs"
    },
    {
      c: "Limited, static employee engagement",
      e: "AI-powered personalized learning support"
    },
    {
      c: "No long-term career growth tracking",
      e: "Structured learning & development journey"
    },
    {
      c: "Certificate-focused paper approach",
      e: "Skill application & productivity-focused growth"
    },
    {
      c: "Static passive learning methods",
      e: "AI-integrated modern learning ecosystem"
    },
    {
      c: "Limited or absent post-training help",
      e: "Continued platform-based assistant support"
    }
  ];

  const advantages = [
    { name: "Advantage 1 — AI-Powered Learning Ecosystem", desc: "Unlike traditional training companies, Emazyn combines learning with AI-powered guidance, skill development, and continuous growth support." },
    { name: "Advantage 2 — Practical Implementation Focus", desc: "Employees work on practical projects, workflows, and implementation-driven learning instead of theory-only sessions." },
    { name: "Advantage 3 — Modern AI & Technology Alignment", desc: "Programs are designed around emerging industry technologies including AI, automation, cloud, analytics, and modern development ecosystems." },
    { name: "Advantage 4 — Flexible Customization", desc: "Training programs can be customized for departments, technical teams, management teams, productivity enablement, and business transformation goals." },
    { name: "Advantage 5 — Long-Term Growth Approach", desc: "Emazyn focuses on long-term workforce readiness instead of isolated training delivery." },
    { name: "Advantage 6 — Scalable Learning Support", desc: "Organizations can scale learning initiatives across multiple teams and departments efficiently." }
  ];

  const beforeAfterBefore = [
    "Outdated technical skills",
    "Low AI adoption awareness",
    "Lack of practical implementation",
    "Limited career growth direction",
    "Reduced confidence with modern technologies"
  ];

  const beforeAfterAfter = [
    "Industry-relevant tech skills",
    "AI productivity readiness",
    "Practical implementation capability",
    "Improved professional confidence",
    "Modern technology exposure",
    "Continuous learning pathways"
  ];

  const corpFaqs = [
    { q: "Can programs be customized for departments or teams?", a: "Yes. All curricula can be fine-tuned to target specific engineering, management, marketing, or general business requirements your company specifies." },
    { q: "Are the programs suitable for non-technical employees?", a: "Absolutely. We host specialized tracks (like AI Productivity & Prompt Engineering) designed to uplevel non-technical staff and maximize daily output." },
    { q: "Online or offline training available?", a: "We support flexible combinations: live online interactive sessions, self-paced learning platforms, or targeted offline bootcamp workshops." },
    { q: "Are certifications included?", a: "Yes. All successfully evaluated employees receive secure digital verifiable certifications reflecting their completed training milestones." },
    { q: "Can organizations scale training across multiple teams?", a: "Yes. Our enterprise tier is designed to handle smooth parallel cohorts across different departments with unified master admin dashboards." },
    { q: "Does Emazyn provide post-training support?", a: "Yes, our AI platform remains active post-lecture to analyze project code, answer technical queries, and measure continuous output growth." }
  ];

  return (
    <div className="w-full">
      
      {/* CORPORATE HERO */}
      <section className="relative pt-24 pb-20 border-b border-black/[0.08] overflow-hidden">
        <GridBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/50 mb-6 uppercase tracking-wider">
                  For Corporates & Enterprise
                </span>
                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-black">
                  Build Future-Ready Teams with AI-Powered Technical Upskilling
                </h1>
                <p className="font-sans text-sm text-gray-500 mt-6 leading-relaxed">
                  Help your workforce stay industry-ready with practical, project-focused corporate training programs designed around modern technologies, AI adoption, productivity, and business transformation.
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

              {/* Dynamic corporates vector motion graphic */}
              <div className="w-full">
                <MotionGraphic type="corporates" />
              </div>
            </div>
          </ScrollReveal>

          {/* Trust rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-black/[0.08] bg-white/[0.60] rounded-xl overflow-hidden mt-16 shadow-sm">
            {trustHighlights.map((hl, idx) => (
              <div key={idx} className="p-5 border-r border-b border-black/[0.08] last:border-r-0 lg:border-b-0 [&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block mb-2"></span>
                <p className="font-sans text-[11px] font-bold text-gray-950 leading-snug">{hl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CORPORATE CHALLENGES SECTION */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded animate-pulse">
              FRICTION CORES
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
              Modern Teams Need Continuous Upskilling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Common Challenges */}
            <div className="bg-red-50/25 border border-red-200/55 rounded-xl p-6 text-left">
              <h4 className="font-sans text-xs font-bold text-red-700 uppercase tracking-wider mb-4">
                Common Workforce Barriers
              </h4>
              <ul className="space-y-3.5">
                {challenges.map((cField, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-gray-700">
                    <span className="font-mono text-[10px] text-red-500 font-bold mt-0.5">✕</span>
                    <span>{cField}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emazyn Solution */}
            <div className="bg-blue-50/25 border border-blue-200/55 rounded-xl p-6 text-left">
              <h4 className="font-sans text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                Emazyn Response
              </h4>
              <ul className="space-y-3.5">
                {solutions.map((sField, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-gray-800">
                    <span className="font-mono text-[10px] text-blue-600 font-bold mt-0.5">✓</span>
                    <span className="font-semibold text-gray-900">{sField}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: JOURNEY FLOW */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              PIPELINE
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-2">
              From Training Sessions to Workforce Transformation
            </h2>
          </div>

          {/* Chronological Vertical Timeline path */}
          <div className="relative border border-black/[0.08] bg-white rounded-2xl p-8 md:p-12 shadow-sm overflow-hidden">
            <div className="absolute top-10 bottom-10 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-600 to-gray-200 -translate-x-1/2"></div>

            <div className="space-y-12">
              {journeySteps.map((step, idx) => (
                <ScrollReveal key={step.num} delay={idx * 0.05}>
                  <div className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    
                    {/* Interactive Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 shadow-sm flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></div>
                    </div>

                    {/* Content */}
                    <div className={`pl-16 md:pl-0 w-full md:w-1/2 text-left ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="font-mono text-xs font-bold text-indigo-600">Step 0{step.num}</span>
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

      {/* SECTION: CORPORATE PROGRAMS */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Catalog */}
            <div className="bg-gray-50 border border-black/10 rounded-2xl p-8">
              <span className="font-mono text-[10px] text-blue-600 uppercase font-semibold">ENTERPRISE CHANNELS</span>
              <h3 className="font-display font-medium text-2xl text-black mt-2 mb-6">Industry-Focused Corporate Training Programs</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {corpVacs.map((vac) => (
                  <div key={vac} className="flex items-center gap-2.5 p-2 rounded hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-black/[0.04]">
                    <HardDrive className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="font-sans text-xs font-semibold text-gray-800 leading-normal">{vac}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 bg-blue-50/20 p-4 rounded-xl border border-blue-100/50">
                <p className="font-sans text-xs font-bold text-blue-900">Need a customized learning track?</p>
                <p className="font-sans text-[11px] text-blue-700 mt-1">Emazyn can design role-based, department-specific, or business-focused training programs based on explicit organizational outcomes.</p>
              </div>
            </div>

            {/* Why choose */}
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
                VALUE MATRIX
              </span>
              <h2 className="font-display font-medium text-3xl tracking-tight text-black">
                Designed for Practical Workforce Growth
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((ben, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="p-1 rounded bg-blue-50 border border-blue-100 text-blue-600 font-mono text-[10px] w-5 h-5 flex items-center justify-center shrink-0">✓</div>
                    <div>
                      <p className="font-sans text-xs font-bold text-gray-900 leading-none">{ben.title}</p>
                      <p className="font-sans text-[11px] text-gray-500 mt-1 leading-normal">{ben.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPARISON METHOD (EMAZYN VS TRADITIONAL) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              DIFFERENCE
            </span>
            <h2 className="font-display font-medium text-2xl text-black mt-2">
              Why Emazyn Stands Out
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-1">
              Comparing legacy lecture providers against our continuous platform-based upskilling suite.
            </p>
          </div>

          <div className="border border-black/[0.08] bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-gray-100/60 p-4 border-b border-black/[0.08] font-sans text-xs font-bold text-gray-900 uppercase tracking-wide">
              <div>Traditional Providers</div>
              <div className="text-blue-600">Emazyn</div>
            </div>

            <div className="divide-y divide-black/[0.05]">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 p-4 font-sans text-xs leading-normal">
                  <div className="text-gray-500 font-medium pr-4">{row.c}</div>
                  <div className="text-gray-900 font-semibold pl-4 border-l border-black/[0.05]">{row.e}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: COMPETITIVE ADVANTAGES */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
              ADVANTAGES
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-gray-950 mt-3">
              Emazyn Competitive Advantages in the Market
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] rounded-xl overflow-hidden bg-gray-50/[0.1] shadow-sm">
            {advantages.map((adv, idx) => (
              <div key={idx} className="p-8 border-b border-r border-black/[0.08] last:border-r-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-b [&:nth-child(4)]:border-b [&:nth-child(5)]:border-b [&:nth-child(6)]:border-b-0">
                <span className="font-mono text-[9px] text-blue-600 uppercase font-semibold">Priority 0{idx + 1}</span>
                <h4 className="font-sans text-xs font-bold text-gray-900 mt-2 mb-1">{adv.name}</h4>
                <p className="font-sans text-[11px] text-gray-500 leading-normal">{adv.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: BEFORE VS AFTER TRANSFORMATION */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              OUTCOMES
            </span>
            <h2 className="font-display font-medium text-2xl text-black mt-2">
              What Employees Actually Gain
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Before */}
            <div className="p-6 bg-red-50/20 border border-red-200/50 rounded-xl text-left">
              <span className="font-mono text-[9px] text-red-500 uppercase font-semibold">BEFORE EMAZYN</span>
              <ul className="space-y-3.5 mt-4">
                {beforeAfterBefore.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-gray-600">
                    <span className="text-red-500">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-6 bg-green-50/20 border border-green-200/50 rounded-xl text-left">
              <span className="font-mono text-[9px] text-green-600 uppercase font-semibold">AFTER EMAZYN</span>
              <ul className="space-y-3.5 mt-4">
                {beforeAfterAfter.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-bold text-gray-900">
                    <span className="text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FLEXIBLE PARTNERSHIP SECTION */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-[10px] text-blue-600 uppercase font-semibold">FLEXIBLE MODELS</span>
          <h2 className="font-display font-medium text-3xl tracking-tight text-gray-950 mt-2 mb-6">
            Flexible Corporate Training Models Based on Your Requirements
          </h2>
          <p className="font-sans text-xs text-gray-500 max-w-lg mx-auto leading-relaxed mb-10">
            Emazyn works with organizations based on workforce goals, technical requirements, department needs, employee scale, and business transformation priorities. Pay only for the modules you require.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["workforce goals", "technical requirements", "department needs", "employee scale", "business priorities"].map((item) => (
              <div key={item} className="p-3 border border-black/[0.06] bg-gray-50/50 rounded-xl">
                <span className="font-sans text-[10px] uppercase tracking-wide font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/10">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <HelpCircle className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h2 className="font-display font-medium text-2xl text-black">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div className="space-y-3.5">
            {corpFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-black/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center bg-gray-50/40 hover:bg-gray-50/80 transition-colors"
                >
                  <span className="font-sans text-xs font-bold text-gray-901">{faq.q}</span>
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

      {/* FINAL CORPORATE CTA */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grid-bg-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="font-display font-medium text-3xl text-white tracking-tight leading-tight">
            Build Future-Ready Teams with Emazyn
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            Partner with Emazyn to deliver AI-powered workforce upskilling, practical technical training, and continuous employee growth initiatives.
          </p>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => onNavigate("contact-us")}
              className="bg-white hover:bg-gray-150 text-black font-sans text-sm font-semibold rounded-lg px-8 py-3.5 flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Request Customized Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
