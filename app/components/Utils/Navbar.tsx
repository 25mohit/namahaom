import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav flex items-center justify-between mx-auto'>
        <h1 className='text-2xl font-extrabold text-gray-700'>Task Management</h1>
        <ul className='flex gap-9 text-blue-500 font-medium'>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Language</li>
            <li className='cursor-pointer'>Conditions</li>
            <li className='cursor-pointer'>Logout ?</li>
        </ul>
    </nav>
  )
}

export default Navbar