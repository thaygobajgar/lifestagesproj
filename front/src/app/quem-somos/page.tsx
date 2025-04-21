import Image from "next/image";
import Section from "../components/Section";
import Text from "../components/Text";

export default function QuemSomos() {
  return (
    <main>
      <Section className="flex flex-col gap-[40px] justify-center items-center w-full max-w-screen-xl">
        <Text as="h1" color="green-500">
          Quem somos
        </Text>
        <div className="w-full max-w-screen-xl mx-auto">
          <Image
            src="/images/foto-clinica.png"
            alt="Banner da Página Inicial"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <Text as="h1" color="green-500">
            Nossa clínica
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            condimentum dictum tincidunt. Praesent id ornare ante, sed posuere
            est. Aliquam eget aliquet sapien. Suspendisse mattis, ante vel
            bibendum placerat, lectus enim euismod augue, eu laoreet nibh nisi
            id purus. Aenean vestibulum lacus vel tincidunt mollis.
          </Text>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-full md:flex-row md:items-start md:gap-[40px]">
            <Image
              src="/images/drmarcio.png"
              alt="Foto do Dr. Márcio Paganatto"
              width={320}
              height={350}
            />{" "}
            <div className="flex flex-col justify-center items-center w-full gap-[24px]">
              <Text as="h3" color="green-500">
                Dr. Márcio Paganatto - Psiquiatra
              </Text>
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas condimentum dictum tincidunt. Praesent id ornare ante,
                sed posuere est. Aliquam eget aliquet sapien. Suspendisse
                mattis, ante vel bibendum placerat, lectus enim euismod augue,
                eu laoreet nibh nisi id purus. Aenean vestibulum lacus vel
                tincidunt mollis.
              </Text>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-full md:flex-row-reverse md:items-start md:gap-[72px]">
            <Image
              src="/images/drana.png"
              alt="Foto do Dr. Ana Meri"
              width={320}
              height={350}
            />
            <div className="flex flex-col justify-center items-center w-full gap-[24px]">
              <Text as="h3" color="green-500">
                Dra. Ana Meri - Pediatria
              </Text>
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas condimentum dictum tincidunt. Praesent id ornare ante,
                sed posuere est. Aliquam eget aliquet sapien. Suspendisse
                mattis, ante vel bibendum placerat, lectus enim euismod augue,
                eu laoreet nibh nisi id purus. Aenean vestibulum lacus vel
                tincidunt mollis.
              </Text>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-full md:flex-row md:items-start md:gap-[72px]">
            <Image
              src="/images/psicologa.png"
              alt="Foto do Dra. "
              width={320}
              height={350}
            />
            <div className="flex flex-col justify-center items-center w-full gap-[24px]">
              <Text as="h3" color="green-500">
                Dr. NOME NOME - Psicologa
              </Text>
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas condimentum dictum tincidunt. Praesent id ornare ante,
                sed posuere est. Aliquam eget aliquet sapien. Suspendisse
                mattis, ante vel bibendum placerat, lectus enim euismod augue,
                eu laoreet nibh nisi id purus. Aenean vestibulum lacus vel
                tincidunt mollis.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:flex-row md:gap-[24px]">
          <div className="bg-[#BEE7CF] flex flex-col gap-[16px] py-[40px] justify-center items-center w-full md:rounded-[32px]">
            <Image
              src="/icons/rocket.svg"
              alt="Icone de foguete"
              width={64}
              height={64}
              priority={false}
            />
            <Text as="h3" color="green-500">
              Missão
            </Text>
            <Text as="p" className="text-center" color="green-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
          <div className="bg-[#BEE7CF] flex flex-col gap-[16px] py-[40px] justify-center items-center w-full md:rounded-[32px]">
            <Image
              src="/icons/telescope.svg"
              alt="Icone de Telescópio"
              width={64}
              height={64}
              priority={false}
            />
            <Text as="h3" color="green-500">
              Visão
            </Text>
            <Text as="p" className="text-center" color="green-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
          <div className="bg-[#BEE7CF] flex flex-col gap-[16px] py-[40px] justify-center items-center w-full md:rounded-[32px]">
            <Image
              src="/icons/hearth.svg"
              alt="Icone de coração"
              width={64}
              height={64}
              priority={false}
            />
            <Text as="h3" color="green-500">
              Valores
            </Text>
            <Text as="p" className="text-center" color="green-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        </div>
      </Section>
    </main>
  );
}
