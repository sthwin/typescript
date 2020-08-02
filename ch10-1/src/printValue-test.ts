import { printValue, Valuable } from './printValue'
import { T } from 'ramda'

printValue(new Valuable<number>(1))
printValue(new Valuable<boolean>(true))
printValue(new Valuable<string>('hellp'))
printValue(new Valuable<number[]>([1, 2, 3]))
