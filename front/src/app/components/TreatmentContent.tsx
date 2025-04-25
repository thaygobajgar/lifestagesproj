import Image from "next/image";
import Section from "./Section";
import Text from "./Text";

interface SymptomOrTreatmentItem {
  id: string;
  name: string;
  description: string;
}

interface TreatmentData {
  title: string;
  description: string;
  howItWorks?: {
    description?: string;
    list?: SymptomOrTreatmentItem[];
    advice?: string;
  };
  symptoms: {
    description: string;
    list: SymptomOrTreatmentItem[];
  };
  diagnosticCriteria?: string;
  courseOfDisease?: string;
  treatment: {
    description: string;
    list: SymptomOrTreatmentItem[];
    advice?: string;
  };
  patientAdvice: string;
}

interface TreatmentContentProps {
  data: TreatmentData;
  imageSrc: string;
  imageAlt?: string;
}

export function TreatmentContent({
  data,
  imageSrc,
  imageAlt,
}: TreatmentContentProps) {
  return (
    <Section className="flex flex-col gap-[24px]">
      <Text as="h1" className="text-center">
        {data.title}
      </Text>

      <div className="w-full max-w-screen-xl mx-auto">
        <Image
          src={imageSrc}
          alt={imageAlt || ""}
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div>
        <Text as="p">{data.description}</Text>
      </div>

      <div className="flex flex-col gap-[24px]">
        <Text as="h2">Sintomas</Text>
        <Text as="p">{data.symptoms.description}</Text>
      </div>

      <ul className="flex flex-col gap-[24px]">
        {data.symptoms.list.map((item) => (
          <li key={item.id} className="flex gap-[4px]">
            <Text as="span" color="blue-500">
              •{" "}
            </Text>
            <Text as="p">
              <Text as="span" color="blue-500" weight="bold">
                {item.name}:
              </Text>
              {item.description}
            </Text>
          </li>
        ))}
        <Text as="p">{data.diagnosticCriteria}</Text>
      </ul>

      {data.courseOfDisease && (
        <div className="flex flex-col gap-[24px]">
          <Text as="h2">Curso da doença</Text>
          <Text as="p">{data.courseOfDisease}</Text>
        </div>
      )}

      <div className="flex flex-col gap-[24px]">
        {data.treatment.description && (
          <>
            <Text as="h2">Tratamento</Text>
            <Text as="p">{data.treatment.description}</Text>
          </>
        )}
        <ul className="flex flex-col gap-[24px]">
          {data.treatment.list.map((item) => (
            <li key={item.id} className="flex gap-[4px]">
              <Text as="span" color="blue-500">
                •{" "}
              </Text>
              <Text as="p">
                <Text as="span" color="blue-500" weight="bold">
                  {item.name}:
                </Text>{" "}
                {item.description}
              </Text>
            </li>
          ))}
          <Text as="p">{data.treatment?.advice}</Text>
        </ul>

        <div>
          {data.patientAdvice && (
            <>
              <Text as="h3">Orientação aos pacientes</Text>
              <Text as="p">{data.patientAdvice}</Text>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
