"use client";

import { useState } from "react";
import { guideSections, guideIntro } from "@/data/guia";

const iconMap: Record<string, string> = {
  wave: "\u{1F44B}",
  home: "\u{1F3E0}",
  star: "\u2B50",
  lightbulb: "\u{1F4A1}",
  compass: "\u{1F9ED}",
  alert: "\u{1F6A8}",
};

export default function GuideContent() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    bienvenida: true,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="label mb-3">{guideIntro.subtitle}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            {guideIntro.title}
          </h2>
          <p className="text-muted text-base leading-loose">
            {guideIntro.description}
          </p>
        </div>

        {/* Accordion sections */}
        <div className="space-y-4">
          {guideSections.map((section) => {
            const isOpen = openSections[section.id] ?? false;
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl shadow-sm border border-sand/15 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">
                      {iconMap[section.icon] || section.icon}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy">
                      {section.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-navy/40 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 ${
                    isOpen
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="px-6 pb-6 space-y-5">
                    {section.items.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-navy text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-navy/70 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
