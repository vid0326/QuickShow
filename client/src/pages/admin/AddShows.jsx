import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets'
import Loding from '../../lib/animations/Loding'
import Title from '../../components/admin/Title'
import { CheckIcon, DeleteIcon, StarIcon } from 'lucide-react'
import { kConvertor } from '../../lib/kConvertor'

const AddShows = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [nowPLayingMovies, setNowPlayingMovies]=useState([])
  const [selectedMovie, setSelectedMovie]=useState(null)
  const [dateTimeSelection,setDateTimeSelection]=useState({})
  const [dateTimeInput,setDateTimeInput]=useState('')
  const [showPrice,setShowPrice]=useState('') 


  const fetchNowPlayingMovies = async()=>{
    setNowPlayingMovies(dummyShowsData)
  }





  const handleDateTimeAdd=()=>{
    if(!dateTimeInput) return;
    console.log(dateTimeInput)
    const [date,time]= dateTimeInput.split("T")//2025-08-07T21:12
    console.log(date,time ) //true or 

    if(!date || !time)return;
    
    setDateTimeSelection((prev)=>{

    
      const times = prev[date]||[]
      console.log(times)
      if(!times.includes(time)){
        return {...prev ,[date] : [...times ,time]}
      }
      
      return prev
    })
   

  }



  const handleRemoveTime = (date,time)=>{
    setDateTimeSelection((prev)=>{
      const filteredTime = prev[date].filter((t) => t!== time)
      // console.log(filteredTime,"hhhh")
      if(filteredTime.length===0){
        const {[date]:_, ...rest}=prev   // This lines means if filteredTime is empty then point the last time value to _ and make prev = rest 

        return rest
      }
      return {
        ...prev ,
        [date]:filteredTime,
      }
    })

  }

  useEffect(()=>{
    fetchNowPlayingMovies()

  },[])








  return  nowPLayingMovies.length > 0 ? (
    <>
      <Title text1='Add' text2="shows"/>
      <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
      <div className='overflow-x-auto pb-4 no-scrollbar'>
        <div className='group flex flex-wrap gap-4 mt-4 w-max '>
          {nowPLayingMovies.map((movie)=>(
             <div  key={movie.id} className={`relative max-w-40 cursor-pointer
             group-hover:not-hover:opacity-40 hover:-translate-y-1  transition 
             duration-300 active:scale-95   `} onClick={()=>setSelectedMovie(movie.id)} >
                  <div className='relative rounded-lg overflow-hidden'>
                    <img src={movie.poster_path} alt=""  className='w-full
                    object-cover brightness-90  '/>
                    <div className='text-sm flex items-center justify-between 
                    p-2 bg-black/70 w-full absolute bottom-0 left-0 '>
                      <p className='flex items-center gap-1 text-gray-400'>
                        <StarIcon className='w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]'/>
                        {movie.vote_average.toFixed(1)}
                      </p>
                      <p className='text-gray-300'>
                        { kConvertor( movie.vote_count)} Votes
                      </p>
                    </div>
                  </div>
                  {selectedMovie==movie._id && (
                    <div className='absolute top-2 right-2 flex item-center
                    justify-center bg-[var(--color-primary)]/50 h-5 w-5 rounded'>
                    <CheckIcon className='w-5 h-5 text-white' strokeWidth={2.5}/>
                    </div>
                  )}


                  <p className='font-medium truncate'>{movie.title}</p>
                  <p className='text-gray-400 text-sm'>{movie.release_date}</p>
             </div>

          ))}

        </div>

      </div>

      
          {/* show price Input */}
          <div  className='mt-8'>
            <label className='block text-sm font-medium mb-2' > Show price</label>
            <div className='inline-flex items-center gap-2 border border-gray-600
            px-3 py-2 rounded-md'>
              <p className='text-gray-400 text-sm'>{currency}</p>
              <input min ={0} type="number" value={showPrice}
              onChange={(e)=>setShowPrice(e.target.value)} placeholder='Enter show price' className='outline-none' />
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className='mt-6'>
            <label className='block text-sm font-medium mb-2'>Select Date and Time </label>
            <div className='inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg cursor-pointer'>
              <input type="datetime-local" value={dateTimeInput} onChange={(e)=>
                setDateTimeInput(e.target.value)
              } className='outline-none rounded-md cursor-pointer 
              '  />
              <button onClick={handleDateTimeAdd} className='bg-[var(--color-primary)]/80
              text-white px-3 py-2 text-sm rounded-lg hover:bg-[var(--color-primary)] cursor-pointer active:scale-110
              '>Add Time</button>
            </div>
          </div>

          {/* Display selected Time */}
          {
            Object.keys(dateTimeSelection).length>0 && (     //This will return you name of keys in the oBJECT IN THE fORM OF aRRAY 
              <div className='mt-6'>
                <h2 className='mb-2'>Selected Date-Time</h2>
                <ul className='space-y-3'>
                  {    //HERE ENTRIES WILL GIVE THE KEYS ALOGWITH VALUESSS
                    Object.entries(dateTimeSelection).map(([date,times])=>(
                      <li key={date}>
                        <div className='font-medium'>
                            {date}
                        </div>
                        <div className='flex flex-wrap gap-2 mt-1 text-sm'>
                          {
                            times.map((time)=>(
                              <div key ={time} className='border border-[var(--color-primary)] px-2 py-1 flex items-center rounded'>
                                <span>{time}</span>
                                <DeleteIcon onClick={()=>handleRemoveTime(date,time)}
                                width={15} className='ml-2 text-red-500 hover:text-red-700 cursor-pointer'/>

                              </div>
                            ))
                          }

                        </div>

                      </li>
                    ))
                  }

                </ul>


              </div>
            )
          }
          <button className='bg-[var(--color-primary)]  text-white px-8 py-2 mt-6 rounded hover:bg-[var(--color-primary)]/90 transition-all cursor-pointer active:scale-95'>
            Add Shows
          </button>
    
    </>
  ) : <Loding/>
}

export default AddShows