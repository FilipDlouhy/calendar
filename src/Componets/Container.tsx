import React ,{useState,useEffect}from 'react'
import Navbar from './Navbar'
import MonthViewContainer from './MonthView/MonthViewContainer'
import WeelViewContainer from './WeekView/WeelViewContainer'
import DayViewContainer from './DayView/DayViewContainer'
import Modal from './Modal'
import TodayViewContainer from './TodayView/TodayViewContainer'
import { task } from '../../interfaces'
import {ref,set,get} from "firebase/database"
import {db} from "../firebaseConfig"

function Container() {
    const [SelectedCategory, setSelectedCategory] = useState<number>(1)
    const [ShowModal, setShowModal] = useState<boolean>(false)
    const [TodayTasks, setTodayTasks] = useState<task[]>([])
    const [DailyTaks, setDailyTaks] = useState<task[]>([])
    const [WeeklyTasks, setWeeklyTasks] = useState<task[]>([])
    const [Monthly, setMonthly] = useState<task[]>([])
    useEffect(()=>{
        if(SelectedCategory === 4)
        {
        }
        else if (SelectedCategory === 3)
        {
        }
        else if (SelectedCategory === 2)
        {
        }
        else if (SelectedCategory === 1)
        {                    
            const newDate = new Date();
            newDate.toDateString();
            const tasks = ref(db, `Tasks/${newDate.toString().slice(0,15)}`);
        get(tasks).then((snapshot) => {
            const stats= snapshot.val()
            const arr:task[] =[]
            Object.values(stats).map((task)=>{
                // @ts-ignore
               arr.push({Day:task.Day,FromTime:task.FromTime,Importance:task.Importance,Name:task.Name,taskId:task.taskId,ToTime:task.ToTime,Description:task.Description})
            })
            setTodayTasks(arr)

        });
        }
    },[SelectedCategory])
    function renderView()
    {
        if(SelectedCategory === 4)
        {
            return <MonthViewContainer setShowModal={setShowModal}/>
        }
        else if (SelectedCategory === 3)
        {
            return <WeelViewContainer setShowModal={setShowModal}/>
        }
        else if (SelectedCategory === 2)
        {
            return   <DayViewContainer setShowModal={setShowModal}/>
        }
        else if (SelectedCategory === 1)
        {
            return <TodayViewContainer  TodayTasks={TodayTasks} setShowModal={setShowModal}/>
        }
    }
  return (
    <div className='w-screen h-screen'>
        <Navbar SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory}/>
        {renderView()}
        {ShowModal && <Modal setShowModal={setShowModal}/>}
    </div>
  )
}

export default Container