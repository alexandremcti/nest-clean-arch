/* eslint-disable prettier/prettier */
import { Entity } from '../base/entity';

export class Todo extends Entity {
    private _name: string;

    constructor(name: string, id?: string) {
        super(id);
        this._name = name;
    }

    get name(): string {
        return this._name
    }

    setName(value: string): void {
        this._name = value;
    }
}
