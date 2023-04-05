import React, { useEffect,useState } from 'react'
import { task } from '../../../interfaces'
import { getDatabase, onValue, ref } from 'firebase/database'
import ShowAllTasksTask from './ShowAllTasksTask'
interface props{
    DayInTheWeek: string
    setShowAllTasksForADay: React.Dispatch<React.SetStateAction<boolean>>
}


function ShowAllTasksForADayModal({DayInTheWeek,setShowAllTasksForADay}:props) {
    const [AllTasks,setAllTasks] = useState<task[]>([])

    function handleCloseModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if((e.target as HTMLDivElement).id !=="modal")
        {
            setShowAllTasksForADay(false)
        }
       }
       useEffect(()=>{
        const Tasks: task[] = []
        const newDate = new Date(DayInTheWeek);
        newDate.toDateString();
        const db = getDatabase();
        const tasksRef = ref(db, `Tasks/${newDate.toString().slice(0, 15)}`);
        onValue(tasksRef, (snapshot) => {
          if (snapshot.exists()) {
            const tasks = snapshot.val();
            Object.values(tasks).map((task) => {
              // @ts-ignore
              Tasks.push({ Day: task.Day, FromTime: task.FromTime, Importance: task.Importance, Name: task.Name, taskId: task.taskId, ToTime: task.ToTime, Description: task.Description })
            })
          }
        });
        setAllTasks(Tasks)
       },[DayInTheWeek])
    return (
        <div onClick={(e)=>{handleCloseModal(e)}} className='w-full h-full flex items-center justify-center text-black z-40 ModalPositon' >
    
            <div  id="modal" className='w-1/3 h-5/6 bg-white z-50 rounded flex items-center  flex-col overflow-x-hidden overflow-y-auto'>
                    {AllTasks.map((task)=>{return <ShowAllTasksTask task={task}/>})}
            </div>
    
        </div>
      )
}

export default ShowAllTasksForADayModal