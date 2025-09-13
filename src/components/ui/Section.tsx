import React from "react";
import { clsx } from "clsx";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "slate" | "cyan" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article" | "aside";
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className,
  containerClassName,
  background = "white",
  padding = "lg",
  as: Component = "section"
}) => {
  const backgroundClasses = {
    white: "bg-white",
    slate: "bg-slate-50",
    cyan: "bg-cyan-50",
    gradient: "bg-gradient-to-br from-slate-50 via-white to-cyan-50/30"
  };

  const paddingClasses = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16", 
    lg: "py-16 sm:py-24 lg:py-32",
    xl: "py-20 sm:py-32 lg:py-40"
  };

  return (
    <Component 
      className={clsx(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
};

export { Section };