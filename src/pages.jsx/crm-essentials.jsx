    import React from "react";
    import { motion } from "framer-motion";
    import { Link } from "react-router-dom";
    import {
    Users,
    TrendingUp,
    Workflow,
    CheckCircle,
    Building2,
    Briefcase,
    HeartHandshake,
    ShoppingCart,
    GraduationCap,
    Hospital,
    } from "lucide-react";
    const Essential = () => {

    // 1️⃣ Pillars Section Data
    const pillars = [
        {
        icon: <Users className="w-10 h-10 text-[#2080bd] dark:text-[#2080bd]" />,
        title: "Customer Relationships",
        desc: "Strong customer relationships are the foundation of a successful business. Build trust and improve retention with data-driven insights.",
        },
        {
        icon: <TrendingUp className="w-10 h-10 text-[#2080bd] dark:text-[#2080bd]" />,
        title: "Sales Growth",
        desc: "Drive sustainable growth by managing leads, tracking opportunities, and empowering sales teams to close more deals efficiently.",
        },
        {
        icon: <Workflow className="w-10 h-10 text-[#2080bd] dark:text-[#2080bd]" />,
        title: "Process Efficiency",
        desc: "Automate repetitive tasks and standardize workflows to save time, reduce errors, and keep your team focused on what matters most.",
        },
    ];

    // 3️⃣ Industry Solutions Data
    const industries = [
        { name: "Real Estate", icon: <Building2 className="w-8 h-8" /> },
        { name: "Corporate", icon: <Briefcase className="w-8 h-8" /> },
        { name: "Healthcare", icon: <Hospital className="w-8 h-8" /> },
        { name: "E-commerce", icon: <ShoppingCart className="w-8 h-8" /> },
        { name: "Education", icon: <GraduationCap className="w-8 h-8" /> },
        { name: "Consulting", icon: <HeartHandshake className="w-8 h-8" /> },
    ];

    return (
        <div
        className="text-gray-900 dark:text-gray-100 
                    bg-gradient-to-r from-blue-50 to-blue-100 
                    dark:bg-gray-900 dark:bg-none"
        >
        <section className="mx-auto max-w-5xl px-4 py-20 text-center ">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            CRM Essentials
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            CRM (Customer Relationship Management) essentials are the foundation 
            of building stronger customer connections and driving business growth. 
            From managing leads to tracking customer interactions and automating 
            workflows, CRM helps streamline processes, improve collaboration, 
            and deliver a more personalized customer experience.
            </p>
            {/* Button */}
            <div className="mt-8">
               <Link to="/auth/signin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-medium rounded-2xl shadow-md
                       bg-[#2080bd] text-white 
                       hover:bg-transparent hover:text-[#2080bd] hover:border-[#2080bd]
                       border border-transparent
                       transition-all duration-300"
          >
             Start Free Trial
          </motion.button>
        </Link>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Pillars of Successful Business
            </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    {pillars.map((item, index) => (
        <div
        key={index}
        className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-900 transition duration-300 transform"
        >
        <div className="flex justify-center mb-4 text-[#2080bd] dark:text-[#2080bd] transition duration-300 group-hover:text-[#2080bd]">
            {item.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-900 dark:text-gray-100">{item.desc}</p>
        </div>
    ))}
    </div>

        </section>

        {/* 2️⃣ Why FairForse CRM? */}
        <section className="mx-auto max-w-7xl px-4 py-20 flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Why <span className="text-[#2080bd]">FairForse CRM?</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                FairForse CRM is designed to help businesses of all sizes build
                better relationships, streamline operations, and grow faster. It
                centralizes your customer data, automates workflows, and provides
                actionable insights.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Centralized customer management
                </li>
                <li className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Data-driven lead scoring
                </li>
                <li className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Seamless workflow automation
                </li>
            </ul>
            </div>

    
            <div className="md:w-1/2">
            <img
                src="https://img.freepik.com/free-vector/crm-illustration-concept_114360-700.jpg"
                alt="FairForce CRM"
                className="rounded-2xl shadow-lg"
            />
            </div>
        </section>

        {/* 3️⃣ Industry Solutions */}
    <section className="mx-auto max-w-7xl px-4 py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
        Industry Solutions
    </h2>
    <div className="grid gap-3 grid-cols-2 lg:grid-cols-5">
        {industries.map((industry, index) => (
        <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md 
                    hover:shadow-xl hover:bg-blue-50 
                    dark:hover:bg-gray-800 
                    transition duration-300 flex items-center gap-2 p-3 transform hover:scale-105"
        >
            <div className="text-[#2080bd] dark:text-[#2080bd] text-3xl transition duration-300 group-hover:scale-110">
            {industry.icon}
            </div>
            <span className="font-medium">{industry.name}</span>
        </div>
        ))}
    </div>
    </section>
    {/* call to action */}
<section className=" text-gray-900 dark:text-gray-100 
                    bg-gradient-to-r from-blue-50 to-blue-100 
                    dark:bg-gray-900 dark:bg-none py-20 border-y  border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          CTA Call To Action
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 mb-8">
          Start your <span className="font-semibold text-[#2080bd]">free trial</span> today with
          <span className="font-bold text-[#2080bd]"><br /> FairForce CRM</span> and
          experience smarter business management.
        </p>

        {/* Button */}
        <Link to="/auth/signin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-medium rounded-2xl shadow-md
                       bg-[#2080bd] text-white 
                       hover:bg-transparent hover:text-[#2080bd] hover:border-[#2080bd]
                       border border-transparent
                       transition-all duration-300"
          >
             Start Free Trial
          </motion.button>
        </Link>
      </div>
    </section>

        </div>
    );
    };

    export default Essential;
