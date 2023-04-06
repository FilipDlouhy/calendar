import React, { useEffect, useState } from 'react'
import { task } from '../../../interfaces'
import { getDatabase, onValue, ref } from 'firebase/database'
import TaskInADay from './TaskInADay'

interface props {
  setShowTaskModal: React.Dispatch<React.SetStateAction<boolean>>
  day: string
  Tasks:task[]
  setDayToAddTask: React.Dispatch<React.SetStateAction<string>>
  setUpdatetTask: React.Dispatch<React.SetStateAction<task | undefined>>
  setShowUpdateTaskModalMonth: React.Dispatch<React.SetStateAction<boolean>>
}

function DayInAMonht({ setShowTaskModal, setShowUpdateTaskModalMonth,day,Tasks ,setDayToAddTask,setUpdatetTask}: props) {




  return (
    <div className='mothDayBoxShadow  h-full ' style={{ width: "14.28%" }}>
      <div onClick={() => { 
        setDayToAddTask(day)
        setShowTaskModal(true) }} className='bg-red-400 hover:bg-violet-500 cursor-pointer duration-300 font-semibold text-white  text-xl w-full h-1/5 flex items-center justify-end pr-5'>
        <p className='w-4/5 flex items-center justify-center cursor-pointer'>Add task to a day</p>
        <p className='w-1/5  h-full flex items-center justify-end'>{parseInt(day.slice(8,10))}</p>
      </div>
      <div className='w-full h-4/5'>
        {Tasks && Tasks.map((task)=>{
          return <TaskInADay setShowUpdateTaskModalMonth={setShowUpdateTaskModalMonth} setUpdatetTask={setUpdatetTask} task={task}/>
        })}
      </div>
    </div>
  )
}

export default DayInAMonht

