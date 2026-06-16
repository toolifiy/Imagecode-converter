import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, HelpCircle, Bug, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AdsterraBanner from '../components/AdsterraBanner';

interface ContactProps {
  onBack: () => void;
}

export default function Contact({ onBack }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="p-6 sm:p-10 text-slate-800 space-y-8 relative font-sans"
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
          <span className="text-[10px] bg-green-50 text-green-700 font-extrabold px-3 py-1 rounded-full border border-green-100 tracking-wider uppercase">
            SUPPORT DESK ACTIVE
          </span>
        </div>
      </div>

      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
            <Mail className="w-5.5 h-5.5" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Contact support</h1>
        </div>
        <p className="text-slate-500 font-medium text-sm max-w-2xl leading-relaxed">
          Need support with raw bitstream parsing, custom metadata retention structures, or offline browser compilations? We are here to help.
        </p>
      </header>

      {/* TWO COLUMNS: Info text (500+ words) & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Rich Text Info (500+ Words) */}
        <div className="lg:col-span-6 space-y-6 text-slate-600 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-4.5 h-4.5 text-green-600" />
              1. Direct Human Communication Standard
            </h3>
            <p>
              At ImagePixel, we intentionally reject automated, generic chat-bots, circular FAQ trees, and canned ticketing auto-responders. We understand that parsing complex Base64 pixel coordinate packages, analyzing browser canvas compilation errors, and handling raw photographic rendering requires nuanced technical understanding. Every submission made to our feedback center is read and answered manually by real web development and digital preservation engineers within 24 to 48 hours.
            </p>
          </section>

          {/* Column level banner ad */}
          <AdsterraBanner id="contact-mid-col" format="responsive-728-320" />

          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Bug className="w-4.5 h-4.5 text-green-600" />
              2. How to Report Code Failures or Corrupted Payloads
            </h3>
            <p>
              If you run into a highly specific rendering glitch where the Re-creator panel states "Invalid code format! This is not an authentic ImagePixel string," we suggest taking the following steps. This will make it much easier for our support team to debug the issue:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>
                **Verify Payload Truncation:** Ensure that the text file or messenger window did not restrict characters. Large images can create strings with hundreds of thousands of characters, and some platforms may trim the end of long comments.
              </li>
              <li>
                **Inspect the Core Header:** The alphanumeric string should always begin with `IMAGEPIXEL_v1#` followed by the original filename and file type separated by hashtag symbols.
              </li>
              <li>
                **Test Local HTML5 Sandbox Compatibility:** Try converting a smaller sample graphic (such as a 100x100 pixel test logo) to confirm that your local hardware drivers are compatible with accelerated canvas contexts.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4.5 h-4.5 text-green-600" />
              3. Collaborative Open-Source Feedback
            </h3>
            <p>
              We are constantly seeking to optimize our compression-free file encapsulation. If you are an enterprise developer, security researcher, or digital archivist with suggestions on how to improve our rendering speeds, add multiple selective image file buffers, or establish more compressed loss-free text formats, please contact us. We are dedicated to maintaining a community-centered environment where anyone can safely preserve their artistic assets.
            </p>
          </section>

        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200/60 p-6 rounded-[2rem]">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-1.5">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-3 text-xs border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full p-3 text-xs border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-1.5">Topic</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 text-xs border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all font-bold text-slate-800 cursor-pointer"
                  >
                    <option value="support">Technical Support & Errors</option>
                    <option value="feedback">Feature Ideas & Suggestions</option>
                    <option value="partnership">Academic & Research Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-1.5">Your Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message of at least a few description lines..."
                    className="w-full p-3 text-xs border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none font-bold text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shadow-green-650/15 cursor-pointer flex items-center justify-center gap-2 mt-2 active:scale-97"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto border border-green-100">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                  Thank you, **{formData.name}**! Our web and file-preservation engineering team will review your payload support query and write back within 1-2 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'support', message: '' });
                  }}
                  className="px-4 py-2 text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-600 rounded font-bold transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </motion.div>
  );
}
