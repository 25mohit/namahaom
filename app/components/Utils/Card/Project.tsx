import { ProjectProps } from '@/app/Interfaces/Interface';
import moment from 'moment';
import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

const getColorClass = (letter: string) => {
    if (!letter) return '';
    
    const char = letter.toUpperCase();
  
    if ('ABCDE'.includes(char)) {
      return 'bg-red-500 text-white'; 
    } else if ('FGHIJ'.includes(char)) {
      return 'bg-blue-500 text-white'; 
    } else if ('KLMNO'.includes(char)) {
      return 'bg-green-500 text-white'; 
    } else if ('PQRST'.includes(char)) {
      return 'bg-yellow-500 text-black'; 
    } else if ('UVWXYZ'.includes(char)) {
      return 'bg-purple-500 text-white';
    }
    
    return 'bg-gray-500 text-white';
};

const Project:React.FC<ProjectProps> = ({ data, setEditData }) => {
    
  return (
    <div className='project p-3 rounded-lg mb-4 flex flex-col gap-2'>
        <header className='flex items-center justify-between'>
            <h3 className='text-xl'>{data?.title}</h3>
            <div className='flex gap-2 items-center'>
                <MdOutlineEdit className='cursor-pointer' title='Edit Task' onClick={() => setEditData(data)}/>
                <div className={`priority ${data?.priority || ''} rounded`} title={`Priority - ${data?.priority?.toUpperCase()}`} />
            </div>
        </header>
        <section>
            <span className={`status ${data?.status?.split(' ').join('')} px-2 rounded-md select-none`}>{data?.status}</span>
            <p className='my-2 description' title="Description">{data?.description}</p>
            <div className="foot flex justify-between items-center text-sm bg-gray-100 py-1 px-2 rounded-md">
                <p className='flex gap-1 items-center' title="Task Assignee"><span className={`logo ${ data?.assignee && getColorClass(data.assignee[0])} select-none`}>{data?.assignee?.slice(0,1)}</span>{data?.assignee}</p>
                <span className='flex gap-1 items-center' title="Task Due Date">{data?.completeAt ? <><FaCalendarAlt id="calendar"/>{moment(data?.completeAt).format("MMM Do YYYY")}</> : ''}</span>
            </div>
            <div className="progress-bar mt-4" title={`Progress - ${data?.progress}%`}>
                <div className="progress" style={{width: `${data?.progress}%`}}></div>
            </div>
        </section>
    </div>
  )
}

export default Project