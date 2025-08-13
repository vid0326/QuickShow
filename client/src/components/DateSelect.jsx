import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DateSelect = ({dateTime , id}) => {
    const naviagte = useNavigate()
    const [seleceted ,setSelected ]= useState(null)
    const onBookHandler = ()=>{
        if(!seleceted){
            return toast('Please selecet a date ')
        }
        naviagte(`/movies/${id}/${seleceted}`)
        scrollTo(0,0)


    }
  return (
    <div id ='dateSelect' className='pt-30'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8
         bg-[var(--color-primary)]/10  border border-[var(--color-primary)]/20 rounded-lg max-w-6xl mx-auto'>
            <BlurCircle top='-100px' left="-100px"/>
            <BlurCircle top='100px' right="0px"/>
            <div>
                <p className='text-lg font-semibold'>Choose Date</p>
                <div className='flex items-center gap-6 text-sm mt-5' >
                    <ChevronLeftIcon width={28}/>
                    <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                        {Object.keys(dateTime).map((date) => (
                            <button onClick={()=>setSelected(date)} key={date} className={`flex flex-col 
                            items-center justify-center h-14 w-14 
                            aspect-square rounded cursor-pointer ${seleceted === date ? 
                            'bg-[var(--color-primary)] text-white' : 'border border-[var(--color-primary)]/70'}
                             transition-all`}>
                                <span>{new Date(date).getDate()}</span>
                                <span>{new Date(date).toLocaleDateString("en-us",{
                                    month: "short"
                                })}</span>
                                


                            </button>
                        ))}
                    </span>
                    <ChevronRightIcon width={28}/>
                </div>
            </div>
            <button onClick={onBookHandler} className='bg-[var(--color-primary)] text-white px-8 py-2 mt-6 rounded hover:bg-[var(--color-primary)]/90 transition-all cursor-pointer'>Book Now </button>
        </div>
    </div>
  )
}

export default DateSelect