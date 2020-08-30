import { zip } from '../utils';
import { IFake, makeFakeData } from '../fake';

const data = makeFakeData()
const keys = Object.keys(data), values = Object.values(data)

const fake: IFake = zip(keys, values) as IFake
console.log(fake)