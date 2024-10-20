import React from 'react'
import ControlBar from '../Utils/ControlBar'
import Project from '../Utils/Card/Project'

const HomeSection = () => {
  return (
    <div className='home-section'>
        <ControlBar />
        <section className='flex flex-wrap gap-6'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    </div>
  )
}

export default HomeSection