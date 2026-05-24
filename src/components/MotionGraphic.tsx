import { motion } from "motion/react";
import { Compass, Bot, CheckSquare, Sparkles, BookOpen, Users, Cpu, Shield, Globe, Award, Database, TrendingUp } from "lucide-react";

interface MotionGraphicProps {
  type: "roadmap" | "skills" | "resume" | "branding" | "colleges" | "corporates" | "growth";
}

export default function MotionGraphic({ type }: MotionGraphicProps) {
  // Render high-fidelity SVG motion graphics based on type
  switch (type) {
    case "roadmap":
      return (
        <div id="motion-graphic-roadmap" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 flex items-center justify-center p-6 select-none animate-float">
          {/* Neon backlighting */}
          <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -left-10"></div>
          <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -right-10"></div>
          
          <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 400 300" fill="none">
            {/* Background Grid */}
            <defs>
              <pattern id="road-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
              </pattern>
              <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#4338ca" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#road-grid)" />

            {/* Path line drawing */}
            <motion.path
              d="M 50,220 C 120,220 100,80 200,80 C 300,80 280,220 350,220"
              stroke="rgba(37, 99, 235, 0.2)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.path
              d="M 50,220 C 120,220 100,80 200,80 C 300,80 280,220 350,220"
              stroke="url(#grad-blue)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />

            {/* Glowing signal traveling */}
            <motion.circle
              r="6"
              fill="#2563eb"
              filter="drop-shadow(0px 0px 8px #2563eb)"
              animate={{
                offsetDistance: ["0%", "100%"]
              }}
              style={{
                offsetPath: "path('M 50,220 C 120,220 100,80 200,80 C 300,80 280,220 350,220')"
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Interactive nodes */}
          <div className="relative w-full h-full flex items-center justify-between px-6 z-10">
            {/* Milestone 1 */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 cursor-pointer pt-32"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-md shadow-blue-500/5 hover:border-blue-500 transition-colors relative">
                <Compass className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold">Discover</span>
            </motion.div>

            {/* Milestone 2 */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 cursor-pointer pb-28"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors relative">
                <Bot className="w-5 h-5 text-white animate-bounce" />
                <span className="absolute -bottom-1 -left-1 px-1.5 py-0.5 bg-yellow-400 text-black text-[8px] font-bold font-mono rounded">AI</span>
              </div>
              <span className="font-sans text-[10px] text-gray-900 font-bold">Pathway</span>
            </motion.div>

            {/* Milestone 3 */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 cursor-pointer pt-32"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-md shadow-blue-500/5 hover:border-blue-500 transition-colors">
                <CheckSquare className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold">Unlock</span>
            </motion.div>
          </div>

          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 font-mono text-[9px] text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>LIVE PREDICTIVE SIMULATION</span>
          </div>
        </div>
      );

    case "skills":
      return (
        <div id="motion-graphic-skills" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 flex items-center justify-center p-6 select-none">
          <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -right-10"></div>
          
          {/* Animated revolving radar circle */}
          <div className="absolute w-52 h-52 border border-blue-500/10 rounded-full animate-slow-spin flex items-center justify-center">
            <div className="w-40 h-40 border border-indigo-500/10 rounded-full animate-reverse-spin flex items-center justify-center">
              <div className="w-28 h-28 border border-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border border-dashed border-gray-300 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>

          {/* Glowing sweeping radar ray */}
          <div className="absolute w-44 h-0.5 bg-gradient-to-r from-blue-600/0 to-blue-500 filter drop-shadow(0 0 8px #3b82f6) origin-left rotate-45 transform animate-slow-spin"></div>

          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] text-blue-600 font-bold px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full">AI SKILL ANALYSER</span>
              <span className="font-mono text-[9px] text-gray-400">INDEX: 98.4</span>
            </div>

            {/* Glowing floating node bubbles */}
            <div className="flex items-center justify-center gap-6 my-auto relative">
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 bg-white border border-gray-150 rounded-xl shadow-md flex items-center gap-2.5 z-10 hover:border-blue-400 cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center"><Cpu className="w-3.5 h-3.5 text-blue-600" /></div>
                <div>
                  <p className="font-sans text-[10px] font-bold text-gray-950">GenAI Stack</p>
                  <p className="font-mono text-[8 pixels] text-green-500 font-semibold">94% Fit</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 bg-white border border-gray-150 rounded-xl shadow-md flex items-center gap-2.5 z-10 hover:border-blue-400 cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center"><Database className="w-3.5 h-3.5 text-indigo-600" /></div>
                <div>
                  <p className="font-sans text-[10px] font-bold text-gray-950">Data Analytics</p>
                  <p className="font-mono text-[8 pixels] text-green-500 font-semibold">87% Fit</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-gray-400">
              <span>SCANNING DEPARTMENTS...</span>
              <span className="text-blue-600 font-bold animate-pulse">ACTIVE ANALYSIS</span>
            </div>
          </div>
        </div>
      );

    case "resume":
      return (
        <div id="motion-graphic-resume" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 p-5 select-none animate-float">
          {/* Laser Scanner bar scanning */}
          <div className="absolute left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.6)] z-20 animate-scan"></div>
          
          <div className="absolute w-44 h-44 rounded-full bg-blue-550/5 blur-3xl -bottom-10 -left-10"></div>

          <div className="w-full h-full border border-black/[0.06] rounded-xl bg-white/70 p-4 font-sans text-left flex flex-col justify-between relative z-10 shadow-sm">
            {/* Header placeholder */}
            <div className="flex justify-between items-start border-b border-black/[0.04] pb-3">
              <div>
                <div className="w-24 h-3.5 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-2 bg-gray-100 rounded mt-1.5"></div>
              </div>
              <span className="font-mono text-[9px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 border border-blue-100 rounded">ATS PASS</span>
            </div>

            {/* Score circle & details */}
            <div className="grid grid-cols-2 gap-4 my-2">
              <div className="flex flex-col justify-center">
                <span className="font-mono text-[9px] text-gray-400 font-semibold">MATCH SCORE</span>
                <span className="font-display font-extrabold text-3xl text-gray-900 flex items-baseline gap-1 mt-0.5">
                  89 <span className="text-xs text-gray-400 font-normal">/ 100</span>
                </span>
                <span className="font-sans text-[10px] text-green-600 font-medium mt-1">Excellent Relevance</span>
              </div>

              {/* Ticking checks */}
              <div className="flex flex-col gap-2 justify-center">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-mono text-[8px] font-bold">✓</span>
                  <span className="truncate font-sans text-[10px] text-gray-600">Action Verbs Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-mono text-[8px] font-bold">✓</span>
                  <span className="truncate font-sans text-[10px] text-gray-600">Keyword Rich Alignment</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-black/[0.04] pt-3 flex justify-between items-center text-[9px] font-mono text-gray-400">
              <span>SCANNER ENGINE v2.4</span>
              <span>PARSING... 100%</span>
            </div>
          </div>
        </div>
      );

    case "branding":
      return (
        <div id="motion-graphic-branding" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 flex items-center justify-center p-6 select-none animate-float">
          <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -left-10"></div>
          
          <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 400 300" fill="none">
            {/* Pulsing connections */}
            <motion.line x1="200" y1="150" x2="80" y2="90" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
            <motion.line x1="200" y1="150" x2="320" y2="90" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
            <motion.line x1="200" y1="150" x2="110" y2="210" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
            <motion.line x1="200" y1="150" x2="290" y2="210" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* Center Core Node */}
            <motion.circle 
              cx="200" cy="150" r="32" 
              fill="#2563eb" 
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Connected floating nodes */}
          <div className="relative w-full h-full flex flex-col justify-between z-10">
            {/* Top row */}
            <div className="flex justify-between px-6">
              <motion.div whileHover={{ scale: 1.1 }} className="p-2.5 bg-white border border-gray-150 rounded-xl shadow-md flex items-center gap-2 cursor-pointer mt-2">
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="font-sans text-[10px] text-gray-900 font-bold">LinkedIn</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="p-2.5 bg-white border border-gray-150 rounded-xl shadow-md flex items-center gap-2 cursor-pointer mt-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span className="font-sans text-[10px] text-gray-900 font-bold">Portfolio</span>
              </motion.div>
            </div>

            {/* Center display text override */}
            <div className="self-center flex flex-col items-center">
              <span className="font-display font-medium text-xs text-white max-w-[60px] text-center drop-shadow-md">BRAND NETWORK</span>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between px-8">
              <motion.div whileHover={{ scale: 1.1 }} className="p-2.5 bg-white border border-gray-150 rounded-xl shadow-md flex items-center gap-2 cursor-pointer mb-2">
                <Users className="w-4 h-4 text-green-600" />
                <span className="font-sans text-[10px] text-gray-900 font-bold">Endorsements</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="p-2.5 bg-white border border-gray-150 rounded-xl shadow-md flex items-center gap-2 cursor-pointer mb-2">
                <Award className="w-4 h-4 text-yellow-500 animate-bounce" />
                <span className="font-sans text-[10px] text-gray-900 font-bold">Credibility</span>
              </motion.div>
            </div>
          </div>
        </div>
      );

    case "colleges":
      return (
        <div id="motion-graphic-colleges" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 p-6 select-none">
          <div className="absolute w-44 h-44 rounded-full bg-blue-500/5 blur-3xl -top-10 -right-10 animate-pulse"></div>

          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm p-3 border border-black/[0.04] rounded-xl shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100"><Award className="w-4 h-4 text-blue-600" /></div>
                <div>
                  <h4 className="font-sans text-[10.5px] font-bold text-gray-900 leading-normal">University Models</h4>
                  <p className="font-mono text-[8 pixels] text-gray-400">NEP ALIGNED INTEGRATIONS</p>
                </div>
              </div>
              <span className="font-mono text-[9px] text-[#0052ff] bg-blue-50/50 border border-blue-100 rounded px-1.5 py-0.5 font-bold">COMPLIANT</span>
            </div>

            {/* Visual metrics bar list */}
            <div className="space-y-3.5 my-auto">
              <div>
                <div className="flex justify-between text-[9px] font-mono text-gray-500 mb-1">
                  <span>CURRICULUM ALIGNMENT</span>
                  <span className="font-bold text-gray-850">98% OPTIMIZED</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-black/[0.03]">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "98%" }} 
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[9px] font-mono text-gray-500 mb-1">
                  <span>CAMPUS ENGAGEMENT RATIO</span>
                  <span className="font-bold text-gray-850">84% ACTIVE</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-black/[0.03]">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "84%" }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="text-[9px] font-mono text-gray-400 text-center uppercase tracking-widest leading-none">
              Configuring live value-added campus models...
            </div>
          </div>
        </div>
      );

    case "corporates":
      return (
        <div id="motion-graphic-corporates" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 p-6 select-none animate-float">
          <div className="absolute w-44 h-44 rounded-full bg-blue-600/5 blur-3xl -bottom-10 -left-10 animate-pulse"></div>

          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] text-blue-600 font-bold px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full uppercase tracking-wider">Enterprise Performance</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-[9px] text-gray-400 uppercase">SYS SECURE</span>
              </div>
            </div>

            {/* High visual mini dashboard metrics */}
            <div className="grid grid-cols-2 gap-4 my-auto">
              <div className="bg-white/80 border border-black/[0.04] p-3 rounded-xl shadow-sm hover:border-blue-400 transition-colors">
                <p className="font-mono text-[8 pixels] text-gray-400 uppercase font-semibold">Upskilled Workforce</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display font-extrabold text-2xl text-gray-900">4,280</span>
                  <span className="font-mono text-[9px] text-green-500 font-bold">+18%</span>
                </div>
              </div>

              <div className="bg-white/80 border border-black/[0.04] p-3 rounded-xl shadow-sm hover:border-blue-400 transition-colors">
                <p className="font-mono text-[8 pixels] text-gray-400 uppercase font-semibold">Adaptation Speed</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display font-extrabold text-2xl text-gray-900">3.8x</span>
                  <span className="font-mono text-[9px] text-blue-600 font-bold">Faster</span>
                </div>
              </div>
            </div>

            {/* Animated mini line charts */}
            <div className="h-10 w-full flex items-end gap-1 px-1 border-b border-gray-200">
              {[40, 55, 30, 70, 45, 85, 95, 60, 80, 100].map((val, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ height: 0 }} 
                  animate={{ height: `${val}%` }} 
                  transition={{ duration: 1, delay: idx * 0.05 }}
                  className="bg-blue-600/80 hover:bg-blue-600 rounded-t w-full cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "growth":
      return (
        <div id="motion-graphic-growth" className="w-full h-72 rounded-2xl relative overflow-hidden liquid-glass border border-white/40 p-6 flex items-center justify-center select-none animate-float">
          <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -left-10"></div>
          
          <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 400 300" fill="none">
            {/* Pulsing visual circles representing infinite carrier timeline */}
            <circle cx="200" cy="150" r="110" stroke="rgba(0, 82, 255, 0.05)" strokeWidth="1" />
            <circle cx="200" cy="150" r="80" stroke="rgba(0, 82, 255, 0.05)" strokeWidth="1" />
            <circle cx="200" cy="150" r="50" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1" />
          </svg>

          <div className="relative z-10 text-center max-w-[200px] flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm mb-4">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900 leading-tight">Proof of Competence</h4>
            <p className="font-sans text-[11px] text-gray-500 mt-1 leading-normal">
              Continuous proof of practical learning outcomes mapped instantly to real professional visibility.
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}
