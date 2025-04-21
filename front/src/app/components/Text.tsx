// components/Text.tsx
import React from "react";

interface TextProps {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  color?: string;
  weight?: "normal" | "medium" | "semibold" | "bold";
  size?: string;
  className?: string;
}

export default function Text({
  children,
  as = "p",
  color,
  weight = "normal",
  size,
  className = "",
}: TextProps) {
  const Tag = as;

  // Define estilos padrão
  const isHeading = /^h[1-6]$/.test(as);
  const defaultColor = isHeading ? "text-green-500" : "text-black";
  const defaultWeight = isHeading ? "font-bold" : "font-normal";

  // Tamanhos responsivos padrão se `size` não for informado
  const responsiveSize = size || getDefaultSize(as);

  // Define cor final
  const colorClass = color?.startsWith("#")
    ? ""
    : color
    ? `text-${color}`
    : defaultColor;

  const style = color?.startsWith("#") ? { color } : undefined;

  return (
    <Tag
      className={`${colorClass} ${responsiveSize} ${weightToClass(
        weight || defaultWeight
      )} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}

function getDefaultSize(as: string): string {
  switch (as) {
    case "h1":
      return "text-2xl md:text-3xl lg:text-5xl";
    case "h2":
      return "text-xl md:text-2xl lg:text-4xl";
    case "h3":
      return "text-lg md:text-xl lg:text-3xl";
    case "h4":
      return "text-base md:text-lg lg:text-2xl";
    case "h5":
      return "text-sm md:text-base lg:text-lg";
    case "h6":
      return "text-xs md:text-sm lg:text-base";
    case "span":
    case "p":
    default:
      return "text-sm md:text-base lg:text-lg";
  }
}

function weightToClass(weight: string) {
  switch (weight) {
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    case "normal":
    default:
      return "font-normal";
  }
}
