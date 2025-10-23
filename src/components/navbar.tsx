"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { navLinks } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [0, 200], [0, 0.85]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        style={{
          opacity: overlayOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-white/80 shadow-lg backdrop-blur-xl"
      />
      <nav
        className={clsx(
          "relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 transition-all",
          isScrolled ? "py-3" : "py-6",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-md">
            <Image
              src="/hemat/logo.png"
              alt="hemat.ai"
              width={40}
              height={40}
              className="h-8 w-8 object-contain drop-shadow"
              priority
            />
          </div>
          <span className="hidden text-lg font-semibold lg:inline-flex">hemat.ai</span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors duration-200 hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#pricing"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-dark/20 hover:text-brand-dark md:inline-flex"
          >
            Harga Paket
          </Link>
          <Link
            href="https://hemat.ai/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-brand-dark px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand"
          >
            Masuk / Daftar
          </Link>
        </div>
      </nav>
    </header>
  );
}
