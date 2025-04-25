import Image from "next/image";
import Section from "./Section";
import Text from "./Text";

interface SectionListItem {
  id: string;
  name: string;
  description: string;
}

interface SectionBlock {
  title: string;
  description: string;
  list: SectionListItem[];
  advice: string;
}

interface PediatricData {
  title: string;
  description: string;
  definition?: SectionBlock;
  benefits?: SectionBlock;
  developmentPhases?: SectionBlock;
  guidance?: SectionBlock;
}

interface PediatricContentProps {
  data: PediatricData;
  imageSrc: string;
  imageAlt?: string;
}

export function PediatricContent({
  data,
  imageSrc,
  imageAlt,
}: PediatricContentProps) {
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

      <Text as="p">{data.description}</Text>

      {data.definition && (
        <div className="flex flex-col gap-[16px]">
          <Text as="h2">{data.definition.title}</Text>
          <Text as="p">{data.definition.description}</Text>
          <ul className="flex flex-col gap-[12px]">
            {data.definition.list.map((item) => (
              <li key={item.id} className="flex gap-2">
                <Text as="span" color="blue-500">
                  •
                </Text>
                <Text as="p">
                  <Text as="span" color="blue-500" weight="bold">
                    {item.name}:{" "}
                  </Text>
                  {item.description}
                </Text>
              </li>
            ))}
          </ul>
          {data.definition.advice && (
            <Text as="p">{data.definition.advice}</Text>
          )}
        </div>
      )}

      {data.benefits && (
        <div className="flex flex-col gap-[16px]">
          <Text as="h2">{data.benefits.title}</Text>
          <Text as="p">{data.benefits.description}</Text>
          <ul className="flex flex-col gap-[12px]">
            {data.benefits.list.map((item) => (
              <li key={item.id} className="flex gap-2">
                <Text as="span" color="blue-500">
                  •
                </Text>
                <Text as="p">
                  <Text as="span" color="blue-500" weight="bold">
                    {item.name}:{" "}
                  </Text>
                  {item.description}
                </Text>
              </li>
            ))}
          </ul>
          {data.benefits.advice && <Text as="p">{data.benefits.advice}</Text>}
        </div>
      )}

      {data.developmentPhases && (
        <div className="flex flex-col gap-[16px]">
          <Text as="h2">{data.developmentPhases.title}</Text>
          {data.developmentPhases.description && (
            <Text as="p">{data.developmentPhases.description}</Text>
          )}
          <ul className="flex flex-col gap-[12px]">
            {data.developmentPhases.list.map((item) => (
              <li key={item.id} className="flex gap-2">
                <Text as="span" color="blue-500">
                  •
                </Text>
                <Text as="p">
                  <Text as="span" color="blue-500" weight="bold">
                    {item.name}:{" "}
                  </Text>
                  {item.description}
                </Text>
              </li>
            ))}
          </ul>
          {data.developmentPhases.advice && (
            <Text as="p">{data.developmentPhases.advice}</Text>
          )}
        </div>
      )}

      {data.guidance && (
        <div className="flex flex-col gap-[16px]">
          <Text as="h2">{data.guidance.title}</Text>
          {data.guidance.description && (
            <Text as="p">{data.guidance.description}</Text>
          )}
          <ul className="flex flex-col gap-[12px]">
            {data.guidance.list.map((item) => (
              <li key={item.id} className="flex gap-2">
                <Text as="span" color="blue-500">
                  •
                </Text>
                <Text as="p">
                  <Text as="span" color="blue-500" weight="bold">
                    {item.name}:{" "}
                  </Text>
                  {item.description}
                </Text>
              </li>
            ))}
          </ul>
          {data.guidance.advice && <Text as="p">{data.guidance.advice}</Text>}
        </div>
      )}
    </Section>
  );
}
