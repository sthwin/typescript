import { IFake } from './IFake';
import Chance from 'chance';

const c = new Chance

export const makeFakeData = (): IFake => ({
    name: c.name(),
    email: c.email(),
    profession: c.profession(),
    birthday: c.birthday(),
    senetence: c.sentence()
})

export { IFake }