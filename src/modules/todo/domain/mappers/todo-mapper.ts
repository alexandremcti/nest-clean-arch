/* eslint-disable prettier/prettier */
import { Mapper } from 'src/modules/todo/domain/base/mapper';
import { CreateTodoDTO } from 'src/modules/todo/application/dtos/create-todo-dto';
import { Todo } from 'src/modules/todo/domain/entities/todo';

export class TodoCreateMapper extends Mapper<CreateTodoDTO, Todo> {
    public mapFrom(data: CreateTodoDTO): Todo {
        const todo = new Todo(data.name);
        return todo;
    }

    public mapTo(data: Todo): CreateTodoDTO {
        const todo: CreateTodoDTO = {
            name: data.name,
        }
        return todo;
    }
}
