import React from "react";
import { motion } from "framer-motion";
import headPhone from "../../assets/headphone.png";

import {
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

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

const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-hidden ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 ">
        <div className="grid items-center gap-12 lg:grid-cols-2 ">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              New Arrival 2026 Collection
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Premium Wireless
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Headphones for Modern Life
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
             Experience the freedom of wireless sound with JoySound headphones. Enjoy crystal-clear audio, deep bass, and all-day comfort wherever you go. Elevate your music, calls, and entertainment with style and innovation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-3 py-2 rounded-full shadow-xl shadow-purple-400/30 cursor-pointer hover:opacity-80">
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-2 px-3 py-2 rounded-full shadow-xl shadow-purple-400/30 cursor-pointer hover:opacity-80   border-4 border-blue-200 bg-clip-border ">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-indigo-600" /> Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" /> Secure
                Checkout
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" /> 4.9/5
                Rating
              </div>
            </motion.div>
          </motion.div>

          <motion.div  variants={fadeUp}>
            <motion.div
              animate={{ y: [0, -40, 0] }}
              transition={{ duration: 7, repeat: Infinity,  }}
            >
              <img src={headPhone} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
