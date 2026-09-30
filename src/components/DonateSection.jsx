import React from "react";
import UpiPaymentButton from "./UpiPaymentButton";
//faf7f2
const contactItems = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Address",
    value: "Anandapur, Kolkata — East Kolkata, West Bengal, India",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Established",
    value: "12 January 2007 — Swami Vivekananda Jayanti",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    label: "Registration Details",
    value: "Reg. No. SO250551  |  CSR Reg. CSR00056917",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "CSR & Partnerships",
    value:
      "Write to us via the contact details above — we respond within 48 hours",
  },
];
function DonateSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-20 overflow-hidden shadow-xl bg-[#faf8f5] opacity-0 translate-y-6 animate-[sectionIn_0.75s_cubic-bezier(0.22,1,0.36,1)_forwards]" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {/* ========== LEFT: Make a Difference ========== */}
        <div className="relative bg-[#000000] text-white p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row justify-between min-h-[420px] overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-white/15 pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute top-1/2 right-8 w-24 h-24 bg-white/5 pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#e85d04] opacity-0 translate-y-6 animate-[fadeUp_0.55s_0.15s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              Make a Difference
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl translate-y-4 animate-[fadeUp_0.6s_0.25s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              Every rupee reaches
              <br className="hidden sm:block" /> the ground.
            </h2>

            <p className="text-[16px] leading-relaxed text-amber-50 max-w-sm opacity-0 translate-y-3 animate-[fadeUp_0.55s_0.35s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              No administrative maze. Your contribution directly funds a child’s
              training session, a woman’s vocational kit, a health camp
              consultation, or a sapling in the ground.
            </p>
          </div>
          <UpiPaymentButton />
        </div>

        {/* ========== RIGHT: Get in Touch ========== */}
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-[#faf8f5]">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#e85d04] mb-3 opacity-0 translate-y-3 animate-[fadeUp_0.55s_0.2s_cubic-bezier(0.22,1,0.36,1)_forwards]">
            Get in Touch
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4 opacity-0 translate-y-4 animate-[fadeUp_0.6s_0.3s_cubic-bezier(0.22,1,0.36,1)_forwards]">
            Talk to us about partnerships, volunteering or donations.
          </h2>

          <p className="text-[15px] text-slate-600 leading-relaxed mb-8 max-w-md opacity-0 translate-y-3 animate-[fadeUp_0.55s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]">
            Whether you represent a company exploring CSR, an individual wanting
            to contribute, or a journalist covering social impact in Kolkata —
            we would love to hear from you.
          </p>

          <ul className="space-y-5">
            {contactItems.map((item, i) => (
              <li
                key={item.label}
                className="flex gap-4 group opacity-0 -translate-x-3 animate-[slideIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                style={{ animationDelay: `${0.5 + i * 0.08}s` }}
              >
                <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-orange-50 text-[#e85d04] flex items-center justify-center group-hover:bg-[#e85d04] group-hover:text-white transition-colors duration-250">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[14.5px] text-gray-800 leading-snug">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Keyframes */}
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
      `}</style>
    </section>
  );
}

export default DonateSection;
