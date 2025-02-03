import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  as?: typeof Link;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  to,
  as: Component = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
    ghost: 'bg-transparent text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to && Component === Link) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
