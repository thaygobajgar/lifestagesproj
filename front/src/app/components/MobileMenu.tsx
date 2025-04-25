"use client"; // Isso indica que o código abaixo será executado no cliente

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão visível no topo direito no mobile */}
      <button
        className="md:hidden absolute top-4 right-4 bg-green-500 text-white p-2 rounded shadow z-50"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Menu como toast fixado no topo */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b shadow-md z-40 p-4 max-w-[320px] mx-auto flex flex-col space-y-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-green-500">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 bg-green-500 rounded-full p-1"
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-green-500 underline"
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                href="/quem-somos"
                onClick={() => setIsOpen(false)}
                className="text-green-500 underline"
              >
                Quem somos
              </Link>
            </li>
            <li>
              <Link
                href="/tratamentos"
                onClick={() => setIsOpen(false)}
                className="text-green-500 underline"
              >
                Tratamentos
              </Link>
            </li>
            <li>
              <Link
                href="/agendamento"
                onClick={() => setIsOpen(false)}
                className="text-green-500 underline"
              >
                Agendamento
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
