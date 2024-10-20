"use client"
import React, { useCallback, useEffect, useState } from 'react'
import ControlBar from '../Utils/ControlBar'
import Project from '../Utils/Card/Project'
import ProjectForm from '../Utils/Form/ProjectForm'
import { UserTasks } from '@/app/moc_data/UserTask'
import { Task } from '@/app/Interfaces/Interface'
import HashLoader from "react-spinners/HashLoader";

const HomeSection = () => {
    const [formShow, setFormShow] = useState(false)   
    const [editData, setEditData] = useState({})
    const [taskList, setTaskList] = useState<Task[]>([]) 
    const [visibleItems, setVisibleItems] = useState(20);

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

    const handleScroll = useCallback(() => {
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100; // Adjust threshold for smaller screens
        if (bottom && visibleItems < taskList.length) {
            setVisibleItems(prev => Math.min(prev + 10, taskList.length)); // Ensure we don’t exceed the total number of items
        }
    }, [taskList.length, visibleItems]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);    

  return (
    <div className='home-section'>
        <ControlBar total={taskList?.length} setFormShow={setFormShow} setTaskList={setTaskList}/>
        <div className='conte'>
            {
                taskList?.length > 0 ? 
                taskList.slice(0, visibleItems)?.map((data, ind) => <Project key={ind} data={data} setEditData={setEditData}/>)
                : 
                <div className="loading-ui fixed">
                    <HashLoader size={60} color='rgb(226, 226, 59)'/>
                </div>
            }
        </div>
        { (formShow || Object.keys(editData)?.length > 0) && <ProjectForm fetchData={fetchData} setEditData={setEditData} editData={editData} setFormShow={setFormShow}/> }
    </div>
  )
}

export default HomeSection