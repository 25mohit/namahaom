import React from 'react'
import ControlBar from '../Utils/ControlBar'
import Project from '../Utils/Card/Project'

const HomeSection = () => {
    const testData = [
        {
            heading: 'Frontend Optimization',
            priority: 'low',
            status: 'In Progress',
            progress: 20,
            description: 'Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress. Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress.',
            assignee: 'Amit Sharma'
        },
        {
            heading: 'API Integration',
            priority: 'medium',
            status: 'In Progress',
            progress: 70,
            description: 'Developing and integrating the necessary APIs for the web application. Focus on data synchronization with the backend.',
            assignee: 'Pooja Singh'
        },
        {
            heading: 'UI Design Implementation',
            priority: 'low',
            status: 'To Do',
            progress: 50,
            description: 'Setting up the initial UI design for the website. Color schemes and typography are yet to be finalized.',
            assignee: 'Ravi Kumar'
        },
        {
            heading: 'Backend Architecture Setup',
            priority: 'high',
            status: 'In Progress',
            progress: 10,
            description: 'Establishing the core backend infrastructure. Database configuration and user authentication setup are in progress.',
            assignee: 'Sanjay Verma'
        },
        {
            heading: 'Responsive Design Testing',
            priority: 'high',
            status: 'To Do',
            progress: 60,
            description: 'Ensuring the website is fully responsive across all devices. Mobile-first approach testing is yet to begin.',
            assignee: 'Priya Nair'
        },
        {
            heading: 'Feature Enhancement',
            priority: 'medium',
            status: 'In Progress',
            progress: 70,
            description: 'Adding additional features to enhance user experience. Testing of new modules is currently underway.',
            assignee: 'Manish Gupta'
        },
        {
            heading: 'Deployment to Production',
            priority: 'low',
            status: 'Completed',
            progress: 100,
            description: 'Website successfully deployed to the production environment. Post-deployment checks are all cleared.',
            assignee: 'Anjali Mehta'
        },
        {
            heading: 'Database Optimization',
            priority: 'medium',
            status: 'Completed',
            progress: 100,
            description: 'Database optimized for faster query performance. Indexing and caching strategies have been applied successfully.',
            assignee: 'Rahul Desai'
        },
        {
            heading: 'Security Enhancements',
            priority: 'high',
            status: 'In Progress',
            progress: 40,
            description: 'Implementing security measures such as data encryption and user authentication protocols. Risk assessment ongoing.',
            assignee: 'Kavita Iyer'
        },
        {
            heading: 'Frontend Optimization',
            priority: 'low',
            status: 'In Progress',
            progress: 20,
            description: 'Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress. Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress.',
            assignee: 'Amit Sharma'
        },
        {
            heading: 'API Integration',
            priority: 'medium',
            status: 'In Progress',
            progress: 70,
            description: 'Developing and integrating the necessary APIs for the web application. Focus on data synchronization with the backend.',
            assignee: 'Pooja Singh'
        },
        {
            heading: 'UI Design Implementation',
            priority: 'low',
            status: 'To Do',
            progress: 50,
            description: 'Setting up the initial UI design for the website. Color schemes and typography are yet to be finalized.',
            assignee: 'Ravi Kumar'
        },
        {
            heading: 'Backend Architecture Setup',
            priority: 'high',
            status: 'In Progress',
            progress: 10,
            description: 'Establishing the core backend infrastructure. Database configuration and user authentication setup are in progress.',
            assignee: 'Sanjay Verma'
        },
        {
            heading: 'Responsive Design Testing',
            priority: 'high',
            status: 'To Do',
            progress: 60,
            description: 'Ensuring the website is fully responsive across all devices. Mobile-first approach testing is yet to begin.',
            assignee: 'Priya Nair'
        },
        {
            heading: 'Feature Enhancement',
            priority: 'medium',
            status: 'In Progress',
            progress: 70,
            description: 'Adding additional features to enhance user experience. Testing of new modules is currently underway.',
            assignee: 'Manish Gupta'
        },
        {
            heading: 'Deployment to Production',
            priority: 'low',
            status: 'Completed',
            progress: 100,
            description: 'Website successfully deployed to the production environment. Post-deployment checks are all cleared.',
            assignee: 'Anjali Mehta'
        },
        {
            heading: 'Database Optimization',
            priority: 'medium',
            status: 'Completed',
            progress: 100,
            description: 'Database optimized for faster query performance. Indexing and caching strategies have been applied successfully.',
            assignee: 'Rahul Desai'
        },
        {
            heading: 'Security Enhancements',
            priority: 'high',
            status: 'In Progress',
            progress: 40,
            description: 'Implementing security measures such as data encryption and user authentication protocols. Risk assessment ongoing.',
            assignee: 'Kavita Iyer'
        },
        {
            heading: 'Frontend Optimization',
            priority: 'low',
            status: 'In Progress',
            progress: 20,
            description: 'Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress. Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress.',
            assignee: 'Amit Sharma'
        },
        {
            heading: 'API Integration',
            priority: 'medium',
            status: 'In Progress',
            progress: 70,
            description: 'Developing and integrating the necessary APIs for the web application. Focus on data synchronization with the backend.',
            assignee: 'Pooja Singh'
        },
        {
            heading: 'UI Design Implementation',
            priority: 'low',
            status: 'To Do',
            progress: 50,
            description: 'Setting up the initial UI design for the website. Color schemes and typography are yet to be finalized.',
            assignee: 'Ravi Kumar'
        },
        {
            heading: 'Backend Architecture Setup',
            priority: 'high',
            status: 'In Progress',
            progress: 10,
            description: 'Establishing the core backend infrastructure. Database configuration and user authentication setup are in progress.',
            assignee: 'Sanjay Verma'
        },
        {
            heading: 'Responsive Design Testing',
            priority: 'high',
            status: 'To Do',
            progress: 60,
            description: 'Ensuring the website is fully responsive across all devices. Mobile-first approach testing is yet to begin.',
            assignee: 'Priya Nair'
        },
        {
            heading: 'Feature Enhancement',
            priority: 'medium',
            status: 'In Progress',
            progress: 70,
            description: 'Adding additional features to enhance user experience. Testing of new modules is currently underway.',
            assignee: 'Manish Gupta'
        },
        {
            heading: 'Deployment to Production',
            priority: 'low',
            status: 'Completed',
            progress: 100,
            description: 'Website successfully deployed to the production environment. Post-deployment checks are all cleared.',
            assignee: 'Anjali Mehta'
        },
        {
            heading: 'Database Optimization',
            priority: 'medium',
            status: 'Completed',
            progress: 100,
            description: 'Database optimized for faster query performance. Indexing and caching strategies have been applied successfully.',
            assignee: 'Rahul Desai'
        },
        {
            heading: 'Security Enhancements',
            priority: 'high',
            status: 'In Progress',
            progress: 40,
            description: 'Implementing security measures such as data encryption and user authentication protocols. Risk assessment ongoing.',
            assignee: 'Kavita Iyer'
        },
    ];
    
    
  return (
    <div className='home-section'>
        <ControlBar />
        <div className='conte'>
            {
                testData?.map((data, ind) => <Project key={ind} data={data}/>)
            }
        </div>
        {/* <ProjectForm /> */}
    </div>
  )
}

export default HomeSection