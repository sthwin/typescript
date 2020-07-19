import {range} from './utils/range'
import {fold} from './utils/fold'
import {filter} from './utils/filter'


let numbers : number[] = range(1, 100 + 1)

const isOdd = (n: number) => n % 2 != 0

let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0)

console.log(result)