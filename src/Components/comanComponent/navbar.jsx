import React from 'react';

const NavBar = ({ onHamburgerClick }) => {
 
  return (
    <div className='bg-gray-300 mb-0.5 flex items-center'>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 rounded bg-gray-900 text-gray-200"
        onClick={onHamburgerClick}
        aria-label="Open sidebar"
      >
        <span className="block w-6 h-0.5 bg-gray-200 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-200 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-200"></span>
      </button>
      <span className="ml-2 ">navbar</span>
    </div>
  );
};

export default NavBar;