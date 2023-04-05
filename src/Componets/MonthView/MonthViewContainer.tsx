import React from 'react'
import { task } from '../../../interfaces'
interface props
{
     setShowModal: React.Dispatch<React.SetStateAction<boolean>>
     setUpdatetTask: React.Dispatch<React.SetStateAction<task | undefined>>
}
function MonthViewContainer({setShowModal}:props) {
  return (




  <div style={{height:"92%"}} className='w-full '>
  <div className='w-full h-1/6 flex items-center justify-around  text-xl font-bold bg-blue-400 text-white'>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Monday</div>
          <div  className='h-full flex items-center justify-center' style={{ width: "14.28%" }}>Tuesday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Wendsday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Thursday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Friday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Saturday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Sunday</div>
      </div>
    <div className="w-full h-1/6 flex">
                  <div className='mothDayBoxShadow  h-full '  style={{ width: "14.28%" }}>
                      <div onClick={()=>{setShowModal(true)}} className='bg-red-400 hover:bg-violet-500 cursor-pointer duration-300 font-semibold text-white  text-xl w-full h-1/5 flex items-center justify-end pr-5'>
                        <p className='w-4/5 flex items-center justify-center cursor-pointer'>Add task to a day</p>
                          <p className='w-1/5  h-full flex items-center justify-end'>5</p>
                      </div>
                      <div className='w-full h-4/5'>
                          <div className='h-1/5 hover:bg-yellow-400 cursor-pointer duration-300 bg-gray-400 text-white font-semibold w-full flex justify-end px-5'>
                              <div className='w-3/5 h-full'>
                                <p>sdasdsadsadsadasd</p>
                              </div>
                              <div className='w-2/5 h-full flex items-center justify-end'>
                                <p>8:00 - 23:24</p>
                              </div>
                          </div>

                          
                      </div>
                  </div>
          <div  className='mothDayBoxShadow  h-full flex items-center justify-center' style={{ width: "14.28%" }}></div>
          <div className='mothDayBoxShadow  h-full flex items-center justify-center'  style={{ width: "14.28%" }}></div>
          <div className='mothDayBoxShadow  h-full flex items-center justify-center'  style={{ width: "14.28%" }}></div>
          <div className='mothDayBoxShadow  h-full flex items-center justify-center'  style={{ width: "14.28%" }}></div>
          <div className='mothDayBoxShadow  h-full flex items-center justify-center'  style={{ width: "14.28%" }}></div>
          <div className='mothDayBoxShadow  h-full flex items-center justify-center'  style={{ width: "14.28%" }}></div>
    </div>
    <div className="w-full h-1/6 flex">
                  <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Monday</div>
          <div  className='h-full flex items-center justify-center' style={{ width: "14.28%" }}>Tuesday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Wendsday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Thursday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Friday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Saturday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Sunday</div>
    </div>
    <div className="w-full h-1/6 flex">
                  <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Monday</div>
          <div  className='h-full flex items-center justify-center' style={{ width: "14.28%" }}>Tuesday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Wendsday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Thursday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Friday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Saturday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Sunday</div>
    </div>
    <div className="w-full h-1/6 flex">
                  <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Monday</div>
          <div  className='h-full flex items-center justify-center' style={{ width: "14.28%" }}>Tuesday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Wendsday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Thursday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Friday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Saturday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Sunday</div>
    </div>
    <div className="w-full h-1/6 flex">
                  <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Monday</div>
          <div  className='h-full flex items-center justify-center' style={{ width: "14.28%" }}>Tuesday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Wendsday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Thursday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Friday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Saturday</div>
          <div className='h-full flex items-center justify-center'  style={{ width: "14.28%" }}>Sunday</div>
    </div>

  </div>





  )
}

export default MonthViewContainer