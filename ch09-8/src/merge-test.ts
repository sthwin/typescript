import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { ILocation, makeRandomILocation } from './model/location'
import { ICoordinates, makeRandomICoordinates } from './model/coordinates'



// mergeLeft 는 왼쪽 객체의 우선순위가 높기 때문에 동일한 속성에 대해서는 왼쪽의 속성값을 유지시킨다. 
// mergeRight 는 mergeLeft 와는 반대다. 
const left = { name: 'jack' }, right = { name: 'jane', age: 32 }
const person = R.mergeLeft(left, right)
console.log(person)


const left2 = { name: 'jack' }, right2 = { name: 'jane', age: 32 }
const person2 = R.mergeRight(left2, right2)
console.log(person2)


// mergeDeepLeft 와 mergeDeepRight 는 객체내의 속성이 객체일 경우에도 수정될 수 있도록 해준다. 
const person3: IPerson = makeRandomIPerson()
const location: ILocation = makeRandomILocation()
const coordinates: ICoordinates = makeRandomICoordinates()

const newLocation = R.mergeDeepRight(location, { coordinates })
const newPerson = R.mergeDeepRight(person3, { location: newLocation })

console.log('person3:', person3)
console.log('newPerson:', newPerson)
