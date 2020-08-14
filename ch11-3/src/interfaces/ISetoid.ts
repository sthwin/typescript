import { IValuable } from './IValuable'

// 판타지랜드 규격에서 setoid는 equals 라는 이름의 메소드를 제공하는 인터페이스를 의미. 
export interface ISetoid<T> extends IValuable<T> {
    equals<U>(value: U): boolean
}