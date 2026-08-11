"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";

const PROGRAMMES = [
  { id: "ai-engineering", label: "Track 01 · AI & Automation Engineering" },
  { id: "data-science", label: "Track 02 · Data Science for Business" },
  { id: "cybersecurity", label: "Track 03 · Cybersecurity" },
] as const;

const EXPERIENCE_LEVELS = [
  "Complete beginner — no tech background",
  "Some self-taught experience",
  "1–2 years professional experience",
  "3–5 years professional experience",
  "5+ years professional experience",
] as const;

const SOURCES = [
  "LinkedIn",
  "Google Search",
  "Referral / Word of Mouth",
  "Twitter / X",
  "Instagram",
  "Conference or Event",
  "Other",
] as const;

type ProgrammeId = (typeof PROGRAMMES)[number]["id"];

export default function ApplyForm() {
  const [programme, setProgramme] = useState<ProgrammeId>("ai-engineering");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [serverError, setServerError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const required = ["fname", "lname", "email", "why", "goals"];
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
    setServerError(false);
    setSubmitting(true);

    const selectedProgramme =
      PROGRAMMES.find((p) => p.id === programme)?.label ?? programme;

    const payload = {
      programme: selectedProgramme,
      firstName: String(formData.get("fname") || "").trim(),
      lastName: String(formData.get("lname") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      currentRole: String(formData.get("role") || "").trim(),
      experienceLevel: String(formData.get("experience") || "").trim(),
      linkedin: String(formData.get("linkedin") || "").trim(),
      why: String(formData.get("why") || "").trim(),
      goals: String(formData.get("goals") || "").trim(),
      source: String(formData.get("source") || "").trim(),
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Non-OK response");
      setSuccess(true);
    } catch {
      setServerError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-[860px]">
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {/* Programme selector */}
              <Reveal>
                <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
                  Step 1 · Choose Your Programme
                </div>
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    fontWeight: 700,
                    letterSpacing: "-0.8px",
                    lineHeight: 1.1,
                  }}
                >
                  Which track are you applying for?
                </h2>
                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {PROGRAMMES.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProgramme(p.id)}
                      className={`rounded-md border px-5 py-3 text-left text-[13px] font-semibold tracking-wide transition-all ${
                        programme === p.id
                          ? "border-blue bg-blue text-white"
                          : "border-rule bg-white text-[#3A4A5C] hover:border-sky hover:text-ink"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                  <input type="hidden" name="programme" value={programme} />

                  {/* Personal info */}
                  <fieldset className="flex flex-col gap-5">
                    <legend className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
                      Step 2 · Personal Information
                    </legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field id="fname" label="First Name" placeholder="Jane" required error={errors.fname} />
                      <Field id="lname" label="Last Name" placeholder="Okafor" required error={errors.lname} />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="jane@example.com"
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
                  </fieldset>

                  {/* Background */}
                  <fieldset className="flex flex-col gap-5">
                    <legend className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
                      Step 3 · Your Background
                    </legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="role"
                        label="Current Role / Title (Optional)"
                        placeholder="Software Engineer, Analyst, Student…"
                      />
                      <div>
                        <Label htmlFor="experience">Experience Level</Label>
                        <select
                          id="experience"
                          name="experience"
                          className="w-full rounded-md border border-rule bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-blue"
                        >
                          <option value="">— Select one —</option>
                          {EXPERIENCE_LEVELS.map((l) => (
                            <option key={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <Field
                      id="linkedin"
                      label="LinkedIn Profile URL (Optional)"
                      type="url"
                      placeholder="https://linkedin.com/in/yourname"
                    />
                  </fieldset>

                  {/* Motivation */}
                  <fieldset className="flex flex-col gap-5">
                    <legend className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
                      Step 4 · Your Motivation
                    </legend>
                    <div>
                      <Label htmlFor="why" required>
                        Why do you want to join this programme?
                      </Label>
                      <textarea
                        id="why"
                        name="why"
                        rows={4}
                        placeholder="Tell us what draws you to this specific track, your background, and why now is the right time."
                        className={`w-full resize-y rounded-md border bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-[#3A4A5C]/40 focus:border-blue ${
                          errors.why ? "border-red-500" : "border-rule"
                        }`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="goals" required>
                        What do you hope to achieve after completing it?
                      </Label>
                      <textarea
                        id="goals"
                        name="goals"
                        rows={4}
                        placeholder="Describe your career goals, the role you're aiming for, or the problem you want to solve."
                        className={`w-full resize-y rounded-md border bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-[#3A4A5C]/40 focus:border-blue ${
                          errors.goals ? "border-red-500" : "border-rule"
                        }`}
                      />
                    </div>
                  </fieldset>

                  {/* Source */}
                  <div>
                    <Label htmlFor="source">How did you hear about Blockwave?</Label>
                    <select
                      id="source"
                      name="source"
                      className="w-full rounded-md border border-rule bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-blue"
                    >
                      <option value="">— Select one —</option>
                      {SOURCES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Consent */}
                  <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.6] text-[#3A4A5C]">
                    <input
                      type="checkbox"
                      name="consent"
                      className={`mt-0.5 h-4 w-4 cursor-pointer accent-blue ${
                        errors.consent ? "outline outline-2 outline-red-500" : ""
                      }`}
                    />
                    <span>
                      I agree to Blockwave processing my application data. We never share your
                      information with third parties.{" "}
                      <a href="#" className="text-blue underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  {serverError && (
                    <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                      Something went wrong submitting your application. Please try again or email{" "}
                      <a href="mailto:admissions@Blockwaveconsults.com" className="underline">
                        admissions@Blockwaveconsults.com
                      </a>
                      .
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-md bg-blue px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-sky disabled:opacity-60"
                    >
                      {submitting ? "Submitting…" : "Submit Application"}
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
                      We review applications within 3 business days
                    </span>
                  </div>
                </form>
              </Reveal>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-rule bg-surface px-10 py-16 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue text-2xl font-bold text-white">
                ✓
              </div>
              <div className="mb-3 text-2xl font-bold tracking-tight">Application received.</div>
              <p className="mx-auto max-w-[520px] text-base leading-[1.7] text-[#3A4A5C]">
                Thanks for applying to Blockwave. Our admissions team will review your application
                and be in touch within 3 business days.
                <br />
                <br />
                In the meantime, take a deeper look at the{" "}
                <a href="/courses" className="text-blue underline">
                  programme curriculum
                </a>{" "}
                or{" "}
                <a href="/contact" className="text-blue underline">
                  reach out
                </a>{" "}
                if you have questions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
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
