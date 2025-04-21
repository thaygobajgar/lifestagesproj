import { ReactNode, ElementType } from "react";

type Variant =
  | "title h1"
  | "title h2"
  | "title h3"
  | "headline h1"
  | "headline h2"
  | "body h1"
  | "body h2"
  | "body h3"
  | "bold body h1"
  | "button h1"
  | "button h2"
  | "button h3"
  | "label h1"
  | "label h2"
  | "bold label h2";

type TextProps = {
  variant?: Variant;
  as?: ElementType;
  className?: string;
  color?: "green" | "blue" | "aqua" | "black"; // Permitindo as cores que você especificou
  shade?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900; // Tom da cor
  children: ReactNode;
};

const fontMap: Record<string, string> = {
  title: "font-title",
  headline: "font-title",
  body: "font-sans",
  button: "font-sans",
  label: "font-sans",
  bold: "font-sans",
};

const sizeMap: Record<Variant, string> = {
  "title h1": "text-title-h1",
  "title h2": "text-title-h2",
  "title h3": "text-title-h3",
  "headline h1": "text-headline-h1",
  "headline h2": "text-headline-h2",
  "body h1": "text-body-h1",
  "body h2": "text-body-h2",
  "body h3": "text-body-h3",
  "bold body h1": "text-bold-body-h1",
  "button h1": "text-button-h1",
  "button h2": "text-button-h2",
  "button h3": "text-button-h3",
  "label h1": "text-label-h1",
  "label h2": "text-label-h2",
  "bold label h2": "text-bold-label-h2",
};

export function Texta({
  variant = "body h1",
  as: Tag = "p",
  className = "",
  color = "black", // Cor preta por padrão
  shade = 500, // Tom padrão
  children,
}: TextProps) {
  const [styleType] = variant.split(" ");
  const fontClass = fontMap[styleType] || "font-sans";
  const sizeClass = sizeMap[variant];

  // Aplique cor verde para qualquer título ou headline
  const colorClass = ["title", "headline"].some((type) =>
    variant.includes(type)
  )
    ? "text-green-500" // Cor verde para títulos e headlines
    : `text-${color}-${shade}`; // Cor personalizada para outros textos

  const isBold =
    ["h1", "h2", "h3"].includes(Tag as string) || variant.includes("bold");

  return (
    <Tag
      className={`${fontClass} ${sizeClass} ${
        isBold ? "font-bold" : ""
      } ${colorClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
