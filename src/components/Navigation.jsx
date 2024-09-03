import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navigation = () => {
  return (
    <nav className="bg-golden-dark text-white p-4 sticky top-0 z-50 hidden md:block">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-1 hover:text-golden transition-colors duration-300 px-2 py-1 text-sm md:text-base"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;