import React from "react";
import SectionTitle from "../SectionTitle";
import {
  BatteryCharging,
  Bluetooth,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      icon: <BatteryCharging className="w-6 h-6" />,
      title: "40 Hours Battery",
      desc: "Enjoy all-day power with ultra-efficient battery performance for work, music, and travel.",
    },
    {
      icon: <Bluetooth className="w-6 h-6" />,
      title: "Bluetooth 5.3",
      desc: "Fast, stable, and seamless wireless connection with low latency and premium audio quality.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Immersive Sound",
      desc: "Deep bass, crystal-clear vocals, and noise isolation for an elevated listening experience.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "1 Year Warranty",
      desc: "Built to last and backed by a reliable warranty for complete peace of mind.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Core Features"
          title="Everything you need in one premium product"
          subtitle="Discover cutting-edge audio technology designed to deliver crystal-clear sound, deep bass, and ultimate comfort for every moment."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="rounded-3xl border border-blue-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
