"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

// Importing the image statically
import heroImage from "../../../Public/assets/picture/profile1.png"; // Update the path as needed

const Hero = () => {
  return (
    <section className="text-gray-600 bg-gray-100 body-font bg-cover bg-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed text-black">
            Certified as a Cloud Applied Generative AI Engineer, I bring
            expertise in cloud infrastructure, AI development, and advanced
            technologies such as Next.js. My portfolio reflects a strong focus
            on delivering innovative, scalable solutions, underpinned by a deep
            understanding of industry best practices and evolving technological
            trends.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={500}
            height={500}
            src={heroImage} // Using the imported image
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
