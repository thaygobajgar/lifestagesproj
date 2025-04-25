import Section from "@/app/components/Section";
import Text from "@/app/components/Text";
import { TreatmentCard } from "@/app/components/TreatmentCard";

export default function SaudeMentalPage() {
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
        <ul className="flex flex-wrap gap-[24px]">
          <li>
            <TreatmentCard
              title="Depressão"
              href="/tratamentos/saude-mental/depressao"
              imageSrc="/images/depressao.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Burnout"
              href="/tratamentos/saude-mental/burnout"
              imageSrc="/images/banner-burnout.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Ansiedade"
              href="/tratamentos/saude-mental/ansiedade"
              imageSrc="/images/banner-ansiedade.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Borderline"
              href="/tratamentos/saude-mental/borderline"
              imageSrc="/images/banner-borderline.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Compulsão Alimentar"
              href="/tratamentos/saude-mental/compulsao-alimentar"
              imageSrc="/images/banner-compulsaoAlimentar.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Esquizofrenia"
              href="/tratamentos/saude-mental/esquizofrenia"
              imageSrc="/images/banner-esquizofrenia.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Jogo Patológico"
              href="/tratamentos/saude-mental/jogo-patologico"
              imageSrc="/images/banner-jogoPatologico.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="TDAH"
              href="/tratamentos/saude-mental/tdah"
              imageSrc="/images/banner-tdah.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="TEA"
              href="/tratamentos/saude-mental/tea"
              imageSrc="/images/banner-tea.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Transtorno por uso de substancias"
              href="/tratamentos/saude-mental/transtorno-por-uso-de-substancias"
              imageSrc="/images/banner-substancias.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Medicina Endocanabinoide"
              href="/tratamentos/saude-mental/endocanabinoide"
              imageSrc="/images/banner-endocanabinoide.png"
            />
          </li>
          <li>
            <TreatmentCard
              title="Tratamento da Depressão com Cetamina"
              href="/tratamentos/saude-mental/cetamina"
              imageSrc="/images/banner-cetamina.png"
            />
          </li>
        </ul>
      </Section>
    </main>
  );
}
