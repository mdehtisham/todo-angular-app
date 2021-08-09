import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular-app';

  todoArray: string[] = [];
  todoInput: any;
  //todoForm: new FormGroup()



  // /*delete item*/
  deleteItem(todo: string) {
    // for (let i = 0; i <= this.todoArray.length; i++) {
    //   if (todo == this.todoArray[i]) {
    //     this.todoArray.splice(i, 1)
    //   }
    // }

    console.log("delete todo " + todo)
  }

  // submit Form
  todoSubmit(value: string) {
    if (value !== "") {
      this.todoArray.push(value)
      //this.todoForm.reset()
    } else {
      alert('Todo is required')
    }
  }


}
