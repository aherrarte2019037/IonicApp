import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { TaskItem } from 'src/app/models/TaskItem';
import { TaskList } from 'src/app/models/TaskList';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  @ViewChild( 'itemsList' ) listaItems: IonList;
  list: TaskList;
  itemDetail: string = '';
  pendingTasks: number = 0;


  constructor( private taskService: TaskService, private route: ActivatedRoute, private alertController: AlertController ) {
    this.route.params.subscribe( params => {
      this.list = this.taskService.findListById( Number(params.id) );   
    });
    
  }


  addTask() {
    if( this.itemDetail ){
      const newItem = new TaskItem( this.itemDetail );
      this.list.completed = false;
      this.list.taskItems.push( newItem );
      this.itemDetail = '';
      this.taskService.saveStorage();
    }

  }


  saveCompleted() {
    this.pendingTasks = this.list.taskItems.filter( data => data.completed === false ).length;
    
    if(this.pendingTasks === 0) {
      this.list.completed = true; 
      this.list.finishedAt = new Date();

    }else{
      this.list.completed = false; 
      this.list.finishedAt = null;
    }

    this.taskService.saveStorage();

  }


  deleteItem( index: number) {
    this.list.taskItems.splice(index, 1)
    this.taskService.saveStorage();
  }


  async editItem( index: number, defaultValue: string ) {
    const alert = await this.alertController.create({
      header: 'Editar',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: defaultValue,
        placeholder: 'Nombre de la tarea'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-button-close',
          handler: () => {
            this.listaItems.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          cssClass: 'alert-button-edit',
          handler: (data) => {
            if(data.titulo) {
              this.list.taskItems.splice(index, 1, { detail: data.titulo, completed: this.list.taskItems[index].completed });
              this.taskService.saveStorage();
            }
            this.listaItems.closeSlidingItems();

          }
        }
      ]
    });

    alert.present();
  }


}
