import React from "react";

export default function FAQ() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 md:py-8 bg-base-100">
      <div className="w-full lg:w-1/3 flex flex-col justify-start text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-base-content">
          FAQ
        </h1>
        <p className="py-4 text-base text-base-content/85 leading-relaxed font-normal">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {/* Item 1 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-lg text-base-content">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm text-base-content/80">
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </div>
        </div>

        {/* Item 2 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-base-content">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm text-base-content/80">
            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
          </div>
        </div>

        {/* Item 3 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg text-base-content">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm text-base-content/80">
            Go to "My Account" settings and select "Edit Profile" to make changes.
          </div>
        </div>
      </div>
    </section>
  );
}
