import * as R from 'ramda'

const T = value => R.pipe(
    R.applyTo(value),
    R.tap(n => console.log(n))
)

const value100 = T(100)
const sameValue = value100(R.identity)
const value101 = value100(R.add(1))