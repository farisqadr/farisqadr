"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { audiences } from "@/data/content";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="noise-bg absolute inset-0 -z-10 opacity-40" />
      <div className="container relative">
        <motion.div
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-600 shadow-sm backdrop-blur">
              Belanja impulsif terus? 🛒
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Chat, foto, voice note. hemat.ai yang catat semua transaksi kamu.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Capek ngatur keuangan sendiri? Cukup kirim chat, foto struk, atau voice
              note. hemat.ai langsung catat otomatis dan rapihin laporan keuangan kamu.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://hemat.ai/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-brand"
              >
                Coba Gratis 7 Hari
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-dark/40 hover:text-brand-dark"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-500 lg:justify-start">
              {audiences.map((audience) => (
                <span
                  key={audience.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 backdrop-blur"
                >
                  <span aria-hidden className="text-lg">
                    {audience.highlight}
                  </span>
                  {audience.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="gradient-border"
            >
              <div className="card-surface relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 blur-2xl" />
                <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-3xl" />
                <div className="relative space-y-5 p-8">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-sm">07:28</span>
                    <span className="text-xl">🐱</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                      🐾
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600">
                        Keluarga Bahagia
                      </p>
                      <p className="text-xs text-slate-400">Group Keluarga</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <ChatBubble
                      variant="incoming"
                      text="👋 Hai kak, selamat datang di hemat.ai! Aku siap bantu catetin."
                    />
                    <ChatBubble variant="outgoing" text="listrik 450rb" />
                    <ChatBubble
                      variant="incoming"
                      text="Baik, aku catat transaksinya ya. ⚡ Tagihan Listrik: Rp 450.000"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 right-0 w-40 rounded-3xl border border-slate-100 bg-white/90 p-4 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14">
                  <Image
                    src="/hemat/landing/hematai_cat_sleeping.png"
                    alt="hemat.ai mascot"
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700">hemat.ai</p>
                  <p className="text-xs text-emerald-600">Auto catat transaksi ✨</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type ChatBubbleProps = {
  variant: "incoming" | "outgoing";
  text: string;
};

function ChatBubble({ variant, text }: ChatBubbleProps) {
  const isIncoming = variant === "incoming";
  return (
    <div
      className={clsx(
        "w-fit max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm",
        isIncoming ? "bg-white/90 text-slate-600" : "ml-auto bg-emerald-500 text-white",
      )}
    >
      {text}
    </div>
  );
}
