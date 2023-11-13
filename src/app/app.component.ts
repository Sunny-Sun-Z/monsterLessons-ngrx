import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/components/todo/todo-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet,TodoComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monsterLessons-ngrx';
  //constructor(private mod)
 // openModal(modalTemplate:TemplateRef<any>){
    //this.
  //}
  


}
