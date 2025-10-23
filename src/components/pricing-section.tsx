"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { comparisonTable, pricingPlans } from "@/data/content";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-brand-surface py-24">
      <div className="container">
        <SectionHeader
          eyebrow="PAKET HARGA"
          title="Paket terbaik untuk kebutuhan keuanganmu"
          description="Mulai gratis, upgrade kapan pun. Semua paket sudah termasuk pencatatan otomatis, dashboard analytics, dan dukungan prioritas."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className={clsx(
                "relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm",
                plan.popularLabel ? "ring-2 ring-brand-dark/70" : "",
              )}
            >
              {plan.popularLabel ? (
                <span className="absolute left-6 top-6 inline-flex rounded-full bg-brand-dark px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {plan.popularLabel}
                </span>
              ) : null}
              <div className="mt-4 flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
                  <p className="text-sm font-medium text-emerald-600">{plan.slogan}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                {plan.subheading}
              </p>
              <div className="mt-6 space-y-2 text-sm text-slate-600">
                {plan.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="https://hemat.ai/login"
                  target="_blank"
                  rel="noreferrer"
                  className={clsx(
                    "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
                    plan.name === "Gratis"
                      ? "border border-slate-200 text-slate-700 hover:border-brand-dark hover:text-brand-dark"
                      : "bg-brand-dark text-white shadow-lg shadow-emerald-500/30 hover:bg-brand",
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-3xl border border-slate-100 bg-white"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500">
                  {comparisonTable.headers.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-4 font-semibold uppercase tracking-widest"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {comparisonTable.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-sm font-medium">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm text-slate-500">
            📌 Catatan: 1 chat bisa mengandung banyak transaksi. Contoh: "Beli baju 150rb,
            sepatu 300rb, tas 250rb" → dihitung satu kuota chat.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
