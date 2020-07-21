const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolvedResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
    .then(result => console.log(result)) // 호출되지 않음
    .catch(err => console.log('error:', err.message))

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
    .then(result => console.log(result))

const customPromise = (value: string): Promise<string> => {
    return new Promise<string>((
        resolve: (value: string) => void,
        reject: (reason?: any) => void) => {
        resolve(value)
    })
}

getAllResolvedResult<any>([customPromise('test_1'), customPromise('test_2')])
    .then(result => console.log(result)) 
