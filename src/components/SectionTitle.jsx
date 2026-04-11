import { Sparkles } from 'lucide-react';
import React from 'react';

const SectionTitle = ({ badge, title, subtitle }) => {
    return (
       <div className="max-w-3xl mx-auto text-center mb-12 px-4">
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
        <Sparkles className="w-4 h-4 text-indigo-600" />
        {badge}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">{subtitle}</p>
    </div>
    );
};

export default SectionTitle;