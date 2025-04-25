"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "./Text";

interface TreatmentCardProps {
  title: string;
  href: string;
  imageSrc: string;
}

export function TreatmentCard({ title, href, imageSrc }: TreatmentCardProps) {
  return (
    <Link href={href}>
      <div className="relative w-[182px] h-[182px] overflow-hidden group rounded-[12px] mx-auto">
        <Image src={imageSrc} alt={title} fill className="object-cover" />

        <div className="absolute inset-0 bg-[#3F3F3F]/80 group-hover:bg-[#2EA8C0]/60 transition-colors duration-300" />

        <Text
          as="p"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold"
        >
          {title}
        </Text>
      </div>
    </Link>
  );
}
