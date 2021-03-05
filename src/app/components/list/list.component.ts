import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { TaskList } from 'src/app/models/TaskList';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

@ViewChild( IonList ) lista: IonList;
@Input() prevRoute: 'allTasks' | 'completedTasks' | 'pendingTasks'; 
@Input() completed: 'all' | 'completed' | 'pending';
taskList: TaskList[];


  constructor( private taskService: TaskService, private router: Router, private alertController: AlertController ) { }


  ngOnInit(): void {
    this.taskList = this.taskService.getAll();
  }


  addRoute( index: number ) {
    if(this.prevRoute === 'allTasks'){
      this.router.navigate(['/tabs/tab1/add', index]);

    }else if(this.prevRoute === 'completedTasks'){
      this.router.navigate(['/tabs/tab2/add', index]);

    }else if(this.prevRoute === 'pendingTasks'){
      this.router.navigate(['/tabs/tab3/add', index]);

    }
    
  }


  deleteList( id: number ) {
    this.taskService.deleteList( id );
  }


  async editList( index: number, defaultValue: string ) {
    const alert = await this.alertController.create({
      header: 'Editar',
      inputs: [{
        name: 'titulo',
        type: 'text',
        cssClass: 'alert-input',
        value: defaultValue,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-button-close',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          cssClass: 'alert-button-edit',
          handler: (data) => {
            if(data.titulo) {
              this.taskService.editList( index, data.titulo );
            }
            this.lista.closeSlidingItems();

          }
        }
      ]
    });

    alert.present();
  }



}
