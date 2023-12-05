/* eslint-disable prettier/prettier */
import { DefaultResponseDTO } from './default-response.dto';
import { TodosOutputDTO } from './todos-output-dto';

export class GetTodosResponseDTO extends DefaultResponseDTO<TodosOutputDTO[]> { }
