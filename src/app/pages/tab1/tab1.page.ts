import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TaskList } from 'src/app/models/TaskList';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  taskList: TaskList[];


  constructor( private taskService: TaskService, private alertController: AlertController, private router: Router ) { 

  }
  

  ngOnInit(): void {
    this.taskList = this.taskService.getAll();
  }


  async addList() {
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-button-close'
        },
        {
          text: 'Añadir',
          cssClass: 'alert-button-add',
          handler: (data) => {
            if(data.titulo) {
              const id = this.taskService.addList(data.titulo)
              this.router.navigate(['tabs/tab1/add', id]);
            }

          }
        }
      ]
    });

    alert.present();
  }



}
