import { makeFakeData } from './../fake/makeFakeData';
import { IFake } from './../fake/IFake';

const data: IFake = makeFakeData()
const keys = Object.keys(data)
console.log(keys)
const values = Object.values(data)
console.log('values:', values)