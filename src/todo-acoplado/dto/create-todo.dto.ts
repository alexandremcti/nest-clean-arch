/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Todo } from '../entity/todo.entity';
import { DefaultResponseDTO } from './default-response.dto';

export class CreateTodoDTO {
    @IsNotEmpty({ message: 'Campo obrigatório' })
    name: string;
}

export class CreateTodoResponseDTO extends DefaultResponseDTO<Todo[]> { }

export class TodoResponseDTO extends DefaultResponseDTO<Todo> { }

export class TodosResponseDTO extends DefaultResponseDTO<Todo[]> { }


