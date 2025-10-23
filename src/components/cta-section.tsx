"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-surface py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/70 via-white to-emerald-50" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-white/80 p-10 text-center shadow-xl backdrop-blur"
        >
          <div className="absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-emerald-400/30 blur-3xl" />
          <div className="absolute -top-28 left-0 h-40 w-40 rounded-full bg-lime-300/40 blur-3xl" />
          <div className="relative space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Coba Gratis
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Mulai hemat tanpa ribet!
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Chat, foto struk, atau voice note? hemat.ai langsung catat semuanya. Rasakan
              pencatatan keuangan otomatis hanya dalam hitungan detik.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://hemat.ai/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-brand"
              >
                Coba Gratis 7 Hari
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-dark hover:text-brand-dark"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
