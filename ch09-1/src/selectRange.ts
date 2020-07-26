import * as R from 'ramda'

type NumberToBooleanFunc = (n: number) => boolean

export const selectRange = (min: number, max: number): NumberToBooleanFunc =>
    R.allPass([
        R.lte(min),
        R.gt(max)
    ])

R.pipe(
    R.filter(selectRange(3, 6 + 1)),
    R.tap(n => console.log(n))
)(R.range(1, 10 + 1))