import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

const QuestionSection = () => {
  const faqs = [
    {
      q: "What makes your wireless headphones different from others?",
      a: "Our wireless headphones are designed with premium sound quality, deep bass, and crystal-clear audio. We focus on comfort, durability, and modern design to give you the best listening experience.",
    },
    {
      q: "How long does the battery last?",
      a: "Our headphones provide up to 20–30 hours of playback time on a single charge, depending on usage.",
    },
    {
      q: "How long does it take to fully charge?",
      a: "It usually takes around 1.5 to 2 hours to fully charge the headphones.",
    },
    {
      q: "Are these headphones comfortable for long use?",
      a: "Yes! Our headphones are built with soft ear cushions and an adjustable headband, making them perfect for long listening sessions.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Everything you may want to know"
          subtitle="A user-friendly FAQ section that helps reduce confusion and improve trust before purchase."
        />

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 flex items-center justify-between gap-4">
                {item.q}
                <span className="text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-7">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
