/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateTodoDTO, CreateTodoResponseDTO, TodoResponseDTO, TodosResponseDTO } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    async index(): Promise<TodosResponseDTO> {
        try {
            return {
                status: 'success',
                code: HttpStatus.OK,
                errors: null,
                result: await this.todoService.findAll()
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

    @Get(':id')
    async findById(@Param('id') id: string): Promise<TodoResponseDTO> {
        try {
            return {
                status: 'success',
                code: HttpStatus.OK,
                errors: null,
                result: await this.todoService.findOne(id)
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

    @Post()
    async create(@Body() todo: CreateTodoDTO): Promise<CreateTodoResponseDTO> {
        try {
            return {
                status: 'success',
                code: HttpStatus.OK,
                errors: null,
                result: await this.todoService.create(todo)
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

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        try {
            return {
                status: 'success',
                code: HttpStatus.OK,
                errors: null,
                result: await this.todoService.delete(id)
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
