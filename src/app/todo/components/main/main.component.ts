import { Component, computed, inject } from "@angular/core";
import { TodoService } from "../../services/todos.service";
import { CommonModule } from "@angular/common";
import { FilterEnum } from "../../types/filter.enum";

@Component({
    selector: 'app-todos-main',
    templateUrl:'./main.component.html',
    standalone: true,
    imports: [CommonModule]
})

export class MainComponent {
    service = inject(TodoService);

    visibleTodos = computed(()=>{
        const todos = this.service.todosSig();
        const filter = this.service.filterSig();

        if(filter === FilterEnum.active){
            return todos.filter(todo => !todo.isCompleted)
        }
        else if(filter === FilterEnum.completed){
            return todos.filter(todo=>todo.isCompleted);
        }
        else
            return todos;
    })
}