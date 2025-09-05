import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  TrendingUp,
  CheckCircle,
  Workflow,
  FileText,
} from "lucide-react";

const Process_management = () => {
  const features = [
    {
      title: "Lead Management",
      desc: "FairForce CRM makes lead management effortless by centralizing all your customer data in one intuitive dashboard. Capture and organize leads from multiple channels including email, web forms, and social media. Assign leads instantly to your sales team, track every interaction, and nurture relationships with personalized engagement. With FairForce lead management, you ensure no opportunity slips away, improve sales pipeline visibility, and maximize your conversion rates.",
      img: "/lead-management2.png",
      reverse: false,
      icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Lead Scoring",
      desc: "With FairForce CRM’s intelligent lead scoring system, you can prioritize prospects based on engagement, behavior, demographics, and buying signals. Automatically assign scores to leads so your sales team focuses on high-value opportunities that are most likely to convert. By eliminating guesswork and enabling data-driven decisions, FairForce lead scoring shortens your sales cycle, increases efficiency, and ensures your business growth stays on track.",
      img: "/lead_scoring.jpg",
      reverse: true,
      icon: <TrendingUp className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Approval",
      desc: "FairForce CRM simplifies internal approval workflows by automating tasks such as discount requests, deal sign-offs, and proposal reviews. Team members receive real-time notifications, ensuring faster collaboration and reduced delays. With approval automation in FairForce, managers can maintain oversight without micromanaging, while teams move forward confidently knowing decisions are tracked, transparent, and secure. This results in faster deal closures and better customer satisfaction.",
      img: "/approvel.png",
      reverse: false,
      icon: <CheckCircle className="w-10 h-10 text-[#2080bd] dark:text-[#2080bd]" />,
    },
    {
      title: "Blueprints",
      desc: "FairForce CRM empowers you to create reusable process blueprints that standardize how your business operates. From sales pipelines to marketing funnels, blueprints ensure every team member follows proven best practices. Automate repetitive tasks, replicate successful workflows, and keep customer journeys consistent across the organization. With FairForce blueprints, you save time, reduce errors, and build a scalable foundation for long-term business growth.",
      img: "/blueprint.png",
      reverse: true,
      icon: <FileText className="w-10 h-10 text-[#2080bd] dark:text-[#2080bd]" />,
    },
    {
      title: "Workflows",
      desc: "Work smarter with FairForce CRM workflows that automate critical processes across sales, marketing, and support. Trigger personalized follow-ups, send automated emails, assign tasks to the right team member, and update customer records instantly without manual effort. FairForce workflows reduce human error, save time, and increase productivity, helping your teams stay focused on building customer relationships rather than managing repetitive tasks.",
      img: "/workflow.png",
      reverse: false,
      icon: <Workflow className="w-10 h-10 text-[#2080bd] dark:text-[#2080bd]" />,
    },
  ];

  const FeaturesSection = () => {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 space-y-16">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 rounded-xl p-6 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Block */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image Block */}
            <div className="md:w-1/2 ">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            </div>
          </div>
        ))}
      </section>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-gray-900 dark:text-gray-100 
                bg-gradient-to-r from-blue-50 to-blue-100 
                dark:bg-gray-900 dark:bg-none"
      >
        <section className="mx-auto max-w-7xl px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold">
            Streamline Your Process Management
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl">
            Boost productivity, reduce inefficiencies, and keep your team
            aligned with powerful process automation tools — all in one
            platform.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link to="/auth/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 text-lg font-medium rounded-2xl border 
                     bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 
                     transition-colors duration-300"
              >
                Start Free Trial
              </motion.button>
            </Link>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <div>
        <section className="dark:bg-gray-900 bg-gray-100 ">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="text-3xl font-extrabold text-center mb-12  text-gray-900 dark:text-gray-100">
              Key Features of{" "}
              <span className="text-[#2080bd]">FairForce CRM</span>
            </h2>
            <FeaturesSection />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process_management;
