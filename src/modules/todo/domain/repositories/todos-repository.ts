/* eslint-disable prettier/prettier */
import { Repository } from '../base/repository';
import { Todo } from '../entities/todo';

export abstract class TodosRepository extends Repository<Todo> { }
