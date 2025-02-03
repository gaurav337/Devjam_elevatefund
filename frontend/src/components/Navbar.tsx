import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import Logo from './Logo';
import { Icons } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/investor-hub"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Investor Hub
            </Link>
            <Link
              to="/browse-projects"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Browse Projects
            </Link>
            <Link
              to="/success-stories"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Success Stories
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button onClick={handleLogout} variant="ghost">
                  Log Out
                </Button>
                <Button variant="primary">Dashboard</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Start Your Campaign</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <Icons.X className="h-6 w-6 text-foreground/60" />
              ) : (
                <Icons.Menu className="h-6 w-6 text-foreground/60" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden py-4 px-4 bg-background border-b border-border"
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/how-it-works"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/investor-hub"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Investor Hub
            </Link>
            <Link
              to="/browse-projects"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Browse Projects
            </Link>
            <Link
              to="/success-stories"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Success Stories
            </Link>

            {user ? (
              <div className="flex flex-col space-y-2">
                <Button onClick={handleLogout} variant="ghost">
                  Log Out
                </Button>
                <Button variant="primary">Dashboard</Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/login">
                  <Button variant="ghost" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" className="w-full">
                    Start Your Campaign
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
