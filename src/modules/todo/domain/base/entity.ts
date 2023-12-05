/* eslint-disable prettier/prettier */
import { uuid } from 'uuidv4';

export class Entity {
    readonly id?: string;
    constructor(id: string = uuid()) {
        this.id = id;
    }

}