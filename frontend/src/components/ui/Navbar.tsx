'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { User, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function Navbar() { 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      backgroundColor: '#ffffff', 
      transition: { type: 'spring', damping: 20, stiffness: 300 }
    },
    scrolled: {
      borderRadius: '24px',
      margin: '0.75rem auto',
      width: typeof window !== 'undefined' && window.innerWidth >= 768 ? '50vw' : '80vw',
      backgroundColor: '#ffffff',
      backdropFilter: 'blur(0px)', 
      boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.1)',
      transition: { 
        type: 'spring', 
        damping: 15, 
        stiffness: 200,
        bounce: 0.4
      }
    }
  };
  

  return (
    <motion.header
      initial="hidden"
      animate={['visible', isScrolled ? 'scrolled' : '']}
      variants={navVariants}
      className="fixed inset-x-0 top-0 z-50 w-full mx-auto md:w-[70vw]"
    >
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.svg" alt="logo" width={150} height={50} />
          </motion.div>
        </Link>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Notification Icon - always visible */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </motion.button>

          {/* Profile Avatar - only shown when session exists */}
          
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="User profile"
            >
              <User className="h-5 w-5" />
            </motion.button>
        
        </div>
      </nav>
    </motion.header>
  );
}