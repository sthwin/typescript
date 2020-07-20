import { readFile } from 'fs'

export const readFilePromise = (fileName: string): Promise<string> => {
    return new Promise<string>((
        resolve: (successValue: string) => void,
        reject: (any) => void) => {
        readFile(fileName, (error: Error | null, buffer: Buffer) => {
            if (error) reject(error)
            else resolve(buffer.toString())
        })
    })
}

readFilePromise('../package.json')
    .then((value: string) => {
        console.log(value)
        return readFilePromise('../tsconfig.json')
    })
    .then((value: string) => {
        console.log(value)
        return readFilePromise(".")
    })
    .catch((err: Error) => console.log(err))
    .finally(() => console.log('프로그램 종료'))