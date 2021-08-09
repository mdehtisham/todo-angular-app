import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular-app';

  todoArray: string[] = [];
  todoInput: any;



  // /*delete item*/
  deleteItem(todo: string) {
    this.todoArray = this.todoArray.filter(val => val !== todo)
  }

  // submit Form
  todoSubmit(value: string) {
    if (value) {
      this.todoArray.push(value)
    } else {
      alert('Todo is required')
    }
  }


}
