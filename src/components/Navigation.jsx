import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navigation = () => {
  return (
    <nav className="bg-golden-dark text-white p-4">
      <ul className="flex justify-center space-x-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="flex items-center space-x-2 hover:text-golden">
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;