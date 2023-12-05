/* eslint-disable prettier/prettier */
import { Mapper } from 'src/modules/todo/domain/base/mapper';
import { Todo } from 'src/modules/todo/domain/entities/todo';
import { TodoCreatedDto } from 'src/modules/todo/application/dtos/todo-created-dto';

export class TodoCreatedMapper implements Mapper<TodoCreatedDto, Todo> {
    public mapFrom(data: TodoCreatedDto): Todo {
        const todo = new Todo(data.name, data.id);
        return todo;
    }

    public mapTo(data: Todo): TodoCreatedDto {
        const todo: TodoCreatedDto = {
            name: data.name,
            id: data.id,
        };
        return todo;
    }
}
