import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/TaskList';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  taskList: TaskList[];
  pending: string = 'pending';


  constructor( private taskService: TaskService ) {}


  ngOnInit(): void {
    this.taskList = this.taskService.getAll();
  }

}
