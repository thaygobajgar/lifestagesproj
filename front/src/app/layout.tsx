import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Text from "./components/Text";
import MobileMenu from "./components/MobileMenu";

// src/app/layout.tsx

export const metadata: Metadata = {
  title: {
    default: "LifeStages | Saúde para todas as fases",
    template: "%s | LifeStages",
  },
  description: "Clínica especializada em Pediatria e Saúde Mental em Itanhaém.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "LifeStages | Saúde integral",
    description:
      "Cuidamos de você em todas as fases da vida com uma equipe de especialistas.",
    url: "https://lifestages.com.br",
    siteName: "LifeStages",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LifeStages clínica médica",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="p-8 font-sans min-h-[100vh]">
        <header className="relative mb-8 bg-[#EEF2EB] p-4">
          <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
            <Link href="/">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={56}
                  height={56}
                />
                <Text as="h1" className="text-3xl font-bold">
                  Lifestages
                </Text>
              </div>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="text-green-500">
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link href="/quem-somos" className="text-green-500">
                    Quem somos
                  </Link>
                </li>
                <li>
                  <Link href="/tratamentos" className="text-green-500">
                    Tratamentos
                  </Link>
                </li>
                <li>
                  <Link href="/agendamento" className="text-green-500">
                    Agendamento
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </header>

        <>{children}</>

        <footer className="w-full mt-[24px]">
          <div className="bg-[#BEE7CF]  w-full ">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col items-center gap-4 p-[32px]">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={56}
                  height={56}
                />
                <Text as="h1" className="text-3xl font-bold">
                  Lifestages
                </Text>
              </div>
              <ul className="flex flex-col gap-[12px]">
                <li>
                  <Link href="/" className="text-green-500">
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link href="/quem-somos" className="text-green-500">
                    Quem somos
                  </Link>
                </li>
                <li>
                  <Link href="/tratamentos" className="text-green-500">
                    Tratamentos
                  </Link>
                </li>
                <li>
                  <Link href="/agendamento" className="text-green-500">
                    Agendamento
                  </Link>
                </li>
              </ul>
              <div className="flex gap-[12px] p-[12px]">
                <Link
                  href="https://www.instagram.com/life_stages_itanhaem/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/Instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="inline-block mr-2"
                  />
                </Link>
                <Link
                  href="https://wa.me/551334225805?text=Olá,%20gostaria%20de%20mais%20informações!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/Whatsapp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="inline-block mr-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-sm text-white bg-[#17A853] h-[60px] flex justify-center items-center w-full text-center">
            <div className="w-full max-w-screen-xl mx-auto">
              <Text as="p" color="white">
                © Clínica Life Stages - Todos os direitos reservados
              </Text>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
