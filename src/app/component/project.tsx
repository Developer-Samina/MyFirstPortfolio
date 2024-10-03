import Link from "next/link";
import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../Public/assets/project/todo list.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    todo list app Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TODOLIST
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I developed this To-Do List App with TypeScript to provide
                    users an efficient tool for managing and organizing their
                    tasks.
                  </p>
                  <Link
                    target="-blank"
                    href={
                      "https://github.com/Developer-Samina/CLI-project03-todolist.git"
                    }
                  >
                    <p className="leading-relaxed  text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../Public/assets/project/calculator.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CALCULATOR
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I developed this Calculator with TypeScript for basic
                    arithmetic operations using a user-friendly interface.
                  </p>
                  <Link
                    target="-blank"
                    href={
                      "https://github.com/Developer-Samina/CLI-project00_calculator.git"
                    }
                  >
                    <p className="leading-relaxed  text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../Public/assets/project/Resume Builder.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Resume Builder Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RESUME BUILDER
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I created this Resume Builder with HTML, CSS, and TypeScript
                    to help users generate professional resumes.
                  </p>
                  <Link
                    target="-blank"
                    href={"https://milestone5-resume-by-samina.vercel.app/"}
                  >
                    <p className="leading-relaxed  text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
