"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Página Inicial", href: "/" },
    { label: "Quem somos", href: "/quem-somos" },
    { label: "Tratamentos", href: "/tratamentos" },
    { label: "Agendamento", href: "/agendamento" },
  ];
  return (
    <>
      {/* Botão de abrir menu (mobile) */}
      <button
        className="md:hidden absolute top-4 right-4 bg-green-500 text-white p-2 rounded shadow z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Tela toda com fundo e controle de abertura */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Camada de fundo clicável */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-[rgba(190,231,207,0.5)]"
        />

        {/* Menu (toast) */}
        <div
          className={`fixed rounded-[32px] top-[65px] left-0 right-0 mx-auto max-w-[320px] bg-white border-b shadow-md flex flex-col space-y-2 transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } z-50`}
        >
          <ul className="flex flex-col gap-[18px] items-center bg-green-50 p-4 rounded-[32px]">
            {menuItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center text-green-500 hover:text-white border border-green-500 w-full text-center p-2 rounded-[32px] hover:bg-green-500 hover:brightness-75 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
