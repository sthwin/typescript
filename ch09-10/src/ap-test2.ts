import * as R from 'ramda'

const repeat = (N, cb) => R.range(1, N + 1).map(n => cb)

const callAndAppend = R.pipe(
    R.ap(repeat(3, R.identity)), // R.ap([R.identity, R.identity, R.identity])
    R.tap(n => console.log(n))
)

const input = [2, 3, 4]
callAndAppend(input)