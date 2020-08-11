import { IFunctor } from './IFunctor'

export interface IApply<T> extends IFunctor<T> {
    apply<U>(b: U)
}