"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [background-size:24px_24px]" />
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.palette} text-xl`}
                >
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">{stat.title}</p>
                  <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
