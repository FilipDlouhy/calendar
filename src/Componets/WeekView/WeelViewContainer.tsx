import React from 'react'

interface props
{
     setShowModal: React.Dispatch<React.SetStateAction<boolean>>

}


function WeelViewContainer({setShowModal}:props) {
  return (
  <div style={{height:"92%"}} className='w-full flex'>
    <div className='h-full w-1/5 bg-blue-400'>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex-col  flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Monday</p>      
          <p  onClick={()=>{setShowModal(true)}}className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow  flex-col flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Tuesday</p>       
          <p  onClick={()=>{setShowModal(true)}}className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex-col  flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Wensday</p>       
          <p  onClick={()=>{setShowModal(true)}}className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex-col  flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Thursday</p>        
          <p  onClick={()=>{setShowModal(true)}}className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow  flex-col flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Friday</p>      
          <p  onClick={()=>{setShowModal(true)}}className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow  flex-col flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Saturday</p>        
          <p onClick={()=>{setShowModal(true)}} className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
      <div  style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex-col  flex items-center justify-center font-bold text-white text-2xl">
          <p className='hover:text-green-300 duration-200 cursor-pointer'>Sunday</p>      
              <p  onClick={()=>{setShowModal(true)}}className='mt-3 hover:text-red-400  duration-200 cursor-pointer'>Add task to 29.3</p>
      </div>
    </div>

    <div className='h-full w-4/5'>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">
          <div className='w-1/6 h-full mothDayBoxShadow bg-green-400 hover:bg-yellow-400 cursor-pointer duration-300'>
                <div className='w-full  h-1/4 flex items-center justify-center '>
                    <p className='text-2xl'>8:00-200</p>
                </div>
                <div className='w-full h-3/4 flex items-center justify-center px-1 text-center'>
                    <p>adasdd sdioas dioa sjd jasoidj asio jsoaijd s asiodj asio doasid ioasdj asio djsaio oasid asioj dio </p>
                </div>
          </div>
      </div>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">

      </div>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">

      </div>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">

      </div>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">

      </div>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">

      </div>

      <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">

      </div>

    </div>


  </div>





  )
}

export default WeelViewContainer