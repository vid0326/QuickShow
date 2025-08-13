import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar1Icon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const naviagte= useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6
     md:px-16 lg:px-36 bg-[url("/backgroundImage.png")]
     bg-cover bg-center h-screen'>

      <img src={assets.marvelLogo} alt="Marvel Studios Logo" className='max-h-11 lg:h-11 mt-20' />

      <h1 className='text-5xl md:text-[70px] md:leading-[1.2] font-semibold max-w-[40rem]'>
        Guardians <br /> of the Galaxy 
      </h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fi</span>

        <div className='flex items-center gap-1'>
          <Calendar1Icon className='w-5 h-5' />
          2018
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className='w-5 h-5' />
          2h 8m
        </div>

        </div>
        <div className=' gap-4 text-gray-300'>
             <p className='max-w-md text-gray-300'>
            In a post-apocalyptic world where cities ride on wheels and consume each other
            to survive , two people meet in London and try to stop a consipiracy 

        </p>
        <button onClick={()=>naviagte('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary 
        hover:bg-[var(--color-primary-dull)] transition rounded-full font-medium cursor-pointer'>
            Explore Movies 
            <ArrowRight className='w-5 h-5'/>
        </button>
        </div>
       
      
      
    </div>
  )
}

export default HeroSection
