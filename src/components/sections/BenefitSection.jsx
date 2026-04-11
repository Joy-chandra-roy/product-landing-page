import React from "react";
import { motion } from 'framer-motion';
import { Check } from "lucide-react";
import SectionTitle from "../SectionTitle";

const BenefitSection = () => {

const benefits = [
  "Premium lightweight design for long wear",
  "Quick charge support with Type-C charging",
  "Touch controls for calls, music, and voice assistant",
  "Comfortable ear cushions for daily use",
  "Perfect for work, travel, gaming, and workouts",
  "Modern responsive UI for product showcase",
];


  return (
    <section id="benefits" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <SectionTitle
          badge="Why Choose Us"
          title="  Built for performance, comfort, and premium user experience"
          subtitle="We deliver premium sound, modern design, and reliable performance for an exceptional listening experience."
        />

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 items-center"
          >
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-blue-500 ring-1 ">
              <p className="text-sm text-slate-500">Noise Control</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Adaptive Isolation
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Block distractions and stay focused during work or travel.
              </p>
            </div>
            <div className="rounded-3xl bg-purple-600 p-6 text-white shadow-lg">
              <p className="text-sm text-slate-300">Audio Quality</p>
              <h3 className="mt-2 text-2xl font-bold">Studio-Level Sound</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Balanced highs, rich mids, and deep bass for every genre.
              </p>
            </div>
            <div className="rounded-3xl bg-indigo-600 p-6 text-white shadow-lg">
              <p className="text-sm text-indigo-100">Comfort</p>
              <h3 className="mt-2 text-2xl font-bold">All-Day Wear</h3>
              <p className="mt-3 text-sm leading-6 text-indigo-100">
                Soft ear cups and ergonomic fit built for long listening
                sessions.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-blue-500 ring-1">
              <p className="text-sm text-slate-500">Connectivity</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Fast Pairing
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Seamless switching across phone, laptop, and tablet devices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
