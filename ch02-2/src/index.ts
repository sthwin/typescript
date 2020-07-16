import Person, { makePerson } from './person/Person'
import IPerson from './person/IPerson'
import Chance from 'chance'
import * as R from 'ramda'

const chance = new Chance()
let persons: IPerson[] = R.range(0, 2)
    .map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)

// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = new Person('Jack')
//     console.log(jane, jack)
// }

// testMakePerson()

type func = (number) => number

const add = (a: number): func => {
    const _add: func = (b: number) => {
        return a + b
    }
    return _add;
}

let fn: func = add(1)
console.log(fn)
console.log(fn(2))
console.log(add(1)(2))



const multiply = a => b => c => a * b * c

const multiplySpreaded = (a: number) => {
    return ((b: number) => {
        return (c: number) => a * b * c
    })
}


console.log(multiply(1)(2)(3))
console.log(multiplySpreaded(1)(2)(3))