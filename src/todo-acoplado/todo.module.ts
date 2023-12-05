/* eslint-disable prettier/prettier */
import configuration from './../config'
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';

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
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule { }
