import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const [t] = useTranslation("global");

  return (
    <footer className="w-full bg-black h-[100vh] text-white fixed -z-10 bottom-0 left-0 pt-[150px] ">
      <div className="mx-auto max-w-[1000px] h-full  flex flex-col justify-around p-8 ml-16">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold ">Luciano Castro</h1>
          <p className="text-2xl md:text-4xl font-semibold mt-4">
            {t("footer.city")}
          </p>
        </div>
        <div className="">
        <h3 className="text-2xl md:text-3xl font-semibold ">
              {t("footer.contact")}
            </h3>
          <p className=" md:text-xl">{t("footer.text")}</p>
        </div>
        <div className=" sm:flex justify-between">
          <div className="md:text-lg mt-8 ">{t("footer.design")}</div>
          <div className="py-8 text-4xl flex  gap-8">
            <a href="https://instagram.com/luchodelfuturo" target="_blank">
              <FaInstagram className="hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucianofcastro/"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-125" />
            </a>
            <a href="https://github.com/luchocas234" target="_blank">
              <FaGithub className="hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
