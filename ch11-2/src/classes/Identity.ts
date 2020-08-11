import { IValuable, IFunctor } from '../interfaces'
import { ISetoid } from '../interfaces'

export class Identity<T> implements ISetoid<T>, IFunctor<T> {
    constructor(private _value: T) { }

    // IValuable
    value() { return this._value }

    // ISetoid
    equals<U>(that: U): boolean {
        if (that instanceof Identity)
            return this._value == that.value()
        return false
    }

    // IFunctor
    map<U>(fn: (x: T) => U) {
        return new Identity<U>(fn(this.value()))
    }
}