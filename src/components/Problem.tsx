"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Wasted Hours on Manual Monitoring",
    description:
      "Driving out to check water levels, soil conditions, or equipment status manually costs hours every week that could be spent on what actually matters.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Costly Surprises & Late Alerts",
    description:
      "By the time you notice a problem — dry soil, flooding, equipment failure — the damage is done. Reactive management costs money and yields.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
        />
      </svg>
    ),
    title: "Technology That Doesn't Fit",
    description:
      "Off-the-shelf solutions are too complex, too expensive, or not designed for agricultural environments. You need technology built for real-world farm conditions.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      {/* Subtle diagonal accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 skew-x-[-6deg] bg-gradient-to-b from-slate-50 to-transparent opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold tracking-wide text-green-600 uppercase">
            The Challenge
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our land is too valuable
            <br />
            for guesswork.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Whether you manage a farm, oversee a land restoration project, or
            want to transition to sustainable practices, outdated methods are
            holding you back.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
            >
              {/* Geometric corner accent */}
              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-red-50 transition-colors group-hover:bg-red-100" />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                {problem.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
