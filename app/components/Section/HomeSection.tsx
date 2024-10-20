import React from 'react'
import ControlBar from '../Utils/ControlBar'
import Project from '../Utils/Card/Project'

const HomeSection = () => {
  return (
    <div>
        <ControlBar />
        <section>
            <Project />
        </section>
    </div>
  )
}

export default HomeSection