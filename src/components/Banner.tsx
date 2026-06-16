import React from 'react';
import { Layers, ShieldCheck, Award } from 'lucide-react';

interface BannerProps {}

export default function Banner({}: BannerProps) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-950 border-b border-blue-600/30 relative overflow-hidden shrink-0 shadow-sm select-none">
      {/* Premium subtle abstract overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 relative z-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Banner text inside premium extra compact container */}
          <div className="flex items-center gap-3">
            <div className="relative p-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white flex items-center justify-center">
              <Layers className="w-5 h-5 text-cyan-200" />
            </div>
            
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-black tracking-tight text-white font-sans">
                Image<span className="text-cyan-300">Pixel</span>
              </h1>
              <span className="hidden sm:inline-block h-4 w-[1px] bg-white/20"></span>
              <p className="hidden sm:inline-block text-blue-100/75 text-xs font-semibold">
                Professional Zero Quality Loss Code Translator × Pixel Integrity Retainer
              </p>
            </div>
          </div>

          {/* Compact Right Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <Award className="w-3 h-3 text-emerald-300" />
              <span>100% Lossless</span>
            </span>
            <span className="bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/15">
              v1.4 Premium
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

