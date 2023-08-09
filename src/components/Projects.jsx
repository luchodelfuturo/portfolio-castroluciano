import React from "react";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Projects() {
  const { t } = useTranslation("global");
  const [filterApp, setFilterApp] = useState("all");

  return (
    <div className="w-full bg-black h-screen">
      <div className=" max-w-[1400px] mx-auto grid h-full p-8 gap-4">
        <div className="w-full text-white  flex justify-center items-center">
          <h2 className="text-4xl font-semibold  my-4">
            {t("projects.title")}
          </h2>
        </div>
        <div className="w-[80%] mx-auto grid grid-cols-4 text-white gap-2">
          <button
            onClick={() => setFilterApp("all")}
            className="bg-transparent border-2 border-white py-1 px-4 rounded transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t("projects.filters.all")}
          </button>
          <button
            onClick={() => setFilterApp("websAviation")}
            className="bg-transparent border-2 border-white py-1 px-4 rounded transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t("projects.filters.websAviation")}
          </button>
          <button
            onClick={() => setFilterApp("mktAviation")}
            className="bg-transparent border-2 border-white py-1 px-4 rounded transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t("projects.filters.mktAviation")}
          </button>
          <button
            onClick={() => setFilterApp("otherApps")}
            className="bg-transparent border-2 border-white py-1 px-4 rounded transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t("projects.filters.otherApps")}
          </button>
        </div>
        <Carousel filter={filterApp} />
      </div>
    </div>
  );
}
