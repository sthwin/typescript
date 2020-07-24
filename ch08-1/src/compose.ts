export const f = <T>(x: T): string => `f(${x})`
export const g = <T>(x: T): string => `g(${x})`
export const h = <T>(x: T): string => `h(${x})`

export const compose = <T, R>(...functions: Function[]): Function => (x: T) => (T) => R => {
    const deepcopiedFunctions = [...functions]
    return deepcopiedFunctions.reverse().reduce((acc, value) => value(acc), x)
}

// const composedFGH = compose(h, g, f)
// console.log(
//     composedFGH('x')()()
// )

export const pipe = <T, R>(...functions: Function[]): Function => (x: T) => T => {
    const deepcopiedFunctions = [...functions]
    return deepcopiedFunctions.reduce((acc, value) => value(acc), x)
}

// const pipedFGH = pipe(f, g, h)
// console.log(
//     pipedFGH('x')()()
// )



// const numbers = [1, 2, 3, 4]
// const result = numbers.reduce(((a, b) => a + b), 0)
// console.log(result)



// for(let no in funcArray) {
//     console.log(no, funcArray.reverse()[no]('x'))
// }    

// const noArr = [1, 2, 3]
// console.log(noArr.reverse())
// console.log(noArr)

// export const compose = <T, R>(...functions: readonly Function[]): Function =>
//     (x: T): (T) => R => {
//         const deepCopiedFunctions = [...functions]
//         return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
//     }


// const func_1 = <T, R>(a: T): void => { }



// const func_2 = <T, R>(a: T): Function => (b: R) => { }