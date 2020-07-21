import { Console } from "console"

Promise.resolve(1)
        .then(value => {
            console.log(value)
            return Promise.resolve(true)
        })
        .then(value => {
            console.log(value)
            return [1, 2, 3]
        })
        .then(value => {
            console.log(value)
            return {name: 'Jack', age: 32}
        })
        .then((value: {name:string, age: number}) => {
            console.log(value)
        })
