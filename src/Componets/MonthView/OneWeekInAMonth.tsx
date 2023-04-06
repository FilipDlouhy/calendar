import React from 'react'

 interface props {
   days: JSX.Element[]
}


function OneWeekInAMonth({days}:props) {
  return (
    <div className="w-full h-1/6 flex">
        {days}
    </div>
  )
}

export default OneWeekInAMonth