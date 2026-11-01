import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Send as TelegramIcon, 
  Check, 
  Copy, 
  AlertCircle, 
  ArrowUpRight,
  RotateCcw
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

  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot check - silently prevent bot spam
    if (botField) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': botField,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Trigger subtle celebratory confetti
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#6366f1', '#38bdf8', '#a855f7']
        });

        // Reset form inputs
        setFormData({ name: '', email: '', subject: '', message: '' });
        setBotField('');
        setErrors({});
      } else {
        throw new Error(`Netlify returned status code ${response.status}`);
      }
    } catch (error) {
      console.error('Netlify Form submission error:', error);
      setSubmitError(
        'Unable to send message through Netlify Forms right now. Please try again or reach out directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
                <a
                  href={`mailto:${PERSONAL_INFO.contacts.email}`}
                  className="flex items-center gap-2.5 overflow-hidden group/mail flex-1 min-w-0"
                  title={`Send email to ${PERSONAL_INFO.contacts.email}`}
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 group-hover/mail:text-cyan-300 transition-colors" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 hover:text-white hover:underline underline-offset-4 truncate transition-colors">
                    {PERSONAL_INFO.contacts.email}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2 rounded-xl glass-card hover:border-white/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-[11px] font-mono text-slate-400">
                Click to open mail app or use copy button
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
                      <div className="text-[11px] font-mono text-slate-400">in/imronbek-gaipov</div>
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
                      <div className="text-[11px] font-mono text-slate-400">@Imronbek_10</div>
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  Send a Message
                </h3>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Netlify Powered
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-8">
                Fill in the details below. All inputs include live client-side validation and secure dispatch.
              </p>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-300">Message Dispatched Successfully!</h4>
                        <p className="text-xs text-emerald-400/90 font-light mt-0.5">
                          Thank you for reaching out. Your submission has been captured and I'll respond promptly.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-xs font-mono transition-colors shrink-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Send Another</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Notification Banner */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-semibold text-red-300">Transmission Alert</h4>
                        <p className="text-xs text-red-400/90 font-light mt-0.5">
                          {submitError}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSubmitError(null)}
                      className="text-red-400 hover:text-red-200 text-xs font-mono"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-5" 
                noValidate
              >
                {/* Netlify Form Hidden Identifier */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Netlify Anti-Spam Honeypot Field */}
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human:{' '}
                    <input 
                      name="bot-field" 
                      tabIndex={-1} 
                      autoComplete="off" 
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)} 
                    />
                  </label>
                </p>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all disabled:opacity-50 ${
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
                    <label htmlFor="email-input" className="text-xs font-mono text-slate-300 block">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all disabled:opacity-50 ${
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
                  <label htmlFor="subject-input" className="text-xs font-mono text-slate-300 block">
                    Subject / Discussion Topic <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    name="subject"
                    required
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry, Internship, or Introduction"
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all disabled:opacity-50 ${
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
                  <label htmlFor="message-input" className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    rows={5}
                    name="message"
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, opportunity, or timeline..."
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none disabled:opacity-50 ${
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
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting message...</span>
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
