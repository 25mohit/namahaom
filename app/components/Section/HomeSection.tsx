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
    const [editData, setEditData] = useState<Task | null>(null)
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

    // Scroll function manage List of Tasks based on the Use scroll, when there is only 100px left in bottom, then new data will be added to list
    const handleScroll = useCallback(() => {
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (bottom && visibleItems < taskList.length) {
            setVisibleItems(prev => Math.min(prev + 10, taskList.length));
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
        <ControlBar total={taskList?.length} setFormShow={setFormShow} setTaskList={setTaskList} setEditData={setEditData}/>
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
        { (formShow || editData && Object.keys(editData)?.length > 0) && <ProjectForm setTaskList={setTaskList} fetchData={fetchData} setEditData={setEditData} editData={editData} setFormShow={setFormShow}/> }
    </div>
  )
}

export default HomeSection