import * as R from 'ramda'

const addIndex = R.pipe(
    R.addIndex(R.map)(R.add),
    R.tap(a => console.log(a))
)

const addIndex2 = R.pipe(
    R.addIndex(R.map)((value: number, index: number) => value + index + 1),
    R.tap(a => console.log(a))
)

const newNumbers = addIndex(R.range(1, 9 + 1))
const newNumbers2 = addIndex2(R.range(1, 9 + 1))