/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todosRepository: Repository<Todo>,
    ) { }

    async findAll(): Promise<Todo[]> {
        return await this.todosRepository.find();
    }

    async findOne(id: string): Promise<Todo> {
        console.log("id", id);
        const todo = await this.todosRepository.findOne({ where: { id } });
        console.log("todo", todo);
        return todo;
    }

    async create(todo): Promise<Todo[]> {
        const todos = this.todosRepository.create(todo);
        await this.todosRepository.save(todos);
        return todos;
    }

    async delete(id): Promise<void> {
        await this.todosRepository.delete(id);
    }
}
