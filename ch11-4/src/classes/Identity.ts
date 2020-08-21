import { ISetoid, IFunctor, IApply, IApplicative } from '../interfaces'

export class Identity<T> implements ISetoid<T>, IFunctor<T>, IApply<T>, IApplicative<T> {
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
    map<U>(fn: (x: T) => U): Identity<U> {
        return new Identity<U>(fn(this.value()))
    }

    // IApplicative
    static of<T>(value: T): Identity<T> { return new Identity<T>(value) }

    // IApply
    ap<U>(b: U) {
        const f = this._value
        if (f instanceof Function)
            return Identity.of<U>((f as Function)(b))
    }

    // IChain
    chain<U>(fn: (T) => U): U {
        return fn(this.value())
    }
}