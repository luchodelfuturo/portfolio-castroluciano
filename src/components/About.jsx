import React from "react";
import ph from "../media/phprofile.jpeg";
import { useTranslation } from "react-i18next";
import htmlLogo from "../media/logos/html5.svg";
import cssLogo from "../media/logos/css3-original.svg";
import jsLogo from "../media/logos/js.svg";
import tailwindLogo from "../media/logos/tailwindcss.svg";
import reactLogo from "../media/logos/react.svg";
import photoshopLogo from "../media/logos/photoshop.svg";
import figmaLogo from "../media/logos/figma.svg";
import aiLogo from "../media/logos/ai.png";
import nextjsLogo from "../media/logos/nextjs.png";

export default function About() {
  const [t] = useTranslation("global");
  return (
    <div className="w-full h-full bg-white ">
      <div className=" max-w-[1200px] mx-auto grid md:grid-cols-2 p-8 gap-6 ">
        <div className="flex flex-col justify-center px-8  ">
          <h3 className=" text-3xl md:text-4xl font-bold text-left">
            {t("about.title")}
          </h3>
          <p className=" md:text-xl text-justify my-4 ">{t("about.desc")}</p>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <p className=" text-start">Front End Skills:</p>

            <div className=" w-full grid grid-cols-3 md:grid-cols-6 gap-2 justify-center items-center mt-4">
              {/* 1 col */}

              <div className="flex flex-col justify-center items-center group p-2">
                <img
                  src={htmlLogo}
                  alt="logo"
                  className="w-10 h-10 group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
                <span className="transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-1 text-sm border-2 bg-gray-100 mt-2">
                  HTML
                </span>
              </div>
              <div className="flex flex-col justify-center items-center group p-2">
                <img
                  src={cssLogo}
                  alt="logo"
                  className="w-10 h-10 group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
                <span className="transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-1 text-sm border-2 bg-gray-100 mt-2">
                  CSS
                </span>
              </div>
              <div className="flex flex-col justify-center items-center group  ">
                <img
                  src={jsLogo}
                  alt="logo"
                  className="w-10 h-10 group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
                <span className="transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-1 text-sm border-2 bg-gray-100 mt-2">
                  JavaScript
                </span>
              </div>

              <div className="flex flex-col justif items-center group ">
                <img
                  src={tailwindLogo}
                  alt="logo"
                  className="w-10 h-10 group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
                <span className="transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-1 text-sm border-2 bg-gray-100 mt-2">
                  TailwindCss
                </span>
              </div>
              <div className="flex flex-col justif items-center group">
                <img
                  src={reactLogo}
                  alt="logo"
                  className="w-10 h-10 group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
                <span className="opacity-0 group-hover:opacity-100 p-1 text-sm border-2 bg-gray-100 mt-2">
                  React
                </span>
              </div>
              <div className="flex flex-col justif items-center group">
                <img
                  src={nextjsLogo}
                  alt="logo"
                  className="w-10 h-10 group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
                <span className="transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-1 text-sm border-2 bg-gray-100 mt-2">
                  NextJs
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full justify-around items-center mb-6">
            <p>Tools:</p>
            <div className="flex gap-2 w-full justify-around mt-2">
              <img src={photoshopLogo} alt="logo" className="w-10 h-10" />
              <img src={figmaLogo} alt="logo" className="w-10 h-10" />
              <img src={aiLogo} alt="logo" className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center object-cover px-8">
          <img
            className=" w-full h-[40vh] object-cover md:h-full rounded-lg "
            src={ph}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
