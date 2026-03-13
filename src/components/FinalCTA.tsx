"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-900">
        {/* Diagonal overlays */}
        <div className="absolute -right-24 top-0 h-full w-[50%] skew-x-[-12deg] bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute -left-24 bottom-0 h-full w-[40%] skew-x-[12deg] bg-gradient-to-t from-black/10 to-transparent" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[20%] top-[20%] h-24 w-24 rounded-2xl border border-white/10 bg-white/5"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[15%] bottom-[25%] h-16 w-16 rounded-xl border border-white/10 bg-white/5"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-100 uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 animate-pulse" />
            Ready to Get Started?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Let&apos;s restore your land
          <br />
          together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-green-100/80"
        >
          Whether you need a water level sensor, a full farm monitoring system,
          or regenerative agriculture consulting, we&apos;re here to help. Tell
          us about your land, and we&apos;ll show you what&apos;s possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:hello@innovationlab.io"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-green-700 transition-all hover:bg-green-50 hover:shadow-xl hover:shadow-black/10"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Start a Conversation
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            View Our Projects
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Small trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-xs text-green-200/50"
        >
          Free initial consultation. No commitment. We&apos;ll assess your needs
          and provide a clear, actionable proposal.
        </motion.p>
      </div>
    </section>
  );
}
