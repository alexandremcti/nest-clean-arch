/* eslint-disable prettier/prettier */
import configuration from 'src/config'
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTodoController } from 'src/modules/todo/application/infra/controllers/create-todo.controller';
import { CreateTodo } from 'src/modules/todo/application/usecases/create-todo';
import { TodosOrmRepository } from './modules/todo/application/infra/repositories/todos-orm-repository';
import { TodosRepository } from './modules/todo/domain/repositories/todos-repository';
import { Todo } from './modules/todo/application/infra/typeorm/entities/todo.entity';
import { GetTodosController } from './modules/todo/application/infra/controllers/get-todos.controller';
import { GetTodos } from './modules/todo/application/queries/get-todos';
import { TodoDAO } from './modules/todo/domain/daos/todo-dao';
import { TodoORMDao } from './modules/todo/application/infra/daos/todo-orm-dao';

@Module({
  imports: [
    //carrega o arquivo de configuração
    ConfigModule.forRoot({
      load: [configuration],
    }),
    //configura a integração com o typeorm
    TypeOrmModule.forRootAsync({
      //carrega as configurações do ConfigModule
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('sqliteOptions'),
      inject: [ConfigService]
    }),
    //Carrega as entidades typeorm que serão usadas no módulo
    TypeOrmModule.forFeature([
      Todo
    ])
  ],
  controllers: [CreateTodoController, GetTodosController],
  providers: [
    {
      provide: TodosRepository,
      useClass: TodosOrmRepository
    },
    {
      provide: TodoDAO,
      useClass: TodoORMDao
    },
    CreateTodo,
    GetTodos
  ],
})
export class AppModule { }
