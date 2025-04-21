import Image from "next/image";
import Section from "../components/Section";
import Text from "../components/Text";

export default function AgendamentoPage() {
  return (
    <main>
      <Section className="w-full max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="rounded-[36px] shadow-custom flex flex-col gap-[32px] p-[32px] max-w-[520px]">
          <Text as="h3" color="black">
            Selecione a especialidade:
          </Text>
          <ul className="flex flex-col gap-[16px]">
            <li className="flex gap-[16px] items-center shadow-custom rounded-[16px] p-[4px]">
              <Image
                src="/images/drmarcio.png"
                alt="Dr. Márcio Paganatto"
                width={72}
                height={72}
                priority={false}
                className="rounded-full"
              />
              <div>
                <Text as="p" weight="bold">
                  Psiquiatria
                </Text>
                <Text as="p">Dr. Márcio Paganatto</Text>
              </div>
            </li>
            <li className="flex gap-[16px] items-center shadow-custom rounded-[16px] p-[4px]">
              <Image
                src="/images/drana.png"
                alt="Dr. Márcio Paganatto"
                width={72}
                height={72}
                priority={false}
                className="rounded-full"
              />
              <div>
                <Text as="p" weight="bold">
                  Pediatria
                </Text>
                <Text as="p">Dra. Ana Meri</Text>
              </div>
            </li>
            <li className="flex gap-[16px] items-center shadow-custom rounded-[16px] p-[4px]">
              <Image
                src="/images/psicologa.png"
                alt="Dr. Márcio Paganatto"
                width={72}
                height={72}
                priority={false}
                className="rounded-full"
              />
              <div>
                <Text as="p" weight="bold">
                  Saúde Mental
                </Text>
                <Text as="p">Dr. Psicologa</Text>
              </div>
            </li>
          </ul>
          <div className="flex">
            <img
              src="/icons/location-grey.svg"
              alt="Telefone"
              width={32}
              height={32}
              className="inline-block mr-2"
            />
            <Text as="p">Rua Leopoldo Diz, 22 Praia do Sonho, Itanhaém</Text>
          </div>
          <div className="flex">
            <img
              src="/icons/telephone.svg"
              alt="Telefone"
              width={32}
              height={32}
              className="inline-block mr-2"
            />
            <Text as="p">(13) xxxx-xxxx</Text>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.708117072637!2d-46.804978375014485!3d-24.194165958016555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d569f7ccb017%3A0xbb0ab43c8a2bb446!2sR.%20Leopoldo%20Diz%2C%2022%20-%20Praia%20dos%20Sonhos%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1745095441820!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            className="rounded-xl border-0 w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </main>
  );
}
