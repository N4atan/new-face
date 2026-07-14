import React from "react";

export default function Hero() {
  return (
    <section className="hero min-h-fit px-4 py-8 md:py-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl mx-auto">
        <img
          src="https://placehold.co/600x400?text=Hello+World"
          className="w-full max-w-xl lg:max-w-2xl rounded-lg shadow-xl"
        />
        <div className="max-w-md lg:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-base-content">
            Transforme sua casa com um{" "}
            <span className="text-primary">Acabamento Perfeito</span>
          </h1>
          <p className="py-6 text-base md:text-lg text-base-content/85 leading-relaxed font-normal">
            Especialistas em instalação de pisos laminados e vinílicos. Você escolhe e compra o material onde preferir, e nós garantimos uma instalação <span className="font-bold">impecável, limpa e duradoura.</span> Tradição de pai para filho.
          </p>
          <button className="btn btn-primary btn-lg">Solicitar Orçamento no WhatsApp</button>
        </div>
      </div>
    </section>
  );
}
