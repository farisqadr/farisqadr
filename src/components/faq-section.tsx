"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/content";
import { SectionHeader } from "@/components/section-header";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-surface py-24">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Yang sering ditanyain"
          description="Masih bingung? Kami rangkum pertanyaan populer terkait penggunaan hemat.ai."
          align="center"
          className="mb-16"
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-800"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="text-2xl text-slate-400 transition-transform">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium text-slate-500">Masih ada pertanyaan?</p>
          <a
            href="https://hemat.ai/contact-us"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm ring-1 ring-brand-dark/20 transition hover:bg-brand-dark hover:text-white"
          >
            Hubungi tim support →
          </a>
        </div>
      </div>
    </section>
  );
}
