"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";
import { SectionHeader } from "@/components/section-header";

const transition = { duration: 0.7, ease: "easeInOut" };

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-24">
      <div className="container">
        <SectionHeader
          eyebrow="TESTIMONI"
          title="Kata mereka yang sudah pakai hemat.ai"
          description="Ribuan pengguna sudah hemat waktu dan uang dengan pencatatan otomatis hemat.ai."
          align="center"
          className="mb-16"
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-brand-surface p-10 shadow-inner">
            <AnimatePresence initial={false} mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={transition}
                className="space-y-6 text-center"
              >
                <p className="text-xl leading-relaxed text-slate-700 sm:text-2xl">
                  “{testimonials[index].quote}”
                </p>
                <footer className="space-y-1 text-sm font-medium text-slate-500">
                  <p className="text-base font-semibold text-slate-900">
                    {testimonials[index].name}
                  </p>
                  <p>{testimonials[index].role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between text-sm text-slate-500">
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-full border border-slate-200 px-4 py-2 font-semibold transition hover:border-brand-dark hover:text-brand-dark"
            >
              Sebelumnya
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-brand-dark" : "bg-slate-200"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full border border-slate-200 px-4 py-2 font-semibold transition hover:border-brand-dark hover:text-brand-dark"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
