import React from "react";
import { CheckIcon } from "lucide-react";

export default function Features() {
  return (
    <section className="hero min-h-fit px-4 sm:px-8 py-6 md:py-10 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl mx-auto">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-base-content">
            Tradição e Cuidado em <span className="text-primary">Cada Detalhe</span>
          </h1>
          <p className="py-4 text-base md:text-lg text-base-content/85 leading-relaxed font-normal">
            Somos uma equipe familiar focada 100% na qualidade do serviço.
          </p>

          <div className="w-full flex flex-col gap-4">
            {/* Item 1 */}
            <div className="flex flex-row w-full p-4 sm:p-6 gap-4 border border-base-200 bg-base-100 rounded-xl">
              <div className="shrink-0">
                <CheckIcon size={36} className="text-success" />
              </div>
              <div>
                <h2 className="card-title text-base sm:text-lg font-bold text-base-content tracking-tight">
                  Foco total na Mão de Obra
                </h2>
                <p className="text-sm text-base-content/80 leading-relaxed mt-1">
                  Não vendemos piso. Nosso único objetivo é entregar a melhor instalação para o material que você escolheu, sem tentar "empurrar" vendas.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-row w-full p-4 sm:p-6 gap-4 border border-base-200 bg-base-100 rounded-xl">
              <div className="shrink-0">
                <CheckIcon size={36} className="text-success" />
              </div>
              <div>
                <h2 className="card-title text-base sm:text-lg font-bold text-base-content tracking-tight">
                  Foco total na Mão de Obra
                </h2>
                <p className="text-sm text-base-content/80 leading-relaxed mt-1">
                  Não vendemos piso. Nosso único objetivo é entregar a melhor instalação para o material que você escolheu, sem tentar "empurrar" vendas.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-row w-full p-4 sm:p-6 gap-4 border border-base-200 bg-base-100 rounded-xl">
              <div className="shrink-0">
                <CheckIcon size={36} className="text-success" />
              </div>
              <div>
                <h2 className="card-title text-base sm:text-lg font-bold text-base-content tracking-tight">
                  Foco total na Mão de Obra
                </h2>
                <p className="text-sm text-base-content/80 leading-relaxed mt-1">
                  Não vendemos piso. Nosso único objetivo é entregar a melhor instalação para o material que você escolheu, sem tentar "empurrar" vendas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://placehold.co/500x500"
          className="w-full max-w-md lg:max-w-xl rounded-lg object-cover shadow-lg"
          alt="Tradição e Cuidado"
        />
      </div>
    </section>
  );
}
