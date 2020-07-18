import {range} from './utils/range'
import {fold} from './utils/fold'


let numbers: number[] = range(1, 100 + 1);

let result = fold(numbers, (result, val) => result + val, 0);

console.log('declarative-sum: ', result);