import { IMonad } from '../interfaces'
import { _IMaybe } from './_IMaybe';

export class Nothing implements _IMaybe<null>, IMonad<null> {
    // IApplicative
    static of<T>(value: T): Nothing { return new Nothing }

    // IMaybe
    isJust() { return false }
    isNothing() { return true }
    getOrElse<U>(defaultValue: U) { return defaultValue }

    // IFunctor
    map<U, T>(fn: (x: T) => U) { return new Nothing }

    // IApply
    ap<U>(b: U) {
        return new Nothing
    }

    // IChain
    chain<U, T>(fn: (T) => U): Nothing {
        return new Nothing
    }
}