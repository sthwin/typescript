import { appendFile } from './../fileApi/appendFile';
import { writeFile } from './../fileApi/writeFile';
import { makeFakeData } from './makeFakeData';
import { IFake } from './IFake';
import { range } from '../utils/range';
import { mkdir } from './../fileApi/mkdir';
import * as path from 'path'


export const writeCsvFormatFakeData = async (filename: string,
    numberOfItems: number): Promise<string> => {
    const dirname = path.dirname(filename)
    await mkdir(dirname)
    const comma = ',', newLine = '\n'
    for (let n of range(numberOfItems)) {
        const fake: IFake = makeFakeData()
        if (n == 0) {
            const keys = Object.keys(fake).join(comma)
            await writeFile(filename, keys)
        }
        const values = Object.values(fake).join(comma)
        await appendFile(filename, newLine + values)
    }
    return `write ${numberOfItems} items to ${filename} file`
}