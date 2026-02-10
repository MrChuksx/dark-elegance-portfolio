import { ArrowRight, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_MESSAGE = 1000;

const sanitize = (str: string): string =>
  str.replace(/[<>"'&]/g, (ch) =>
    ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "&": "&amp;" }[ch] ?? ch)
  );

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > MAX_NAME) errs.name = `Name is required (max ${MAX_NAME} chars)`;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > MAX_EMAIL)
      errs.email = "Valid email is required";
    if (!message || message.length > MAX_MESSAGE) errs.message = `Message is required (max ${MAX_MESSAGE} chars)`;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const safeName = sanitize(form.name.trim());
    const safeEmail = sanitize(form.email.trim());
    const safeMessage = sanitize(form.message.trim());

    const subject = encodeURIComponent(`Portfolio inquiry from ${safeName}`);
    const body = encodeURIComponent(`Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`);
    window.location.href = `mailto:Uchechukwugodspower6@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16">
            Reach Out to Me
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</p>
                <a
                  href="mailto:Uchechukwugodspower6@gmail.com"
                  className="text-foreground hover:opacity-70 transition-opacity text-lg"
                >
                  Uchechukwugodspower6@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Social</p>
                <div className="space-y-3">
                  <a href="https://www.linkedin.com/in/godspower-uchechukwu-69a200397" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:opacity-70 transition-opacity">LinkedIn ↗</a>
                  <a href="https://x.com/mrchuks_" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:opacity-70 transition-opacity">X (Twitter) ↗</a>
                  <a href="https://www.instagram.com/bluestoneon" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:opacity-70 transition-opacity">Instagram ↗</a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={MAX_NAME}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border text-foreground py-3 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  maxLength={MAX_EMAIL}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border text-foreground py-3 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your email"
                  autoComplete="email"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  maxLength={MAX_MESSAGE}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border text-foreground py-3 outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 text-foreground text-sm tracking-widest uppercase hover:opacity-70 transition-opacity group pt-2"
              >
                {submitted ? "Opening mail client..." : "Let's collaborate"}
                {submitted ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
