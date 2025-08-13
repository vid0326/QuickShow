import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import MovieCard from './MovieCard'
import { dummyBookingData, dummyShowsData } from '../assets/assets'

const FeaturedSection = () => {
    const naviagte = useNavigate()
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44
    overflow-hidden'>

        <div className='relative flex items-center justify-between pt-20 pb-10'>
            <BlurCircle top='0' right='-80px'/>

            <p className='text-gray-300 font-medium text-lg' >
                Now Showing

            </p>
            <button onClick={()=>naviagte('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>
              View All 
               <ArrowRight className='group-hover:translate-x-0.5
            transition w-4.5 h-4.5'/>
            </button>
        </div>
        <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
          {dummyShowsData.slice(0,4).map((show)=>
          <MovieCard key={show._id} movie={show}/>
        )}
        </div>



        <div className='flex justify-center mt-20'>
          <button
            onClick={()=>{naviagte('/movies'); scrollTo(0,0)}}
           className='px-10 py-3 text-sm bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition rounded-md font-medium cursor-pointer' >Show More</button>

        </div>

    </div>
  )
}

export default FeaturedSection