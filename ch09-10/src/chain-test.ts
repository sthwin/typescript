import * as R from 'ramda'

const array = [1, 2, 3]

R.pipe(
    R.chain(n => [n,n]),
    R.tap(n => console.log(n))
)(array)

R.pipe(
    R.chain(R.append, R.head),
    R.tap(n => console.log(n))
)(array)


// R.chain 의 매개변수가 2개인 케이스와 동일하게 동작함. 
const chainTwoFunc = (firstFn, secondFn) => x => firstFn(secondFn(x), x)
R.pipe(
    chainTwoFunc(R.append, R.head),
    R.tap(n => console.log(n))
)(array)