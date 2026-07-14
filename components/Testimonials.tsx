import React from "react";

export default function Testimonials() {
  const cards = Array(5).fill(null);

  return (
    <section className="py-6 md:py-10 flex flex-col justify-center bg-base-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-6 text-base-content">
        Box Office News!
      </h1>

      <div className="carousel carousel-center rounded-box mx-0 space-x-4 px-4 py-4">
        {cards.map((_, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "pl-4" : ""}`}>
            <div className="card card-border bg-base-100 w-[85vw] sm:w-96 shadow-sm border border-base-200">
              <div className="card-body gap-4 p-6">
                <div className="rating">
                  <div className="mask mask-star-2 bg-orange-400" aria-label="1 star"></div>
                  <div className="mask mask-star-2 bg-orange-400" aria-label="2 star"></div>
                  <div className="mask mask-star-2 bg-orange-400" aria-label="3 star"></div>
                  <div className="mask mask-star-2 bg-orange-400" aria-label="4 star"></div>
                  <div className="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current="true"></div>
                </div>

                <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
                  A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.A card component has a figure, a body part, and inside body there are title and actions parts
                </p>

                <div className="card-actions">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="w-10 ring-gray-200 ring-offset-gray-100 rounded-full ring-1 ring-offset-1">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="Avatar" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-bold text-sm text-base-content">Guest</h2>
                      <span className="text-xs text-base-content/70">dd/mm/yyyy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
