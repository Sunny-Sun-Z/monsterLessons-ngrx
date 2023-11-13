import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {
  service = inject(TodoService);
  // selected: FilterEnum = FilterEnum.all;
  // filter = this.service.filterSig();
  filterSig = this.service.filterSig;
  filterEnum = FilterEnum;
  activeCount = computed(()=> this.service.todosSig().filter(todo=> !todo.isCompleted).length);
  noTodosClass = computed(()=> this.service.todosSig().length === 0);
  itemsLeftText = computed(()=>`items${this.activeCount()!==1? 's' :''} left`);

  changeFilter($event: Event, filterName: FilterEnum) {
    event?.preventDefault();
    console.log('andy', $event);
  }
}
