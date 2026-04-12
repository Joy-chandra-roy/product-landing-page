import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "../SectionTitle";

const PricingSection = () => {
  const pricing = [
    {
      title: "Standard",
      price: "$79",
      desc: "Perfect for everyday users",
      features: [
        "Premium sound",
        "30 hours battery",
        "Fast charging",
        "1 year warranty",
      ],
      popular: false,
    },
    {
      title: "Pro Edition",
      price: "$129",
      desc: "Best choice for power users",
      features: [
        "Noise isolation",
        "40 hours battery",
        "Bluetooth 5.3",
        "Premium case included",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Simple Pricing"
          title="Choose the package that fits your style"
          subtitle="Clean pricing cards designed to make product comparisons easier and more user-friendly."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {pricing.map((plan) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-3xl p-8 shadow-lg ${
                plan.popular
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900 ring-1 ring-slate-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p
                className={`mt-2 text-sm ${plan.popular ? "text-slate-300" : "text-slate-500"}`}
              >
                {plan.desc}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`${plan.popular ? "text-slate-300" : "text-slate-500"}`}
                >
                  / one time
                </span>
              </div>
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${plan.popular ? "bg-white/10" : "bg-emerald-100"}`}
                    >
                      <Check
                        className={`w-4 h-4 ${plan.popular ? "text-white" : "text-emerald-600"}`}
                      />
                    </div>
                    <span
                      className={
                        plan.popular ? "text-slate-200" : "text-slate-700"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className={`mt-8 w-full rounded-full px-6 py-4 text-sm font-semibold transition cursor-pointer ${
                  plan.popular
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Buy {plan.title}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
