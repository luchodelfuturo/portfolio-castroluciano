import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../media/phprofile.jpeg'
import img2 from '../media/phprofile.jpeg'

import img3 from '../media/phprofile.jpeg'
import { Pagination, Navigation , Autoplay } from "swiper";
import { useTranslation } from 'react-i18next';

import AlphaWeb from '../media/projects/AlphaWeb.png'
import AeronauticsWords from '../media/projects/AeronauticsWords.png'
import ToDoApp from '../media/projects/ToDoApp.png'
import Pilotfy from '../media/projects/Pilotfy.png'
import AlphaIg from '../media/projects/AlphaIg.png'








// import required modules


export default function Carousel() {
const[t] = useTranslation("global");

const slidesInfo = [
  {
      src:ToDoApp,
      alt: "Project1",
      desc: "App - Lista de Tareas",
      cat:'App | React + Css',
      link: "https://github.com/luchocas234/app_lista_tareas",
      info:t("projects.ToDoApp")
      
  },
  {
      src:AeronauticsWords,
      alt: "Project3",
      desc: "App - Adivina el Avión",
      cat:'App | React + Css',
      link: "https://github.com/luchocas234/aeronauticswords",
      info:t("projects.AppAviones")
  },
  {
      src:Pilotfy,
      alt: "mkt",
      desc:"Content Creator - Pilotfy",
      cat:'Marketing',
      link: "https://www.instagram.com/pilotfyapp/",
      info:t("projects.Pilotfy")
  },
  {
      src:AlphaIg,
      alt: "mkt",
      desc:"SMM - Alpha Pergamino",
      cat:'Marketing',
      link: "https://www.instagram.com/alpha.pergamino/",
      info:t("projects.AlphaPergamino")
  },
  {
      src: AlphaWeb,
      alt: "AlphaPergamino",
      desc:"Website - Alpha Pergamino",
      cat:'Website | React + Tailwindcss',
      link: "https://github.com/luchocas234/alpha-pergamino",
      info:t("projects.AlphaWeb")
  }
]


  
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
          delay:6000,
          disableOnInteraction:true,
        }}
        breakpoints={
          {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:30,
            },
            1300:{
              slidesPerView:4,
              spaceBetween:30,
            },
            
          }
        }
        
        
        modules={[ Navigation ,Autoplay]}
        className='w-full h-[40vh] sm:h-[50vh] md:h-[50vh]  '
      >
        
      {slidesInfo.map((slide)=>(
<SwiperSlide>


<div
        class="w-full h-full bg-transparent cursor-pointer group perspective "
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg"
        >
          <div class="absolute backface-hidden  w-full h-full select-none ">
            <img src={slide.src} class="w-full h-full rounded-lg object-cover object-center" />
            <div className="absolute bottom-0 right-0  rounded-tl-lg flex text-center justify-center items-center px-8 py-4 bg-slate-900/80">
              <h3 className="font-semibold text-white drow-shadow-lg ">{slide.cat} </h3>
            </div>
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-lg bg-gray-100 overflow-hidden"
          >
            <div
              class="text-center  select-none flex flex-col items-center justify-start mt-4  h-full text-gray-800 p-4 "
            >
              <h1 class="text-xl font-semibold mb-4 px-2">{slide.desc}</h1>
              <p className="px-4 text-center">{slide.info}
              </p>
              <div className="flex sm:flex-col gap-2 absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-110 ">
              {slide.alt == 'mkt'? <button
                class="bg-slate-900 px-4 py-2 font-semibold text-white rounded-full hover:bg-sky-800 hover:scale-110 "
              >
                Website
              </button> : <div>
                <button
                  class="bg-slate-900 px-4 py-2 mr-2 font-semibold text-white rounded-full hover:bg-sky-800 hover:scale-110 "
                   >
                  Demo
                </button>
                <button
                  class="bg-slate-900 px-4 py-2 font-semibold text-white rounded-full hover:bg-sky-800  hover:scale-110"
                >
                  Code
                </button>
              </div>}
              
              </div>
              
            </div>
          </div>
        </div>
      </div>


      </SwiperSlide>

        // <SwiperSlide>
        //   <img className="w-full h-full object-cover object-center select-none hover:scale-110 hover:transition-[0,8s] transition-[0,8s]" src={slide.src}/>
        // </SwiperSlide>
      ))}  
        
        
        
        {/* <SwiperSlide><img className="w-full h-full object-cover hover:scale-110" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover hover:scale-110" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover hover:scale-110" src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover hover:scale-110" src={img3} alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full h-full object-cover hover:scale-110" src={img3} alt="" /></SwiperSlide>
 */}

  
        
      </Swiper>
    </>
  );
}