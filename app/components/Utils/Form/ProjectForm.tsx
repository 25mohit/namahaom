import { IoClose } from "react-icons/io5";

const ProjectForm = () => {
  return (
    <div className="cont fixed flex">
        <div className='project-modal p-6'>
            <header className="flex items-center justify-between">
                <h3 className='text-xl'>Add new Task</h3>
                <IoClose className="text-blue-500 cursor-pointer text-xl"/>
            </header>
            <form action="post" className='flex flex-col gap-4 my-3'>
                <input type="text" placeholder='Title' />
                <input type="text" placeholder='Description' />
                <select name="" id="">
                    <option value="">Assignee</option>
                </select>
                <select name="" id="">
                    <option value="">Priority</option>
                </select>
                <input type="date" name="" id="" title='Due Date'/>
                <select name="" id="">
                    <option value="">To Do</option>
                    <option value="">In Progress</option>
                    <option value="">Completed</option>
                </select>
                <button className="btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ProjectForm