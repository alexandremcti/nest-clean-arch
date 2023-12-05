/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CreateTodoDTO } from 'src/modules/todo/application/dtos/create-todo-dto';
import { TodoResponseDTO } from 'src/modules/todo/application/dtos/todo-response-dto';
import { CreateTodo } from 'src/modules/todo/application/usecases/create-todo';

@Controller('todos')
export class CreateTodoController {
    constructor(private readonly createTodo: CreateTodo) { }

    @Post()
    async create(@Body() todo: CreateTodoDTO): Promise<TodoResponseDTO> {
        try {
            return {
                status: 'success',
                code: HttpStatus.OK,
                errors: null,
                result: await this.createTodo.execute(todo)
            }
        } catch (error) {
            return {
                status: 'error',
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                errors: error,
                result: null
            }
        }
    }
}
