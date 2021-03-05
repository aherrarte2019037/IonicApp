import { Pipe, PipeTransform } from '@angular/core';
import { TaskList } from '../models/TaskList';

@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {

  transform(value: TaskList[], completed: string = 'all'): TaskList[] {
    
    switch (completed) {
      case 'all':
        return value;

      case 'completed':
        return value.filter( data => data.completed === true );  

      case 'pending':
        return value.filter( data => data.completed === false );   

    }

  }

}
