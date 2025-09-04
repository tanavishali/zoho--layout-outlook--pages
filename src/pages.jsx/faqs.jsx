    import React, { useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";

    const faqs = [
    {
        q: "How do I add a new client?",
        a: (
        <>
            Navigate to <strong>Clients → Add New</strong> and fill out the required
            details such as name, contact info, and company. Save the form to
            register the client.
        </>
        ),
    },
    {
        q: "Can I assign leads to team members?",
        a: (
        <>
            Yes. When adding or editing a lead, choose a team member from the
            <strong> Assigned To</strong> dropdown list.
        </>
        ),
    },
    {
        q: "How do I generate sales reports?",
        a: (
        <>
            Go to <strong>Reports</strong> in the dashboard, select the date range
            and type of report you need (e.g., sales, client activity, revenue),
            and click “Generate.”
        </>
        ),
    },
    {
        q: "Can I integrate my CRM with email?",
        a: (
        <>
            Yes, our CRM integrates with popular email services like Gmail and
            Outlook. Visit <strong>Settings → Integrations</strong> to connect your
            email.
        </>
        ),
    },
    {
        q: "How do I reset my password?",
        a: (
        <>
            Go to the <strong>Login</strong> page and click on{" "}
            <strong>Forgot Password</strong>. Enter your registered email, and you’ll
            receive a reset link.
        </>
        ),
    },
    {
        q: "Can I export my client data?",
        a: (
        <>
            Yes, navigate to <strong>Clients → Export</strong>. You can export
            client data in CSV or Excel format.
        </>
        ),
    },
    {
        q: "How do I add a new team member?",
        a: (
        <>
            Go to <strong>Settings → Team Management</strong>, click{" "}
            <strong>Add Member</strong>, and enter the member’s name, email, and
            role.
        </>
        ),
    },
    {
        q: "Does the CRM support mobile devices?",
        a: (
        <>
            Yes, the CRM is fully responsive and works on desktops, tablets, and
            smartphones. A mobile app version is also available.
        </>
        ),
    },
    {
        q: "How do I set reminders for follow-ups?",
        a: (
        <>
            When creating or editing a task, use the{" "}
            <strong>Reminder</strong> option to set notifications for follow-ups.
        </>
        ),
    },
    {
        q: "Can I track payments and invoices?",
        a: (
        <>
            Yes, under <strong>Finance → Invoices</strong>, you can create, send,
            and track invoices, as well as monitor payment statuses.
        </>
        ),
    },
    ];


    function FaqItem({ index, item, open, onToggle }) {
    const contentId = `faq-panel-${index}`;
    const buttonId = `faq-button-${index}`;

    return (
        <div className="py-3">
        <button
            id={buttonId}
            aria-controls={contentId}
            aria-expanded={open}
            onClick={onToggle}
            className="flex w-full items-start justify-between gap-3 text-left"
        >
            <span className="font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-800 hover:text-gray-100">

            {index + 1}. {item.q}
            </span>

            <motion.svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="mt-1 shrink-0"
            initial={false}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            >
            <path
                d="m6 9 6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            </motion.svg>
        </button>

        <AnimatePresence initial={false}>
            {open && (
            <motion.div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
            >
                <div className="prose prose-sm mt-2 max-w-none dark:bg-gray-900 bg-gray-100 dark:text-gray-100 text-gray-900">


                <p>{item.a}</p>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
    }

    const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="   bg-white/60 p-6  dark:bg-gray-900 bg-gray-10 dark:text-gray-100 text-gray-900 ">

            


        <h2 className="text-2xl font-bold tracking-tight">
            Frequently Asked Questions
        </h2>

        <div className=" mt-6 space-y-">
            {faqs.map((item, i) => (
            <FaqItem
                key={i}
                index={i}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
            
            ))}
        </div>
        </section>
    );
    };

    export default Faqs;
