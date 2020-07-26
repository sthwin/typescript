import {pipe} from './compose'

 const map = f => a => a.map(f)
//const map = <T, R> (f: (T) => R) => (a: T[]): R[] => a.map(f)

const square = value => value * value
export const squaredMap = map(square)

const fourSquare = pipe(
    squaredMap,
    squaredMap
)


console.log(fourSquare([3, 4]))


const customMap = function  <T, R> (f: (T) => R) {
    return function (a: T[]): R[]  {
      return  a.map(f)
    } 
}

console.log(customMap(value => value * value)([1, 2]))
