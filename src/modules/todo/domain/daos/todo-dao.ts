/* eslint-disable prettier/prettier */
import { Todo } from '../entities/todo';

export abstract class TodoDAO {
    abstract query(): Promise<Todo[]>;
}
