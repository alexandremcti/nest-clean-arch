import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('should create a task', async () => {
    const task = await expect(service.create({ name: 'foo' })).toHaveProperty(
      'name',
      'foo',
    );
  });
});
