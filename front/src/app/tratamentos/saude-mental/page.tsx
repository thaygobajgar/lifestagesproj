import Section from "@/app/components/Section";
import Text from "@/app/components/Text";
import { TreatmentCard } from "@/app/components/TreatmentCard";

export default function SaudeMentalPage() {
  const tratamentos = [
    {
      title: "Depressão",
      href: "/tratamentos/saude-mental/depressao",
      imageSrc: "/images/depressao.png",
    },
    {
      title: "Burnout",
      href: "/tratamentos/saude-mental/burnout",
      imageSrc: "/images/banner-burnout.png",
    },
    {
      title: "Ansiedade",
      href: "/tratamentos/saude-mental/ansiedade",
      imageSrc: "/images/banner-ansiedade.png",
    },
    {
      title: "Borderline",
      href: "/tratamentos/saude-mental/borderline",
      imageSrc: "/images/banner-borderline.png",
    },
    {
      title: "Compulsão Alimentar",
      href: "/tratamentos/saude-mental/compulsao-alimentar",
      imageSrc: "/images/banner-compulsaoAlimentar.png",
    },
    {
      title: "Esquizofrenia",
      href: "/tratamentos/saude-mental/esquizofrenia",
      imageSrc: "/images/banner-esquizofrenia.png",
    },
    {
      title: "Jogo Patológico",
      href: "/tratamentos/saude-mental/jogo-patologico",
      imageSrc: "/images/banner-jogoPatologico.png",
    },
    {
      title: "TDAH",
      href: "/tratamentos/saude-mental/tdah",
      imageSrc: "/images/banner-tdah.png",
    },
    {
      title: "TEA",
      href: "/tratamentos/saude-mental/tea",
      imageSrc: "/images/banner-tea.png",
    },
    {
      title: "Transtorno por uso de substancias",
      href: "/tratamentos/saude-mental/transtorno-por-uso-de-substancias",
      imageSrc: "/images/banner-substancias.png",
    },
    {
      title: "Medicina Endocanabinoide",
      href: "/tratamentos/saude-mental/endocanabinoide",
      imageSrc: "/images/banner-endocanabinoide.png",
    },
    {
      title: "Tratamento da Depressão com Cetamina",
      href: "/tratamentos/saude-mental/cetamina",
      imageSrc: "/images/banner-cetamina.png",
    },
    {
      title: "Transtorno Bipolar",
      href: "/tratamentos/saude-mental/transtorno-bipolar",
      imageSrc: "/images/banner-transtornoBipolar.png",
    },
    {
      title: "Psicofobia",
      href: "/tratamentos/saude-mental/psicofobia",
      imageSrc: "/images/banner-psicofobia.png",
    },
  ];
  return (
    <main>
      <Section className="flex flex-col justify-center items-center gap-[32px] w-full max-w-screen-xl">
        <Text as="h1">Saúde mental</Text>
        <Text as="p">
          Na LIFE STAGES nos importamos com você, por esse motivo compartilhamos
          informações relevantes e de qualidade sobre alguns dos principais
          transtornos mentais com o intuito de auxiliar na identificação de
          sintomas, além de orientações aos pacientes e familiares.
        </Text>
        <div className="flex justify-center items-center w-full">
          <ul className="flex flex-wrap gap-[24px]">
            {tratamentos.map((item) => (
              <li key={item.href}>
                <TreatmentCard
                  title={item.title}
                  href={item.href}
                  imageSrc={item.imageSrc}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
