import {  MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (

        <main className="flex flex-1 w-full flex-col">
            {/* banner section */}
            <section className="hero min-h-fit md:min-h-screen px-4 py-12 md:py-0">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl mx-auto">
                    <img
                        src="https://placehold.co/600x400?text=Hello+World"
                        className="w-full max-w-xl lg:max-w-2xl rounded-lg shadow-xl"
                    />
                    <div className="max-w-md lg:max-w-lg">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight up">Transforme sua casa com um <span className="text-primary">Acabamento Perfeito</span></h1>
                        <p className="py-6 text-base md:text-lg opacity-80">
                            Especialistas em instalação de pisos laminados e vinílicos. Você escolhe e compra o material onde preferir, e nós garantimos uma instalação <span className="font-bold">impecável, limpa e duradoura.</span> Tradição de pai para filho.
                        </p>
                        <button className="btn btn-primary btn-lg">Solicitar Orçamento no WhatsApp</button>
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className="p-4 sm:p-8 py-12 md:py-24">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-4 pb-12">Nosso Portfólio de <span className="text-primary">Transformações</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto py-4 px-4">
                    <div className="card bg-base-100 md:col-span-3 shadow-sm">
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
                            <h2 className="card-title">Local Name</h2>
                            <div className="card-actions w-full">
                                <p className="flex items-center gap-2"><MapPin className="size-4 text-accent-content" />City, State - Country | dd/mm/yyyy</p>
                            </div>

                        </div>
                    </div>

                    <div className="card bg-base-100 md:col-span-2 shadow-sm">
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
                            <h2 className="card-title">Local Name</h2>
                            <div className="card-actions w-full">
                                <p className="flex items-center gap-2"><MapPin className="size-4 text-accent-content" />City, State - Country | dd/mm/yyyy</p>
                            </div>

                        </div>
                    </div>

                    <div className="card bg-base-100 md:col-span-2 shadow-sm">
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
                            <h2 className="card-title">Local Name</h2>
                            <div className="card-actions w-full">
                                <p className="flex items-center gap-2"><MapPin className="size-4 text-accent-content" />City, State - Country | dd/mm/yyyy</p>
                            </div>

                        </div>
                    </div>

                    <div className="card bg-base-100 md:col-span-3 shadow-sm">
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
                            <h2 className="card-title">Local Name</h2>
                            <div className="card-actions w-full">
                                <p className="flex items-center gap-2"><MapPin className="size-4 text-accent-content" />City, State - Country | dd/mm/yyyy</p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            {/* banner section */}
            <section className="hero min-h-fit md:min-h-screen p-4 sm:p-8 py-12 md:py-24">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl mx-auto">
                    <div className="w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Tradição e Cuidado em <span className="text-primary">Cada Detalhe</span></h1>
                        <p className="py-6 text-base md:text-lg opacity-80">
                            Somos uma equipe familiar focada 100% na qualidade do serviço.
                        </p>

                        <div className="w-full flex flex-col gap-4">
                            <div className="card md:card-side bg-base-100 shadow-sm border border-base-200">
                                <div className="bg-base-200 w-full h-16 md:w-24 md:h-auto shrink-0"></div>
                                <div className="card-body p-4 sm:p-6">
                                    <h2 className="card-title text-base sm:text-lg">Foco total na Mão de Obra</h2>
                                    <p className="text-sm">Não vendemos piso. Nosso único objetivo é entregar a melhor instalação para o material que você escolheu, sem tentar "empurrar" vendas.</p>
                                </div>
                            </div>

                            <div className="card md:card-side bg-base-100 shadow-sm border border-base-200">
                                <div className="bg-base-200 w-full h-16 md:w-24 md:h-auto shrink-0"></div>
                                <div className="card-body p-4 sm:p-6">
                                    <h2 className="card-title text-base sm:text-lg">Limpeza e Organização</h2>
                                    <p className="text-sm">Tratamos a sua casa como se fosse a nossa. Trabalhamos com agilidade e finalizamos o serviço sem deixar dor de cabeça ou sujeira para trás.</p>
                                </div>
                            </div>

                            <div className="card md:card-side bg-base-100 shadow-sm border border-base-200">
                                <div className="bg-base-200 w-full h-16 md:w-24 md:h-auto shrink-0"></div>
                                <div className="card-body p-4 sm:p-6">
                                    <h2 className="card-title text-base sm:text-lg">Acabamento Premium</h2>
                                    <p className="text-sm">Anos de experiência no mercado garantindo recortes precisos nas portas e rodapés perfeitamente alinhados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://placehold.co/500x500"
                        className="w-full max-w-md lg:max-w-xl rounded-lg object-cover shadow-lg"
                    />
                </div>
            </section>

            {/* opinions  */}
            <section className="py-12 md:py-24 flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Box Office News!</h1>

                <div className="carousel carousel-center rounded-box mx-0 space-x-4 px-4 py-4">
                    <div className="carousel-item pl-4">
                        <div className="card card-border bg-base-100 w-[85vw] sm:w-96 shadow-sm">
                            <div className="card-body gap-4 p-6">
                                <div className="rating">
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="1 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="2 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="3 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="4 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current="true"></div>
                                </div>

                                <p className="text-sm sm:text-base">A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.A card component has a figure, a body part, and inside body there are title and actions parts</p>

                                <div className="card-actions">
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-10 ring-gray-200 ring-offset-gray-100 rounded-full ring-1 ring-offset-1">
                                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-sm">Guest</h2>
                                            <span className="text-xs opacity-70">dd/mm/yyyy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card card-border bg-base-100 w-[85vw] sm:w-96 shadow-sm">
                            <div className="card-body gap-4 p-6">
                                <div className="rating">
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="1 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="2 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="3 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="4 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current="true"></div>
                                </div>

                                <p className="text-sm sm:text-base">A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.A card component has a figure, a body part, and inside body there are title and actions parts</p>

                                <div className="card-actions">
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-10 ring-gray-200 ring-offset-gray-100 rounded-full ring-1 ring-offset-1">
                                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-sm">Guest</h2>
                                            <span className="text-xs opacity-70">dd/mm/yyyy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card card-border bg-base-100 w-[85vw] sm:w-96 shadow-sm">
                            <div className="card-body gap-4 p-6">
                                <div className="rating">
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="1 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="2 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="3 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="4 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current="true"></div>
                                </div>

                                <p className="text-sm sm:text-base">A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.A card component has a figure, a body part, and inside body there are title and actions parts</p>

                                <div className="card-actions">
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-10 ring-gray-200 ring-offset-gray-100 rounded-full ring-1 ring-offset-1">
                                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-sm">Guest</h2>
                                            <span className="text-xs opacity-70">dd/mm/yyyy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card card-border bg-base-100 w-[85vw] sm:w-96 shadow-sm">
                            <div className="card-body gap-4 p-6">
                                <div className="rating">
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="1 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="2 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="3 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="4 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current="true"></div>
                                </div>

                                <p className="text-sm sm:text-base">A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.A card component has a figure, a body part, and inside body there are title and actions parts</p>

                                <div className="card-actions">
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-10 ring-gray-200 ring-offset-gray-100 rounded-full ring-1 ring-offset-1">
                                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-sm">Guest</h2>
                                            <span className="text-xs opacity-70">dd/mm/yyyy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card card-border bg-base-100 w-[85vw] sm:w-96 shadow-sm">
                            <div className="card-body gap-4 p-6">
                                <div className="rating">
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="1 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="2 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="3 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="4 star"></div>
                                    <div className="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current="true"></div>
                                </div>

                                <p className="text-sm sm:text-base">A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.A card component has a figure, a body part, and inside body there are title and actions parts</p>

                                <div className="card-actions">
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-10 ring-gray-200 ring-offset-gray-100 rounded-full ring-1 ring-offset-1">
                                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-sm">Guest</h2>
                                            <span className="text-xs opacity-70">dd/mm/yyyy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq  */}
            <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
                <div className="w-full lg:w-1/3 flex flex-col justify-start">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">FAQ</h1>
                    <p className="py-6 text-base opacity-80">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                <div className="w-full lg:w-2/3 flex flex-col gap-4">
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold text-lg">How do I create an account?</div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-lg">I forgot my password. What should I do?</div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-lg">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                </div>
            </section>

            {/* last cta section */}
            <section className="hero py-16 px-4">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl border rounded-2xl p-6 sm:p-10 gap-8">
                    <div className="grid grid-cols-2 grid-rows-4 h-48 md:h-80 w-full gap-4 shrink-0 max-w-md lg:max-w-xl">
                        <div className="bg-base-300 row-span-3 rounded-xl"></div>
                        <div className="bg-base-200 row-start-2 row-span-3 rounded-xl"></div>
                    </div>
                    <div className="w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Box Office News!</h1>
                        <p className="py-6 text-base md:text-lg opacity-80">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
