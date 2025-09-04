import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Building2,
  Send,
  Shield,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

export default function ContactSupportPage() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message…" });

    await new Promise((r) => setTimeout(r, 900));

    setStatus({
      type: "success",
      message: "Thanks! We’ll get back to you shortly.",
    });
    e.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Contact Support
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Need help with your product or account? Our team is here for
                you. Find answers below or reach out using the form—we reply
                within one business day.
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-500 dark:text-gray-400 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Secure & private
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Mon–Fri, 9:00–18:00
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-200 dark:bg-gray-900/50 p-5 shadow-xl">
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-6 w-6 text-[#2080bd]" />
                <div>
                  <p className="font-semibold">About Our Company</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We build modern, privacy-first tools that help teams move
                    faster. 10k+ customers across 40+ countries trust us for
                    reliability and support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact blocks */}
      <section className="px-4 pb-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <InfoCard
            icon={<Mail className="h-6 w-6 text-[#2080bd]" />}
            title="Email"
            lines={["tanawishalrai5271@gmail.com", "We reply in <24h"]}
            link="mailto:tanawishalrai5271@gmail.com"
          />
          <InfoCard
            icon={<Phone className="h-6 w-6 text-[#2080bd]" />}
            title="Phone"
            lines={["+92 300 0000000", "Mon–Fri, 9:00–18:00"]}
            link="tel:+923000000000"
          />
          <InfoCard
            icon={<MessageCircle className="h-6 w-6 text-[#2080bd]" />}
            title="Live Chat"
            lines={[
              "Open the chat in your dashboard Average wait: ~2 min",
              "",
            ]}
            link="https://yourdashboard.com/chat"
          />
        </div>
      </section>

      {/* Main grid: form + map/locations */}
      <section className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-300">
                Fill out the form and we’ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <SelectField
                    label="Topic"
                    name="topic"
                    options={[
                      { value: "billing", label: "Billing" },
                      { value: "technical", label: "Technical issue" },
                      { value: "sales", label: "Sales" },
                      { value: "feedback", label: "Feedback" },
                    ]}
                  />
                  <Field
                    label="Order / Ticket ID (optional)"
                    name="reference"
                    type="text"
                    placeholder="#123456"
                  />
                </div>

                <Field
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="I’m having trouble with…"
                  required
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe the issue or question in detail…"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-[#2080bd] focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2 text-sm text-slate-300">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-[#2080bd] focus:ring-[#2080bd]"
                    required
                  />
                  <label htmlFor="consent" className="select-none">
                    I agree to the processing of my information as described in
                    the privacy policy.
                  </label>
                </div>

                {/* Status */}
                <div aria-live="polite" className="text-sm">
                  {status.type === "loading" && (
                    <p className="text-[#2080bd]">{status.message}</p>
                  )}
                  {status.type === "success" && (
                    <p className="text-[#2080bd]">{status.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#2080bd] px-4 py-2 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-[#2080bd] focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    <Send className="h-4 w-4" /> Send message
                  </button>
                  <a
                    href="#faq"
                    className="text-sm text-slate-300 underline-offset-4 hover:underline"
                  >
                    See FAQs first
                  </a>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Locations + Map */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
                <h3 className="text-lg font-semibold">Our offices</h3>
                <ul className="mt-4 space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#2080bd]" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p>
                        123 Innovation Ave, Suite 500
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#2080bd]" />
                    <div>
                      <p className="font-medium">APAC</p>
                      <p>
                        19 Tech Park, Level 8
                        <br />
                        Singapore 048581
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-300 transition hover:bg-slate-900"
                  >
                    <Globe className="h-4 w-4" /> Website
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-300 transition hover:bg-slate-900"
                  >
                    <Twitter className="h-4 w-4" /> Twitter
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-300 transition hover:bg-slate-900"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <FAQ
              q="What’s the typical response time?"
              a="We aim to respond within one business day, and urgent chat tickets within a few minutes during support hours."
            />
            <FAQ
              q="Do you offer weekend support?"
              a="We monitor uptime 24/7 and provide emergency coverage on weekends for enterprise plans."
            />
            <FAQ
              q="How do I report a security issue?"
              a="Email security@company.com with details and steps to reproduce. We’ll acknowledge within 24 hours."
            />
            <FAQ
              q="Where can I find guides and docs?"
              a="Visit our Help Center from the dashboard for setup guides, API docs, and troubleshooting articles."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- Reusable Components -------------------- */
function InfoCard({ icon, title, lines, link }) {
  const Wrapper = link ? "a" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <Wrapper
        href={link}
        target={link?.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl transition hover:bg-slate-800"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/60">
            {icon}
          </div>
          <div>
            <p className="font-semibold">{title}</p>
            <div className="mt-1 space-y-0.5 text-sm text-slate-300">
              {lines.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

function Field({ label, name, type = "text", placeholder = "", required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label} {required && <span className="text-[#2080bd]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-[#2080bd] focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-100 focus:border-[#2080bd] focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        defaultValue={options?.[0]?.value}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-slate-900">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <span className="text-slate-400">{open ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="px-4"
      >
        {open && <div className="pb-4 text-sm text-slate-300">{a}</div>}
      </motion.div>
    </div>
  );
}
