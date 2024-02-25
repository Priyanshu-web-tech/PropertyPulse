import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="py-12 sm:py-20 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-indigo-500"
          variants={textVariants}
        >
          Welcome to Property
          <span className="text-yellow-400">Pulse</span>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-3 mt-11"
          variants={textVariants}
        >
          <motion.div className="text-lg" variants={textVariants}>
            <p className="mb-12">
              At PropertyPulse, we redefine the property market by offering
              exceptional services for buying, selling, and renting properties
              across diverse communities.
            </p>
            <p className="mb-12">
              Our dedicated team is committed to ensuring a seamless and
              rewarding journey for all our clients.
            </p>
            <p className="mb-12">
              We empower you in achieving your property aspirations, providing
              expertise, personalized guidance, and a comprehensive
              understanding of local market trends.
            </p>
          </motion.div>
          <motion.div className="text-lg" variants={textVariants}>
            <p className="mb-12">
              Our aim is to support you in every step, whether it's buying,
              selling, or renting a property, enhancing your experience as our
              priority.
            </p>
            <p className="mb-12">
              Our experienced agents bring profound industry insights and a
              commitment to providing top-notch service.
            </p>
            <p className="mb-12">
              We believe in making your property journey not just successful but
              also exhilarating and fulfilling.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
