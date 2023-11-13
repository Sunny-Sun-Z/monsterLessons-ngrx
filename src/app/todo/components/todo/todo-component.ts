import { CommonModule } from "@angular/common";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MainComponent } from "../main/main.component";

@Component ({
    selector:'app-todos-todo',
    templateUrl: './todo-component.html',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent, MainComponent]
})

export class TodoComponent implements OnInit, OnChanges{
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }
}