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
          <Text as="h1" color="green-500" className="">
            Nossa clínica
          </Text>
          <Text as="p" size="text-sm md:text-base lg:text-base">
            Bem-vindo(a) à Life Stages, uma clínica dedicada ao cuidado da saúde
            mental e infantil, localizada na Praia dos Sonhos, em Itanhaém, SP.
            Somos Márcio Christian Paganatto e Ana Meri Possan Paganatto,
            médicos apaixonados por nossas especialidades – psiquiatria e
            pediatria, respectivamente – e unidos por uma missão: oferecer
            atendimento humanizado e especializado para todas as fases da vida,
            desde a infância até a idade adulta. <br />
            Nossa história é feita de esforço, aprendizado e amor pela medicina,
            e queremos compartilhá-la com você.
          </Text>
        </div>

        {/* DR. MÁRCIO */}
        <div className="flex flex-col justify-center items-center w-full md:flex-row md:items-start md:gap-[40px] mb-[40px]">
          <div className="relative w-full max-w-[320px] h-[350px]">
            <Image
              src="/images/medico1.jpeg"
              alt="Foto do Dr. Márcio Paganatto"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start w-full gap-[24px]">
            <Text as="h3" color="green-500">
              Dr. Márcio Christian Paganatto
            </Text>
            <Text as="p">
              Médico Psiquiatra -
              <span className="text-[12px] text-gray-500">
                CRM/ SP: 146.872 - RQE:126.610
              </span>
            </Text>{" "}
            <Text as="p" size="text-sm md:text-base lg:text-base">
              Sou natural de Capivari, São Paulo, e cresci na pequena Rafard,
              onde passei minha infância e adolescência. Filho de pais
              comerciantes e neto de avós mecânicos, aprendi cedo o valor do
              trabalho e da dedicação. <br />
              Estudei em escolas públicas e, em busca do meu sonho, formei-me em
              Medicina pela Fundação Barceló, em Buenos Aires, Argentina, em
              2004, onde também iniciei minha carreira. Revalidei meu diploma
              pela Universidade Federal do Ceará em 2007 e explorei áreas como
              cardiologia e nutrologia, com pós-graduações pela PUC-PR e ABRAN.
              <br />
              Mas foi na psiquiatria que encontrei minha verdadeira vocação.
              Concluí minha especialização pela IPEMED em 2014 e, desde então,
              dedico-me a cuidar da saúde mental com empatia e compromisso.
              Nunca parei de me atualizar, participando de inúmeros congressos e
              cursos, se destacando a Preceptoria em Residência Médica pelo
              Hospital Sírio Libanês, o Harvard Reserch on Psychiatric Trends
              pela Harvard University (Cambridge, MA) e a Mentoria em
              Psiquiatria Injetável com a Dra. Inês Gullich, para oferecer o
              melhor aos meus pacientes.
            </Text>
          </div>
        </div>

        {/* DRA. ANA */}
        <div className="flex flex-col justify-center items-center w-full md:flex-row-reverse md:items-start md:gap-[72px] mb-[40px]">
          <div className="relative w-full max-w-[320px] h-[350px]">
            <Image
              src="/images/medico3.jpeg"
              alt="Foto da Dra. Ana Meri"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start w-full gap-[24px]">
            <Text as="h3" color="green-500">
              Dra. Ana Meri Possan Paganatto
            </Text>{" "}
            <Text as="p">
              Médica Pediatra -
              <span className="text-[12px] text-gray-500">
                CRM/SP: 146.872 - RQE: 50655
              </span>
            </Text>{" "}
            <Text as="p" size="text-sm md:text-base lg:text-base">
              Eu sou Ana Meri, nascida em David Canabarro, Rio Grande do Sul,
              filha de mãe professora e de pai caminhoneiro. Cresci em um
              ambiente de muito esforço e aprendizado, estudando sempre em
              escolas públicas. <br />
              Assim como Márcio, formei-me em Medicina pela Fundação Barceló, em
              Buenos Aires, em 2004, onde também comecei minha trajetória como
              médica. Revalidei meu diploma pela Universidade Federal do Ceará
              em 2007 e me especializei em Pediatria Clínica pelo CAEPP
              (Instituto da Criança/HC-FMUSP), concluindo a especialização em
              2011.
              <br /> Sempre presei o aprendizado, mantendo constante atualização
              dentro da pediatria através de cursos e congressos. Tenho ampla
              experiência em consultório, além de atuar como médica visitadora e
              plantonista no Hospital Regional Jorge Rossmann desde março de
              2018.
              <br /> Também trabalhei em outros serviços públicos e privados,
              sempre com paixão por cuidar do crescimento e desenvolvimento das
              crianças.
            </Text>
          </div>
        </div>
        <Text as="h3" color="green-500">
          Nossa Jornada Juntos
        </Text>
        <Text as="p" size="text-sm md:text-base lg:text-base shadow-bot-green">
          {" "}
          Estamos juntos desde 1999, uma parceria que nasceu antes mesmo de
          nossas carreiras e que nos trouxe nossos maiores tesouros: nossos
          filhos, Giovanna e Guilherme. Foi esse amor pela família e pela
          medicina que nos inspirou a criar a Life Stages – um espaço onde
          unimos nossas especialidades para oferecer cuidado integral. Aqui,
          combinamos psiquiatria e pediatria para atender às necessidades de
          saúde mental e infantil, com foco em acolhimento e personalização.
          Acreditamos que cada fase da vida tem seus desafios e suas conquistas,
          e estamos aqui para apoiar você e sua família, seja enfrentando
          desafios emocionais ou acompanhando o desenvolvimento dos pequenos.
          <br />
          Na Life Stages, você encontra um ambiente acolhedor, onde nosso
          compromisso é cuidar com o coração e a expertise que a medicina exige.
          Venha nos conhecer e faça parte dessa jornada de cuidado e bem-estar.
        </Text>
        {/* DR(A). CAMILA */}
        <div className="flex flex-col justify-center items-center w-full md:flex-row md:items-start md:gap-[72px] mt-[24px]">
          <div className="relative w-full max-w-[320px] h-[350px]">
            <Image
              src="/images/medico2.jpeg"
              alt="Foto do(a) Psicólogo(a)"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start w-full gap-[24px]">
            <Text as="h3" color="green-500">
              Camila Pola
            </Text>{" "}
            <Text as="p">
              Psicóloga -
              <span className="text-[12px] text-gray-500">CRP 06/101291</span>
            </Text>
            <Text as="p" size="text-sm md:text-base lg:text-base">
              Muito prazer eu sou a Camila Psicóloga formada pela Universidade
              Católica de Santos/2009, Pós Graduada em Psicopedagogia,
              Psicologia Clínica e Terapia Cognitivo Comportamental.
              <br /> No consultório a psicóloga apaixonada em transformar vidas,
              auxiliando as pessoas a compreenderem às situações que estão
              vivendo no atual momento e com isto aprenderem a tornar a vida
              mais leve e saudável. <br />
              Cristã e mamãe do Gustavo ( a minha versão preferida), filha, irmã
              e tia ( a minha segunda versão preferida).
              <br /> Amo minha família, adoro um café da tarde, valorizo os bons
              costumes, empática e acolhedora. <br />
              Minha missão é ser instrumento que mostra que é capaz de
              transformar o mundo com empatia, dedicação e amor!
            </Text>
          </div>
        </div>

        {/* MISSÃO, VISÃO, VALORES */}
        <div className="flex flex-col justify-center items-center w-full md:flex-row md:gap-[24px] md:items-stretch">
          {[
            {
              icon: "rocket",
              title: "Missão",
              description:
                "Proporcionar um atendimento de excelência em saúde mental e saúde infanto-juvenil, com tratamentos atualizados e baseados em evidências científicas. Nosso foco é apoiar o bem-estar integral dos pacientes com um ambiente acolhedor e seguro.",
            },
            {
              icon: "telescope",
              title: "Visão",
              description:
                "Ser reconhecida como a clínica de referência em saúde mental e saúde infanto-juvenil em Itanhaém, destacando-se pela excelência nos tratamentos, inovação e qualidade no atendimento. Aspiramos a ser um farol de esperança e apoio para todas as famílias que buscam cuidado especializado.",
            },
            {
              icon: "hearth",
              title: "Valores",
              description:
                "Nosso compromisso é com a qualidade, utilizando práticas modernas e eficazes em Saúde Mental e Pediatria. Valorizamos o respeito e a empatia em todas as interações, tratando cada pessoa com dignidade e compreensão. Buscamos continuamente inovação e novas abordagens para melhores resultados. Atuamos com integridade, ética e transparência, e acreditamos no trabalho colaborativo entre profissionais para oferecer um atendimento integral e eficiente.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-[#BEE7CF] flex flex-col gap-[16px] py-[40px] justify-center items-center w-full md:rounded-[32px]"
            >
              <Image
                src={`/icons/${icon}.svg`}
                alt={`Ícone de ${title.toLowerCase()}`}
                width={64}
                height={64}
                priority={false}
              />
              <Text as="h3" color="green-500">
                {title}
              </Text>
              <Text as="p" className="text-center" color="green-500">
                {description}
              </Text>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
