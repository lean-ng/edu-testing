import { Todo } from '../models/todo';

export enum VisibilityFilter {
  All, Active, Completed
}

export interface AppState {
  todos: Todo[];
  visibility: VisibilityFilter;
}
