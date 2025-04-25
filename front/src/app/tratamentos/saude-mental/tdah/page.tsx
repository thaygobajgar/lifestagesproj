import Button from "@/app/components/Button";
import Text from "@/app/components/Text";
import { TreatmentContent } from "@/app/components/TreatmentContent";
import Image from "next/image";
import Link from "next/link";
import depressionData from "@/app/data/tdah.json";

export default function TDAHPage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <TreatmentContent
        data={depressionData}
        imageSrc="/images/banner-tdah.png"
        imageAlt="Pessoa com as mãos na cabeça de frente para o notebook"
      />
      <Link href="/agendamento">
        <Button className="py-2 px-4 text-white bg-gradient-to-r from-aqua-500 via-transparent to-green-500 rounded-[32px]">
          <Text weight="bold" className="flex" color="white">
            Agende sua consulta{" "}
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
