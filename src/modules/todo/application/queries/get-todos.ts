/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TodoDAO } from '../../domain/daos/todo-dao';
import { TodosOutputDTO } from '../dtos/todos-output-dto';

@Injectable()
export class GetTodos {
    constructor(private readonly dao: TodoDAO) { }

    async query(): Promise<TodosOutputDTO[]> {
        const result = await this.dao.query();
        const todos: TodosOutputDTO[] = [];
        result.map((todo) => {
            todos.push({ id: String(todo.id), name: todo.name });
        });
        return todos;
    }
}
