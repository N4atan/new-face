import React from "react";

export default function Services() {
  return (
    <section id="servicos" className="px-4 sm:px-8 py-6 md:py-10 bg-base-100">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center pt-2 text-base-content">
        Do Planejamento ao <span className="text-primary">Acabamento</span>
      </h1>
      <div className="divider divider-primary w-1/4 mx-auto "></div>
      <p className="text-base text-center text-base-content/85 leading-relaxed max-w-3xl mx-auto text-lg font-normal">
        Da escolha do piso ideal até a instalação perfeita. Conheça nossos serviços e chame no WhatsApp para batermos um papo sobre o que a sua casa precisa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-6 px-4 items-stretch">
        {/* Card 1 */}
        <div className="card bg-base-100 hover:shadow-sm  duration-300 transition-all hover:-translate-y-1  flex flex-col h-full">
          <figure className="px-6 pt-6">
            <img
              src="/assets/piso_laminado.png"
              alt="Instalação de Laminados"
              className="rounded-xl h-72 w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center flex-grow flex flex-col justify-between">
            <div>
              <h2 className="card-title font-bold text-xl text-base-content tracking-tight mb-2">
                Instalação de Laminados
              </h2>
              <p className="text-base-content/80 text-sm text-justify leading-relaxed">
                Conforto e agilidade. Garantimos o encaixe milimétrico das réguas, manta de isolamento bem aplicada e o distanciamento correto das paredes para evitar estufamento. Uma obra limpa e rápida.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 hover:shadow-sm  duration-300 transition-all hover:-translate-y-1  flex flex-col h-full">
          <figure className="px-6 pt-6">
            <img
              src="/assets/piso_vinilico.png"
              alt="Instalação de Vinílicos"
              className="rounded-xl h-72 w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center flex-grow flex flex-col justify-between">
            <div>
              <h2 className="card-title font-bold text-xl text-base-content tracking-tight mb-2">
                Instalação de Vinílicos
              </h2>
              <p className="text-base-content/80 text-sm text-justify leading-relaxed">
                Modernidade e resistência. Trabalhamos com modelos clicados e colados. Avaliamos e preparamos o seu contrapiso (aplicação de massa autonivelante) para garantir que o piso fique 100% liso e sem marcações.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 hover:shadow-sm  duration-300 transition-all hover:-translate-y-1  flex flex-col h-full">
          <figure className="px-6 pt-6">
            <img
              src="/assets/catalogo_pisos.png"
              alt="Visita Técnica e Assessoria"
              className="rounded-xl h-72 w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center flex-grow flex flex-col justify-between">
            <div>
              <h2 className="card-title font-bold text-xl text-base-content tracking-tight mb-2">
                Visita Técnica e Assessoria
              </h2>
              <p className="text-base-content/80 text-sm text-justify leading-relaxed">
                Não sabe qual piso comprar? Nós vamos até o local avaliar a umidade, o nível do contrapiso e indicar o material (laminado ou vinílico) ideal para a sua necessidade e orçamento, evitando gastos desnecessários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
