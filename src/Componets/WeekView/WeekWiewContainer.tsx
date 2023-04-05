import React,{useState} from 'react'
import { task } from '../../../interfaces'
import WeekDay from './WeekDay'
import WeekTaskContainer from './WeekTaskContainer'
import { DataSnapshot, getDatabase, onValue, ref } from 'firebase/database'
import { get } from 'http'
import { db } from '../../firebaseConfig'
import ShowAllTasksForADayModal from './ShowAllTasksForADayModal'

interface props
{
     setUpdatetTask: React.Dispatch<React.SetStateAction<task | undefined>>
     DaysInAWeek: string[]
}


function WeekWiewContainer({DaysInAWeek}:props) {
  const [DayInTheWeek,setDayInWeek] = useState<string>("")
  const [ShowTaskModal, setShowTaskModal] = useState<boolean>(false)
  const [ShowAllTasksForADay,setShowAllTasksForADay] = useState<boolean>(false)
  
  function renderWeekContainer() {
    const WeekTaskContainers: any[] = []
    DaysInAWeek.map((day) => {


      WeekTaskContainers.push(<WeekTaskContainer DayToAddTask={DayInTheWeek} DayInAWeek={day}  ShowTaskModal={ShowTaskModal}  setShowTaskModal={setShowTaskModal}  />)
  
    })
  
    return WeekTaskContainers.map((container) => {
      return container
    })
  }


  return (
  <div style={{height:"92%"}} className='w-full flex'>
    <div className='h-full w-1/5 bg-blue-400'>
        {DaysInAWeek && DaysInAWeek.map((day)=>{
        return    <WeekDay setShowAllTasksForADay={setShowAllTasksForADay} setDayInWeek={setDayInWeek} day={day} setShowTaskModal={setShowTaskModal}/>
        })}

    </div>

    <div className='h-full w-4/5'>

    { renderWeekContainer()}

        {ShowAllTasksForADay && <ShowAllTasksForADayModal DayInTheWeek={DayInTheWeek} setShowAllTasksForADay={setShowAllTasksForADay}/>}


    </div>
        

  </div>





  )
}

export default WeekWiewContainer