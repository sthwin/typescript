import * as R from 'ramda'

const array: number[] = R.range(1, 9 + 1)
R.pipe(
    R.tap(n => console.log(n))
)(array)