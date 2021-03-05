import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/TaskList';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  taskList: TaskList[];


  constructor( private taskService: TaskService ) {}


  ngOnInit(): void {
    this.taskList = this.taskService.getAll();
  }

}
