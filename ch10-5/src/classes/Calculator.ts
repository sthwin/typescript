import { IValueProvider, IAddable } from '../interfaces'

export class Claculator implements IValueProvider<number>, IAddable<number> {
    constructor(private _value: number = 0) { }
    value(): number {
        return this._value
    }

    add(value: number) {
        this._value += value
        return this
    }
}

const value = (new Claculator(1)
    .add(1)
    .add(2)
    .value())
console.log(value)