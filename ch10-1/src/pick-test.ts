const pick = <T, K extends keyof T>(obj: T, keys: K[]) => keys.map(key => ({ [key]: obj[key] }))
    .reduce((acc, val) => ({ ...acc, ...val }), {})

// const pick = (obj, keys) => keys.map(key => ({ [key]: obj[key] }))
//     .reduce((acc, val) => ({ ...acc, ...val }), {})

const obj = { name: 'Jane', age: 22, city: 'Seoul', country: 'Korea' }
console.log(
    pick(obj, ['name', 'age']),
   // pick(obj, ['nam', 'agge'])
)