import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-golden-dark text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">الوكالة الملكية</Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative left-0 right-0 top-full md:top-auto bg-golden-dark md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4 md:items-center`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-1 hover:text-golden transition-colors duration-300 px-2 py-1"
                onClick={() => setIsOpen(false)}
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