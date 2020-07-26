import * as R from 'ramda'

const exp = (N: number) => (x: number) => x ** N
const square = exp(2)

type NumberToNumberFunc = (number) => number

export const f = (a: number, b: number, c: number): NumberToNumberFunc =>
    (x: number): number => R.add(a * square(x) + b * x)(c)


// R.multiply 함수 적용
export const f2 = (a: number, b: number, c: number): NumberToNumberFunc =>
    (x: number): number =>
        R.add(R.multiply(a)(square(x)) + R.multiply(b)(x), c)

// R.add 함수 추가 적용        
export const f3 = (a: number, b: number, c: number): NumberToNumberFunc =>
    (x: number): number => R.add(
        R.add(R.multiply(a)(square(x)))(R.multiply(b)(x))
        , c)

