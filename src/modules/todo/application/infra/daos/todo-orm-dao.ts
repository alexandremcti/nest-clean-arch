/* eslint-disable prettier/prettier */
import { TodoDAO } from 'src/modules/todo/domain/daos/todo-dao';
import { Todo } from 'src/modules/todo/domain/entities/todo';
import { Repository } from 'typeorm';
import { Todo as TodoDTO } from 'src/modules/todo/application/infra/typeorm/entities/todo.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoORMDao implements TodoDAO {
    constructor(
        @InjectRepository(TodoDTO)
        private readonly repository: Repository<TodoDTO>
    ) { }
    async query(): Promise<Todo[]> {
        const result = await this.repository.find();
        const todos: Todo[] = [];
        result.map((todo) => {
            todos.push(new Todo(todo.name, todo.id));
            return todo;
        })
        return todos;
    }
}
