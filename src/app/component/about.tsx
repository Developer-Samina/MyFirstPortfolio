import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font custom-image  bg-gray-100 ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="hero"
              width={600}
              height={600}
              /* Replaced require() */
              src={"/assets/picture/profile1.png"}  
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-4 leading-relaxed ">
              Welcome to my portfolio! I am Samina, a passionate web developer
              and an aspiring Certified Cloud Applied AI Engineer. My portfolio
              highlights a variety of projects built with cutting-edge
              technologies, including Next.js. I am dedicated to continuous
              learning and hands-on experience, with a strong commitment to
              enhancing user experience and addressing real-world challenges
              through innovative web solutions.
            </p>
            <div className="flex justify-center">
              <a target="-blank" href={"/assets/CV/myCV.pdf"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
