import { Todo } from '../models/todo';

/**
 * Interface: Persistence
 */
export interface Persistence {
  getAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
  update(id: number, changes: { title?: string, completed?: boolean}): Promise<Todo>;
  remove(id: number): Promise<void>;
}
