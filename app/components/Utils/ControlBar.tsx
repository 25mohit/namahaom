import { ControlBarProps, Task } from '@/app/Interfaces/Interface'
import React, { useEffect, useState } from 'react'
import { FcEmptyFilter } from "react-icons/fc";
import FilterModal from './FilterModal';

const ControlBar:React.FC<ControlBarProps> = ({ setFormShow, total, setTaskList }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    const filterTaskList = (val: string) => {
      const savedList = localStorage.getItem('taskData')
      if(savedList == null || savedList == undefined){
        return setShowFilter(false)
      } else {
        const parsed = JSON.parse(savedList)
        if(val === 'All'){
          setTaskList(parsed) 
        } else {
          setTaskList(parsed?.filter((task:Task) => task?.status === val))
        }
        setShowFilter(false)
      }
    }
    filterTaskList(selectedOption)
  },[selectedOption])

  return (
    <div className='flex justify-between items-center py-4 flex-wrap gap-4'>
      <div className='flex gap-2 items-center flex-wrap'>
        <h2 className='text-orange-500 text-xl' title="Project Name">Project - <b>LMS ( Full Stack MERN Web Application)</b></h2>
        <span className='text-blue-500' title="Total Count of Tasks">You have <b>{total}</b> Tasks</span>
      </div>
      <div className='reverse flex items-center gap-4'>
        <div className='relative'>
          <FcEmptyFilter title="Filter List" className='cursor-pointer text-xl' onClick={() => setShowFilter(!showFilter)}/>
          { showFilter && <FilterModal setSelectedOption={setSelectedOption}/> }
        </div>
        <button className="btn" onClick={() => setFormShow(true)}>Add New Task</button>
      </div>
    </div>
  )
}

export default ControlBar