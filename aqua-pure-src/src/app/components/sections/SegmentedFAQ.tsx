"use client";

import { useState, useCallback } from "react";

type FaqItem = { id: string; question: string; answer: string };
type TabKey = "domestic" | "industrial";

const DOMESTIC_FAQS: FaqItem[] = [
  {
    id: "dq1",
    question: "How often should I replace my home RO filter cartridges?",
    answer:
      "Sediment and carbon pre-filters typically need replacement every 6–8 months; the membrane itself usually lasts 2–3 years depending on source water quality.",
  },
  {
    id: "dq2",
    question: "Is RO-treated water safe for daily drinking?",
    answer:
      "Yes. RO removes dissolved solids, bacteria, and most contaminants, producing water that meets standard drinking water safety guidelines.",
  },
  {
    id: "dq3",
    question: "How long does home installation take?",
    answer:
      "Most residential installations are completed within 2–3 hours by a certified technician, including a water quality test before and after.",
  },
  {
    id: "dq4",
    question: "What warranty comes with a domestic RO system?",
    answer:
      "Standard systems carry a manufacturer warranty on the membrane and pump; exact terms are confirmed at the time of quotation.",
  },
];

const INDUSTRIAL_FAQS: FaqItem[] = [
  {
    id: "iq1",
    question: "Can you engineer a plant to a specific recovery rate requirement?",
    answer:
      "Yes. Plant design, membrane staging, and pump selection are specified per your source water analysis and target recovery/TDS requirements.",
  },
  {
    id: "iq2",
    question: "Do you provide water quality compliance documentation?",
    answer:
      "We provide lab test reports and system specification sheets suitable for internal compliance and audit documentation.",
  },
  {
    id: "iq3",
    question: "What is your emergency response time for industrial breakdowns?",
    answer:
      "AMC clients receive priority response per their contract's SLA tier; response commitments are confirmed in the AMC agreement.",
  },
  {
    id: "iq4",
    question: "Can existing industrial plants be retrofitted or expanded?",
    answer:
      "Yes, we assess existing infrastructure and can expand capacity or upgrade components without a full system replacement in most cases.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerId = `${item.id}-answer`;

  return (
    <div className="border-b border-navy/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-semibold text-navy transition-all duration-300 ease-in-out hover:text-cyan"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span>{item.question}</span>
        <span
          aria-hidden="true"
          className={`text-xl leading-none transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </button>
      <div
        id={answerId}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="pb-4 text-sm leading-6 text-navy/70">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function SegmentedFAQ() {
  const [activeTab, setActiveTab] = useState<TabKey>("domestic");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const visibleFaqs = activeTab === "domestic" ? DOMESTIC_FAQS : INDUSTRIAL_FAQS;

  const handleTabChange = useCallback((tab: TabKey) => {
    setActiveTab(tab);
    setOpenFaqId(null);
  }, []);

  const handleToggle = useCallback((id: string) => {
    setOpenFaqId((currentId) => (currentId === id ? null : id));
  }, []);

  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          Common questions
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          Answers, by audience.
        </h2>

        <div className="mt-8 flex gap-2 border-b border-navy/10">
          <button
            type="button"
            onClick={() => handleTabChange("domestic")}
            className={`cursor-pointer border-b-2 px-4 py-3 text-sm font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "domestic"
                ? "border-cyan text-navy"
                : "border-transparent text-navy/40"
            }`}
          >
            Domestic Safety FAQs
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("industrial")}
            className={`cursor-pointer border-b-2 px-4 py-3 text-sm font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "industrial"
                ? "border-cyan text-navy"
                : "border-transparent text-navy/40"
            }`}
          >
            Industrial Compliance FAQs
          </button>
        </div>

        <div className="mt-2">
          {visibleFaqs.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openFaqId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
