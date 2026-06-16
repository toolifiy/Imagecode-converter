import React from 'react';
import { Sparkles, Cpu, Layers, Image, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import AdsterraBanner from '../components/AdsterraBanner';

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
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
          <span className="text-[10px] bg-blue-50 text-blue-700 font-extrabold px-3 py-1 rounded-full border border-blue-100 tracking-wider uppercase">
            ESTABLISHED 2026
          </span>
        </div>
      </div>

      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Sparkles className="w-5.5 h-5.5" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">About ImagePixel</h1>
        </div>
        <p className="text-slate-500 font-medium text-sm max-w-2xl leading-relaxed">
          The global digital revolution has compromised visual purity. We are reclaiming authentic raw-byte integrity, one alphanumeric packet at a time.
        </p>
      </header>

      {/* RICH CONTENT (500+ Words) */}
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed max-w-4xl">
        
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-4.5 h-4.5 text-blue-600" />
            1. The Core Crisis of Digital Compression
          </h3>
          <p>
            In the modern hyper-connected landscape, trillions of visual assets—ranging from professional high-resolution design mocks, legal document screenshots, sensitive signatures, and artistic photographic masterpieces—are shared every second across public communication channels. However, there is a devious, silent compromise taking place. Messenger platforms like WhatsApp, Telegram, Slack, and social channels like Instagram, Facebook, and Twitter employ extremely aggressive, destructive, and lossy compression protocols. 
          </p>
          <p>
            These platforms are designed to prioritize server bandwidth and storage minimization above all else. To achieve this, their algorithms actively strip invaluable color definitions, reduce pixel-level dimensions, throw away master metadata coordinates, and compress color channels using lossy chromatic subsampling. The final file you receive is but a shadow of the original creation—washed out, pixelated, blurry, and structurally corrupted.
          </p>
        </section>

        {/* Mid section banner ad 1 */}
        <AdsterraBanner id="about-mid-1" format="responsive-728-320" />

        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4.5 h-4.5 text-blue-600" />
            2. The Birth of the Alphanumeric Preservation Engine
          </h3>
          <p>
            ImagePixel was built from the ground up as a defiant technical response to this lossy compression menace. We believe that visual creators, designers, and general users deserve absolute digital parity—your images should remain 100% bit-for-bit identical to how they were generated inside your terminal, computer, or camera sensor. 
          </p>
          <p>
            Our core architecture utilizes the **Base64 Lossless Byte Mapping Wrapper Protocol**. When you drop an image file into the selective drag-and-drop terminal, our machine works entirely inside your client-side browser's secure javascript environment. We read the raw file buffer as an uninterrupted stream of binary data. We then cleanly package this stream alongside vital structural parameters including the exact file name, the official file mime-type, physical length, and compression-free byte markers. This whole package compiles into a completely portable, high-fidelity alphanumeric sequence.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
            3. Pure Locally Executed Cryptographic Trust
          </h3>
          <p>
            Unlike typical cloud utilities that require you to upload your sensitive creative files to remote, third-party database servers—where they can be scanned, indexed, and stored indefinitely—ImagePixel enforces a strict, uncompromising zero-data philosophy. We do not maintain any storage arrays, cloud databases, or backend server uploads. The complex cryptographic translation of visual pixels into code format executes 100% locally within your browser sandbox.
          </p>
          <p>
            By translating your pictures into portable character packets, we empower you to bypass messenger compression. You can copy the code, save it inside plain text files, send it via standard email, or archive it inside raw text backups. When you or your colleague return to ImagePixel and paste that alphanumeric stream into our Re-creator console, the local engine matches the byte patterns to render the pristine, bitwise-matched original master copy without any decay.
          </p>
        </section>

        {/* Mid section banner ad 2 */}
        <AdsterraBanner id="about-mid-2" format="responsive-728-320" />

        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Zap className="w-4.5 h-4.5 text-blue-600" />
            4. Designing for Longevity & Archiving
          </h3>
          <p>
            As screens evolve into high-fidelity spatial displays and ultra-dense micro-LED layouts, any visual artifact or pixelation becomes starkly visible. Compressive degradations that seemed minor on legacy layouts look disastrous on professional displays. By standardizing your critical visual asset transfers through direct numeric stream preservation, you future-proof your graphics.
          </p>
          <p>
            Our open-source rendering algorithms are built on top of standardized, industry-wide HTML5 Canvas data streams and base64 translation routines. Because we do not rely on proprietary file structures, your compiled alphanumeric strings remain permanently readable and restorable by any standard web system. ImagePixel is not just a utility—it is a long-term bit-level storage standard for the creative community.
          </p>
        </section>

      </div>
    </motion.div>
  );
}
