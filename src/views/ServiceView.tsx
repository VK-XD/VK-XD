import { PageView } from "../types";
import { ArrowRight, Compass, Bot, CheckSquare, Sparkles, BookOpen, Users, Search, Play, Award, Zap, Shield, Check, ListFilter, Cpu, Globe } from "lucide-react";
import GridBackground from "../components/GridBackground";
import ScrollReveal from "../components/ScrollReveal";
import MotionGraphic from "../components/MotionGraphic";

interface ServiceViewProps {
  viewId: PageView;
  onNavigate: (view: PageView) => void;
}

export default function ServiceView({ viewId, onNavigate }: ServiceViewProps) {
  
  // Data dictionary mapped meticulously to the PDF screens
  const serviceData: Record<
    string,
    {
      title: string;
      headline: string;
      subheadline: string;
      buttonText: string;
      trustHighlights: string[];
      struggleTitle: string;
      struggles: string[];
      howItWorksTitle: string;
      howItWorksSteps: { title: string; desc: string; details: string[] }[];
      whoIsItForTitle: string;
      whoIsItForAudiences: { role: string; text: string }[];
      featuresTitle: string;
      features: { title: string; desc: string }[];
      whyUseTitle: string;
      whyUseBenefits: { title: string; desc: string }[];
      supportedAreas: string[];
      approachTitle: string;
      approachContent: string;
      approachFoci: string[];
      ctaHeadline: string;
      ctaSubheadline: string;
      ctaBtn1: string;
      ctaBtn2: string;
    }
  > = {
    "ai-career-roadmap": {
      title: "AI Career Roadmap",
      headline: "Personalized AI-Powered Career Growth Guidance",
      subheadline: "Discover the right career direction, identify skill gaps, explore learning pathways, and build a structured growth plan tailored to your goals, interests, and industry trends.",
      buttonText: "Access AI Career Roadmap",
      trustHighlights: [
        "Personalized Career Guidance",
        "AI-Powered Skill Analysis",
        "Structured Learning Pathways",
        "Industry-Relevant Recommendations",
        "Career Growth Tracking",
        "Continuous Improvement Support"
      ],
      struggleTitle: "A Smarter Way to Plan Your Career Growth",
      struggles: [
        "choosing the right career path",
        "identifying skills to improve",
        "understanding industry requirements",
        "planning learning journeys",
        "staying consistent with career goals"
      ],
      howItWorksTitle: "How the AI Career Roadmap Works",
      howItWorksSteps: [
        { title: "Understand Your Current Profile", desc: "AI-driven mapping of your current career status.", details: ["current skills", "interests", "goals", "experience level", "strengths", "improvement areas"] },
        { title: "AI-Powered Career Analysis", desc: "Cross-analyzing industry trends.", details: ["industry trends", "career opportunities", "skill demand", "growth potential", "learning priorities"] },
        { title: "Personalized Career Path Creation", desc: "Detailed timeline mapping.", details: ["recommended learning areas", "skill development priorities", "project suggestions", "career milestones", "growth direction"] },
        { title: "Continuous Progress Tracking", desc: "Evaluating milestones in real time.", details: ["learning progress", "skill improvement", "portfolio growth", "career readiness", "roadmap completion"] },
        { title: "Evolve Your Career Journey", desc: "Continuous adaptation.", details: ["Updating goals", "exploring new domains", "customizing feedback loops", "integrating new technologies"] }
      ],
      whoIsItForTitle: "Designed for Anyone Looking to Grow in Their Career",
      whoIsItForAudiences: [
        { role: "Students", text: "Get clarity on career direction and skill-building priorities." },
        { role: "Working Professionals", text: "Upskill, stay industry-relevant, and explore growth opportunities." },
        { role: "Career Switchers", text: "Build structured transition pathways into new domains." },
        { role: "Freshers", text: "Understand industry expectations and prepare for opportunities." },
        { role: "Lifelong Learners", text: "Continuously improve skills and stay competitive in evolving industries." }
      ],
      featuresTitle: "Features Included in AI Career Roadmap",
      features: [
        { title: "Personalized Career Recommendations", desc: "Receive AI-driven guidance tailored to your goals and profile." },
        { title: "Skill Gap Analysis", desc: "Identify the skills you need to improve for target career paths." },
        { title: "Learning Direction", desc: "Get structured recommendations for learning and growth." },
        { title: "Career Milestone Planning", desc: "Understand short-term and long-term development goals." },
        { title: "Industry Trend Alignment", desc: "Explore career paths aligned with modern industry demand." },
        { title: "Growth Tracking", desc: "Monitor your progress and continuously improve your career readiness." }
      ],
      whyUseTitle: "Why Use Emazyn AI Career Roadmap",
      whyUseBenefits: [
        { title: "Career Clarity", desc: "Reduce confusion and make informed career decisions." },
        { title: "Personalized Guidance", desc: "Every roadmap is designed around individual goals and progress." },
        { title: "Industry-Relevant Direction", desc: "Recommendations are aligned with evolving technologies and career trends." },
        { title: "Structured Growth", desc: "Move forward with a clear and organized learning path." },
        { title: "Continuous Improvement", desc: "Adapt your roadmap as your career evolves." },
        { title: "AI-Powered Ecosystem", desc: "Integrated with Emazyn’s broader career growth platform to unify resume, portfolio, and mock interviews." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Digital Marketing", "Product Development", "Software Engineering", "Career Readiness & Employability"],
      approachTitle: "More Than Career Advice — A Career Growth System",
      approachContent: "The AI Career Roadmap is not just a recommendation tool. It is part of a larger ecosystem focused on complete upskilling and corporate placement readiness.",
      approachFoci: ["skill development", "practical implementation", "project building", "professional branding", "interview preparation", "opportunity readiness"],
      ctaHeadline: "Start Building Your Personalized Career Roadmap",
      ctaSubheadline: "Access AI-powered career guidance, structured learning pathways, and continuous growth support through the Emazyn platform.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    },

    "ai-skill-analyzer": {
      title: "AI Skill Analyzer",
      headline: "Understand Your Skills. Identify Gaps. Grow Smarter.",
      subheadline: "Discover your strengths, identify skill gaps, understand industry expectations, and get personalized recommendations to improve your career readiness.",
      buttonText: "Access AI Skill Analyzer",
      trustHighlights: [
        "AI-Powered Skill Assessment",
        "Personalized Skill Insights",
        "Industry-Relevant Recommendations",
        "Career Readiness Analysis",
        "Skill Gap Identification",
        "Growth Tracking Support"
      ],
      struggleTitle: "A Smarter Way to Understand Your Professional Strengths",
      struggles: [
        "identifying missing skills required for hiribility",
        "understanding shifting industry expectations",
        "evaluating true peer career readiness",
        "prioritizing short-term study areas",
        "measuring month-on-month professional growth"
      ],
      howItWorksTitle: "How the AI Skill Analyzer Works",
      howItWorksSteps: [
        { title: "Profile & Skill Input", desc: "Uploading capability logs.", details: ["current skills", "experience level", "career interests", "technical knowledge", "goals and aspirations"] },
        { title: "AI-Powered Skill Evaluation", desc: "Machine categorization under real industry weights.", details: ["skill strengths", "improvement areas", "industry demand", "role alignment", "career readiness indicators"] },
        { title: "Skill Gap Identification", desc: "Pinpointing the exact deficit blockers.", details: ["target job roles", "career progression", "industry expectations", "modern technology trends"] },
        { title: "Personalized Recommendations", desc: "Actionable remediation directives.", details: ["skill development", "learning priorities", "project building", "career improvement", "roadmap planning"] },
        { title: "Track Improvement Progress", desc: "Re-assessing dynamically as you build.", details: ["Monitor your growth journey", "updating capabilities", "profile benchmarking", "skills certification alignment"] }
      ],
      whoIsItForTitle: "Built for Every Stage of Career Growth",
      whoIsItForAudiences: [
        { role: "Students", text: "Understand which skills matter for placements and career opportunities." },
        { role: "Working Professionals", text: "Evaluate industry relevance and identify areas for upskilling." },
        { role: "Career Switchers", text: "Discover skill requirements for transitioning into new domains." },
        { role: "Freshers", text: "Prepare for modern hiring expectations with structured guidance." },
        { role: "Lifelong Learners", text: "Continuously improve capabilities and stay competitive in evolving industries." }
      ],
      featuresTitle: "Features Included in AI Skill Analyzer",
      features: [
        { title: "Skill Strength Analysis", desc: "Understand your strongest areas and core capabilities." },
        { title: "Skill Gap Detection", desc: "Identify the missing skills needed for target career paths." },
        { title: "Industry Alignment Insights", desc: "Compare your profile with modern industry expectations and trends." },
        { title: "Career Readiness Evaluation", desc: "Understand your preparedness for opportunities and professional growth." },
        { title: "Personalized Growth Recommendations", desc: "Receive guidance for improving relevant technical and professional skills." },
        { title: "Progress Tracking", desc: "Track skill development and career improvement over time." }
      ],
      whyUseTitle: "Why Use Emazyn AI Skill Analyzer",
      whyUseBenefits: [
        { title: "AI-Powered Insights", desc: "Receive data-driven recommendations instead of generic advice." },
        { title: "Career-Focused Analysis", desc: "Understand skills in the context of real career growth and opportunities." },
        { title: "Industry-Relevant Evaluation", desc: "Assess skills aligned with modern technologies and job market trends." },
        { title: "Personalized Recommendations", desc: "Every analysis is tailored to individual goals and career direction." },
        { title: "Continuous Improvement System", desc: "Track progress and evolve your skills consistently over time." },
        { title: "Integrated Career Ecosystem", desc: "Connect skill analysis with career roadmaps, projects, resumes, and interview preparation." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Software Development", "Professional Communication", "Career Readiness", "Digital Skills & Productivity"],
      approachTitle: "More Than Skill Assessment — A Career Growth Ecosystem",
      approachContent: "Emazyn helps individuals move from uncertainty to structured career growth with AI-powered diagnostics integrated with learning pathways.",
      approachFoci: ["career planning", "skill development", "project implementation", "professional branding", "interview readiness", "continuous improvement"],
      ctaHeadline: "Start Understanding Your Career Strengths",
      ctaSubheadline: "Access AI-powered skill analysis, personalized career insights, and structured growth recommendations through the Emazyn platform.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    },

    "ai-resume-builder": {
      title: "AI Resume Builder",
      headline: "Build Professional, ATS-Optimized Resumes with AI",
      subheadline: "Build professional, ATS-friendly resumes with AI-powered guidance designed to improve clarity, structure, relevance, and career presentation.",
      buttonText: "Access AI Resume Builder",
      trustHighlights: [
        "AI-Powered Resume Optimization",
        "ATS-Friendly Resume Formats",
        "Industry-Relevant Suggestions",
        "Professional Resume Structuring",
        "Project & Portfolio Integration",
        "Career-Focused Resume Guidance"
      ],
      struggleTitle: "A Smarter Way to Build Professional Resumes",
      struggles: [
        "lacking proper structured headings",
        "missing critical industry keywords",
        "poorly showcasing key skills",
        "failing automated ATS bots screening",
        "failing to reflect actual practical experiences",
        "appearing altogether generic to hiring managers"
      ],
      howItWorksTitle: "How the AI Resume Builder Works",
      howItWorksSteps: [
        { title: "Add Your Information", desc: "Compile profile data.", details: ["education", "skills", "projects", "certifications", "internships", "work experience", "achievements"] },
        { title: "AI-Powered Resume Analysis", desc: "Validates headings and content metrics.", details: ["resume structure", "keyword relevance", "formatting quality", "career alignment", "ATS compatibility", "content effectiveness"] },
        { title: "Smart Resume Optimization", desc: "Generates high efficiency line revisions.", details: ["summaries rewrite", "skill sections tuning", "project descriptions highlight", "achievement metrics presentation", "professional wording"] },
        { title: "Customize for Career Goals", desc: "Niches the copy per vacancy direction.", details: ["internships focus", "fresher roles matching", "technical positions details", "corporate alignments", "career transition keywords", "domain-specific apps"] },
        { title: "Export & Continuously Improve", desc: "Download high quality PDF templates.", details: ["PDF/DOCX formatting", "integrated portfolio links", "one-click version fork", "real-time quality score re-check"] }
      ],
      whoIsItForTitle: "Designed for Every Career Stage",
      whoIsItForAudiences: [
        { role: "Students", text: "Build professional resumes for internships and placements." },
        { role: "Freshers", text: "Create structured resumes aligned with modern hiring expectations." },
        { role: "Working Professionals", text: "Improve resume quality for career growth and job transitions." },
        { role: "Career Switchers", text: "Highlight transferable skills and reposition professional profiles effectively." },
        { role: "Freelancers & Independent Professionals", text: "Present projects, achievements, and practical expertise professionally." }
      ],
      featuresTitle: "Features Included in AI Resume Builder",
      features: [
        { title: "ATS-Friendly Resume Formatting", desc: "Create resumes optimized for Applicant Tracking Systems to secure callbacks." },
        { title: "AI-Powered Content Suggestions", desc: "Receive recommendations for stronger professional presentation and wording." },
        { title: "Skill & Keyword Optimization", desc: "Improve visibility using industry-relevant keywords and skill alignment." },
        { title: "Project & Portfolio Integration", desc: "Showcase practical projects and achievements effectively within your profile." },
        { title: "Resume Quality Insights", desc: "Understand improvement areas and strengthen overall resume impact." },
        { title: "Multiple Career Use Cases", desc: "Customize resumes for different roles, industries, and opportunities." }
      ],
      whyUseTitle: "Why Use Emazyn AI Resume Builder",
      whyUseBenefits: [
        { title: "Career-Focused Resume Building", desc: "Designed around real hiring expectations and career growth." },
        { title: "AI-Powered Optimization", desc: "Receive intelligent recommendations instead of generic templates." },
        { title: "Modern Hiring Alignment", desc: "Build resumes aligned with ATS systems and recruiter expectations." },
        { title: "Practical Experience Highlighting", desc: "Showcase projects, implementation, and achievements effectively." },
        { title: "Continuous Resume Improvement", desc: "Update and optimize resumes as your career evolves." },
        { title: "Integrated Career Ecosystem", desc: "Connect resumes with career roadmaps, portfolios, mock interviews, and growth tools." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Software Development", "Digital Marketing", "Product & Business Roles", "Career Readiness & Employability"],
      approachTitle: "More Than Resume Creation — A Professional Growth System",
      approachContent: "A resume should do more than list dry info; it must communicate real capability.",
      approachFoci: ["practical skills", "project experience", "professional value", "career direction", "growth potential"],
      ctaHeadline: "Start Building a Smarter Professional Resume",
      ctaSubheadline: "Access AI-powered resume optimization, ATS-friendly structuring, and career-focused resume guidance through the Emazyn platform.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    },

    "ai-linkedin-optimizer": {
      title: "AI LinkedIn Optimizer",
      headline: "Optimize Your LinkedIn Profile for Better Career Opportunities",
      subheadline: "Build a professional LinkedIn presence with AI-powered optimization designed to improve visibility, credibility, networking, and career opportunities.",
      buttonText: "Access AI LinkedIn Optimizer",
      trustHighlights: [
        "AI-Powered LinkedIn Optimization",
        "Professional Branding Guidance",
        "Recruiter-Friendly Profile Improvements",
        "Industry-Relevant Recommendations",
        "Visibility & Networking Support",
        "Career-Focused Profile Enhancement"
      ],
      struggleTitle: "A Smarter Way to Build Your Professional Identity",
      struggles: [
        "profiles appearing incomplete",
        "lacking optimization for search",
        "failing to showcase core strengths",
        "missing recruiter relevant keywords",
        "failing to communicate clear career path direction"
      ],
      howItWorksTitle: "How the AI LinkedIn Optimizer Works",
      howItWorksSteps: [
        { title: "Analyze Your Current Profile", desc: "Submitting profile text logs.", details: ["headline quality", "summary effectiveness", "profile completeness", "skill presentation", "keyword relevance", "professional positioning"] },
        { title: "AI-Powered Profile Assessment", desc: "Gauges industry density matching.", details: ["profile strengths", "improvement areas", "visibility gaps", "branding opportunities", "recruiter-readiness indicators"] },
        { title: "Personalized Optimization Recommendations", desc: "Generates step-by-step layout revisions.", details: ["stronger headlines", "improved summaries", "skill alignment", "project presentation", "profile structure", "keyword optimization"] },
        { title: "Improve Professional Branding", desc: "Establishes structured storytelling.", details: ["professional identity", "industry positioning", "career narrative", "networking visibility", "opportunity readiness"] },
        { title: "Continuously Update & Grow", desc: "Benchmarking metrics periodically.", details: ["evolving career goals", "industry trends", "skill development", "professional achievements"] }
      ],
      whoIsItForTitle: "Designed for Modern Professionals & Career Growth",
      whoIsItForAudiences: [
        { role: "Students", text: "Build professional visibility before internships and placements." },
        { role: "Freshers", text: "Create recruiter-friendly profiles that improve opportunity readiness." },
        { role: "Working Professionals", text: "Strengthen professional branding and industry visibility." },
        { role: "Career Switchers", text: "Reposition profiles for new domains and career transitions." },
        { role: "Freelancers & Independent Professionals", text: "Showcase expertise, projects, and achievements more effectively." }
      ],
      featuresTitle: "Features Included in AI LinkedIn Optimizer",
      features: [
        { title: "Headline Optimization", desc: "Create stronger and more impactful professional headlines that grab clicks." },
        { title: "Profile Summary Improvements", desc: "Build clear, structured, and engaging profile summaries." },
        { title: "Skill & Keyword Alignment", desc: "Optimize profiles using industry-relevant keywords and capabilities." },
        { title: "Project & Achievement Presentation", desc: "Showcase projects, certifications, and accomplishments professionally." },
        { title: "Recruiter Visibility Support", desc: "Improve discoverability and professional positioning." },
        { title: "Professional Branding Guidance", desc: "Build a stronger and more credible online professional presence." }
      ],
      whyUseTitle: "Why Use Emazyn AI LinkedIn Optimizer",
      whyUseBenefits: [
        { title: "Career-Focused Optimization", desc: "Designed around real professional visibility and networking goals." },
        { title: "AI-Powered Recommendations", desc: "Receive intelligent profile improvement suggestions tailored to your career direction." },
        { title: "Industry-Relevant Positioning", desc: "Align your profile with modern industry expectations and hiring trends." },
        { title: "Better Professional Visibility", desc: "Improve opportunities for networking, collaboration, and recruitment." },
        { title: "Continuous Branding Support", desc: "Update and improve your profile as your career grows." },
        { title: "Integrated Career Ecosystem", desc: "Connect LinkedIn optimization with resumes, portfolios, career roadmaps, and interview preparation." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Software Development", "Digital Marketing", "Product & Business Roles", "Career Readiness & Employability"],
      approachTitle: "More Than LinkedIn Optimization — A Professional Growth Ecosystem",
      approachContent: "A LinkedIn profile should do more than exist online; it must represent true authority.",
      approachFoci: ["communicate professional value", "showcase real skills", "highlight projects and achievements", "strengthen credibility", "support long-term career growth"],
      ctaHeadline: "Start Building a Stronger Professional Presence",
      ctaSubheadline: "Access AI-powered LinkedIn optimization, professional branding guidance, and career-focused profile enhancement through the Emazyn platform.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    },

    "ai-portfolio-builder": {
      title: "AI Portfolio Builder",
      headline: "Create Professional Portfolios That Showcase Real Skills & Projects",
      subheadline: "Build, host, and share professional portfolios directly through Emazyn to showcase projects, achievements, certifications, skills, and practical work in one organized platform.",
      buttonText: "Access AI Portfolio Builder",
      trustHighlights: [
        "AI-Powered Portfolio Guidance",
        "Portfolio Hosting Included",
        "Shareable Portfolio Links",
        "Project-Focused Professional Profiles",
        "Career-Ready Portfolio Design",
        "Easy Portfolio Management"
      ],
      struggleTitle: "A Smarter Way to Showcase Your Work & Career Growth",
      struggles: [
        "failing to demonstrate real project experience",
        "lacking proof of practical implementation",
        "obscuring core technical capabilities",
        "missing display of creative work",
        "omitting problem-solving skills",
        "rendering the professional growth journey invisible"
      ],
      howItWorksTitle: "How the AI Portfolio Builder Works",
      howItWorksSteps: [
        { title: "Add Your Professional Information", desc: "Upload projects catalogs.", details: ["projects", "certifications", "achievements", "technical skills", "resume details", "work samples", "professional links"] },
        { title: "AI-Powered Portfolio Structuring", desc: "Identifies highlight components.", details: ["project presentation", "portfolio structure", "professional summaries", "content organization", "skill highlighting", "visual clarity"] },
        { title: "Build Your Portfolio Website", desc: "Configures templates with fluid grids.", details: ["personalized sections", "structured layouts", "hosted portfolio pages", "easy navigation", "responsive portfolio design"] },
        { title: "Host & Share Easily", desc: "One-click deployment to custom subdomains.", details: ["recruiters", "hiring managers", "internship applications", "freelance opportunities", "networking", "professional branding"] },
        { title: "Continuously Update Your Portfolio", desc: "Syncs directly with project workspaces.", details: ["new projects", "additional certifications", "job experiences", "noteworthy achievements", "refresher skills", "career milestones"] }
      ],
      whoIsItForTitle: "Designed for Anyone Building a Professional Identity",
      whoIsItForAudiences: [
        { role: "Students", text: "Showcase projects, certifications, and practical learning experiences." },
        { role: "Freshers", text: "Build professional credibility beyond traditional resumes." },
        { role: "Working Professionals", text: "Present achievements, skills, and implementation experience professionally." },
        { role: "Developers & Technical Professionals", text: "Showcase technical projects, applications, and implementation work." },
        { role: "Freelancers & Creators", text: "Share portfolios with clients, collaborators, and professional networks easily." }
      ],
      featuresTitle: "Features Included in AI Portfolio Builder",
      features: [
        { title: "Portfolio Hosting", desc: "Host your portfolio directly through the Emazyn secure platform." },
        { title: "Shareable Portfolio Links", desc: "Generate clean, easy-to-share professional portfolio URLs." },
        { title: "AI-Powered Portfolio Guidance", desc: "Receive recommendations for improving project and profile presentation." },
        { title: "Project Showcase System", desc: "Display technical, creative, academic, or professional work effectively with screenshots." },
        { title: "Professional Branding Support", desc: "Build stronger digital credibility and authority." },
        { title: "Continuous Portfolio Growth", desc: "Update and improve portfolios dynamically throughout your career journey." }
      ],
      whyUseTitle: "Why Use Emazyn AI Portfolio Builder",
      whyUseBenefits: [
        { title: "More Than a Resume", desc: "Show practical implementation, projects, and achievements visually and professionally." },
        { title: "Built for Modern Hiring", desc: "Help recruiters and organizations evaluate real skills and capabilities." },
        { title: "Easy Hosting & Sharing", desc: "No separate hosting setup required — portfolios can be managed directly within Emazyn." },
        { title: "AI-Powered Optimization", desc: "Receive intelligent recommendations for improving portfolio structure and presentation." },
        { title: "Stronger Professional Visibility", desc: "Improve credibility across placements, interviews, freelance work, and networking opportunities." },
        { title: "Integrated Career Ecosystem", desc: "Connect portfolios with resumes, LinkedIn optimization, mock interviews, and career roadmaps." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Software Development", "UI/UX & Design", "Digital Marketing", "Product & Business Roles"],
      approachTitle: "More Than Portfolio Creation — A Career Visibility System",
      approachContent: "A professional portfolio should do more than display information; it must illustrate output.",
      approachFoci: ["communicate real capability", "showcase implementation", "highlight achievements", "strengthen professional branding", "improve opportunity readiness"],
      ctaHeadline: "Start Building Your Professional Portfolio",
      ctaSubheadline: "Access AI-powered portfolio creation, direct hosting, and easy portfolio sharing through the Emazyn platform.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    },

    "ai-mock-interview": {
      title: "AI Mock Interview",
      headline: "Prepare for Interviews with AI-Powered Mock Interview Practice",
      subheadline: "Improve interview confidence, communication, technical readiness, and professional performance through AI-powered mock interview experiences designed for modern hiring expectations.",
      buttonText: "Access AI Mock Interviews",
      trustHighlights: [
        "AI-Powered Interview Practice",
        "Technical & HR Interview Support",
        "Career Readiness Guidance",
        "Personalized Interview Feedback",
        "Communication Improvement",
        "Confidence Building System"
      ],
      struggleTitle: "A Smarter Way to Prepare for Real Interviews",
      struggles: [
        "critical lack of preparation",
        "damaging low confidence",
        "weak verbal communication",
        "unclear answer structuring",
        "limited actual mock interview practice",
        "paralyzing fear of technical questioning"
      ],
      howItWorksTitle: "How the AI Mock Interview system works",
      howItWorksSteps: [
        { title: "Select Your Career Domain", desc: "Choose interview preparation areas.", details: ["software development", "data analytics", "AI & machine learning", "cloud computing", "business roles", "general career readiness"] },
        { title: "AI-Powered Interview Simulation", desc: "Initiates real-time custom question boards.", details: ["technical questions", "HR questions", "situational questions", "communication assessments", "role-specific scenarios"] },
        { title: "Receive Personalized Feedback", desc: "Machine analysis on answers structure.", details: ["answer quality", "communication clarity", "confidence metrics", "technical understanding", "response structure", "improvement opportunities"] },
        { title: "Improve Interview Readiness", desc: "Get diagnostic reports to review.", details: ["stronger responses suggestions", "communication training", "technical preparation notes", "confidence building drills", "professional presentation highlights"] },
        { title: "Practice Continuously", desc: "Rerunning scenarios.", details: ["Attend multiple mock interview sessions", "track improvement over time", "unlock senior level grids", "compare benchmark ratings"] }
      ],
      whoIsItForTitle: "Built for Anyone Preparing for Career Opportunities",
      whoIsItForAudiences: [
        { role: "Students", text: "Prepare for internships, placements, and academic opportunities." },
        { role: "Freshers", text: "Practice real interview scenarios before attending company interviews." },
        { role: "Working Professionals", text: "Prepare for promotions, role changes, and new career opportunities." },
        { role: "Career Switchers", text: "Build confidence while transitioning into new domains and industries." },
        { role: "Job Seekers", text: "Improve communication, technical readiness, and professional confidence." }
      ],
      featuresTitle: "Features Included in AI Mock Interview",
      features: [
        { title: "AI-Powered Interview Simulation", desc: "Practice structured interviews based on modern hiring expectations." },
        { title: "Technical & HR Interview Support", desc: "Prepare for both technical queries and non-technical behavioral rounds." },
        { title: "Personalized Feedback System", desc: "Receive actionable feedback for continuous improvement and scoring." },
        { title: "Communication Readiness Support", desc: "Improve speaking clarity, speed, confidence, and filler word reductions." },
        { title: "Career-Specific Interview Practice", desc: "Practice interviews meticulously aligned with your target career domain." },
        { title: "Continuous Progress Tracking", desc: "Monitor growth in readiness, confidence, and overall score grades." }
      ],
      whyUseTitle: "Why Use Emazyn AI Mock Interview",
      whyUseBenefits: [
        { title: "Realistic Interview Practice", desc: "Prepare for modern interview environments and expectations." },
        { title: "AI-Powered Readiness Insights", desc: "Understand improvement areas through structured analysis." },
        { title: "Confidence Building", desc: "Reduce interview anxiety through repeated guided practice." },
        { title: "Industry-Relevant Preparation", desc: "Practice questions aligned with current industry trends and job roles." },
        { title: "Flexible Career Preparation", desc: "Suitable for technical, business, and professional career pathways." },
        { title: "Integrated Career Ecosystem", desc: "Connect interview preparation with resumes, portfolios, career roadmaps, and skill analysis." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Software Development", "Business & Product Roles", "Digital Marketing", "Career Readiness & Employability"],
      approachTitle: "More Than Interview Practice — A Career Readiness System",
      approachContent: "Interview success is not only about answering questions; it depends heavily on key soft capabilities.",
      approachFoci: ["confidence", "communication", "structured thinking", "practical understanding", "professional presentation", "readiness for real-world challenges"],
      ctaHeadline: "Start Practicing Smarter for Career Opportunities",
      ctaSubheadline: "Access AI-powered mock interview practice, personalized readiness feedback, and career-focused interview preparation through the Emazyn platform.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    },

    "opportunities-board": {
      title: "Opportunities Board",
      headline: "Explore Jobs, Internships & Career Opportunities — All in One Place",
      subheadline: "Get access to domestic and global career opportunities including full-time jobs, internships, freelance projects, contract roles, part-time work, and more through Emazyn’s AI-powered Opportunities Board.",
      buttonText: "Access Opportunities Board",
      trustHighlights: [
        "Domestic & Global Opportunities",
        "Quick Apply Features",
        "Internship & Job Listings",
        "Freelance & Contract Opportunities",
        "Career-Focused Discovery System",
        "Centralized Opportunity Tracking"
      ],
      struggleTitle: "A Smarter Way to Discover Career Opportunities",
      struggles: [
        "missing highly relevant openings",
        "tracking multiple disparate applications",
        "finding niche role-specific opportunities",
        "identifying authenticated global opportunities",
        "accessing high-value internships",
        "managing career applications efficiently"
      ],
      howItWorksTitle: "How the Opportunities Board Works",
      howItWorksSteps: [
        { title: "Explore Opportunities", desc: "Opening domain boards.", details: ["full-time jobs", "internships", "freelance projects", "contract roles", "remote work", "part-time opportunities", "global openings"] },
        { title: "Smart Opportunity Discovery", desc: "Filters down lists matching system capabilities.", details: ["skills", "career interests", "preferred domains", "experience level", "location preferences", "work mode preferences"] },
        { title: "Quick Apply System", desc: "Forks over optimized resume and portfolio links.", details: ["Apply faster with pre-fills", "integrated profile support", "automated credential checks", "custom cover letter recommendations"] },
        { title: "Track Career Opportunities", desc: "Visualizes application pipelines.", details: ["submitted applications", "saved opportunities", "opportunity status", "role interests", "career activity logs"] },
        { title: "Continuously Discover New Openings", desc: "Periodic notification triggers.", details: ["Stay updated with new openings as industries, companies, and hiring trends evolve."] }
      ],
      whoIsItForTitle: "Built for Every Career Journey",
      whoIsItForAudiences: [
        { role: "Students", text: "Explore internships, entry-level roles, and career-building opportunities." },
        { role: "Freshers", text: "Discover opportunities aligned with skills, projects, and career goals." },
        { role: "Working Professionals", text: "Explore new roles, career growth paths, and industry transitions." },
        { role: "Freelancers", text: "Find freelance projects and flexible work opportunities." },
        { role: "Career Switchers", text: "Identify opportunities aligned with new learning and career transition goals." }
      ],
      featuresTitle: "Features Included in Opportunities Board",
      features: [
        { title: "Domestic & Global Opportunities", desc: "Access high-value career opportunities from multiple regions and industries." },
        { title: "Internship Discovery", desc: "Explore internships designed specifically for learning, growth, and career development." },
        { title: "Freelance & Contract Opportunities", desc: "Find flexible project-based and independent work opportunities that suit your style." },
        { title: "Quick Apply System", desc: "Apply faster to openings using integrated profile data and automated validations." },
        { title: "Centralized Opportunity Management", desc: "Track all opportunities and applications in one organized dashboard." },
        { title: "Continuous Opportunity Updates", desc: "Stay fully informed about evolving openings and hiring trends." }
      ],
      whyUseTitle: "Why Use Emazyn Opportunities Board",
      whyUseBenefits: [
        { title: "Multiple Opportunity Types", desc: "Jobs, internships, freelance work, and global opportunities together in one ecosystem." },
        { title: "Faster Opportunity Discovery", desc: "Reduce time spent searching across multiple platforms with precision match filters." },
        { title: "Career-Focused Opportunity Matching", desc: "Explore opportunities aligned with skills, accomplishments, and career direction." },
        { title: "Integrated Career Ecosystem", desc: "Connect applications directly with resumes, portfolios, LinkedIn profiles, and readiness tools." },
        { title: "Practical Career Growth Support", desc: "Move beyond theory into actual opportunity readiness and career action." },
        { title: "Continuous Career Development", desc: "Track growth, applications, and professional progress over time seamlessly." }
      ],
      supportedAreas: ["Data Analytics", "Generative AI", "Artificial Intelligence & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Software Development", "Digital Marketing", "Product & Business Roles", "Career Readiness & Employability"],
      approachTitle: "More Than Job Listings — A Career Opportunity Ecosystem",
      approachContent: "Career growth is not only about learning new skills; it requires structured market bridge alignments.",
      approachFoci: ["discovering the right opportunities", "applying effectively", "presenting professional value", "building visibility", "staying career-ready"],
      ctaHeadline: "Start Exploring Career Opportunities Smarter",
      ctaSubheadline: "Access jobs, internships, freelance projects, and global career opportunities through Emazyn’s integrated opportunity discovery ecosystem.",
      ctaBtn1: "Login to Access Feature",
      ctaBtn2: "Create Your Emazyn Account"
    }
  };

  const curr = serviceData[viewId] || serviceData["ai-career-roadmap"];

  return (
    <div className="w-full">
      
      {/* SERVICE HERO */}
      <section className="relative pt-24 pb-20 border-b border-black/[0.08] overflow-hidden">
        <GridBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/50 mb-6 uppercase tracking-wider">
                  {curr.title} &middot; Service Page
                </span>
                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-3xl xl:text-5xl tracking-tight leading-[1.1] text-black">
                  {curr.title === "Opportunities Board" ? "Explore Jobs & Internships" : curr.title}
                </h1>
                <p className="font-sans text-xs text-blue-600 block mt-2 font-semibold tracking-wide uppercase">
                  {curr.headline}
                </p>
                <p className="font-sans text-sm text-gray-500 mt-5 leading-relaxed">
                  {curr.subheadline}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <button
                    onClick={() => onNavigate("contact-us")}
                    className="bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold rounded-lg px-6 py-3.5 flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>{curr.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate("contact-us")}
                    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-sans text-sm font-semibold rounded-lg px-6 py-3.5 transition-all shadow-sm"
                  >
                    Login / Sign Up
                  </button>
                </div>
              </div>

              {/* High-fidelity custom matching image vector column with float animation */}
              <div className="w-full relative select-none animate-float">
                {/* Decorative glows */}
                <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-3xl -top-10 -left-10"></div>
                <div className="absolute w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -right-10"></div>
                <div className="rounded-2xl overflow-hidden liquid-glass border border-white/40 p-3 shadow-lg">
                  <img
                    src="/src/assets/images/service_hero_illustration_1779637142524.png"
                    alt={`${curr.title} Illustration Mockup`}
                    className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Trust points row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-black/[0.08] bg-white/[0.60] rounded-xl overflow-hidden mt-16 shadow-sm">
            {curr.trustHighlights.map((hl, idx) => (
              <div key={idx} className="p-5 border-r border-b border-black/[0.08] last:border-r-0 lg:border-b-0 [&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block mb-2"></span>
                <p className="font-sans text-[11px] font-bold text-gray-950 leading-snug">{hl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — WHAT IS THE SERVICE */}
      <section className="py-20 border-b border-b-black/[0.08] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-[10px] text-red-650 uppercase tracking-widest font-semibold px-2 py-0.5 bg-red-100/50 rounded">
                  DIFFICULTY RESOLUTION
                </span>
                <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-3">
                  {curr.struggleTitle}
                </h2>
                <p className="font-sans text-sm text-gray-500 mt-4 leading-relaxed">
                  Navigating modern domain-specific requirements is highly fragmented. Standard job sites or video-watching courses often fall short. Users frequently experience friction with:
                </p>

                <ul className="space-y-3.5 mt-6">
                  {curr.struggles.map((strug, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-blue-600 font-bold bg-blue-50 border border-blue-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0">✓</span>
                      <p className="font-sans text-xs font-semibold text-gray-800 leading-normal">
                        Solving missing <span className="text-blue-600 font-bold capitalize">{strug}</span>.
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Animated Core Dashboard Graphic matching the actual subtool */}
              <div className="w-full">
                {(() => {
                  let mappedType: "roadmap" | "skills" | "resume" | "branding" | "colleges" | "corporates" | "growth" = "growth";
                  if (viewId === "ai-career-roadmap") mappedType = "roadmap";
                  else if (viewId === "ai-skill-analyzer") mappedType = "skills";
                  else if (viewId === "ai-resume-builder") mappedType = "resume";
                  else if (viewId === "ai-linkedin-optimizer") mappedType = "branding";
                  else if (viewId === "ai-portfolio-builder") mappedType = "branding";
                  else if (viewId === "ai-mock-interview") mappedType = "skills";
                  else if (viewId === "opportunities-board") mappedType = "growth";
                  
                  return <MotionGraphic type={mappedType} />;
                })()}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — HOW IT WORKS (CHRONOLOGICAL TIMELINE CHIPS) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              WORKFLOW
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-2">
              {curr.howItWorksTitle}
            </h2>
          </div>

          {/* Stepped Timeline path connecting sequentially */}
          <div className="relative border border-black/[0.08] bg-white rounded-2xl p-8 md:p-12 shadow-sm overflow-hidden">
            <div className="absolute top-10 bottom-10 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-blue-60a via-indigo-600 to-gray-200 -translate-x-1/2"></div>

            <div className="space-y-12">
              {curr.howItWorksSteps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    
                    {/* Floating Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 shadow-sm flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></div>
                    </div>

                    {/* Content Block */}
                    <div className={`pl-16 md:pl-0 w-full md:w-1/2 text-left ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="font-mono text-xs font-bold text-indigo-600">Step 0{idx + 1}</span>
                      <h4 className="font-sans text-sm font-bold text-gray-950 mt-1">{step.title}</h4>
                      <p className="font-sans text-[11px] text-gray-500 mt-1 max-w-sm leading-relaxed">{step.desc}</p>
                      
                      {/* Interactive Tags */}
                      <div className={`flex flex-wrap gap-1.5 mt-3 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {step.details.map((det) => (
                          <span key={det} className="font-sans text-[9px] text-gray-650 bg-gray-50 border border-black/[0.04] rounded px-2.5 py-0.5 max-w-[140px] truncate">
                            {det}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — WHO IS IT FOR (TARGET GRIDS RESEMBLING INDICIUM CLIENT INDEX) */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="font-display font-medium text-2xl tracking-tight text-black">
              {curr.whoIsItForTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] bg-white rounded-xl overflow-hidden shadow-sm">
            {curr.whoIsItForAudiences.map((aud, idx) => (
              <div key={idx} className="p-6 border-b border-r border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:-webkit-any(nth-last-child(-n+2))]:border-b-0">
                <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-semibold bg-gray-100/50 rounded mb-3 text-gray-600 uppercase border border-gray-200">
                  Target Group
                </span>
                <h4 className="font-sans text-xs font-bold text-gray-900 mb-1">{aud.role}</h4>
                <p className="font-sans text-[11px] text-gray-500 leading-relaxed">{aud.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — SERVICE SPECIFIC FEATURES (BENTO CELL GRID) */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
              SPECIFICATIONS
            </span>
            <h2 className="font-display font-medium text-3xl tracking-tight text-gray-900 mt-2">
              {curr.featuresTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] bg-white rounded-xl overflow-hidden shadow-sm">
            {curr.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 border-b border-r border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-b [&:nth-child(4)]:border-b [&:nth-child(5)]:border-b [&:nth-child(6)]:border-b-0"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 font-mono text-xs font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-sans text-xs font-bold text-gray-900 mb-1">{feat.title}</h4>
                <p className="font-sans text-[11px] text-gray-500 leading-normal">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — WHY EMAZYN (SPECIFIC BENEFITS GRID) */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="font-display font-medium text-2xl tracking-tight text-black">
              {curr.whyUseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.08] rounded-xl overflow-hidden bg-gray-50/[0.1] shadow-sm">
            {curr.whyUseBenefits.map((ben, idx) => (
              <div key={idx} className="p-6 border-b border-r border-black/[0.08] last:border-b-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-b [&:nth-child(4)]:border-b [&:nth-child(5)]:border-b [&:nth-child(6)]:border-b-0">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block mb-1">Benefit 0{idx + 1}</span>
                <h4 className="font-sans text-xs font-bold text-gray-900 mb-1">{ben.title}</h4>
                <p className="font-sans text-[11px] text-gray-500 leading-normal">{ben.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — CAREER SUPPORT ARREAS */}
      <section className="py-20 border-b border-black/[0.08] bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">
            COVERED MATRIX
          </span>
          <h2 className="font-display font-medium text-3xl tracking-tight text-black mt-2 mb-10 leading-tight">
            Analyze Skills & Opportunities Across Modern Career Domains
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {curr.supportedAreas.map((area) => (
              <span key={area} className="font-sans text-[11px] font-medium text-gray-800 bg-white border border-black/[0.08] rounded-full px-4 py-1.5 shadow-[0_1px_1px_rgba(0,0,0,0.01)]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — APPROACH */}
      <section className="py-20 border-b border-black/[0.08] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-semibold px-2 py-0.5 border border-red-200/50 bg-red-50 rounded-full">
                OUR METHODOLOGY
              </span>
              <h2 className="font-display font-medium text-3xl tracking-tight text-black leading-tight">
                {curr.approachTitle}
              </h2>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                {curr.approachContent}
              </p>
              <p className="font-sans text-xs text-gray-400">
                Traditional assessment alone gives static figures. We bridge gaps on a multi-dimensional timeline spanning core preparation points.
              </p>
            </div>

            <div className="bg-gray-50/50 border border-black/10 rounded-xl p-8">
              <h4 className="font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
                Structured Career Priorities:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {curr.approachFoci.map((fc, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <span className="font-sans text-xs font-bold text-gray-800 leading-none">{fc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA (SERVICE SPECIFIC) */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] grid-bg-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="font-mono text-[10px] text-blue-400 tracking-wider bg-blue-900/45 border border-blue-800 rounded px-2.5 py-0.5">
            PLATFORM ENTRY
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-white tracking-tight mt-6 max-w-2xl mx-auto leading-tight">
            {curr.ctaHeadline}
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
            {curr.ctaSubheadline}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <button
              onClick={() => onNavigate("contact-us")}
              className="bg-white hover:bg-gray-150 text-black font-sans text-sm font-semibold rounded-lg px-7 py-3 transition-all"
            >
              {curr.ctaBtn1}
            </button>
            <button
              onClick={() => onNavigate("contact-us")}
              className="border border-white/20 hover:bg-white/10 text-white font-sans text-sm font-semibold rounded-lg px-7 py-3 transition-all"
            >
              {curr.ctaBtn2}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
