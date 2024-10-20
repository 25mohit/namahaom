"use client"
import React, { useEffect, useState } from 'react'
import ControlBar from '../Utils/ControlBar'
import Project from '../Utils/Card/Project'
import ProjectForm from '../Utils/Form/ProjectForm'
import { UserTasks } from '@/app/moc_data/UserTask'
import { Task } from '@/app/Interfaces/Interface'

const HomeSection = () => {
    const [formShow, setFormShow] = useState(false)   
    const [editData, setEditData] = useState({})
    const [taskList, setTaskList] = useState<Task[]>([]) 
    
    const fetchData = () => {
        const isDataExists = localStorage.getItem('taskData')
        if(isDataExists == null || isDataExists == undefined){
            localStorage.setItem('taskData', JSON.stringify(UserTasks))
            setTaskList(UserTasks)
        } else {
            setTaskList(JSON.parse(isDataExists))
        }
    }

    useEffect(() => {
        if(!formShow){
            fetchData()
        }        
    },[formShow])

    console.log("taskList", taskList, editData, formShow);
    
  return (
    <div className='home-section'>
        <ControlBar total={taskList?.length} setFormShow={setFormShow}/>
        <div className='conte'>
            {
                taskList?.map((data, ind) => <Project key={ind} data={data} setEditData={setEditData}/>)
            }
        </div>
        { (formShow || Object.keys(editData)?.length > 0) && <ProjectForm fetchData={fetchData} setEditData={setEditData} editData={editData} setFormShow={setFormShow}/> }
    </div>
  )
}

export default HomeSection