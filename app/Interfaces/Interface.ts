export interface ControlBarProps {
    setFormShow: (show: boolean) => void;
    setEditData?: any; 
    editData?: any;
    fetchData?: () => void;
    total?: number
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
