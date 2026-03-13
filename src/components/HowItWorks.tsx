"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Assess & Understand",
    description:
      "We visit your land, conduct soil tests, assess current conditions, and listen to your goals. We map out exactly what needs to be monitored, improved, or maintained.",
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "Our team designs a custom solution tailored to your soil, climate, and objectives. We select the right sensors, monitoring systems, and regenerative strategies for your specific conditions.",
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
          d="M11.42 15.17l-5.645 3.18a.75.75 0 01-1.12-.86l1.49-6.573L1.91 7.022a.75.75 0 01.428-1.317l6.633-.615L11.766.98a.75.75 0 011.468 0l2.795 5.11 6.633.615a.75.75 0 01.428 1.317l-4.235 3.895 1.49 6.573a.75.75 0 01-1.12.86l-5.645-3.18a.75.75 0 00-.822 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Implement & Deploy",
    description:
      "We handle everything from hardware installation to system configuration. Sensor deployment, monitoring setup, and land management implementation. We set it up and make sure it works.",
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
          d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811V8.69zM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061a1.125 1.125 0 01-1.683-.977V8.69z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Monitor & Grow",
    description:
      "Your system goes live with real-time monitoring and adaptive management. We provide ongoing support, seasonal check-ins, and adjustment recommendations as your land transforms.",
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-green-600 uppercase">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From assessment to thriving land
            <br />
            in four phases.
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-green-200 via-green-400 to-green-200 lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className={`relative lg:flex lg:items-center lg:gap-16 ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse"
                } ${i > 0 ? "lg:mt-0" : ""}`}
                style={{ marginTop: i > 0 ? "0px" : undefined }}
              >
                {/* Timeline node */}
                <div className="absolute left-8 top-0 hidden -translate-x-1/2 lg:left-1/2 lg:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-green-600 text-sm font-bold text-white shadow-lg shadow-green-600/25">
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`lg:w-1/2 ${
                    i % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg ${
                      i % 2 === 0 ? "" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 ${
                        i % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider lg:hidden">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p
                      className={`mt-4 text-sm leading-relaxed text-slate-500 ${
                        i % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
