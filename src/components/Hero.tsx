"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      {/* Diagonal geometric background */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-green-950" />

        {/* Diagonal slashes */}
        <div className="absolute -right-32 top-0 h-full w-[60%] skew-x-[-12deg] bg-gradient-to-b from-green-600/10 to-transparent" />
        <div className="absolute -right-48 top-0 h-full w-[40%] skew-x-[-12deg] bg-gradient-to-b from-lime-400/5 to-transparent" />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[20%] h-32 w-32 rounded-2xl border border-green-500/20 bg-green-500/5 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[35%] top-[55%] h-20 w-20 rounded-xl border border-lime-400/20 bg-lime-400/5 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [-10, 25, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[65%] h-16 w-16 rounded-lg border border-amber-400/20 bg-amber-400/5 backdrop-blur-sm"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-green-300 uppercase">
                  Smart Technology for Regenerative Agriculture
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Restore. Regenerate.
              <br />
              <span className="bg-gradient-to-r from-green-400 via-lime-400 to-amber-400 bg-clip-text text-transparent">
                Grow the Future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:text-xl"
            >
              We design and deploy smart IoT solutions for regenerative
              agriculture. From water level sensors to farm monitoring systems,
              we help farmers and land managers restore soil health and work
              smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-500 hover:shadow-xl hover:shadow-green-600/25"
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white"
              >
                Request a Consultation
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 flex gap-10 border-t border-slate-800 pt-8"
            >
              {[
                { value: "200+", label: "Hectares Monitored" },
                { value: "15+", label: "Projects Completed" },
                { value: "40%", label: "Efficiency Gain" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex-1 lg:mt-0"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main card */}
              <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm">
                {/* Farm Monitor mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/20">
                        <svg
                          className="h-5 w-5 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21c0 0-8-4-8-11a8 8 0 0116 0c0 7-8 11-8 11z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21V10"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Farm Monitor
                        </p>
                        <p className="text-xs text-slate-500">Live data</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-medium text-green-400">
                        Active
                      </span>
                    </span>
                  </div>

                  {/* Bar chart mockup */}
                  <div className="flex items-end gap-1.5 rounded-xl bg-slate-900/50 p-4 h-36">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 68].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-green-600 to-lime-400"
                        />
                      )
                    )}
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        label: "Soil Moisture",
                        value: "72%",
                        color: "text-green-400",
                      },
                      {
                        label: "Temperature",
                        value: "24.5°C",
                        color: "text-lime-400",
                      },
                      {
                        label: "Water Level",
                        value: "85%",
                        color: "text-amber-400",
                      },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg bg-slate-900/50 p-3"
                      >
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {metric.label}
                        </p>
                        <p
                          className={`mt-1 text-lg font-bold ${metric.color}`}
                        >
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-12 rounded-xl border border-slate-700/50 bg-slate-800/90 p-3 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20">
                    <svg
                      className="h-4 w-4 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Milestone Reached
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Cover crop established
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 60L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
