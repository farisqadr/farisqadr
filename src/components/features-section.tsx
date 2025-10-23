"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { featureCards } from "@/data/content";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.08,
    },
  }),
};

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container">
        <SectionHeader
          eyebrow="FITUR UTAMA"
          title="Ngatur duit susah? hemat.ai catat otomatis dari chat, foto, atau VN"
          description="Semua transaksi langsung rapih. Kamu bisa fokus ke tujuan finansial sementara AI kami yang mencatat detailnya."
          align="left"
          className="mb-14"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-emerald-100/40 via-white/0 to-purple-100/30 opacity-70" />
              <div className="relative flex flex-col gap-6 p-8">
                <div
                  className={`relative rounded-2xl bg-gradient-to-br ${feature.accent} p-6 shadow-inner`}
                >
                  <div className="relative mx-auto h-28 w-28">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain drop-shadow-sm"
                      sizes="112px"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
