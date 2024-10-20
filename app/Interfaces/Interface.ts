import { Dispatch, SetStateAction } from "react";

export interface ControlBarProps {
    setFormShow: (show: boolean) => void;
    setEditData?: Dispatch<SetStateAction<any>>; 
    editData?: any;
    fetchData?: () => void;
    total?: number;
    setTaskList?: any
}
export interface Task {
    id?: number;
    title: string;
    priority: string;
    status: string;
    progress: number;
    description: string;
    assignee: string;
    completeAt: string
}
export interface Assignee {
    assignee: string
}

export interface filterOptionInterface{
    setSelectedOption?: Dispatch<SetStateAction<string>>
}