"use client";

import React from "react";
import { clsx } from "clsx";

export interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  hoverEffect = true,
  className,
  style,
  children,
}) => {
  return (
    <div
      className={clsx(
        "group relative bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 p-8",
        hoverEffect && "hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200",
        className
      )}
      style={style}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/50 rounded-2xl transition-all duration-300"></div>
      
      <div className="relative">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        
        {/* Additional content */}
        {children}
      </div>
    </div>
  );
};

export default Card;
