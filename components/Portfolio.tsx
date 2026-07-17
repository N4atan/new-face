import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-4 sm:px-8 py-6 md:py-10 bg-base-100">
      <h1 className="text-5xl font-extrabold tracking-tight text-center pt-2 pb-4 text-base-content">
        Nosso Portfólio de <span className="text-primary">Transformações</span>
      </h1>
      <div className="divider divider-primary w-1/4 mx-auto my-2"></div>

      <p className="text-base text-center text-base-content/85 leading-relaxed max-w-3xl mx-auto text-lg font-normal mb-8">
        Estes são apenas alguns de nossos projetos recentes. Sinta-se à vontade para clicar em qualquer card e explorar a galeria de fotos reais de cada transformação.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto py-4 px-4">

        {/* Card 1 */}
        <div className="card bg-base-100 md:col-span-3 border border-base-200 overflow-hidden">
          <figure className="hover-gallery w-full">
            <img
              src="/assets/Portifolio/Trabalho-1/3.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-1/2.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-1/1.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-1/4.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
          </figure>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 md:col-span-2 border border-base-200 overflow-hidden">
          <figure className="hover-gallery w-full">
            <img
              src="/assets/Portifolio/Trabalho-2/3.jpg"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-2/1.jpg"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-2/2.jpg"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-2/3.jpg"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
          </figure>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 md:col-span-2 border border-base-200 overflow-hidden">
          <figure className="hover-gallery w-full">
            <img
              src="/assets/Portifolio/Trabalho-4/3.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-4/1.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-4/2.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-4/3.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
          </figure>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 md:col-span-3 border border-base-200 overflow-hidden">
          <figure className="hover-gallery w-full">
            <img
              src="/assets/Portifolio/Trabalho-3/3.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-3/1.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-3/2.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-3/3.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
            <img
              src="/assets/Portifolio/Trabalho-3/4.webp"
              alt="Shoes"
              className="w-full h-100 object-cover"
            />
          </figure>
        </div>

      </div>
    </section>
  );
}
