import * as R from 'ramda'

const callAndAppend = R.pipe(
    R.ap([R.multiply(2), R.add(1)]),
    R.tap(n => console.log(n))
)

const input = [1,2,3]
const result = callAndAppend(input)