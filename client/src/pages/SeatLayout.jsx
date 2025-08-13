import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { ArrowBigRightIcon, ClockIcon } from 'lucide-react'
import Loding from '../lib/animations/Loding'
import isoTimeFormat from '../lib/isoTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

const SeatLayout = () => {
  const groupRows =[["A","B"],["C","D"],["E","F"],["G","H"],["I","J"]]
  const {id,date} = useParams()
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)

  const naviagte =useNavigate()
  const getShow = async()=>{
    const show = dummyShowsData.find(show=>show._id===id)
    if(show){
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }

const handleSeatClick = (seatId) => {

 if(!selectedTime){

 return toast('Please select a time first')

}
if(!selectedSeats.includes(seatId) && selectedSeats.length>4){

     return toast('You can only select up to 5 seats')
 }
//  console.log('hello',selectedSeats)

setSelectedSeats(prev =>
    prev.includes(seatId) ? prev.filter(seat => seat !== seatId) : [...prev, seatId]

 )
//  console.log(selectedSeats)


 }

  // useEffect(() => {
  //   // This code will run AFTER the component re-renders
  //   // and selectedSeats has its new value.
  //   console.log('State has been updated:', selectedSeats);
  // }, [selectedSeats]);

  const renderSeats=(row,count=9)=>{
    return(
    <div key ={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {Array.from({length:count},(_,i)=>{
          const seatId =`${row}${i+1}`
          return(
            <button key={seatId} onClick={()=>handleSeatClick(seatId)} className=
            {`h-8 w-8 rounded border border-[var(--color-primary)]/60 cursor-pointer ${selectedSeats.includes(seatId) ?
            "bg-[var(--color-primary)] text-white":''}`}>

              {seatId}
            </button>
          )
        })}

      </div>
    </div>
    )

  }

  useEffect(()=>{
    getShow()
  },[])

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30
    md:pt-50" >
      <div className='w-60 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg py-10 h-max md:sticky md:top-30 '>
        {/*Avaialbe timings   */}

        <p className='text-lg font-semibold px-6'>Available Timings </p>

        <div className='mt-5 space-y-1'>
        
        {show.dateTime[date].map((item)=>(
          <div  key={item.time} onClick={()=> setSelectedTime(item.time)} className={`flex items-center 
          gap-2 px-6 w-max rounded-r-md 
          cursor-pointer
           transition ${selectedTime === item.time ? 
           'bg-[var(--color-primary)] text-white ' : ' hover:bg-[var(--color-primary)]/20'}`}>
            <ClockIcon className='w-4 h-4'/>
            <p className='text-sm'>{isoTimeFormat(item.time)}</p>
          </div>
        ))}

      </div>

      </div>
      {/* seat Layout  */}
      <div  className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCircle top='-100px' left='-100px'/>
        <BlurCircle bottom='0px' right='0px'/>
        <h1 className='text-2xl font-semibold mb-4'>Select Your Sheet</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className=' text-gray-400 text-sm mb-6'>SCREEN SIDE</p>



        <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row=>renderSeats(row))}
   
          </div>
          <div className='grid grid-cols-2 gap-11'>
          {groupRows.slice(1).map((group,ind)=>(
            <div key={ind}>
              {group.map(row=>renderSeats(row))}
            </div>
          ))}

        </div>

        </div>
        <button onClick={()=>naviagte('/my-bookings')} className='flex items-center gap-1 mt-20 px-10 py-3 text-sm
        bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition rounded-full font-medium cursor-pointer
         active:scale-95' > 
          Proceed to Chekout 
          <ArrowBigRightIcon strokeWidth={3} className='w-4 h-4'/>
        </button>
        
      </div>

    </div>
  ):(
    <Loding/>
  )
}

export default SeatLayout