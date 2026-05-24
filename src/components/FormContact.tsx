import { useState, FormEvent } from "react";
import { ContactFormState } from "../types";
import { Check, Send, Sparkles, Loader2, ClipboardCheck, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function FormContact() {
  const [userType, setUserType] = useState<ContactFormState["userType"]>("Student");
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  // Common Form Fields state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cityLocation, setCityLocation] = useState("");
  const [preferredContactTime, setPreferredContactTime] = useState("Flexible Timing");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [consentCheckbox, setConsentCheckbox] = useState(false);

  // Dynamic state for STUDENT
  const [educationLevel, setEducationLevel] = useState("Undergraduate");
  const [yearSemester, setYearSemester] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [studentSkillLevel, setStudentSkillLevel] = useState("Beginner");
  const [studentInterests, setStudentInterests] = useState<string[]>([]);
  const [studentLookingFor, setStudentLookingFor] = useState<string[]>([]);

  // Dynamic state for PROFESSIONAL
  const [currentJobRole, setCurrentJobRole] = useState("");
  const [currentIndustry, setCurrentIndustry] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("1–3 Years");
  const [professionalInterests, setProfessionalInterests] = useState<string[]>([]);
  const [professionalLookingFor, setProfessionalLookingFor] = useState<string[]>([]);

  // Dynamic state for SWITCHER
  const [switcherBackground, setSwitcherBackground] = useState("");
  const [switcherTargetDomain, setSwitcherTargetDomain] = useState("Data Analytics");
  const [switcherReason, setSwitcherReason] = useState("");
  const [switcherExperience, setSwitcherExperience] = useState("Fresher");
  const [switcherSupportNeeded, setSwitcherSupportNeeded] = useState<string[]>([]);

  // Dynamic state for COLLEGE
  const [collegeNameInst, setCollegeNameInst] = useState("");
  const [instContactPerson, setInstContactPerson] = useState("");
  const [instDesignation, setInstDesignation] = useState("Placement Officer");
  const [instDepartments, setInstDepartments] = useState<string[]>([]);
  const [instStudentStrength, setInstStudentStrength] = useState("300–500");
  const [instServices, setInstServices] = useState<string[]>([]);
  const [instPreferredMode, setInstPreferredMode] = useState("Online");

  // Dynamic state for CORPORATE
  const [corpName, setCorpName] = useState("");
  const [corpContactPerson, setCorpContactPerson] = useState("");
  const [corpDesignation, setCorpDesignation] = useState("");
  const [corpIndustry, setCorpIndustry] = useState("");
  const [corpTeamSize, setCorpTeamSize] = useState("10–50");
  const [corpTrainingAreas, setCorpTrainingAreas] = useState<string[]>([]);
  const [corpPreferredMode, setCorpPreferredMode] = useState("Online");

  const [errors, setErrors] = useState<string[]>([]);

  const handleInterestToggle = (interest: string, list: string[], setter: (val: string[]) => void) => {
    if (list.includes(interest)) {
      setter(list.filter((x) => x !== interest));
    } else {
      setter([...list, interest]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = [];

    if (!fullName) errs.push("Full Name is required.");
    if (!email) errs.push("Email Address is required.");
    if (!mobileNumber) errs.push("Mobile Number is required.");
    if (!cityLocation) errs.push("City/Location is required.");
    if (!consentCheckbox) errs.push("You must agree to the consent checkbox to be contacted.");

    if (errs.length > 0) {
      setErrors(errs);
      const topEl = document.getElementById("contact-form-title");
      if (topEl) topEl.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setErrors([]);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessSubmit(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <div className="w-full">
      {successSubmit ? (
        <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-12 shadow-sm text-center max-w-2xl mx-auto animate-fade-in">
          <div className="w-16 h-16 bg-blue-50 border border-blue-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h3 className="font-display font-bold text-2xl text-black">
            Enquiry Received
          </h3>
          <p className="font-sans text-sm text-gray-500 mt-2">
            Thank you, <strong className="text-black">{fullName}</strong>. Our team reviews submissions daily to prepare personalized responses.
          </p>

          <hr className="my-8 border-black/[0.08]" />

          {/* Success checklist steps from the PDF */}
          <div className="text-left flex flex-col gap-6">
            <h4 className="font-display font-semibold text-xs text-black uppercase tracking-wider text-center">
              What Happens Next? (Our Process)
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                <div className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</div>
                <div>
                  <p className="font-sans text-xs font-semibold text-gray-900">Immediate Request Review</p>
                  <p className="font-sans text-[11px] text-gray-500 mt-0.5">Our team of career specialists starts inspecting your background.</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                <div className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</div>
                <div>
                  <p className="font-sans text-xs font-semibold text-gray-900">Custom Pathway Design</p>
                  <p className="font-sans text-[11px] text-gray-500 mt-0.5">We identify the optimal learning solutions or partnership alignment.</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                <div className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</div>
                <div>
                  <p className="font-sans text-xs font-semibold text-gray-900">Personal Contact Scheduling</p>
                  <p className="font-sans text-[11px] text-gray-500 mt-0.5">A representative connects during your preferred time: <strong className="text-black">{preferredContactTime}</strong>.</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                <div className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</div>
                <div>
                  <p className="font-sans text-xs font-semibold text-gray-900">Onboarding Initiation</p>
                  <p className="font-sans text-[11px] text-gray-500 mt-0.5">We deliver actionable next steps and set up platform access details.</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setSuccessSubmit(false);
              setFullName("");
              setEmail("");
              setMobileNumber("");
              setCityLocation("");
              setConsentCheckbox(false);
              setAdditionalMessage("");
            }}
            className="mt-8 font-sans text-xs font-semibold text-blue-600 hover:text-blue-700 underline focus:outline-none"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto transition-all animate-fade-in">
          
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold px-2 py-0.5 border border-blue-200/50 bg-blue-50 rounded-full">
              Contact Form
            </span>
            <h3 id="contact-form-title" className="font-display font-bold text-2xl text-gray-900 mt-3">
              Tell Us About Yourself
            </h3>
            <p className="font-sans text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Choose your profile and answer a few simple questions so we can personalize your guidance.
            </p>
          </div>

          {/* Validation Errors banner */}
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-left">
              <p className="font-sans text-xs font-bold text-red-700">Please correct the following errors:</p>
              <ul className="list-disc pl-5 mt-1.5 text-xs text-red-600 space-y-1">
                {errors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Primary radio toggle for client categories */}
          <div className="mb-10 text-left">
            <label className="block font-sans text-xs font-bold text-gray-750 uppercase tracking-widest mb-3">
              I am a &middot; <span className="text-blue-600 font-extrabold">Professional Target Group</span> *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
              {(["Student", "Working Professional", "Career Switcher", "College / Institution", "Corporate / Organization"] as const).map((type) => (
                <label
                  key={type}
                  className={`flex flex-col items-center justify-center p-3 border rounded-xl cursor-pointer text-center select-none transition-all duration-200 ${
                    userType === type
                      ? "border-blue-600 bg-blue-50/50 text-blue-700 font-semibold"
                      : "border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-black"
                  }`}
                >
                  <input
                    type="radio"
                    name="userTypeGroup"
                    value={type}
                    checked={userType === type}
                    onChange={() => setUserType(type)}
                    className="sr-only"
                  />
                  <span className="font-sans text-[11px] leading-snug">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Common Fields Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
            <div>
              <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rahul@example.com"
                className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Mobile Number *</label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">City / Location *</label>
              <input
                type="text"
                required
                value={cityLocation}
                onChange={(e) => setCityLocation(e.target.value)}
                placeholder="e.g. New Delhi"
                className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          <hr className="my-8 border-black/[0.08]" />

          {/* DYNAMIC FORM INNER VIEW */}
          <div className="text-left min-h-[200px]">
            {userType === "Student" && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Education Level *</label>
                    <select
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="School Student">School Student</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Year / Semester *</label>
                    <input
                      type="text"
                      required
                      value={yearSemester}
                      onChange={(e) => setYearSemester(e.target.value)}
                      placeholder="e.g. 3rd Year / 6th Sem"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Skill Level *</label>
                    <select
                      value={studentSkillLevel}
                      onChange={(e) => setStudentSkillLevel(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">College / Institution Name *</label>
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. Indian Institute of Technology"
                    className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Areas of Interest Multi-select Pill Selector */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    Areas of Interest * <span className="text-gray-400 font-normal">(Select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Data Analytics", "Generative AI", "AI & Machine Learning", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Career Readiness", "Resume Building", "Mock Interviews", "Portfolio Building", "Other"].map((interest) => {
                      const selected = studentInterests.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => handleInterestToggle(interest, studentInterests, setStudentInterests)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                            selected
                              ? "bg-blue-600 text-white border border-blue-600"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                          }`}
                        >
                          {selected ? `✓ ${interest}` : interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Looking For checkboxes */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    What Are You Looking For? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {["Career Guidance", "Skill Development", "Internship Opportunities", "Job Preparation", "Resume Support", "Mock Interviews", "Placement Readiness", "Other"].map((item) => (
                      <label key={item} className="flex items-center gap-2.5 cursor-pointer text-xs font-sans text-gray-700">
                        <input
                          type="checkbox"
                          checked={studentLookingFor.includes(item)}
                          onChange={() => handleInterestToggle(item, studentLookingFor, setStudentLookingFor)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {userType === "Working Professional" && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Job Role *</label>
                    <input
                      type="text"
                      required
                      value={currentJobRole}
                      onChange={(e) => setCurrentJobRole(e.target.value)}
                      placeholder="e.g. Software Engineer"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Industry *</label>
                    <input
                      type="text"
                      required
                      value={currentIndustry}
                      onChange={(e) => setCurrentIndustry(e.target.value)}
                      placeholder="e.g. Technology / IT"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Years of Experience *</label>
                    <select
                      value={yearsOfExperience}
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="0–1 Years">0–1 Years</option>
                      <option value="1–3 Years">1–3 Years</option>
                      <option value="3–5 Years">3–5 Years</option>
                      <option value="5–10 Years">5–10 Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                  </div>
                </div>

                {/* Checkboxes Looking For */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    What Are You Looking For? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {["Upskilling", "Career Growth", "AI Adoption", "Career Transition", "Resume Optimization", "LinkedIn Optimization", "Interview Preparation", "Other"].map((item) => (
                      <label key={item} className="flex items-center gap-2.5 cursor-pointer text-xs font-sans text-gray-700">
                        <input
                          type="checkbox"
                          checked={professionalLookingFor.includes(item)}
                          onChange={() => handleInterestToggle(item, professionalLookingFor, setProfessionalLookingFor)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Areas of Interest Multi-select Pill */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    Areas of Interest *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Data Analytics", "Generative AI", "AI & Machine Learning", "Cloud Computing", "Full Stack Development", "DevOps", "Cybersecurity", "Product & Business Skills", "Other"].map((interest) => {
                      const selected = professionalInterests.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => handleInterestToggle(interest, professionalInterests, setProfessionalInterests)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                            selected
                              ? "bg-blue-600 text-white border border-blue-600"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                          }`}
                        >
                          {selected ? `✓ {interest}` : interest}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {userType === "Career Switcher" && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Background / Industry *</label>
                    <input
                      type="text"
                      required
                      value={switcherBackground}
                      onChange={(e) => setSwitcherBackground(e.target.value)}
                      placeholder="e.g. Sales / Accounting"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Target Career Domain *</label>
                    <select
                      value={switcherTargetDomain}
                      onChange={(e) => setSwitcherTargetDomain(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Generative AI">Generative AI</option>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Product Management">Product Management</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Current Experience Level *</label>
                    <select
                      value={switcherExperience}
                      onChange={(e) => setSwitcherExperience(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Fresher">Fresher</option>
                      <option value="0–2 Years">0–2 Years</option>
                      <option value="2–5 Years">2–5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Why Are You Looking for a Career Switch? *</label>
                  <textarea
                    rows={3}
                    required
                    value={switcherReason}
                    onChange={(e) => setSwitcherReason(e.target.value)}
                    placeholder="Describe your motivations, aspirations, and what domains spark your interest..."
                    className="w-full p-4 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-350"
                  ></textarea>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    What Support is Needed? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {["Career Roadmap", "Skill Development", "Portfolio Building", "Resume Building", "Mock Interviews", "Job Opportunities", "Other"].map((item) => (
                      <label key={item} className="flex items-center gap-2.5 cursor-pointer text-xs font-sans text-gray-700">
                        <input
                          type="checkbox"
                          checked={switcherSupportNeeded.includes(item)}
                          onChange={() => handleInterestToggle(item, switcherSupportNeeded, setSwitcherSupportNeeded)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {userType === "College / Institution" && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">College / Institution Name *</label>
                    <input
                      type="text"
                      required
                      value={collegeNameInst}
                      onChange={(e) => setCollegeNameInst(e.target.value)}
                      placeholder="e.g. National Institute of Tech"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={instContactPerson}
                      onChange={(e) => setInstContactPerson(e.target.value)}
                      placeholder="e.g. Dr. Amit Kumar"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-155 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Designation *</label>
                    <select
                      value={instDesignation}
                      onChange={(e) => setInstDesignation(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Placement Officer">Placement Officer</option>
                      <option value="HOD">HOD</option>
                      <option value="Principal">Principal</option>
                      <option value="Dean">Dean</option>
                      <option value="Faculty Coordinator">Faculty Coordinator</option>
                      <option value="Training & Placement Cell">Training & Placement Cell</option>
                      <option value="Management">Management</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Approximate Student Strength *</label>
                    <select
                      value={instStudentStrength}
                      onChange={(e) => setInstStudentStrength(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Below 100">Below 100</option>
                      <option value="100–300">100–300</option>
                      <option value="300–500">300–500</option>
                      <option value="500–1000">500–1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Preferred Training Mode *</label>
                    <select
                      value={instPreferredMode}
                      onChange={(e) => setInstPreferredMode(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                {/* Multiselect departments */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    Department(s) Interested *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["CSE", "IT", "AI & DS", "ECE", "EEE", "Mechanical", "Civil", "MBA", "BCA / MCA", "Other"].map((dept) => {
                      const selected = instDepartments.includes(dept);
                      return (
                        <button
                          type="button"
                          key={dept}
                          onClick={() => handleInterestToggle(dept, instDepartments, setInstDepartments)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                            selected
                              ? "bg-blue-600 text-white border border-blue-600"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                          }`}
                        >
                          {selected ? `✓ ${dept}` : dept}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Checkboxes interested services */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    Interested Services *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {["VAC Programs", "Placement Readiness", "AI Career Mapping", "Mock Interviews", "Resume Building", "Faculty Development", "Technical Workshops", "Other"].map((item) => (
                      <label key={item} className="flex items-center gap-2.5 cursor-pointer text-xs font-sans text-gray-700">
                        <input
                          type="checkbox"
                          checked={instServices.includes(item)}
                          onChange={() => handleInterestToggle(item, instServices, setInstServices)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {userType === "Corporate / Organization" && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Organization Name *</label>
                    <input
                      type="text"
                      required
                      value={corpName}
                      onChange={(e) => setCorpName(e.target.value)}
                      placeholder="e.g. Acme Tech Solutions"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={corpContactPerson}
                      onChange={(e) => setCorpContactPerson(e.target.value)}
                      placeholder="e.g. Neha Roy"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Designation *</label>
                    <input
                      type="text"
                      required
                      value={corpDesignation}
                      onChange={(e) => setCorpDesignation(e.target.value)}
                      placeholder="e.g. VP Human Resources"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Industry / Business Type *</label>
                    <input
                      type="text"
                      required
                      value={corpIndustry}
                      onChange={(e) => setCorpIndustry(e.target.value)}
                      placeholder="e.g. Financial Services"
                      className="w-full px-4 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Team Size *</label>
                    <select
                      value={corpTeamSize}
                      onChange={(e) => setCorpTeamSize(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Below 10">Below 10</option>
                      <option value="10–50">10–50</option>
                      <option value="50–200">50–200</option>
                      <option value="200–500">200–500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Preferred Training Mode *</label>
                    <select
                      value={corpPreferredMode}
                      onChange={(e) => setCorpPreferredMode(e.target.value)}
                      className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                {/* Multiselect Training Areas */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-gray-700 mb-2.5">
                    Interested Training Areas *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Generative AI", "AI Productivity", "Data Analytics", "Full Stack Development", "Cloud Computing", "Cybersecurity", "Workforce Upskilling", "Technical Workshops", "Other"].map((area) => {
                      const selected = corpTrainingAreas.includes(area);
                      return (
                        <button
                          type="button"
                          key={area}
                          onClick={() => handleInterestToggle(area, corpTrainingAreas, setCorpTrainingAreas)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                            selected
                              ? "bg-blue-600 text-white border border-blue-600"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                          }`}
                        >
                          {selected ? `✓ ${area}` : area}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <hr className="my-8 border-black/[0.08]" />

          {/* COMMON FINAL SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
            <div>
              <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Preferred Time for Contact *</label>
              <select
                value={preferredContactTime}
                onChange={(e) => setPreferredContactTime(e.target.value)}
                className="w-full px-3 h-11 text-sm bg-gray-50/50 border border-gray-255 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
              >
                <option value="9 AM – 11 AM">9 AM – 11 AM</option>
                <option value="11 AM – 1 PM">11 AM – 1 PM</option>
                <option value="1 PM – 3 PM">1 PM – 3 PM</option>
                <option value="3 PM – 5 PM">3 PM – 5 PM</option>
                <option value="5 PM – 7 PM">5 PM – 7 PM</option>
                <option value="Flexible Timing">Flexible Timing</option>
              </select>
            </div>
          </div>

          <div className="text-left mb-6">
            <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">Additional Message / Requirement</label>
            <textarea
              rows={4}
              value={additionalMessage}
              onChange={(e) => setAdditionalMessage(e.target.value)}
              placeholder="Any other specific requirements, certifications you target, or details you'd like to share..."
              className="w-full p-4 text-sm bg-gray-50/50 border border-gray-155 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 transition-all placeholder:text-gray-300"
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="text-left mb-8">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={consentCheckbox}
                onChange={(e) => setConsentCheckbox(e.target.checked)}
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <span className="font-sans text-xs text-gray-600 leading-normal">
                I agree to be contacted by the Emazyn team regarding my enquiry and consent to the processing of my profile details to configure my platform metrics.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-sans text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm focus:ring-2 focus:ring-black/20"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
