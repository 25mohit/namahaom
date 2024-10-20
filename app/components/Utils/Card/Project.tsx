import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

interface proj {
    data?:{
        priority?: string,
        status? : string,
        heading? : string,
        assignee?: string,
        description? : string,
        progress? : number,
    }
}

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
const Project:React.FC<proj> = ({ data }) => {
  return (
    <div className='project p-3 rounded-lg mb-4 flex flex-col gap-2'>
        <header className='flex justify-between'>
            <h3 className='text-xl'>{data?.heading}</h3>
            <div className={`priority ${data?.priority || ''} rounded`} title={`Priority - ${data?.priority?.toUpperCase()}`} />
        </header>
        <section>
            <span className={`status ${data?.status?.split(' ').join('')} px-2 rounded-md`}>{data?.status}</span>
            <p className='my-2 description' title="Description">{data?.description}</p>
            <div className="foot flex justify-between items-center text-sm bg-gray-100 py-1 px-2 rounded-md">
                <p className='flex gap-1 items-center' title="Task Assignee"><span className={`logo ${ data?.assignee && getColorClass(data.assignee[0])}`}>{data?.assignee?.slice(0,1)}</span>{data?.assignee}</p>
                <span className='flex gap-1 items-center' title="Task Due Date"><FaCalendarAlt id="calendar"/> 14-Jul-2024</span>
            </div>
            <div className="progress-bar mt-4" title={`Progress - ${data?.progress}%`}>
                <div className="progress" style={{width: `${data?.progress}%`}}></div>
            </div>
        </section>
    </div>
  )
}

export default Project