/* eslint-disable prettier/prettier */
import { DefaultResponseDTO } from './default-response.dto';
import { TodoCreatedDto } from './todo-created-dto';

export class TodoResponseDTO extends DefaultResponseDTO<TodoCreatedDto> { }
