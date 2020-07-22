export type FirstOrderFunc<T, R> = (T) => R
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>
export type ThirdOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>

export const add: SecondOrderFunc<number, number> =
    (x: number): FirstOrderFunc<number, number> =>
        (y: number): number => x + y


export const add3: ThirdOrderFunc<number, number> =
    (x: number): SecondOrderFunc<number, number> =>
        (y: number): FirstOrderFunc<number, number> =>
            (z: number): number => x + y + z

export const add2: SecondOrderFunc<number, number> = add3(1)

export const add1: FirstOrderFunc<number, number> = add2(2)


console.log(add3(1)(2)(3))

console.log(
    add1(3),
    add2(2)(3),
    add3(1)(2)(3)
)


function add5(x: number): (number) => number  {
    return function (y: number): number {
        return x + y
    }
}