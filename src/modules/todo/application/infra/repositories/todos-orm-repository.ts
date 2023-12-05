/* eslint-disable prettier/prettier */
import { Repository as OrmRepository } from 'typeorm'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/modules/todo/domain/entities/todo';
import { Todo as TodoDTO } from 'src/modules/todo/application/infra/typeorm/entities/todo.entity'
import { TodosRepository } from 'src/modules/todo/domain/repositories/todos-repository';

@Injectable()
export class TodosOrmRepository implements TodosRepository {
    constructor(
        @InjectRepository(TodoDTO)
        private readonly todosRepository: OrmRepository<TodoDTO>
    ) {

    }
    async create(data: Todo): Promise<Todo> {
        const todo = this.todosRepository.create({ name: data.name, id: data.id });
        const result = await this.todosRepository.save(todo);
        return new Todo(result.name, result.id);
    }
    update(id: number, data: Todo): Promise<Todo> {
        throw new Error('Method not implemented.');
    }
    patch(id: number, data: Partial<Todo>): Promise<Todo> {
        throw new Error('Method not implemented.');
    }
    getById(id: number): Promise<Todo> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<Todo[]> {
        throw new Error('Method not implemented.');
    }
    getOne(filter: Partial<Todo>): Promise<Todo> {
        throw new Error('Method not implemented.');
    }
    getMany(filter: Partial<Todo>): Promise<Todo[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
