import { ILocation } from './ILocation'
import { makeILocation } from './makeILocation'
import { ICoordinates, makeICoordinates, makeRandomICoordinates } from '../coordinates'

import Chance from 'chance'
const c = new Chance

export const makeRandomILocation = (): ILocation =>
    makeILocation(
        c.country(), c.city(), c.address(), makeRandomICoordinates()
    )  