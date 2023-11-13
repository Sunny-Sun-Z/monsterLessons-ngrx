import { Component, inject } from "@angular/core";
import { TodoService } from "../../services/todos.service";

@Component({
    selector:'app-todos-header',
    templateUrl:'./header.component.html',
    standalone: true
})

export class HeaderComponent {
    text: string ='';

    todoService = inject(TodoService);

    changeText (event: Event): void{
        const target= event.target as HTMLInputElement;
        this.text = target.value;
    }

    addTodo(): void {
        this.todoService.addTodo(this.text);
        this.text ='';
    }
}