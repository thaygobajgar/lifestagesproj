import Section from "@/app/components/Section";
import Text from "@/app/components/Text";
import { TreatmentCard } from "@/app/components/TreatmentCard";

export default function PediatriaPage() {
  return (
    <main>
      <Section className="flex flex-col justify-center items-center gap-[32px] w-full max-w-screen-xl">
        <Text as="h1">Pediatria</Text>
        <Text as="p">
          Na LIFE STAGES nos importamos com você, por esse motivo compartilhamos
          informações relevantes e de qualidade sobre alguns dos principais
          transtornos mentais com o intuito de auxiliar na identificação de
          sintomas, além de orientações aos pacientes e familiares.
        </Text>
        <ul className="flex flex-wrap gap-[24px] justify-center">
          <li>
            <TreatmentCard
              title="Puericultura"
              href="/tratamentos/pediatria/puericultura"
              imageSrc="/images/banner-puericultura.jpg"
            />
          </li>
          <li>
            <TreatmentCard
              title="Neonatologia"
              href="/tratamentos/pediatria/neonatologia"
              imageSrc="/images/banner-neonatologia.jpg"
            />
          </li>
          <li>
            <TreatmentCard
              title="Imunizações"
              href="/tratamentos/pediatria/imunizacoes"
              imageSrc="/images/banner-imunizacoes.jpg"
            />
          </li>
          <li>
            <TreatmentCard
              title="Aleitamento Materno"
              href="/tratamentos/pediatria/aleitamento-materno"
              imageSrc="/images/banner-amamentacao.jpg"
            />
          </li>
          <li>
            <TreatmentCard
              title="Doenças Respiratórias na Criança"
              href="/tratamentos/pediatria/doencas-respiratorias"
              imageSrc="/images/banner-doencasRespiratorias.jpg"
            />
          </li>
          <li>
            <TreatmentCard
              title="Doenças Exantemáticas"
              href="/tratamentos/pediatria/doencas-exantematicas"
              imageSrc="/images/banner-exantema.jpg"
            />
          </li>
        </ul>
      </Section>
    </main>
  );
}
