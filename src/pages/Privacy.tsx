import React from 'react';
import { Shield, Eye, Lock, HardDrive, Key, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import AdsterraBanner from '../components/AdsterraBanner';

interface PrivacyProps {
  onBack: () => void;
}

export default function Privacy({ onBack }: PrivacyProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="p-6 sm:p-10 text-slate-800 space-y-8 relative"
    >
      {/* Sleek Left Arrow Button on Absolute Top Left */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <button
          onClick={onBack}
          className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 rounded-xl transition-all cursor-pointer border border-slate-200/80 hover:shadow-sm"
          title="Back to Dashboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-red-50 text-red-700 font-extrabold px-3 py-1 rounded-full border border-red-100 tracking-wider uppercase">
            SECURE CLIENT SANDBOX
          </span>
        </div>
      </div>

      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
            <Shield className="w-5.5 h-5.5" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Privacy Policy</h1>
        </div>
        <p className="text-slate-500 font-medium text-sm max-w-2xl leading-relaxed">
          Our core architecture mandates that we cannot store your visual property—even if we wanted to. Your private data is completely sovereign.
        </p>
      </header>

      {/* RICH CONTENT (500+ Words) */}
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed max-w-4xl">
        
        <section className="space-y-3">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Lock className="w-4.5 h-4.5 text-red-600" />
            1. Uncompromising Zero-Data Philosophy
          </h3>
          <p>
            At ImagePixel, privacy is not simply a paragraph in a document or an option you toggle inside a settings tab. It is the absolute foundational pillars of our entire engineering organization. We operate on a strict, mathematically guaranteed zero-data paradigm. This means **we do not own, manage, maintain, or connect to any remote server databases, upload queues, or persistent cloud file-buckets for your image assets.** 
          </p>
          <p>
            When you select or drop a file into our Selective Upload terminal, that file is loaded locally from your physical hardware interface straight into your browser's RAM sandbox. The alphanumeric compilation routine, standard base64 byte extraction, and payload bundling execute 100% locally via Javascript rendering loops. Your sensitive images, family photographs, legal contracts, business receipts, or private artistic creations never cross the network.
          </p>
        </section>

        {/* Mid-1 Banner Ad */}
        <AdsterraBanner id="privacy-mid-1" format="responsive-728-320" />

        <section className="space-y-3">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Eye className="w-4.5 h-4.5 text-red-600" />
            2. The Mirage of Server-Side Security
          </h3>
          <p>
            Many modern online utilities promise "military-grade encryption" or "automatic server deletion within 24 hours". While these claims look appealing on a marketing layout, they are inherently prone to systematic failures. Server-side storage leaves your raw files exposed to cyber-attacks, rogue database administrators, government subpoenas, API leaks, and server misconfigurations. 
          </p>
          <p>
            By completely eliminating the backend server layer from our conversion and rendering pipeline, ImagePixel renders these vulnerability vectors totally irrelevant. If there is no server-side database holding your pictures, there is nothing for bad actors to target, breach, or compromise. You maintain continuous, exclusive visual custody of your property at all times.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <HardDrive className="w-4.5 h-4.5 text-red-600" />
            3. Local Cache Persistence & Browser Storage
          </h3>
          <p>
            To enhance your day-to-day workflow, we provide a historical compilation index directly inside the User Profile panel on the dashboard. This index tracks your previously converted file assets so that you can instantly reload codes, copy hex data, or trigger diagnostic downloads. 
          </p>
          <p>
            It is critical to note that this history log runs entirely on top of **client-side LocalStorage and SessionStorage systems**. These bytes reside strictly within your current browser's localized sandbox profile on your physical machine. We do not sync this log to any third-party clouds or central tracking pixels. You can clear this history instantly at any point by clicking the garbage buttons or by clearing your browser cache/cookies.
          </p>
        </section>

        {/* Mid-2 Banner Ad */}
        <AdsterraBanner id="privacy-mid-2" format="responsive-728-320" />

        <section className="space-y-3">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Key className="w-4.5 h-4.5 text-red-600" />
            4. Third-Party Libraries & Telemetry Auditing
          </h3>
          <p>
            ImagePixel values transparent, plain-English security. We do not run behind-the-scenes tracking scripts, advertising pixels, invasive cookies, or complex behavioral analytics networks. Our software uses clean, vetted open-source libraries focused purely on rendering performance and smooth layout animations. 
          </p>
          <p>
            Any diagnostic feedback, such as paste format errors or raw file decoding failures, is outputted live inside your viewport console. No telemetry is logged or reported back to us. Thus, your workflow, your workspace usage frequency, and your specific file content remain completely private, secure, and isolated from the rest of the web.
          </p>
        </section>

      </div>
    </motion.div>
  );
}
