import { ControlBarProps, Task } from "@/app/Interfaces/Interface";
import { AssigneeList } from "@/app/moc_data/UserTask";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import * as yup from 'yup'

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
    const [errors, setErrors] = useState<any>()

    const onChangeHandler = (e: any) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
        if(errors && Object.keys(errors)?.length > 0){
            setErrors({...errors, [name]:''})
        }
    }

    const closeForm = () => {
        Object.keys(editData || {})?.length > 0 && (setEditData && setEditData({}))
        setFormShow(false)
    }

    useEffect(() => {
        if(editData && Object.keys(editData)?.length > 0){
            setIsEdit(true)
            setForm(editData)
        }
    },[editData])

    const validateForm = yup.object({
        title: yup.string().required('Task Title is Required'),
        description: yup.string().required('Task Description is Required'),
        assignee: yup.string().required('Please select a Assignee'),
        priority: yup.string().required('Please assign a Priority'),
        completeAt: yup.string().required('Please select task completion Date'),
        status: yup.string().required('Please select task Status')
    })

    const previousData = localStorage.getItem('taskData')

    const onAddHandler = async (e:any) => {
        e.preventDefault()
        
        let newError:Record<string, string> = {}
        
        try {
            await validateForm.validate(form, {abortEarly: false})
        } catch (error: any) {
            error.inner.forEach((elem: any) =>{
                newError[elem.path] = elem.message
            })
            setErrors(newError)
        }

        if(!Object.keys(newError)?.length){
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
            
            
    }
    
    const onEditHandler = async (e:any) => {
        e.preventDefault()

        let newError:Record<string, string> = {}
        
        try {
            await validateForm.validate(form, {abortEarly: false})
        } catch (error: any) {
            error.inner.forEach((elem: any) =>{
                newError[elem.path] = elem.message
            })
            setErrors(newError)
        }

        if(!Object.keys(newError)?.length){
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
                { errors?.title && <p className="error">{errors.title}</p> }
                <textarea onChange={onChangeHandler} name="description" value={form.description} placeholder='Description' ></textarea>
                {/* <input onChange={onChangeHandler} name="description" value={form.description} type="text" placeholder='Description' /> */}
                { errors?.description && <p className="error">{errors.description}</p> }
                <select  onChange={onChangeHandler} value={form.assignee} name="assignee">
                    <option value="">Assignee</option>
                    {
                        AssigneeList?.map((assignee, index) => <option key={index} value={assignee.assignee}>{assignee.assignee}</option>)
                    }
                </select>
                { errors?.assignee && <p className="error">{errors.assignee}</p> }
                <select onChange={onChangeHandler} value={form.priority}name="priority">
                    <option value="">Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                { errors?.priority && <p className="error">{errors.priority}</p> }
                <input onChange={onChangeHandler} value={form.completeAt} type="date" name="completeAt" title='Due Date'/>
                { errors?.completeAt && <p className="error">{errors.completeAt}</p> }
                <select  onChange={onChangeHandler} value={form.status} name="status">
                    <option value="">Status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                { errors?.status && <p className="error">{errors.status}</p> }
                {
                    isEdit ? 
                    <button type="submit" onClick={onEditHandler} className="btn">Edit</button> :
                    <button type="submit" onClick={onAddHandler} className="btn">Submit</button>
                }
            </form>
        </div>
    </div>
  )
}

export default ProjectForm