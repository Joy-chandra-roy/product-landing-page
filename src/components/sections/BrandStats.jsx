import React from "react";
import { motion } from "framer-motion";

const BrandStats = () => {
  const brandItems = [
    ["50K+", "Happy Customers"],
    ["4.9/5", "Customer Rating"],
    ["40 Hours", "Battery Backup"],
    ["1 Year", "Warranty Support"],
  ];

  return (
    <section className="py-8 md:py-12 border-y border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {brandItems.map(([value, label]) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                {value}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStats;
