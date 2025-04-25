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
        {/* Imagem de fundo */}
        <Image
          src="/images/homepage.png"
          alt="Banner da Página Inicial"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay azul com degrade */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/30 to-transparent z-10" />

        {/* Texto acima do overlay */}
        <div className="absolute inset-0 flex items-center justify-start px-8 z-20">
          <h1 className="text-white text-2xl md:text-4xl font-bold max-w-[40%]">
            Cuidando de Todas as Fases com Empatia e Ciência
          </h1>
        </div>
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
              Olá, seja bem-vindo à nova proposta de tratamento e acompanhamento
              em Pediatria, Psiquiatria e Saúde Mental. Seja bem-vindo à LIFE
              STAGES!!! <br></br>Uma clínica com a missão de levar o que há de
              melhor e mais atual na Saúde Mental e Saúde Infanto-Juvenil. Nossa
              clínica tem como objetivo proporcionar um atendimento de
              excelência em saúde mental e saúde infanto-juvenil, oferecendo
              tratamentos atualizados e baseados em evidências científicas.
              Trabalhamos para promover o bem-estar integral de nossos
              pacientes, apoiando-os em cada fase de suas vidas e proporcionando
              um ambiente acolhedor e seguro.
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
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:justify-center w-full max-w-screen-xl mx-auto px-4">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.354116515735!2d-46.80782288987656!3d-24.194374385061206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d569f7e1befd%3A0x4150e922deb196d8!2sR.%20Leopoldo%20Diz%2C%20403%20-%20Praia%20dos%20Sonhos%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1745523530933!5m2!1spt-BR!2sbr"
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
              Rua Leopoldo Diz, 403 Praia do Sonho, Itanhaém
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
                (13)3422-5805
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
