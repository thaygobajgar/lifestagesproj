import Button from "@/app/components/Button";
import Text from "@/app/components/Text";
import Image from "next/image";
import Link from "next/link";
import data from "@/app/data/neonatologia.json";
import { PediatricContent } from "@/app/components/PedriatricContent";

export default function NeonatologiaPage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <PediatricContent
        data={data}
        imageSrc="/images/banner-neonatologia.jpg"
        imageAlt="Criança com exantema sendo examinada por médica"
      />
      <Link href="/agendamento">
        <Button className="py-2 px-4 text-white bg-gradient-to-r from-aqua-500 via-transparent to-green-500 rounded-[32px]">
          <Text weight="bold" className="flex items-center gap-2" color="white">
            Agende sua consulta
            <Image
              src="/icons/check.svg"
              alt="Check"
              width={24}
              height={24}
              priority={false}
            />
          </Text>
        </Button>
      </Link>
    </main>
  );
}
