import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-lg active:scale-95",
        secondary: 
          "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md",
        "secondary-white": 
          "bg-white text-cyan-600 border-2 border-white hover:bg-gray-50 hover:text-cyan-700 shadow-lg hover:shadow-xl",
      },
      size: {
        sm: "px-4 py-2 text-sm h-9",
        md: "px-6 py-3 text-base h-11", 
        lg: "px-8 py-4 text-lg h-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external = false, ...props }, ref) => {
    const classes = clsx(buttonVariants({ variant, size, className }));
    
    if (href) {
      return (
        <a
          className={classes}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {props.children}
        </a>
      );
    }
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
