import React, { useEffect, useState } from 'react'
import { task } from '../../../interfaces'
import WeekTask from './WeekTask'
import AddTaskInAWeekModal from './AddTaskInAWeekModal'
import { getDatabase, onValue, ref } from 'firebase/database'
import UpdateWeekTaskModal from './UpdateWeekTaskModal'
interface props
{
setShowTaskModal: React.Dispatch<React.SetStateAction<boolean>>
ShowTaskModal: boolean
DayInAWeek:string
DayToAddTask:string
}


function WeekTaskContainer({DayToAddTask,DayInAWeek,ShowTaskModal,setShowTaskModal}:props) {
    const [TaskForTheDay,setTaskForTheDay] = useState<task[]>([])
    const [ShowUpdateTaskModal, setShowUpdateTaskModal] = useState<boolean>(false)
    const [UpdateTask, setUpdateTask] = useState<task>()
    function renderTask(tasks:task[]) {
        const maxTasks = 6;
        const limitedTasks = tasks.slice(0, maxTasks);
      
        return limitedTasks.map((task) => (
          <WeekTask setShowUpdateTaskModal={setShowUpdateTaskModal} setUpdateTask={setUpdateTask} task={task}/>
        ));
      }
    useEffect(()=>{
        const Tasks: task[] = []
        const newDate = new Date(DayInAWeek);
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
        setTaskForTheDay(Tasks)
    },[DayInAWeek,ShowTaskModal])
    useEffect(()=>{
        setTaskForTheDay([])
        const Tasks: task[] = []
        const newDate = new Date(DayInAWeek);
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
        setTaskForTheDay(Tasks)
    },[])
  return (
    <div style={{ height: "14.28%" }} className="w-full mothDayBoxShadow flex items-center justify-start font-bold text-white ">
        {renderTask(TaskForTheDay)}
    { ShowTaskModal&&       <AddTaskInAWeekModal  DayToAddTask={DayToAddTask} setShowTaskModal={setShowTaskModal}/>
    
}    

{ShowUpdateTaskModal&& <UpdateWeekTaskModal  UpdateTask={UpdateTask} setShowUpdateTaskModal={setShowUpdateTaskModal}/>}</div>
  )
}

export default WeekTaskContainer