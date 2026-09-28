import React from "react";
const features = [
  {
    title: "Schedule VII compliant",
    text: "— Education, Health, Women's Empowerment, Environmental Sustainability",
  },
  {
    title: "Full impact documentation",
    text: "— narrative reports, photo evidence, beneficiary counts, financial statements",
  },
  {
    title: "Co-branded programme naming",
    text: "available for multi-year CSR partnerships",
  },
  {
    title: "Employee volunteering integration",
    text: "— site visits, mentoring days, skill-share sessions",
  },
  {
    title: "Transparent fund utilisation",
    text: "— dedicated project accounting with auditor-certified reports",
  },
];

const tags = [
  "Education",
  "Healthcare",
  "Women Empowerment",
  "Environment",
  "Sports Promotion",
  "Rural Development",
];

function CSRPartnershipSection() {
  return (
    <section className="w-full max-w-6xl mx-auto bg-white shadow-sm mb-40 overflow-hidden grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] opacity-0 translate-y-8 animate-[sectionIn_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]" id="csr-partnership">
      {/* ========== LEFT COLUMN ========== */}
      <div className="flex flex-col gap-7 p-8 sm:p-10 lg:p-12">
        {/* Eyebrow */}
        <p className="text-xs md:text-lg font-bold tracking-[0.12em] uppercase text-[#e85d04] opacity-0 translate-y-8 animate-[fadeUp_0.6s_0.2s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          CSR & Partnerships
        </p>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-tight text-gray-900 opacity-0 translate-y-4 animate-[fadeUp_0.65s_0.3s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          Your CSR rupee does real work{" "}
          <span className="text-[#e85d04]">here.</span>
        </h2>

        {/* Description */}
        <p className="text-[15px] max-w-xl leading-relaxed opacity-0 translate-y-3.5 animate-[fadeUp_0.6s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          ASVSS holds a valid CSR Registration under the Companies Act 2013,
          allowing your organisation to direct its mandatory Corporate Social
          Responsibility spend towards verified, on-ground programmes in
          education, health, livelihoods, environment and women's empowerment —
          all within Schedule VII compliance areas.
        </p>

        {/* Registration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-slate-200 overflow-hidden opacity-0 translate-y-3.5 animate-[fadeUp_0.6s_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          <div className="relative group p-4 sm:p-5 bg-white hover:bg-orange-50/60 transition-colors duration-250 border-b sm:border-b-0 sm:border-r border-slate-200">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85d04] scale-y-0 origin-bottom transition-transform duration-350 group-hover:scale-y-100" />
            <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-1.5">
              Registration No.
            </p>
            <p className="text-lg font-bold text-gray-900 tracking-tight">
              SO250551
            </p>
          </div>

          <div className="relative group p-4 sm:p-5 bg-white hover:bg-orange-50/60 transition-colors duration-250">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85d04] scale-y-0 origin-bottom transition-transform duration-350 group-hover:scale-y-100" />
            <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-1.5">
              CSR Registration No.
            </p>
            <p className="text-lg font-bold text-gray-900 tracking-tight">
              CSR00056917
            </p>
          </div>
        </div>

        {/* Features List */}
        <ul className="flex flex-col gap-3.5 mt-1">
          {features.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[14.5px] text-slate-600 opacity-0 -translate-x-3 animate-[slideIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
              style={{ animationDelay: `${0.55 + i * 0.07}s` }}
            >
              <span className="mt-2 shrink-0 w-2 h-2 bg-[#e85d04] shadow-[0_0_0_3px_rgba(232,93,4,0.15)]" />
              <span>
                <strong className="font-semibold text-gray-900">
                  {item.title}
                </strong>{" "}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== RIGHT COLUMN ========== */}
      <div className="relative flex flex-col gap-7 p-7 sm:p-8 lg:p-9 bg-[#f7f1e8] overflow-hidden">
        {/* Soft radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,93,4,0.08),transparent_50%)]" />

        {/* Image */}
        <div className="relative overflow-hidden shadow-xl opacity-0 scale-95 translate-y-4 animate-[imageIn_0.8s_0.35s_cubic-bezier(0.22,1,0.36,1)_forwards] group">
          <img
            src="https://www.asite.com/hubfs/iStock-1009934102.jpg"
            alt="Hands holding a young plant together"
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-600 group-hover:scale-105"
          />
        </div>

        {/* Focus Areas Title */}
        <h3 className="text-xl font-bold text-gray-900 opacity-0 translate-y-3 animate-[fadeUp_0.55s_0.55s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          Eligible CSR Focus Areas
        </h3>

        <p className="text-sm -mt-3 opacity-0 translate-y-2.5 animate-[fadeUp_0.55s_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          Our programmes span multiple Schedule VII categories — allowing
          flexible CSR alignment across your reporting requirements.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide uppercase text-gray-800 bg-white border-[1.5px] border-slate-200 cursor-default transition-all duration-250 hover:bg-[#e85d04] hover:text-white hover:border-[#e85d04] hover:shadow-[0_8px_20px_-6px_rgba(232,93,4,0.4)] opacity-0 translate-y-2.5 scale-95 animate-[tagIn_0.45s_cubic-bezier(0.22,1,0.36,1)_forwards]"
              style={{ animationDelay: `${0.7 + i * 0.06}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Keyframes (injected once) */}
      <style>{`
        @keyframes sectionIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes imageIn {
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes tagIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}

export default CSRPartnershipSection;
