import React from "react";

export default function CTA() {
  return (
    <section className="hero py-6 md:py-8 px-4 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl shadow-sm rounded-2xl p-6 sm:p-10 gap-8">
        <div className="grid grid-cols-2 grid-rows-4 h-48 md:h-80 w-full gap-4 shrink-0 max-w-md lg:max-w-xl">
          <div className="bg-base-300 row-span-3 rounded-xl"></div>
          <div className="bg-base-200 row-start-2 row-span-3 rounded-xl"></div>
        </div>
        <div className="w-full text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-base-content">
            Box Office News!
          </h1>
          <p className="py-6 text-base md:text-lg text-base-content/85 leading-relaxed font-normal">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
