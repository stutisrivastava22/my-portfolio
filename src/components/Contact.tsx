"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "", website: "" });
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#6366F1", "#A78BFA", "#F472B6", "#10B981"]
      });
    } catch {
      setSubmissionError("We couldn't send your message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs md:text-sm font-mono text-[#F472B6] tracking-wider uppercase">
          05
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center gap-4">
          <span>Get In Touch</span>
          <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-white/20 to-transparent" />
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Message Form */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111726]/90 border border-white/[0.08] backdrop-blur-md shadow-xl shadow-black/20">
            <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F472B6]" />
              <span>Send a Direct Note</span>
            </h4>
            <p className="text-xs text-[#94A3B8] mb-6">
              Drop a message directly to my inbox for opportunities, consulting, or technical discussions.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white">Message Sent</h5>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thanks for getting in touch. Your message has been received.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-medium text-[#A78BFA] hover:text-white underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Leave this field blank</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Subject / Inquiry
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Generative AI role / Multi-Agent Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Stuti, we'd love to connect regarding an AI engineering opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                {submissionError && (
                  <p className="text-xs text-[#F472B6]" role="alert">
                    {submissionError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F472B6] hover:opacity-95 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#6366F1]/20 transition-all active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Connecting..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Headline, Bio & Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 lg:-mt-1">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Available for New Roles</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-3">
              Let&apos;s build something intelligent.
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              I&apos;m always open to discussing new opportunities, collaborations, or a good conversation about autonomous agents, RAG, and scalable GenAI.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="space-y-3">
            {/* Email Card with Copy Button */}
            <div className="p-4 rounded-2xl bg-[#111726]/80 border border-white/[0.08] flex items-center justify-between gap-3 group hover:border-[#6366F1]/40 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-[#6366F1]/15 text-[#A78BFA] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Direct Email</div>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs font-semibold text-white truncate font-mono hover:text-[#A78BFA] transition-colors block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#111726]/80 border border-white/[0.08] hover:border-[#6366F1]/50 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-[#6366F1]/15 text-[#A78BFA] shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase font-mono text-slate-400">LinkedIn Profile</div>
                  <div className="text-xs font-semibold text-white truncate">
                    in/stuti-srivastava-a3668118b
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#111726]/80 border border-white/[0.08] hover:border-[#A78BFA]/50 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-[#A78BFA]/15 text-[#A78BFA] shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase font-mono text-slate-400">GitHub Profile</div>
                  <div className="text-xs font-semibold text-white truncate">
                    github.com/stutisrivastava
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-[#111726]/80 border border-white/[0.08] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F472B6]/15 text-[#F472B6] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400">Current Base</div>
                <div className="text-xs font-semibold text-white">
                  {PERSONAL_INFO.location} • Open to Remote &amp; Relocation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
