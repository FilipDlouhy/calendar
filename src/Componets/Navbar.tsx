import React ,{useState}from 'react'

interface props
{
    SelectedCategory: number
    setSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}


function Navbar({SelectedCategory,setSelectedCategory}:props) {
    function renderDate()
    {
        if(SelectedCategory === 4)
        {
            return  <div className='w-2/4 h-full flex items-center justify-center'>
            
                    <div  className='h-full w-24 flex items-center justify-center'>
                    <p className='text-lg text-blue-500 font-bold hover:text-green-500 duration-300 cursor-pointer'>Previous</p>
                    </div>
            
                    <div className='w-52 h-full flex-col flex items-center justify-center'>
                    <p className='font-bold text-2xl '>August</p>
                </div>
            <div className='h-full w-24 flex items-center justify-center'>
              <p className='text-lg text-blue-500 font-bold hover:text-green-500 duration-300 cursor-pointer'>Next</p>
            </div>
          </div>
        }
        else if (SelectedCategory === 3)
        {
            return    <div className='w-2/4 h-full flex items-center justify-center'>
            
                    <div  className='h-full w-24 flex items-center justify-center'>
                    <p className='text-lg text-blue-500 font-bold hover:text-green-500 duration-300 cursor-pointer'>Previous</p>
                    </div><div className='w-52 h-full flex-col flex items-center justify-center'>
            <p className='font-bold text-2xl '>August</p>
            <p className='font-bold'>1/4 week of the month</p>
          </div>

                      <div className='h-full w-24 flex items-center justify-center'>
              <p className='text-lg text-blue-500 font-bold hover:text-green-500 duration-300 cursor-pointer'>Next</p>
            </div>
          </div>
        }
        else if (SelectedCategory === 2)
        {
            return   <div className='w-2/4 h-full flex items-center justify-center'>
            
                    <div  className='h-full w-24 flex items-center justify-center'>
                    <p className='text-lg text-blue-500 font-bold hover:text-green-500 duration-300 cursor-pointer'>Previous</p>
                    </div>
            
            <div className='w-52 h-full flex-col flex items-center justify-center'>
            <p className='font-bold text-2xl '> 23  of August </p>
          </div>            <div className='h-full w-24 flex items-center justify-center'>
              <p className='text-lg text-blue-500 font-bold hover:text-green-500 duration-300 cursor-pointer'>Next</p>
            </div>
          </div>


        }
        else if (SelectedCategory === 1)
        {
            return <div className='w-2/4 h-full flex items-center justify-center'>
            
                    <div className='w-52 h-full flex-col flex items-center justify-center'>
            <p className='font-bold text-xl '> Today is August 23</p>
          </div>    
          </div>
        }
    }
  return (
    <div style={{height:"8%"}} className='w-full mothDayBoxShadow'>

    <div className='w-full h-full flex'>
        <div className='w-1/2 h-full  flex items-center justify-start'> 
            {renderDate()}
        </div>
        <div className='w-1/2 h-full  items-center justify-end'>
          <div className='w-full flex h-full items-start justify-end pl-10'>
            <div  onClick={()=>{setSelectedCategory(1)}}className={SelectedCategory === 1 ? 'typeOfCalendarSelected  hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold w-1/4 h-full flex items-center justify-center':'typeOfCalendarNotSelected hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold  w-1/4 h-full flex items-center justify-center'}>Today</div>
            <div onClick={()=>{setSelectedCategory(2)}} className={SelectedCategory === 2 ? 'typeOfCalendarSelected  hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold w-1/4 h-full flex items-center justify-center':'typeOfCalendarNotSelected hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold  w-1/4 h-full flex items-center justify-center'}>Day</div>
            <div onClick={()=>{setSelectedCategory(3)}} className={SelectedCategory === 3 ? 'typeOfCalendarSelected  hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold w-1/4 h-full flex items-center justify-center':'typeOfCalendarNotSelected hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold  w-1/4 h-full flex items-center justify-center'}>Week</div>
            <div onClick={()=>{setSelectedCategory(4)}} className={SelectedCategory === 4? 'typeOfCalendarSelected  hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold w-1/4 h-full flex items-center justify-center':'typeOfCalendarNotSelected hover:bg-purple-600 cursor-pointer duration-300 text-white font-bold  w-1/4 h-full flex items-center justify-center'}>Month</div>
          </div>
       </div>
    </div>



  </div>
  )
}

export default Navbar