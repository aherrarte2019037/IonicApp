import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListComponent
  ],

  exports: [
    ListComponent
  ],
  
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    PipesModule
  ]
})

export class ComponentsModule { }
