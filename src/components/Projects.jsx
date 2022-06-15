import React from 'react'
import Carousel from './Carousel'
import { useTranslation } from 'react-i18next';


export default function Projects() {
  const[t] = useTranslation("global");

  return (
    <div className='w-full bg-black h-screen'>
        <div className=' max-w-[1400px] mx-auto grid h-full p-8'>
            <div className='w-full text-white  flex justify-center items-center'>
                <h2 className='text-4xl font-semibold  my-4'>{t("projects.title")}</h2>
            </div>
            
            <Carousel/>
            

        </div>

    </div>
  )
}
