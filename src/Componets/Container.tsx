import React ,{useState,useEffect}from 'react'
import Navbar from './Navbar'
import MonthViewContainer from './MonthView/MonthViewContainer'
import DayViewContainer from './DayView/DayViewContainer'
import Modal from './Modal'
import TodayViewContainer from './TodayView/TodayViewContainer'
import { task } from '../../interfaces'
import {ref,set,get} from "firebase/database"
import {db} from "../firebaseConfig"
import UpdateTaskModal from './UpdateTaskModal'
import WeekWiewContainer from './WeekView/WeekWiewContainer'


function Container() {
    const [SelectedCategory, setSelectedCategory] = useState<number>(1)
    const [ShowModal, setShowModal] = useState<boolean>(false)
    const [TodayTasks, setTodayTasks] = useState<task[]>([])
    const [DailyTaks, setDailyTaks] = useState<task[]>([])
    const [DaysInAWeek,setDaysInAWeek] = useState<string[]>([])
    const [DayInTheWeek,setDayInWeek] = useState<string>("")
    const [DailyDay,setDailyDay] =useState<string>()
    const [Monthly, setMonthly] = useState<task[]>([])
    const [UpdateTask,setUpdatetTask]= useState<task>()
    const [Today,setToday] =useState<string>("")
    useEffect(()=>{
        if(SelectedCategory === 4)
        {
        }
        else if (SelectedCategory === 3)
        {
        }
        else if (SelectedCategory === 2)
        {
            if(DailyDay)
            {

                const newDate = new Date(DailyDay);
                newDate.toDateString();
                const tasks = ref(db, `Tasks/${newDate.toString().slice(0,15)}`);
                get(tasks).then((snapshot) => {
                if(snapshot.exists())
                {
                    const stats= snapshot.val()
                    const arr:task[] =[]
                    Object.values(stats).map((task)=>{
                        // @ts-ignore
                       arr.push({Day:task.Day,FromTime:task.FromTime,Importance:task.Importance,Name:task.Name,taskId:task.taskId,ToTime:task.ToTime,Description:task.Description})
                    })
                    arr.sort((a, b) => {
                        const aTime = new Date(`1970-01-01T${a.FromTime}`);
                        const bTime = new Date(`1970-01-01T${b.FromTime}`);
                        return aTime.getTime() - bTime.getTime();
                      });
                      setDailyTaks(arr)
                }
                else
                {
                    setDailyTaks([])
                }
            });
            }
            }

        else if (SelectedCategory === 1)
        {                    
            const newDate = new Date();
            newDate.toDateString();
            const tasks = ref(db, `Tasks/${newDate.toString().slice(0,15)}`);
        get(tasks).then((snapshot) => {
            if(snapshot.exists())
            {
                const stats= snapshot.val()
                const arr:task[] =[]
                Object.values(stats).map((task)=>{
                    // @ts-ignore
                   arr.push({Day:task.Day,FromTime:task.FromTime,Importance:task.Importance,Name:task.Name,taskId:task.taskId,ToTime:task.ToTime,Description:task.Description})
                })
                arr.sort((a, b) => {
                    const aTime = new Date(`1970-01-01T${a.FromTime}`);
                    const bTime = new Date(`1970-01-01T${b.FromTime}`);
                    return aTime.getTime() - bTime.getTime();
                  });
                setTodayTasks(arr)
            }


        });
        }
        const newDate = new Date();
        setToday(newDate.toDateString());
        if(DailyDay === undefined)
        {
            setDailyDay(newDate.toDateString())
        }
    },[SelectedCategory,DailyDay])
    function renderView()
    {
        if(SelectedCategory === 4)
        {
            return <MonthViewContainer setUpdatetTask={setUpdatetTask} setShowModal={setShowModal}/>
        }
        else if (SelectedCategory === 3)
        {
            return <WeekWiewContainer   DaysInAWeek={DaysInAWeek} setUpdatetTask={setUpdatetTask} />
        }
        else if (SelectedCategory === 2)
        {
            return   <DayViewContainer DailyTaks={DailyTaks} setUpdatetTask={setUpdatetTask} setShowModal={setShowModal}/>
        }
        else if (SelectedCategory === 1)
        {
            return <TodayViewContainer setUpdatetTask={setUpdatetTask}  TodayTasks={TodayTasks} setShowModal={setShowModal}/>
        }
    }
  return ( 
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto '>
        <Navbar  DaysInAWeek={DaysInAWeek} setDaysInAWeek={setDaysInAWeek} DailyDay={DailyDay} setDailyDay={setDailyDay}  SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory}/>
        {renderView()}
        {UpdateTask && <UpdateTaskModal DailyTaks={DailyTaks}  setDailyTaks={setDailyTaks} DailyDay={DailyDay}  UpdatedTask={UpdateTask} setUpdatetTask={setUpdatetTask} Today={Today} SelectedCategory={SelectedCategory}  TodayTasks={TodayTasks} setTodayTasks={setTodayTasks} />}
        {ShowModal && <Modal   DailyTaks={DailyTaks} setDailyTaks={setDailyTaks}  setDailyDay={setDailyDay} DailyDay={DailyDay} Today={Today} SelectedCategory={SelectedCategory}  TodayTasks={TodayTasks} setTodayTasks={setTodayTasks} setShowModal={setShowModal}/>}
    </div>
  )
}

export default Container