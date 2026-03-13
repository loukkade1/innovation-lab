"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "We used to drive out twice a day to check water levels in our irrigation tanks. Now we get alerts on our phones. It has saved us dozens of hours a month and we have never had a dry field since.",
    name: "Somchai T.",
    role: "Rice Farmer",
    initials: "ST",
  },
  {
    quote:
      "The team understood our needs from the first site visit. They did not just sell us sensors — they designed a complete monitoring system that fits exactly how we farm. The dashboard is incredibly easy to use.",
    name: "Arisa P.",
    role: "Estate Manager",
    initials: "AP",
  },
  {
    quote:
      "As someone new to smart farming technology, I was worried about complexity. Innovation Lab made it simple. The sensor installation was seamless and the support has been outstanding.",
    name: "Prasert K.",
    role: "Agricultural Cooperative Director",
    initials: "PK",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
      ref={ref}
    >
      {/* Diagonal geometric bg */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-full w-[50%] skew-x-[12deg] bg-gradient-to-b from-green-600/5 to-transparent" />
        <div className="absolute -right-32 bottom-0 h-full w-[40%] skew-x-[-12deg] bg-gradient-to-t from-lime-400/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-green-400 uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by farmers
            <br />
            who see the difference.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm"
            >
              {/* Quote mark */}
              <svg
                className="absolute right-6 top-6 h-8 w-8 text-slate-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-sm leading-relaxed text-slate-400">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-lime-400">
                  <span className="text-xs font-bold text-white">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-slate-800 pt-12"
        >
          {[
            "Certified Practitioners",
            "Science-Based Methods",
            "Measurable Results",
            "Ongoing Support",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <svg
                className="h-4 w-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
