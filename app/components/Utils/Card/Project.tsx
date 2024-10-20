import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div className='project p-3 rounded-lg mb-4 flex flex-col gap-2'>
        <header className='flex justify-between'>
            <h3 className='text-xl'>Website Development</h3>
            <div className="priority rounded" title="High Priority" />
        </header>
        <section>
            <span className="status px-2 rounded-md">In Progress</span>
            <p className='my-2 description' title="Description">Have to create a website within provided timeframe of 15 days. Otherwise it will be a big problem</p>
            <div className="foot flex justify-between items-center text-sm bg-gray-100 py-1 px-2 rounded-md">
                <p className='flex gap-1 items-center' title="Task Assignee"><span className="logo">M</span> Mohit Agarwal</p>
                <span className='flex gap-1 items-center' title="Task Due Date"><FaCalendarAlt id="calendar"/> 14-Jul-2024</span>
            </div>
            <div className="progress-bar mt-4" title='Progress - 80%'>
                <div className="progress"></div>
            </div>
        </section>
    </div>
  )
}

export default Project