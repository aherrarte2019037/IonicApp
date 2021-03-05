import { TaskItem } from "./TaskItem";

export class TaskList {
    id: number;
    title: string;
    createdAt: Date;
    finishedAt: Date;
    completed: boolean;
    taskItems: TaskItem[];


    constructor( title: string ){ 
        this.id = new Date().getTime();
        this.title = title;
        this.createdAt = new Date();  
        this.finishedAt = null; 
        this.completed = true;
        this.taskItems = [];
    }

    
    

}