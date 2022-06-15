import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Info() {

    const[t] = useTranslation("global")
  return (
    <div  className='w-full h-[40vh] bg-white flex justify-center items-center mb-[100vh]'>
        <h1 className='text-4xl font-semibold text-center px-4'>{t("info.text")}</h1>
    </div>
  )
}
