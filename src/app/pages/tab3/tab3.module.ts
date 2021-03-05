import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { Tab3Page } from './tab3.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CompletedFilterPipe } from 'src/app/pipes/completed-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
