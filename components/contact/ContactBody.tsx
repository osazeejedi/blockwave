"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";

const INQUIRY_TYPES = [
  "Software Engineering",
  "Tech Consulting",
  "Training Programme",
  "General",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

const SUBJECT_PLACEHOLDERS: Record<InquiryType, string> = {
  "Software Engineering": "Looking for engineering support on our product",
  "Tech Consulting": "Requesting a strategy advisory session",
  "Training Programme": "Question about the AI Engineering programme",
  General: "I have a question about WhiteBox",
};

export default function ContactBody() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("Software Engineering");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const required = ["fname", "lname", "email", "subject", "message"];
    const newErrors: Record<string, boolean> = {};
    required.forEach((id) => {
      if (!String(formData.get(id) || "").trim()) newErrors[id] = true;
    });
    if (!formData.get("consent")) newErrors.consent = true;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1100);
  };

  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        {/* FORM */}
        <Reveal>
          <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
            Send an Enquiry
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(30px, 3.4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-1.4px",
              lineHeight: 1.05,
            }}
          >
            How can we help?
          </h2>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="form"
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-7 text-base leading-[1.7] text-[#3A4A5C]">
                  Tell us what you&rsquo;re working on. We&rsquo;ll route your enquiry to the
                  right person and get back to you within 24 hours on business days.
                </p>

                {/* Inquiry type */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setInquiryType(t)}
                      className={`rounded-md border px-4 py-2 text-[13px] font-semibold tracking-wide transition-all ${
                        inquiryType === t
                          ? "border-blue bg-blue text-white"
                          : "border-rule bg-white text-[#3A4A5C] hover:border-sky hover:text-ink"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <input type="hidden" name="inquiry-type" value={inquiryType} />

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      id="fname"
                      label="First Name"
                      placeholder="Jane"
                      required
                      error={errors.fname}
                    />
                    <Field
                      id="lname"
                      label="Last Name"
                      placeholder="Okafor"
                      required
                      error={errors.lname}
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      id="email"
                      label="Email Address"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      error={errors.email}
                    />
                    <Field
                      id="phone"
                      label="Phone (Optional)"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field id="company" label="Company / Organisation" placeholder="Acme Inc." />
                    <Field id="role" label="Your Role" placeholder="CTO, Student, Engineer…" />
                  </div>

                  <Field
                    id="subject"
                    label="Subject"
                    placeholder={SUBJECT_PLACEHOLDERS[inquiryType]}
                    required
                    error={errors.subject}
                  />

                  <div>
                    <Label htmlFor="message" required>
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project, goals, timeline, or any questions you have. The more context you give us, the better we can help."
                      className={`w-full resize-y rounded-md border bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-[#3A4A5C]/40 focus:border-blue ${
                        errors.message ? "border-red-500" : "border-rule"
                      }`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="source">How did you hear about us?</Label>
                    <select
                      id="source"
                      name="source"
                      className="w-full rounded-md border border-rule bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-blue"
                    >
                      <option value="">— Select one —</option>
                      <option>LinkedIn</option>
                      <option>Google Search</option>
                      <option>Referral / Word of Mouth</option>
                      <option>Twitter / X</option>
                      <option>Conference or Event</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.6] text-[#3A4A5C]">
                    <input
                      type="checkbox"
                      name="consent"
                      className={`mt-0.5 h-4 w-4 cursor-pointer accent-blue ${
                        errors.consent ? "outline outline-2 outline-red-500" : ""
                      }`}
                    />
                    <span>
                      I agree to WhiteBox processing my data to respond to this enquiry. We
                      never share your information with third parties.{" "}
                      <a href="#" className="text-blue underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-md bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-sky disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Send Enquiry"}
                      {!submitting && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2 7h10M8 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                    <span className="font-mono text-[10px] tracking-wider text-[#3A4A5C]/70">
                      We reply within 1 business day
                    </span>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-rule bg-surface p-10 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue text-2xl font-bold text-white">
                  ✓
                </div>
                <div className="mb-3 text-2xl font-bold tracking-tight">Enquiry received.</div>
                <p className="mx-auto max-w-[480px] text-base leading-[1.7] text-[#3A4A5C]">
                  Thanks for reaching out. A member of the WhiteBox team will be in touch
                  within one business day.
                  <br />
                  <br />
                  In the meantime, feel free to explore our{" "}
                  <a href="/courses" className="text-blue underline">
                    training programmes
                  </a>{" "}
                  or{" "}
                  <a href="/services" className="text-blue underline">
                    service offerings
                  </a>
                  .
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        {/* SIDEBAR */}
        <Reveal delay={0.15}>
          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-rule bg-surface p-7">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
                Contact Details
              </div>
              <div className="flex flex-col gap-5">
                <ContactItem
                  label="Email"
                  value="hello@whiteboxconsults.com"
                  sub="For general enquiries"
                />
                <ContactItem
                  label="Training"
                  value="admissions@whiteboxconsults.com"
                  sub="Programme applications & questions"
                />
                <ContactItem
                  label="Consulting"
                  value="consulting@whiteboxconsults.com"
                  sub="Engagements & partnerships"
                />
                <ContactItem
                  label="Apply"
                  value="whiteboxconsults.com/apply"
                  sub="Direct programme applications"
                  highlight
                />
              </div>
            </div>

            <div className="rounded-xl border border-rule bg-white p-7">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
                Response Hours
              </div>
              <div className="flex flex-col gap-3 text-[13px]">
                <Hours day="Monday – Friday" time="9am – 6pm WAT" />
                <Hours day="Saturday" time="10am – 2pm WAT" />
                <Hours day="Sunday" time="Closed" />
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

/* ── helpers ── */
function Label({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-[#3A4A5C]"
    >
      {children}
      {required && <span className="ml-1 text-blue">*</span>}
    </label>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-[#3A4A5C]/40 focus:border-blue ${
          error ? "border-red-500" : "border-rule"
        }`}
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#3A4A5C]/70">
        {label}
      </div>
      <div className={`mb-0.5 text-[14px] font-semibold ${highlight ? "text-sky" : "text-ink"}`}>
        {value}
      </div>
      <div className="text-[12px] text-[#3A4A5C]/70">{sub}</div>
    </div>
  );
}

function Hours({ day, time }: { day: string; time: string }) {
  return (
    <div className="flex items-center justify-between border-b border-rule pb-2 last:border-b-0 last:pb-0">
      <span className="text-[#3A4A5C]">{day}</span>
      <span className="font-mono text-[11px] text-ink">{time}</span>
    </div>
  );
}
