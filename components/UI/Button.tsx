import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3.5 rounded-full font-medium transition-all duration-300 active:scale-95 text-sm tracking-wide uppercase shadow-md hover:shadow-lg";
  
  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 border border-transparent",
    outline: "bg-transparent text-gold-600 border border-gold-500 hover:bg-gold-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};