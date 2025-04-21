import Section from "@/app/components/Section";
import Text from "@/app/components/Text";
import { TreatmentCard } from "@/app/components/TreatmentCard";

export default function SaudeMentalPage() {
  return (
    <main>
      <Section className="flex flex-col justify-center items-center gap-[32px]">
        <Text as="h1">Saúde mental</Text>
        <Text as="p">
          Na LIFE STAGES nos importamos com você, por esse motivo compartilhamos
          informações relevantes e de qualidade sobre alguns dos principais
          transtornos mentais com o intuito de auxiliar na identificação de
          sintomas, além de orientações aos pacientes e familiares.
        </Text>
        <ul>
          <li>
            <TreatmentCard
              title="Depressão"
              href="/tratamentos/saude-mental/depressao"
              imageSrc="/images/depressao.png"
            />
          </li>
        </ul>
      </Section>
    </main>
  );
}
