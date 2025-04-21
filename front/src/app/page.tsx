import Image from "next/image";

import Link from "next/link";
import Section from "./components/Section";
import Text from "./components/Text";
import Button from "./components/Button";
import { CardTratamentos } from "./components/CardTratamentos";

export const metadata = {
  title: "LifeStages | Cuidando da sua saúde em todas as fases",
  description:
    "Conheça a LifeStages, clínica especializada em saúde integral com profissionais de diversas áreas para todas as fases da vida.",
  keywords: [
    "Clínica médica",
    "Saúde da família",
    "LifeStages",
    "Agendamento online",
    "Tratamentos médicos",
  ],
  openGraph: {
    title: "LifeStages | Saúde integral",
    description:
      "Cuidamos de você em todas as fases da vida com uma equipe completa de especialistas.",
    url: "https://lifestages.com.br",
    siteName: "LifeStages",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "LifeStages clínica médica",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-[40px]">
      {/* Banner */}
      <div className="w-full max-w-screen-xl mx-auto h-[320px] lg:h-[440px] overflow-hidden relative">
        <Image
          src="/images/banner-home.png"
          alt="Banner da Página Inicial"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Seção Quem Somos */}
      <Section className="text-center bg-[#BEE7CF] flex flex-col gap-[40px]">
        <Text as="h1" size="text-3xl" weight="bold">
          Quem somos
        </Text>
        <div className="flex flex-col gap-[40px]">
          <div className="w-[80%] max-w-[464px] mx-auto">
            <Image
              src="/images/quem-somos-img.png"
              alt="Descrição da imagem"
              width={464}
              height={576}
              className="w-full h-auto rounded-[32px]"
            />
          </div>
          <div className="flex flex-col gap-[40px]">
            <Text as="p" size="text-lg" className="mt-4" color="green-500">
              Bem-vindo(a) à Life Stages, uma clínica dedicada ao cuidado da
              saúde mental e infantil, localizada na Praia dos Sonhos, em
              Itanhaém, SP. Somos Márcio Christian Paganatto e Ana Meri Possan
              Paganatto, médicos apaixonados por nossas especialidades –
              psiquiatria e pediatria, respectivamente – e unidos por uma
              missão: oferecer atendimento humanizado e especializado para todas
              as fases da vida, desde a infância até a idade adulta. Nossa
              história é feita de esforço, aprendizado e amor pela medicina, e
              queremos compartilhá-la com você.
            </Text>
            <Link href="/quem-somos">
              <Button className="py-2 w-[180px] md:w-[260px] px-4rounded-md text-white bg-gradient-to-r from-aqua-500 via-transparent to-green-500 rounded-[32px]">
                <Text
                  weight="bold"
                  className="flex justify-center"
                  color="white"
                >
                  Saiba mais{" "}
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
          </div>
        </div>
      </Section>

      {/* Seção Tratamentos */}
      <Section className="py-[40px] flex flex-col gap-[40px] rounded-[32px] shadow-custom justify-center items-center">
        <Text as="h1" size="text-3xl" color="aqua-500" weight="bold">
          Tratamentos
        </Text>

        <Text
          as="p"
          size="text-lg"
          className="mt-4 text-center"
          color="#646363"
        >
          Em nossa clínica, oferecemos tratamento em psiquiatria e pediatria.
          Clique nas especialidades abaixo para mais informações:
        </Text>
        <div className="mt-6 flex flex-col gap-4 md:flex-row w-full max-w-screen-xl mx-auto px-4">
          <div>
            <CardTratamentos
              href="/tratamentos/saude-mental"
              imageSrc="/images/saude-mental.jpg"
              alt="Saúde Mental"
              title="SAÚDE MENTAL"
            />
          </div>
          <div className="">
            <CardTratamentos
              href="/tratamentos/pediatria"
              imageSrc="/images/pediatria.jpg"
              alt="Pediatria"
              title="PEDIATRIA"
            />
          </div>
        </div>
      </Section>

      {/* Seção Agendamento */}
      <Section className="py-[40px] flex flex-col gap-[40px]">
        <Text as="h1" size="text-3xl">
          Agende sua consulta
        </Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.708117072637!2d-46.804978375014485!3d-24.194165958016555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d569f7ccb017%3A0xbb0ab43c8a2bb446!2sR.%20Leopoldo%20Diz%2C%2022%20-%20Praia%20dos%20Sonhos%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1745095441820!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          className="rounded-xl border-0 w-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-[16px]">
          <Text as="p" size="text-lg">
            Onde nos encontrar:
          </Text>
          <div className="flex gap-[16px]">
            <img
              src="/icons/location-icon.svg"
              alt="Telefone"
              width={32}
              height={32}
              className="inline-block mr-2"
            />
            <Text as="p" size="text-lg" className="inline">
              Rua Leopoldo Diz, 22 Praia do Sonho, Itanhaém
            </Text>
          </div>
          <div className="flex gap-[16px]">
            <img
              src="/icons/phone-icon.svg"
              alt="Telefone"
              width={32}
              height={32}
              className="inline-block mr-2"
            />
            <div className="inline">
              <Text as="p" size="text-lg">
                (13) xxxx-xxxx
              </Text>
              <Text as="p" size="text-lg">
                (13) xxxxx-xxxx
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* Imagem do mapa ou link do Google Maps */}
          <Link href="/agendamento">
            <Button className="py-2 px-4 text-white bg-gradient-to-r from-aqua-500 via-transparent to-green-500 rounded-[32px]">
              <Text weight="bold" className="flex" color="white">
                Clique para agendar{" "}
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
        </div>
      </Section>
    </main>
  );
}
