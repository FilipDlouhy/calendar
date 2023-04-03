import React from 'react'
interface props
{
     setShowModal: React.Dispatch<React.SetStateAction<boolean>>

}



function DayViewContainer({setShowModal}:props) {
  return (

  <div style={{height:"92%"}} className='w-full  mothDayBoxShadow'>
    <div className='w-full h-20  flex justify-center items-center'>
        <div onClick={()=>{setShowModal(true)}} className='w-60 h-10 bg-blue-700 rounded hover:scale-105 duration-200 cursor-pointer flex items-center justify-center'>
            <p className='font-bold text-white text-xl'>Add task for this day</p>
        </div>
    </div>

    <div className='w-full h-32 bg-blue-400  hover:bg-yellow-400 cursor-pointer duration-300 flex my-2'>
      <div className='h-full w-1/5 flex items-center justify-around flex-col'>
        <p className='text-2xl font-bold text-white'>From</p>
        <p className='text-2xl font-bold text-white'>8:00</p>
      </div>

      <div className='h-full w-3/5 flex items-center justify-around flex-col'>

        <div className='w-full h-full flex items-center justify-center'>
            <p className='text-xl font-medium text-white'>sadassadhsiod asid sdasijd asdj asio dasiod iaosd iasod iasodu iasoj asiojd ioas d ioasj idoj siodj asiodj ai sdasiod </p>
        </div>
        
      </div>

      <div className='h-full w-1/5 flex items-center justify-around flex-col'>
        <p className='text-2xl font-bold text-white'>From</p>
        <p className='text-2xl font-bold text-white'>8:00</p>
      </div>

    </div>




  </div>


  )
}

export default DayViewContainer