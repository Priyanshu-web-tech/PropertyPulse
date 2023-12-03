import React from "react";

export default function About() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-indigo-500">
          Welcome to Property<span className="text-yellow-400">Pulse</span>
        </h1> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="text-lg">
            <p className="mb-4">
              At PropertyPulse, we redefine the property market by offering
              exceptional services for buying, selling, and renting properties
              across diverse communities.
            </p>
            <p className="mb-4">
              Our dedicated team is committed to ensuring a seamless and
              rewarding journey for all our clients.
            </p>
            <p className="mb-4">
              We empower you in achieving your property aspirations, providing
              expertise, personalized guidance, and a comprehensive
              understanding of local market trends.
            </p>
          </div>
          <div className="text-lg">
            <p className="mb-4">
              Our aim is to support you in every step, whether it's buying,
              selling, or renting a property, enhancing your experience as our
              priority.
            </p>
            <p className="mb-4">
              Our experienced agents bring profound industry insights and a
              commitment to providing top-notch service.
            </p>
            <p className="mb-4">
              We believe in making your property journey not just successful but
              also exhilarating and fulfilling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
