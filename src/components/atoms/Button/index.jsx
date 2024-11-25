import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  textColor = "white",
  height = "p-2",
  width = "w-full",
  margin = "m-2",
  radius = "rounded-md",
  onClick,
  to = null,
}) => {
  const variantClasses = {
    blue: `bg-blue-500 border hover:bg-blue-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900 hover:border border-blue-900`,
    gray: `bg-gray-500 border hover:bg-gray-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900 hover:border border-gray-900`,
    red: `bg-red-500 border hover:bg-red-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-red-900 hover:border border-red-900`,
    green: `bg-green-500 border hover:bg-green-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-green-900 hover:border border-green-900`,
    yellow: `bg-yellow-500 border hover:bg-yellow-600 text-black hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900 hover:border border-yellow-900`,
    purple: `bg-purple-500 border hover:bg-purple-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900 hover:border border-purple-900`,
    orange: `bg-orange-500 border hover:bg-orange-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900 hover:border border-orange-900`,
    teal: `bg-teal-500 border hover:bg-teal-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900 hover:border border-teal-900`,
    pink: `bg-pink-500 border hover:bg-pink-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-pink-900 hover:border border-pink-900`,
    brown: `bg-brown-500 border hover:bg-brown-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-brown-900 hover:border border-brown-900`,
    cyan: `bg-cyan-500 border hover:bg-cyan-600 text-white hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900 hover:border border-cyan-900`,
    lime: `bg-lime-500 border hover:bg-lime-600 text-black hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-lime-900 hover:border border-lime-900`,
    glassmorphism: `
      bg-white/15
      backdrop-blur-lg
      border border-white/40
      hover:border-black/15
      hover:bg-white/5
      transition-all
      duration-300
      hover:shadow-lg
      hover:shadow-purple-900
    `,
    outline: `
      border border-blue-500
      text-blue-500
      hover:bg-blue-500
      hover:text-white
      transition-all
      duration-300
    `,
  };

  const buttonClasses = `
    ${variantClasses[variant] || variantClasses.primary}
    ${height}
    ${width}
    ${margin}
    ${radius}
    ${textColor}
    text-center
    transition-all
    duration-300
  `;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "glassmorphism",
    "outline",
  ]),
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  radius: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
