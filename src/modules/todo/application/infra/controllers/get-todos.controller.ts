/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus } from '@nestjs/common';
import { GetTodosResponseDTO } from '../../dtos/get-todos-response-dto';
import { GetTodos } from '../../queries/get-todos';

@Controller('todos')
export class GetTodosController {
    constructor(private readonly getTodo: GetTodos) { }

    @Get()
    async handle(): Promise<GetTodosResponseDTO> {
        try {
            return {
                status: 'success',
                code: HttpStatus.OK,
                errors: null,
                result: await this.getTodo.query()
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
