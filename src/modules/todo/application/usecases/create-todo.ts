/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/modules/todo/domain/base/usecase';
import { TodosRepository } from 'src/modules/todo/domain/repositories/todos-repository';
import { TodoCreateMapper } from 'src/modules/todo/domain/mappers/todo-mapper';
import { TodoCreatedMapper } from 'src/modules/todo/domain/mappers/todo-created-mapper';
import { CreateTodoDTO } from 'src/modules/todo/application/dtos/create-todo-dto';
import { TodoCreatedDto } from 'src/modules/todo/application/dtos/todo-created-dto';

@Injectable()
export class CreateTodo implements UseCase<TodoCreatedDto> {
    private todoCreateMapper: TodoCreateMapper;
    private todoCreatedMapper: TodoCreatedMapper;

    constructor(private readonly repository: TodosRepository) {
        this.todoCreateMapper = new TodoCreateMapper();
        this.todoCreatedMapper = new TodoCreatedMapper();
    }

    public async execute(todo: CreateTodoDTO): Promise<TodoCreatedDto> {
        const entity = this.todoCreateMapper.mapFrom(todo);
        const newTodo = await this.repository.create(entity);
        return this.todoCreatedMapper.mapTo(newTodo);
    }
}
