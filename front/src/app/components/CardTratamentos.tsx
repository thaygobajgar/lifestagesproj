// src/components/CardTratamentos.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "./Text";

interface CardTratamentosProps {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
  className?: string;
}

export const CardTratamentos = ({
  href,
  imageSrc,
  alt,
  title,
  className = "",
}: CardTratamentosProps) => {
  return (
    <Link href={href} className="flex justify-center items-center">
      <div
        className={`relative w-full h-[88px] md:h-[576px] overflow-hidden rounded-[32px] ${className}`}
      >
        {/* Imagem de fundo */}
        <Image
          src={imageSrc}
          alt={alt}
          width={464}
          height={576}
          className="w-full h-full object-cover"
        />

        {/* Sombra por cima */}
        <div className="absolute inset-0 bg-black/40 hover:bg-blue-400/30 transition-colors duration-300" />

        {/* Texto por cima */}
        <div className="absolute bottom-4 left-4 flex justify-end items-center w-[90%]">
          <Text as="p" size="text-lg" className="text-white" weight="bold">
            {title}
          </Text>{" "}
          <Image
            src="/icons/check.svg"
            alt="Check"
            width={24}
            height={24}
            priority={false}
          />
        </div>
      </div>
    </Link>
  );
};
