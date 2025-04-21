import Image from "next/image";
import Link from "next/link";
import Section from "../components/Section";
import Text from "../components/Text";

export default function TratamentosPage() {
  return (
    <main>
      <Section className="flex flex-col gap-[32px]">
        <Text as="h1">Tratamentos</Text>
        <Text as="p">
          Em nossa clínica, oferecemos tratamento em psiquiatria, psicologia e
          pediatria. Clique nas especialidades abaixo para mais informações:
        </Text>
        <div className="flex flex-col gap-[32px] w-full lg:flex-row">
          <div className="flex flex-col gap-[16px] bg-[#BEE7CF] rounded-[32px] p-[30px]">
            <div className="bg-white w-[80px] h-[80px] rounded-[16px] flex justify-center items-center">
              <Image
                src="/icons/brain.svg"
                alt="Icone de Cerebro"
                width={56}
                height={56}
                priority={false}
              />
            </div>
            <Text as="h2">Saúde mental</Text>
            <Text as="p">
              A saúde mental é fundamental para o bem-estar e a qualidade de
              vida. Profissionais qualificados atuam na prevenção, no
              diagnóstico e no tratamento dos transtornos mentais.
            </Text>
            <div>
              <Link
                href="/tratamentos/saude-mental"
                className="inline-flex gap-[14px] text-green-500 border-2 border-green-500 rounded-[32px] px-[20px] py-[8px]"
              >
                <Text weight="bold" color="green-500">
                  Saiba mais
                </Text>
                <Image
                  src="/icons/diagonal-arrow.svg"
                  alt="Icone de Flecha na Diagonal"
                  width={15}
                  height={15}
                  priority={false}
                />
              </Link>{" "}
            </div>
            <div>
              <Link
                href="/tagendamento"
                className="inline-flex gap-[14px] text-[green-500] border-2 border-green-500 rounded-[32px] px-[20px] py-[8px]"
              >
                <Text weight="bold" color="green-500">
                  Agendar consulta
                </Text>
                <Image
                  src="/icons/whatsapp2.svg"
                  alt="Icone de Flecha na Diagonal"
                  width={28}
                  height={28}
                  priority={false}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] bg-[#C4E7ED] rounded-[32px] p-[30px]">
            <div className="bg-white w-[80px] h-[80px] rounded-[16px] flex justify-center items-center">
              <Image
                src="/icons/stethoscope.svg"
                alt="Icone de stethoscope"
                width={56}
                height={56}
                priority={false}
              />
            </div>
            <Text as="h2" color="blue-500">
              Pediatria
            </Text>
            <Text as="p">
              O pediatra é um médico especializado na saúde de crianças e
              adolescentes. Ele é responsável por acompanhar o desenvolvimento
              físico, diagnosticar e tratar doenças, e orientar os pais. 
            </Text>
            <div>
              <Link
                href="/tratamentos/pediatria"
                className="inline-flex gap-[14px] text-[#2EA8C0] border-2 border-[#2EA8C0] rounded-[32px] px-[20px] py-[8px]"
              >
                <Text weight="bold" color="#2EA8C0">
                  Saiba mais
                </Text>
                <Image
                  src="/icons/diagonal-arrow-blue.svg"
                  alt="Icone de Flecha na Diagonal"
                  width={14}
                  height={14}
                  priority={false}
                />
              </Link>
            </div>
            <div>
              <Link
                href="/agendamento"
                className="inline-flex gap-[14px] text-[#2EA8C0] border-2 border-[#2EA8C0] rounded-[32px] px-[20px] py-[8px]"
              >
                <Text weight="bold" color="#2EA8C0">
                  Agendar consulta
                </Text>
                <Image
                  src="/icons/whatsapp2-blue.svg"
                  alt="Icone de Flecha na Diagonal"
                  width={28}
                  height={28}
                  priority={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
