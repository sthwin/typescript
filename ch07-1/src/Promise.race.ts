Promise.race([Promise.resolve(true), Promise.resolve('hello')])
    .then(value => console.log(value)) // true

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
    .then(value => console.log(value)) // true
    .catch(err => console.log(err.message)) // 호출되지 않음


Promise.race([Promise.reject(new Error('error')), Promise.resolve(true)])
    .then(value => console.log(value)) // 호출되지 않음    
    .catch(err => console.log(err.message)) // true

