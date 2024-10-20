import { ControlBarProps } from '@/app/Interfaces/Interface'
import React from 'react'

const ControlBar:React.FC<ControlBarProps> = ({ setFormShow }) => {
  return (
    <div className='flex justify-between items-center py-4'>
        <span></span>
        <button className="btn" onClick={() => setFormShow(true)}>Add New Task</button>
    </div>
  )
}

export default ControlBar