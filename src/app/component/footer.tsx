import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../../Public/assets/picture/pic.png")}
              alt="Samina"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">Samina</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Samina
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div style={{ display: "flex", gap: "10px" }}>
              {" "}
              {/* This will add a 10px gap */}
              <Link
                target="_blank"
                href={"https://github.com/Developer-Samina"}
                className="text-gray-500"
              >
                <BsGithub className="text-3xl hover:text-[#050505]" />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/samina-abdul-qadir-557b34304/"
                }
                className="text-gray-500"
              >
                <BsLinkedin className="text-3xl hover:text-[#425dd4]" />
              </Link>
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
