import React from "react";

export default function Services() {
  return (
    <section className="px-4 sm:px-8 py-6 md:py-10 bg-base-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center pt-2 text-base-content">
        Do Planejamento ao <span className="text-primary">Acabamento</span>
      </h1>
      <p className="py-3 text-base text-center text-base-content/85 leading-relaxed max-w-3xl mx-auto text-lg font-normal">
        Da escolha do piso ideal até a instalação perfeita. Conheça nossos serviços e chame no WhatsApp para batermos um papo sobre o que a sua casa precisa.
      </p>

      <div className="flex flex-row gap-6 max-w-7xl mx-auto py-4 px-4 items-center justify-center">
        <div className="card bg-base-100 w-112">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-xl text-base-content tracking-tight">
              Instalação de Laminados
            </h2>
            <p className="text-base-content/80 text-sm leading-relaxed">
              Conforto e agilidade. Garantimos o encaixe milimétrico das réguas, manta de isolamento bem aplicada e o distanciamento correto das paredes para evitar estufamento. Uma obra limpa e rápida.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-124">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl h-124"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-xl text-base-content tracking-tight">
              Instalação de Vinílicos
            </h2>
            <p className="text-base-content/80 text-sm leading-relaxed">
              Modernidade e resistência. Trabalhamos com modelos clicados e colados. Avaliamos e preparamos o seu contrapiso (aplicação de massa autonivelante) para garantir que o piso fique 100% liso e sem marcações.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-112">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-xl text-base-content tracking-tight">
              Visita Técnica e Assessoria
            </h2>
            <p className="text-base-content/80 text-sm leading-relaxed">
              Não sabe qual piso comprar? Nós vamos até o local avaliar a umidade, o nível do contrapiso e indicar o material (laminado ou vinílico) ideal para a sua necessidade e orçamento, evitando gastos desnecessários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
