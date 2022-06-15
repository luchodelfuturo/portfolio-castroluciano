import React from 'react'
import ph from '../media/phprofile.jpeg'
import { useTranslation } from 'react-i18next';

export default function About() {
    const[t] = useTranslation("global");
  return (
    <div className='w-full h-full bg-white '>
        <div className=' max-w-[1200px] mx-auto grid md:grid-cols-2 p-8 gap-6 '>
             <div className='flex flex-col justify-center px-8  '>
            <h3 className=' text-3xl md:text-4xl font-bold text-left'>{t("about.title")}</h3>
            <p className=' md:text-xl text-justify my-4 '>{t("about.desc")}</p>
        </div>
        <div className='flex justify-center items-center object-cover px-8'>
            <img className=' w-full h-[40vh] object-cover md:h-[60vh] rounded-lg ' src={ph} alt="" />
        </div>
        </div>
       
    </div>
  )
}
