import { Dispatch, SetStateAction } from "react";

export interface ControlBarProps {
    setFormShow: (show: boolean) => void;
    setEditData: Dispatch<SetStateAction<Task | null>>; 
    editData?: Task | null;
    fetchData?: () => void;
    total?: number;
    setTaskList: Dispatch<SetStateAction<[] | null>>
}
export interface Task {
    id: number;
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
    setSelectedOption: Dispatch<SetStateAction<string>>
}
export interface FormErrors {
    title: string;
    description: string;
    assignee: string;
    priority: string;
    completeAt: string;
    status: string;
}