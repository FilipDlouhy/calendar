import React,{useEffect, useState} from 'react'
import {ref,set,get} from "firebase/database"
import {db} from "../../firebaseConfig"
import {task} from "../../../interfaces"
import uuid from 'react-uuid'
import DailyTask from '../DayView/DailyTask'
interface props
{
    setShowTaskModal: React.Dispatch<React.SetStateAction<boolean>>

     DayToAddTask:string

}
function AddTaskInAWeekModal({DayToAddTask ,setShowTaskModal}:props) {
    const [FromTime, setFromTime] = useState('');
    const [ToTime, setToTime] = useState('');
    const [Importance, setImportance] = useState("Low");
    const [Name, setName] = useState('');
    const [Day, setDay] = useState(DayToAddTask);
    const [TaskDescription, setTaskDescription] = useState('');
    useEffect(()=>{
    })
    function handleCloseModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if((e.target as HTMLDivElement).id !=="modal")
        {
            setShowTaskModal(false)
        }
       }
      function uploadToDatabse(task:task)
      {
          set(ref(db,"Tasks/"+task.Day+"/"+task.taskId),task)
          setShowTaskModal(false)
      }
  
      function handleSubmit() {
        const formHours = parseInt(FromTime.slice(0,2))
        const fromminutes = parseInt(FromTime.slice(3,5))
        const toHours = parseInt(ToTime.slice(0,2))   
        const toMinutes = parseInt(ToTime.slice(3,5)) 
        const taskId = uuid()
        const newTask:task={Day:Day,FromTime:FromTime,Importance:Importance,Name:Name,ToTime:ToTime,taskId:taskId,Description:TaskDescription}
        if(FromTime && ToTime && Importance && Name && Day  )
        {
            if (formHours === toHours )
            {
                if(fromminutes < toMinutes)
                {
         
                    uploadToDatabse(newTask)
                    setShowTaskModal(false)

                }
            }
            else if( formHours < toHours)
            { 
                uploadToDatabse(newTask)
                setShowTaskModal(false)


            }
        }

      }


  return (
    <div onClick={(e)=>{
        handleCloseModal(e)
    }} className='w-full h-full flex items-center justify-center text-black z-20 ModalPositon'>

        <div  id="modal" className='w-1/3 h-5/6 bg-white z-50 rounded flex items-center justify-around flex-col '>

            <div  id="modal"  className='w-full h-16 flex items-center justify-center'>
                <p  className='text-2xl z-50  font-bold'>Add task for Today</p>
            </div>

            <div  id="modal"  className='w-full h-16  flex items-center justify-around flex-col'>
                <p  id="modal" className='z-50 text-black  text-xl font-semibold'>From</p>
                <input type='time' onChange={(e)=>{setFromTime(e.target.value)}} id="modal" className='w-2/4 shadow-xl bg-blue-100 h-12'/>
            </div>

            <div  id="modal"  className='w-full h-16  flex items-center justify-around flex-col'>
                <p  id="modal" className='z-50 text-black  text-xl font-semibold'>Name</p>
                <input onChange={(e)=>{setName(e.target.value)}}  type='text' id="modal" className='w-2/4 shadow-xl bg-blue-100 h-12'/>
            </div>

            <div className='w-full h-16  flex items-center justify-around flex-col'>
                <p  id="modal" className='z-50 text-black  text-xl font-semibold'>To</p>
                <input onChange={(e)=>{setToTime(e.target.value)}} type='time' id="modal" className='w-2/4 shadow-xl bg-blue-100 h-12'/>
            </div>

            <div id="modal"   className='w-full h-16  flex items-center justify-around flex-col'>
                <p  id="modal" className='z-50 text-black  text-xl font-semibold'>Importanece</p>
                <select id="modal" onChange={(e)=>{setImportance(e.target.value)}} className='w-2/4 shadow-xl bg-blue-100 h-12'>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Hihg">Hihg</option>
                </select>
            </div>

            <div id="modal"   className='w-full h-32  flex items-center justify-around flex-col'>
                 <p  id="modal" className='z-50 text-black  text-xl font-semibold'>Description</p>
                <textarea onChange={(e)=>{setTaskDescription(e.target.value)}} id="modal" className='w-3/4 h-24 bg-blue-100 resize-none'></textarea>
            </div>
        
            <button    onClick={()=>{handleSubmit() }} className='w-72 h-10 bg-blue-600 font-bold rounded text-xl text-white' id="modal">Add</button>

        </div>

    </div>
  )
}

export default AddTaskInAWeekModal