import React from "react";
import { MapPin } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="px-4 sm:px-8 py-6 md:py-10 bg-base-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center pt-2 pb-4 text-base-content">
        Nosso Portfólio de <span className="text-primary">Transformações</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto py-4 px-4">
        {/* Card 1 */}
        <div className="card bg-base-100 md:col-span-3 border border-base-200 ">
          <figure className="hover-gallery w-full">
            <img
              src="https://placehold.co/600x400?text=Image1"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image3"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image4"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg text-base-content tracking-tight">Local Name</h2>
            <div className="card-actions w-full">
              <p className="flex items-center gap-2 text-sm text-base-content/80">
                <MapPin className="size-4 text-accent-content shrink-0" />
                City, State - Country | dd/mm/yyyy
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 md:col-span-2 border border-base-200 ">
          <figure className="hover-gallery w-full">
            <img
              src="https://placehold.co/600x400?text=Image1"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image3"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image4"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg text-base-content tracking-tight">Local Name</h2>
            <div className="card-actions w-full">
              <p className="flex items-center gap-2 text-sm text-base-content/80">
                <MapPin className="size-4 text-accent-content shrink-0" />
                City, State - Country | dd/mm/yyyy
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 md:col-span-2 border border-base-200 ">
          <figure className="hover-gallery w-full">
            <img
              src="https://placehold.co/600x400?text=Image1"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image3"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image4"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg text-base-content tracking-tight">Local Name</h2>
            <div className="card-actions w-full">
              <p className="flex items-center gap-2 text-sm text-base-content/80">
                <MapPin className="size-4 text-accent-content shrink-0" />
                City, State - Country | dd/mm/yyyy
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 md:col-span-3 border border-base-200 ">
          <figure className="hover-gallery w-full">
            <img
              src="https://placehold.co/600x400?text=Image1"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image2"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image3"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://placehold.co/600x400?text=Image4"
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg text-base-content tracking-tight">Local Name</h2>
            <div className="card-actions w-full">
              <p className="flex items-center gap-2 text-sm text-base-content/80">
                <MapPin className="size-4 text-accent-content shrink-0" />
                City, State - Country | dd/mm/yyyy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
