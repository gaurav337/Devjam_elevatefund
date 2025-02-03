import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useAuth } from "../contexts/AuthContext";
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    if (theme === "light") {
      return <Moon className="h-5 w-5 text-gray-600" />;
    } else if (theme === "dark") {
      return <Sun className="h-5 w-5 text-gray-300" />;
    } else {
      return <Laptop className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/how-it-works"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              How it Works
            </Link>
            <Link
              to="/investor-hub"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Investor Hub
            </Link>
            <Link
              to="/browse-projects"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Browse Projects
            </Link>
            <Link
              to="/success-stories"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Success Stories
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
                <Button
                  variant="primary"
                  to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/investor-hub'}
                  as={Link}
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  to="/login"
                  as={Link}
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  to="/signup"
                  as={Link}
                >
                  Start Your Campaign
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              How it Works
            </Link>
            <Link
              to="/investor-hub"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Investor Hub
            </Link>
            <Link
              to="/browse-projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Browse Projects
            </Link>
            <Link
              to="/success-stories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Success Stories
            </Link>

            {user ? (
              <>
                <Link
                  to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/investor-hub'}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-700 hover:bg-gray-50 dark:text-indigo-400 dark:hover:text-indigo-300 dark:hover:bg-gray-800"
                >
                  Start Your Campaign
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
