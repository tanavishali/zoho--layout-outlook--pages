import React from "react";
import { FaBeer } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { CiAt, CiAlignCenterH } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
 let sidebarVariants = [
    { icon: <FaBeer />, label: "Troubleshooting", path: "troubleshooting" },
    { icon: <FcBusinessContact />, label: "FAQs", path: "faqs" },
    { icon: <IoMdContact />, label: "Contact Support", path: "contact" },
    { icon: <CiAt />, label: "Process Management", path: "process_management" },
    { icon: <CiAlignCenterH />, label: "CRM Essentials", path: "crm-essential" },
  ];
  console.log(sidebarVariants[0].icon);
let num=[1,2,3,4,5,6,7,8,9, 10];

  return (
    <div>
    <div>
       {sidebarVariants.map((value, index) => (
    <ul key={index} className="">
      <li>
        <Link to={value.path} className="flex items-center space-x-2 bg-amber-400 pb-1">
          <span>{value.icon}</span>
          <span>{value.label}</span>
        </Link>
       
      </li>
    </ul>
  ))}
  <div><h1>login i jnauhbahusncjiasncinasud</h1></div>
    </div>

      <div className="flex min-h-screen bg-gray-900 text-gray-300">
        {/* Sidebar */}

        <div
          className={`
            fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gray-900 border-r border-gray-300 p-4 z-10
            transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:w-1/4 md:max-w-none
          `}
        >
          <h1 className="text-xl font-bold mb-4">Help Center</h1>
          <nav className="flex flex-col space-y-2">
            <Link
              to="troubleshooting"
              className="hover:bg-gray-600 pb-1"
              onClick={() => setOpen(false)}
            >
              Troubleshooting
            </Link>
            <Link
              to="faqs"
              className="hover:bg-gray-600 pb-1"
              onClick={() => setOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="contact"
              className="hover:bg-gray-600 pb-1"
              onClick={() => setOpen(false)}
            >
              Contact Support
            </Link>
            <Link
              to="process_management"
              className="hover:bg-gray-600 pb-1"
              onClick={() => setOpen(false)}
            >
              Process Management
            </Link>
            <Link
              to="crm-essential"
              className="hover:bg-gray-600 pb-1"
              onClick={() => setOpen(false)}
            >
              crm-essential{" "}
            </Link>
          </nav>
        </div>

        {/* Overlay for mobile */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-0 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 md:ml-0 ml-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
