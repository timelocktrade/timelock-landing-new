"use client";

import * as React from "react";

type GradientHeadingVariant = "primary" | "secondary";
type GradientHeadingSize = "sm" | "md" | "lg" | "xl" | "xxl";

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: GradientHeadingVariant;
  size?: GradientHeadingSize;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantToClasses: Record<GradientHeadingVariant, string> = {
  primary:
    "bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 text-transparent bg-clip-text",
  secondary:
    "bg-gradient-to-r from-white via-white/90 to-white/70 text-transparent bg-clip-text",
};

const sizeToClasses: Record<GradientHeadingSize, string> = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-4xl md:text-5xl",
  xxl: "text-4xl sm:text-5xl md:text-6xl",
};

export function GradientHeading({
  variant = "primary",
  size = "lg",
  as = "h2",
  className = "",
  children,
  ...rest
}: GradientHeadingProps) {
  const Component = as as React.ElementType;
  return (
    <Component
      className={[
        "font-display font-extrabold tracking-tight",
        variantToClasses[variant],
        sizeToClasses[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default GradientHeading;


