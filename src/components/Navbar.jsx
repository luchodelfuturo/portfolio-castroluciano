import React from 'react'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';




  

export default function Navbar({isScrolling}) {

  const[t, i18n] = useTranslation("global");
  const[idiom,setIdiom]=useState(true);

  const handleChange= () =>{
    setIdiom(!idiom)
    if (idiom == true){
      i18n.changeLanguage("es")
    }
    else{
      i18n.changeLanguage("en")
    }
  }
  

const toTheTop = ()=>{
    window.scrollTo({top:0, left:0, behavior:"smooth"})
}


  return (
    <nav className={`w-full fixed z-10 h-[80px] bg-transparent top-0  text-2xl px-4 flex justify-between transition-[0,8s] ${isScrolling > 20 ? "bg-[#000000] drow-shadow-2xl transition-[0,8s] z-20"  : null}`}>
        <div className='h-full text-white cursor-pointer flex justify-center items-center ml-4' onClick={toTheTop}>L | C</div>
        
        <div className='text-white flex justify-center items-center  mr-2 gap-4'>
          <p className='text-sm '>English</p>

          <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="default-toggle" class="sr-only peer" onChange={()=> handleChange()}/>
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

          </label>

          <p className='text-sm '>Español</p>
        </div>

        
    </nav>
  )
}
