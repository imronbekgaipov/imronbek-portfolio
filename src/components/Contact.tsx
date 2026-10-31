import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Send as TelegramIcon, 
  Check, 
  Copy, 
  AlertCircle, 
  ArrowUpRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject or purpose';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger subtle celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#6366f1', '#38bdf8', '#a855f7']
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gradient-to-t from-indigo-600/15 via-sky-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Compelling Invitation & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  05 / Connection
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
                Let's build something <br />
                <span className="text-gradient-accent">exceptional together.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Whether you have an internship opportunity, project collaboration, or simply want to talk tech and software engineering, my inbox is always open.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl glass-card border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Direct Contact</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Quick Response
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {PERSONAL_INFO.contacts.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2 rounded-xl glass-card hover:border-white/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-[11px] font-mono text-slate-400">
                [Editable in <code className="text-indigo-300">src/data/portfolioData.ts</code>]
              </p>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Find Me On
              </span>
              <div className="flex flex-col gap-2.5">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl glass-card hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-300 group-hover:text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">@imronbekgaipov</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl glass-card hover:border-sky-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-sky-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400">[Placeholder Profile]</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Telegram */}
                <a
                  href={PERSONAL_INFO.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl glass-card hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-cyan-400">
                      <TelegramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">Telegram</div>
                      <div className="text-[11px] font-mono text-slate-400">[Placeholder Handle]</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Production-Ready Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-card border-white/[0.1] shadow-2xl relative">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-8">
                Fill in the details below. All inputs include live client-side validation.
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-300">Message Dispatched!</h4>
                    <p className="text-xs text-emerald-400/90 font-light">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-indigo-400/60 focus:bg-white/[0.05]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-indigo-400/60 focus:bg-white/[0.05]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject / Discussion Topic <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry, Internship, or Introduction"
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.08] focus:border-indigo-400/60 focus:bg-white/[0.05]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, opportunity, or timeline..."
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.08] focus:border-indigo-400/60 focus:bg-white/[0.05]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
