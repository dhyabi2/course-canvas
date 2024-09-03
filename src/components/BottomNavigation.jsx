import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const BottomNavigation = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-golden-dark text-white p-2 z-50">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link 
              to={item.to} 
              className="flex flex-col items-center hover:text-golden transition-colors duration-300"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;