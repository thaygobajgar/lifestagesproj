import Image from "next/image";
import Section from "../components/Section";
import Text from "../components/Text";
import Link from "next/link";

export default function AgendamentoPage() {
  return (
    <main>
      <Section className="w-full max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="rounded-[36px] shadow-custom flex flex-col gap-[32px] p-[32px] max-w-[520px]">
          <Text as="h3" color="black">
            Selecione a especialidade:
          </Text>
          <ul className="flex flex-col gap-[16px]">
            <li>
              <Link
                href="https://wa.me/551334225805?text=Olá,%20gostaria%20de%20mais%20informações%20para%20uma%20consulta%20com%20o%20Dr%20Marcio!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-[16px] items-center shadow-custom rounded-[16px] p-[4px]">
                  <div className="w-[72px] h-[72px] relative">
                    <Image
                      src="/images/medico1.jpeg"
                      alt="Dr. Márcio Paganatto"
                      fill
                      priority={false}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Text as="p" weight="bold" color="green-500">
                      Médico Psiquiatra
                    </Text>
                    <Text as="p">Dr. Márcio Christian Paganatto</Text>
                    <span className="text-[10px] text-gray-500">
                      CRM/ SP: 146.872 - RQE:126.610
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/551334225805?text=Olá,%20gostaria%20de%20mais%20informações%20para%20uma%20consulta%20com%20o%20Dra%20Ana!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-[16px] items-center shadow-custom rounded-[16px] p-[4px]">
                  <div className="w-[72px] h-[72px] relative">
                    <Image
                      src="/images/medico3.jpeg"
                      alt="Márcio Christian Paganatto"
                      fill
                      priority={false}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Text as="p" weight="bold" color="blue-500">
                      Médica Pediatra
                    </Text>
                    <Text as="p">Dra. Ana Meri</Text>{" "}
                    <span className="text-[10px] text-gray-500">
                      CRM/SP: 146.872 - RQE: 50655
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/551334225805?text=Olá,%20gostaria%20de%20mais%20informações%20para%20uma%20consulta%20com%20o%20Dra%Camila!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-[16px] items-center shadow-custom rounded-[16px] p-[4px]">
                  <div className="w-[72px] h-[72px] relative">
                    <Image
                      src="/images/medico2.jpeg"
                      alt="Dr. Márcio Paganatto"
                      fill
                      priority={false}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Text as="p" weight="bold" color="aqua-500">
                      Psicóloga
                    </Text>
                    <Text as="p">Camila Pola</Text>{" "}
                    <span className="text-[10px] text-gray-500">
                      CRP 06/101291
                    </span>
                  </div>
                </div>
              </Link>
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
            <Text as="p">Rua Leopoldo Diz, 403 Praia do Sonho, Itanhaém</Text>
          </div>
          <div className="flex">
            <img
              src="/icons/telephone.svg"
              alt="Telefone"
              width={32}
              height={32}
              className="inline-block mr-2"
            />
            <Text as="p">(13)3422-5805</Text>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.354116515735!2d-46.80782288987656!3d-24.194374385061206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d569f7e1befd%3A0x4150e922deb196d8!2sR.%20Leopoldo%20Diz%2C%20403%20-%20Praia%20dos%20Sonhos%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1745523530933!5m2!1spt-BR!2sbr"
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
