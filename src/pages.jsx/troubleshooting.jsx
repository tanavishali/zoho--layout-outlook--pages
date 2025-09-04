import React from "react";
import { motion } from "framer-motion";

const issues = [
  {
    title: "1. I can’t log in to my account",
    body: (
      <>
        Make sure your email and password are correct. If you forgot your
        password, use the <strong>Forgot Password</strong> option on the login
        page.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 15v-3m0 6h.01M7 11V7a5 5 0 0 1 10 0v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="11"
          width="16"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "2. My data is not syncing",
    body: (
      <>
        Check your internet connection. If the issue persists, go to
        <strong> Settings → Data Sync </strong> and manually trigger a sync.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 4v6h6M20 20v-6h-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 8a8 8 0 0 0-13.66-4.66M4 16a8 8 0 0 0 13.66 4.66"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "3. I don’t have access to certain features",
    body: (
      <>
        Some features are restricted based on user roles. Contact your CRM
        administrator to adjust your permissions.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm7 8a7 7 0 0 0-14 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "4. My reports are showing incorrect data",
    body: (
      <>
        Verify that you have selected the correct date range and filters. If the
        issue continues, clear cached data from{" "}
        <strong> Settings → System </strong>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M3 3v18h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 15l3-4 3 3 4-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "5. I can’t upload documents",
    body: (
      <>
        Ensure the file size is under <strong>25MB</strong> and the format is
        supported (PDF, DOCX, JPG, PNG). If uploads still fail, clear your
        browser cache and retry.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 16v-8m0 0l-4 4m4-4 4 4M6 20h12a2 2 0 0 0 2-2V9a2 2 0 0 0-.586-1.414l-6-6A2 2 0 0 0 12 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "6. Notifications are not showing up",
    body: (
      <>
        Check your browser’s notification settings and ensure permissions are
        enabled for this site. Also confirm that{" "}
        <strong>Settings → Notifications</strong> are turned on in your CRM.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm6-6V11a6 6 0 1 0-12 0v5L4 18v1h16v-1l-2-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "7. The CRM is very slow",
    body: (
      <>
        Clear your browser cache and cookies. Ensure you’re using the latest
        browser version. If the issue continues, check{" "}
        <a href="#" className="underline">
          system status
        </a>{" "}
        for ongoing maintenance.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "8. I accidentally deleted data",
    body: (
      <>
        Deleted items may be recoverable from{" "}
        <strong>Settings → Recycle Bin</strong> within 30 days. If not visible,
        contact support immediately.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M6 7h12M9 7V4h6v3M10 11v6M14 11v6M5 7h14l-1 12H6L5 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const Troubleshooting = () => {
  return (
    <section className="rounded-2xl border border-gray-200  p-6 shadow-sm backdrop-blur dark:text-gray-100 text-gray-900 dark:bg-gray-900 bg-gray-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight ">Troubleshooting Guide</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Try these common fixes. If you’re still stuck, contact support below.
          </p>
        </div>

        {/* Quick action / status hint */}
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/30 dark:text-emerald-300">
          Updated just now
        </span>
      </div>

      {/* Callout */}
      <div className="mt-4 rounded-xl border-1 border-gray-300   dark:border-gray-700 p-4 text-sm text-gray-700  dark:text-gray-100">
        <strong className="font-semibold">Tip:</strong> Press <kbd className="mx-1 rounded border border-gray-300 bg-white px-1 text-[11px] dark:border-gray-700 dark:bg-gray-800">Ctrl</kbd>
        +<kbd className="rounded border border-gray-300 bg-white px-1 text-[11px] dark:border-gray-700 dark:bg-gray-800">R</kbd> to refresh cached data after changing filters.
      </div>

      {/* Issues list */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 grid gap-4"
      >
        {issues.map((it, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group rounded-xl border border-gray-100  p-4 transition hover:shadow-md dark:border-gray-900  dark:text-gray-100 text-gray-900 dark:bg-gray-900 bg-gray-100">
          
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-indigo-600/10 p-2 text-[#2080bd] group-hover:bg-indigo-600/20 dark:text-indigo-300">
                {it.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold  dark:text-gray-100 text-gray-900 dark:bg-gray-900 bg-gray-100">

                  {it.title}
                </h3>
                <p className="mt-1 dark:text-gray-100 text-gray-900 dark:bg-gray-900 bg-gray-100">{it.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer actions */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
   
        <a
          href="mailto:support@example.com"
          className="rounded-xl bg-[#2080bd] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110 dark:bg-[#2080bd]"
        >
          Contact Support
        </a>
      </div>
    </section>
  );
};

export default Troubleshooting;
