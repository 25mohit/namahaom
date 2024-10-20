import { filterOptionInterface } from '@/app/Interfaces/Interface'
import React from 'react'

const FilterModal:React.FC<filterOptionInterface> = ({ setSelectedOption }) => {

    const onSelectHandler = (value: string) => {
        setSelectedOption(value)
    }
    
  return (
    <div className='filter-modal w-fit bg-white p-2 px-4 right-0 top-full shadow-2xl rounded-md z-40 absolute'>
        <ul className='flex flex-col gap-2 text-white text-sm'>
            <li onClick={() => onSelectHandler('All')} className='px-2 rounded cursor-pointer whitespace-nowrap bg-pink-300'>All</li>
            <li onClick={() => onSelectHandler('In Progress')} className='px-2 rounded cursor-pointer whitespace-nowrap bg-orange-300'>In Progress</li>
            <li onClick={() => onSelectHandler('To Do')} className='px-2 rounded cursor-pointer whitespace-nowrap bg-blue-400'>To Do</li>
            <li onClick={() => onSelectHandler('Completed')} className='px-2 rounded cursor-pointer whitespace-nowrap bg-green-400'>Completed</li>
        </ul>
    </div>
  )
}

export default FilterModal