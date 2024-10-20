import { ControlBarProps, Task } from "@/app/Interfaces/Interface";
import { AssigneeList } from "@/app/moc_data/UserTask";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const ProjectForm:React.FC<ControlBarProps> = ({ setFormShow, setEditData, editData, fetchData }) => {

    const [form, setForm] = useState({
        id: Date.now(),
        title: '',
        description: '',
        assignee:'',
        priority:'',
        completeAt: '',
        status: '',
        progress: 10
    })
    const [isEdit, setIsEdit] = useState(false)

    const onChangeHandler = (e: any) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const closeForm = () => {
        Object.keys(editData || {})?.length > 0 && setEditData({})
        setFormShow(false)
    }

    useEffect(() => {
        if(editData && Object.keys(editData)?.length > 0){
            setIsEdit(true)
            setForm(editData)
        }
    },[editData])

    const previousData = localStorage.getItem('taskData')

    const onAddHandler = (e:any) => {
        e.preventDefault()
        
        let newData:Task[] = []

        if(previousData !== null && previousData !== undefined){
            const parsed = JSON.parse(previousData)
            newData = [form, ...parsed]
        } else {
            newData.push(form)
            
        }

        localStorage.setItem('taskData', JSON.stringify(newData))
        toast(`🎉 Task Added Successfully !`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
        closeForm()
    }

    const onEditHandler = (e:any) => {
        e.preventDefault()

        if(previousData !== null && previousData !== undefined){
            const parsed = JSON.parse(previousData)
            const newResult = parsed?.map((dt:Task) => {
                if(dt?.title === editData?.title){
                    return form
                } else {
                    return dt
                }
            })
            localStorage.setItem('taskData', JSON.stringify(newResult))
            if (fetchData) {
                fetchData();
            }
            toast(`🎉 Task Updated Successfully !`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
                });
            closeForm()            
        }
    }

  return (
    <div className="cont fixed flex" onClick={closeForm}>
        <div className='project-modal p-6' onClick={e => e.stopPropagation()}>
            <header className="flex items-center justify-between">
                <h3 className='text-xl select-none'>{isEdit ? 'Edit' : 'Add new'} Task</h3>
                <IoClose className="text-blue-500 cursor-pointer text-xl" onClick={closeForm}/>
            </header>
            <form action="post" className='flex flex-col gap-4 my-3'>
                <input onChange={onChangeHandler} name="title" value={form.title} type="text" placeholder='Title' />
                <input onChange={onChangeHandler} name="description" value={form.description} type="text" placeholder='Description' />
                <select  onChange={onChangeHandler} value={form.assignee} name="assignee" id="">
                    <option value="">Assignee</option>
                    {
                        AssigneeList?.map((assignee, index) => <option key={index} value={assignee.assignee}>{assignee.assignee}</option>)
                    }
                </select>
                <select onChange={onChangeHandler} value={form.priority}name="priority" id="">
                    <option value="">Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input onChange={onChangeHandler} value={form.completeAt} type="date" name="completeAt" title='Due Date'/>
                <select  onChange={onChangeHandler} value={form.status} name="status" id="">
                    <option value="">Status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                {
                    isEdit ? 
                    <button type="button" onClick={onEditHandler} className="btn">Edit</button> :
                    <button type="button" onClick={onAddHandler} className="btn">Submit</button>
                }
            </form>
        </div>
    </div>
  )
}

export default ProjectForm