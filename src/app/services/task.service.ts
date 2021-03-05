import { Injectable } from '@angular/core';
import { TaskItem } from '../models/TaskItem';
import { TaskList } from '../models/TaskList';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: TaskList[] = [];


  constructor() {  
    this.loadStorage(); 
  }


  //Storage
  saveStorage() {
    localStorage.setItem( 'data', JSON.stringify(this.taskList) );
  }


  loadStorage() {
    if(localStorage.getItem('data')){
      this.taskList = JSON.parse( localStorage.getItem('data') );
    }else {
      this.taskList = [];
    }
    
  }


  //Data
  getAll(){
    return this.taskList;
  }


  addList( title: string ): number {
    const newList = new TaskList(title);
    this.taskList.push(newList);
    this.saveStorage();

    return newList.id;
  }


  findListById( id: number | string ): TaskList {
    return this.taskList.find( data =>  data.id === Number(id) );

  }


  deleteList( id: number ) {
    const index = this.taskList.findIndex( (data) => data.id === id );
    this.taskList.splice( index, 1 )
    this.saveStorage();
  }


  editList( id: number, newValue: string ) {
    const index = this.taskList.findIndex( (data) => data.id === id );
    this.taskList[index].title = newValue;
    this.saveStorage();
  }


}
