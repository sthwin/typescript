import * as R from 'ramda'

R.pipe(
    R.filter(R.lte(3)),
    R.filter(R.gt(6 + 1)),
    R.tap(v => console.log(v))
)(R.range(1, 9 + 1))