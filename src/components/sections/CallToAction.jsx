import React from "react";
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-12 md:px-12 md:py-16 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to launch your product in style?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed">
          Take your audio experience to the next level with our advanced wireless headphones. Whether you’re working, traveling, or relaxing, enjoy unmatched sound quality anytime, anywhere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100 cursor-pointer">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 cursor-pointer">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
