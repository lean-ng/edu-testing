import { Injectable } from '@angular/core';
import { LocalPersistenceService } from '../services/local-persistence';
import { VisibilityFilter, AppState } from './app-state.interface';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class Store {

  state: AppState = {
    todos: [],
    visibility: VisibilityFilter.All
  };

  constructor(private persistence: LocalPersistenceService) {}

  async initialize(visibility: VisibilityFilter = VisibilityFilter.All) {
    const todos = await this.persistence.getAll();
    this.state = { todos, visibility };
  }


  async createTodo(title: string) {
    const todo = await this.persistence.create(title);
    this.state = {
      ...this.state,
      todos: [ ...this.state.todos, todo ]
    };
  }

  async toggleTodoState(todo: Todo) {
    const updatedTodo = await this.persistence.update(todo.id, { completed: !todo.completed });
    const ix = this.state.todos.findIndex( t => t.id === todo.id );
    this.state = {
      ...this.state,
      todos: [ ...this.state.todos.slice(0, ix), updatedTodo, ...this.state.todos.slice(ix + 1) ]
    };
  }

  async updateTodoTitle(todo: Todo, title: string) {
    const updatedTodo = await this.persistence.update(todo.id, { title });
    const ix = this.state.todos.findIndex( t => t.id === todo.id );
    this.state = {
      ...this.state,
      todos: [ ...this.state.todos.slice(0, ix), updatedTodo, ...this.state.todos.slice(ix + 1) ]
    };
  }

  async removeTodo(todo: Todo) {
    await this.persistence.remove(todo.id);
    this.state = {
      ...this.state,
      todos: this.state.todos.filter(t => t.id !== todo.id)
    };
  }

  async removeCompletedTodos() {
    await Promise.all(this.state.todos.filter(t => t.completed).map(t => this.persistence.remove(t.id)));
    this.state = {
      ...this.state,
      todos: this.state.todos.filter(t => !t.completed)
    };
  }

  setVisibilty(visibility: VisibilityFilter) {
    this.state = {
      ...this.state,
      visibility
    };
  }
}
