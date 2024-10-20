import { Assignee, Task } from "../Interfaces/Interface";

export const UserTasks: Task[] = [
    {
        id: Date.now(),
        title: 'Frontend Optimization',
        completeAt:'2024-10-15',
        priority: 'low',
        status: 'In Progress',
        progress: 20,
        description: 'Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress. Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress.',
        assignee: 'Amit Sharma'
    },
    {
        id: Date.now(),
        title: 'API Integration',
        completeAt:'2024-10-15',
        priority: 'medium',
        status: 'In Progress',
        progress: 70,
        description: 'Developing and integrating the necessary APIs for the web application. Focus on data synchronization with the backend.',
        assignee: 'Pooja Singh'
    },
    {
        id: Date.now(),
        title: 'UI Design Implementation',
        completeAt:'2024-10-15',
        priority: 'low',
        status: 'To Do',
        progress: 50,
        description: 'Setting up the initial UI design for the website. Color schemes and typography are yet to be finalized.',
        assignee: 'Ravi Kumar'
    },
    {
        id: Date.now(),
        title: 'Backend Architecture Setup',
        completeAt:'2024-10-15',
        priority: 'high',
        status: 'In Progress',
        progress: 10,
        description: 'Establishing the core backend infrastructure. Database configuration and user authentication setup are in progress.',
        assignee: 'Sanjay Verma'
    },
    {
        id: Date.now(),
        title: 'Responsive Design Testing',
        completeAt:'2024-10-15',
        priority: 'high',
        status: 'To Do',
        progress: 60,
        description: 'Ensuring the website is fully responsive across all devices. Mobile-first approach testing is yet to begin.',
        assignee: 'Priya Nair'
    },
    {
        id: Date.now(),
        title: 'Feature Enhancement',
        completeAt:'2024-10-15',
        priority: 'medium',
        status: 'In Progress',
        progress: 70,
        description: 'Adding additional features to enhance user experience. Testing of new modules is currently underway.',
        assignee: 'Manish Gupta'
    },
    {
        id: Date.now(),
        title: 'Deployment to Production',
        completeAt:'2024-10-15',
        priority: 'low',
        status: 'Completed',
        progress: 100,
        description: 'Website successfully deployed to the production environment. Post-deployment checks are all cleared.',
        assignee: 'Anjali Mehta'
    },
    {
        id: Date.now(),
        title: 'Database Optimization',
        completeAt:'2024-10-15',
        priority: 'medium',
        status: 'Completed',
        progress: 100,
        description: 'Database optimized for faster query performance. Indexing and caching strategies have been applied successfully.',
        assignee: 'Rahul Desai'
    },
    {
        id: Date.now(),
        title: 'Security Enhancements',
        completeAt:'2024-10-15',
        priority: 'high',
        status: 'In Progress',
        progress: 40,
        description: 'Implementing security measures such as data encryption and user authentication protocols. Risk assessment ongoing.',
        assignee: 'Kavita Iyer'
    },
    {
        id: Date.now(),
        title: 'Frontend Optimization',
        completeAt:'2024-10-15',
        priority: 'low',
        status: 'In Progress',
        progress: 20,
        description: 'Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress. Working on improving the frontend performance to reduce load times. Optimization of images and scripts in progress.',
        assignee: 'Amit Sharma'
    },
    {
        id: Date.now(),
        title: 'API Integration',
        completeAt:'2024-10-15',
        priority: 'medium',
        status: 'In Progress',
        progress: 70,
        description: 'Developing and integrating the necessary APIs for the web application. Focus on data synchronization with the backend.',
        assignee: 'Pooja Singh'
    },
    {
        id: Date.now(),
        title: 'UI Design Implementation',
        completeAt:'2024-10-15',
        priority: 'low',
        status: 'To Do',
        progress: 50,
        description: 'Setting up the initial UI design for the website. Color schemes and typography are yet to be finalized.',
        assignee: 'Ravi Kumar'
    },
    {
        id: Date.now(),
        title: 'Backend Architecture Setup',
        completeAt:'2024-10-15',
        priority: 'high',
        status: 'In Progress',
        progress: 10,
        description: 'Establishing the core backend infrastructure. Database configuration and user authentication setup are in progress.',
        assignee: 'Sanjay Verma'
    },
    {
        id: Date.now(),
        title: 'Responsive Design Testing',
        completeAt:'2024-10-15',
        priority: 'high',
        status: 'To Do',
        progress: 60,
        description: 'Ensuring the website is fully responsive across all devices. Mobile-first approach testing is yet to begin.',
        assignee: 'Priya Nair'
    },
    {
        id: Date.now(),
        title: 'Feature Enhancement',
        completeAt:'2024-10-15',
        priority: 'medium',
        status: 'In Progress',
        progress: 70,
        description: 'Adding additional features to enhance user experience. Testing of new modules is currently underway.',
        assignee: 'Manish Gupta'
    },
    {
        id: Date.now(),
        title: 'Deployment to Production',
        completeAt:'2024-10-15',
        priority: 'low',
        status: 'Completed',
        progress: 100,
        description: 'Website successfully deployed to the production environment. Post-deployment checks are all cleared.',
        assignee: 'Anjali Mehta'
    },
    {
        id: Date.now(),
        title: 'Database Optimization',
        completeAt:'2024-10-15',
        priority: 'medium',
        status: 'Completed',
        progress: 100,
        description: 'Database optimized for faster query performance. Indexing and caching strategies have been applied successfully.',
        assignee: 'Rahul Desai'
    },
    {
        id: Date.now(),
        title: 'Security Enhancements',
        completeAt:'2024-10-15',
        priority: 'high',
        status: 'In Progress',
        progress: 40,
        description: 'Implementing security measures such as data encryption and user authentication protocols. Risk assessment ongoing.',
        assignee: 'Kavita Iyer'
    },
];
export const AssigneeList: Assignee[] = [
    { assignee: 'Mohit Agarwal' },
    { assignee: 'Amit Sharma' },
    { assignee: 'Priya Singh' },
    { assignee: 'Rahul Verma' },
    { assignee: 'Sneha Patel' },
    { assignee: 'Ravi Kumar' },
    { assignee: 'Anjali Gupta' },
    { assignee: 'Suresh Reddy' },
    { assignee: 'Kiran Desai' },
    { assignee: 'Neha Mehta' },
    { assignee: 'Vikram Bansal' },
    { assignee: 'Nisha Yadav' },
    { assignee: 'Ajay Joshi' },
    { assignee: 'Pooja Sethi' },
    { assignee: 'Aakash Choudhury' },
    { assignee: 'Tanvi Jain' },
    { assignee: 'Deepak Nair' },
    { assignee: 'Sonali Chatterjee' },
    { assignee: 'Kunal Sinha' },
    { assignee: 'Riya Iyer' }
]