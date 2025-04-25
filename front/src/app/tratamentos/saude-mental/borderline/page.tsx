import Button from "@/app/components/Button";
import Text from "@/app/components/Text";
import { TreatmentContent } from "@/app/components/TreatmentContent";
import Image from "next/image";
import Link from "next/link";
import data from "@/app/data/borderline.json";

export default function BorderlinePage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <TreatmentContent
        data={data}
        imageSrc="/images/banner-borderline.png"
        imageAlt="Pessoa com os braços entrelaçados"
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
