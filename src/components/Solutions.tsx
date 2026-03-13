"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
        />
      </svg>
    ),
    title: "IoT Monitoring & Sensors",
    description:
      "Custom-built sensor systems for water levels, soil moisture, and environmental monitoring. Get real-time data and automated alerts designed specifically for agricultural environments.",
    features: [
      "Water level monitoring",
      "Soil moisture sensors",
      "Automated alert systems",
    ],
    gradient: "from-green-500 to-lime-400",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
        />
      </svg>
    ),
    title: "Agroforestry & Land Design",
    description:
      "Strategic integration of trees, crops, and livestock systems. We design multi-layered productive landscapes that maximize biodiversity, water retention, and long-term profitability.",
    features: [
      "Silvopasture design",
      "Food forest planning",
      "Water management systems",
    ],
    gradient: "from-teal-500 to-teal-400",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
    title: "Consulting & Implementation",
    description:
      "End-to-end project management from land assessment to implementation. We provide hands-on consulting, training, and ongoing support to ensure your regenerative transition succeeds.",
    features: [
      "Land assessment & planning",
      "Implementation oversight",
      "Progress monitoring & reporting",
    ],
    gradient: "from-amber-500 to-amber-400",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-slate-50" ref={ref}>
      {/* Diagonal top */}
      <div className="absolute -top-px left-0 right-0">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 0L1440 40H0V0Z" fill="white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-green-600 uppercase">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Regenerative solutions
            <br />
            tailored to your land.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Comprehensive smart agriculture services designed for real-world
            farming environments and measurable results.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:shadow-slate-200/50"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 bg-gradient-to-r ${solution.gradient}`}
              />

              <div className="p-8">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${solution.bgColor} ${solution.textColor}`}
                >
                  {solution.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {solution.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <svg
                        className={`h-4 w-4 flex-shrink-0 ${solution.textColor}`}
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Geometric corner decoration */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rotate-12 rounded-2xl bg-slate-50 opacity-0 transition-all group-hover:opacity-100 group-hover:rotate-6" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 40L1440 0V40H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
