import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

import AlphaWeb from "../media/projects/AlphaWeb.png";
import AeronauticsWords from "../media/projects/AeronauticsWords.png";
import ToDoApp from "../media/projects/ToDoApp.png";
import Pilotfy from "../media/projects/Pilotfy.png";
import AlphaIg from "../media/projects/AlphaIg.png";
import ListaGastos from "../media/projects/ListaGastos.png";
import Genesis from "../media/projects/genesis.png";
import PokeApp from "../media/projects/poke-ios.png";

// import required modules

export default function Carousel({ filter }) {
  const [t] = useTranslation("global");

  const slidesInfo = [
    {
      src: ToDoApp,
      alt: "Project1",
      desc: "App - Lista de Tareas",
      cat: "App | React + Css",
      link: "https://github.com/luchodelfuturo/app_lista_tareas",
      code: "https://luchodelfuturo.github.io/app_lista_tareas/",
      info: t("projects.ToDoApp"),
    },
    {
      src: AeronauticsWords,
      alt: "Project3",
      desc: "App - Adivina el Avión",
      cat: "Website | React + Css",
      link: "https://github.com/luchodelfuturo/aeronauticswords",
      code: "https://luchodelfuturo.github.io/aeronauticswords/",
      info: t("projects.AppAviones"),
    },
    {
      src: Pilotfy,
      alt: "mkt",
      desc: "Content Creator - Pilotfy",
      cat: "Marketing",
      link: "https://www.instagram.com/pilotfyapp/",
      info: t("projects.Pilotfy"),
    },
    {
      src: AlphaIg,
      alt: "mkt",
      desc: "SMM - Alpha Pergamino",
      cat: "Marketing",
      link: "https://www.instagram.com/alpha.pergamino/",
      info: t("projects.AlphaPergamino"),
    },
    {
      src: AlphaWeb,
      alt: "AlphaPergamino",
      desc: "Website - Alpha Pergamino",
      cat: "Website | React + Tailwindcss",
      link: "https://github.com/luchodelfuturo/alpha-pergamino",
      code: "https://luchodelfuturo.github.io/alpha-pergamino",
      info: t("projects.AlphaWeb"),
    },
    {
      src: ListaGastos,
      alt: "Lista gastos",
      desc: "App- Lista Gastos Firebase",
      cat: "App | React + Tailwindcss + Firebase",
      link: "https://github.com/luchodelfuturo/app_gastos_firebase",
      code: "https://app-lista-de-gastos-lc.web.app/",
      info: t("projects.ListaGastos"),
    },
    {
      src: Genesis,
      alt: "Genesis Aviacion",
      desc: "Website - Genesis Aviacion",
      cat: "Website | NextJs + Tailwindcss",
      link: "https://github.com/luchodelfuturo/aviacion-genesis-web",
      code: "https://genesisaviacion.vercel.app/",
      info: t("projects.Genesis"),
    },
    {
      src: PokeApp,
      alt: "mkt",
      desc: "iOS App - PokeApp",
      cat: "iOS | Programmatically UI",
      link: "https://github.com/luchodelfuturo/pokeapp-ios",
      info: t("projects.Pokeapp"),
    },
  ];

  const filterSlides = (slides) => {
    switch (filter) {
      case "all":
        return slides;
      case "websAviation":
        return slides.filter((slide) => slide.cat.includes("Website"));
      case "mktAviation":
        return slides.filter((slide) => slide.cat.includes("Marketing"));
      case "otherApps":
        return slides.filter((slide) => slide.cat.includes("App"));
      default:
        return slides;
    }
  };

  // Filtramos las diapositivas antes de renderizarlas
  const displayedSlides = filterSlides(slidesInfo);

  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-[50vh] sm:h-[50vh] md:h-[50vh]  "
      >
        {displayedSlides.map((slide) => (
          <SwiperSlide>
            <div class="w-full h-full bg-transparent cursor-grab group perspective ">
              <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg">
                <div class="absolute backface-hidden  w-full h-full select-none ">
                  <img
                    src={slide.src}
                    class="w-full h-full rounded-lg object-cover object-center"
                    alt="none"
                  />
                  <div className="absolute bottom-0 right-0  rounded-tl-lg flex text-center justify-center items-center px-8 py-4 bg-slate-900/80">
                    <h3 className="font-semibold text-white drow-shadow-lg ">
                      {slide.cat}{" "}
                    </h3>
                  </div>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-lg bg-gray-100 overflow-hidden">
                  <div class="text-center  flex flex-col items-center justify-start mt-4  h-full text-gray-800 p-4 ">
                    <h1 class="text-xl font-semibold mb-4 px-2">
                      {slide.desc}
                    </h1>
                    <p className="px-4 text-center">{slide.info}</p>
                    <div className="flex z-20 sm:flex-col gap-2 absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-110 ">
                      {slide.alt === "mkt" ? (
                        <a href={slide.link} target="_blank">
                          <button class="bg-slate-900 px-4 py-2 font-semibold text-white rounded-full hover:bg-sky-800 hover:scale-110 ">
                            Website
                          </button>
                        </a>
                      ) : (
                        <div>
                          <a href={slide.code} target="_blank">
                            <button class="bg-slate-900 px-4 py-2 mr-2 font-semibold text-white rounded-full hover:bg-sky-800 hover:scale-110 ">
                              Demo
                            </button>
                          </a>
                          <a href={slide.link} target="_blank">
                            <button class="bg-slate-900 px-4 py-2 font-semibold text-white rounded-full hover:bg-sky-800  hover:scale-110">
                              Code
                            </button>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
