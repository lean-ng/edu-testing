import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoMainComponent } from './components/todo-main/todo-main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoActionbarComponent } from './components/todo-actionbar/todo-actionbar.component';

@NgModule({
  declarations: [
    TodoShellComponent,
    TodoInputComponent,
    TodoMainComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoActionbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TodoShellComponent],
  providers: [
    { provide: Storage, useValue: window.localStorage }
  ]
})
export class TodosModule { }
