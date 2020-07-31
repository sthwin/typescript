import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const persons: IPerson[] = R.range(1, 10000 + 1).map(makeRandomIPerson)
const nameSortedPersons = R.sortWith([
    R.descend(R.prop('name'))
])(persons)

console.log(nameSortedPersons)