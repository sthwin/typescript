import * as R from 'ramda'

const input: number[] = R.range(1, 10 + 1), halfValue = input[input.length / 2] // 값은 6

const substractOrAdd = R.pipe(
    R.map(
        R.ifElse(
            R.lte(halfValue),
            R.inc,
            R.dec
        )
    ),
    R.tap(v => console.log(v))
)(input)


