export const f = <T>(x: T): string => `f(${x})`
export const g = <T>(x: T): string => `g(${x})`
export const h = <T>(x: T): string => `h(${x})`

export const pipe = <T, R>(...functions: Function[]): Function => (x: T) => {
    const deepcopiedFunctions = [...functions]
    return deepcopiedFunctions.reduce((acc, value) => value(acc), x)
}

// const map = f => a => a.map(f)
const map = <T, R> (f: (T) => R) => (a: T[]): R[] => a.map(f)


const square = value => value * value
export const squaredMap = map(square)
console.log(squaredMap([1, 2]))

const fourSquare = pipe(
    squaredMap,
    squaredMap
)


console.log(fourSquare([3, 4]))