import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-angular-app';

  todoArray: string[] | any = [];
  todoInput: any;

  ngOnInit() {
    if (localStorage.getItem('todos')) {
      this.todoArray = JSON.parse(localStorage.getItem('todos') || '{}');
    }
  }


  // /*delete item*/
  deleteItem(todo: string) {
    let temp = JSON.parse(localStorage.getItem('todos') || '{}');
    localStorage.clear()
    this.todoArray = temp.filter((val: string) => val !== todo)
    localStorage.setItem('todos', JSON.stringify(this.todoArray))

  }

  // submit Form
  todoSubmit(value: string) {
    if (value) {
      this.todoArray.push(value);
      localStorage.setItem('todos', JSON.stringify(this.todoArray))
    } else {
      alert('Todo is required')
    }
  }


}
