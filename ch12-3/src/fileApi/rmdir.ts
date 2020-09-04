import { fileExists } from './fileExists';
import rimraf from 'rimraf';

export const rmdir = (dirname: string): Promise<string> => (
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExists(dirname)
        if (alreadyExists)
            rimraf.sync(dirname)
        return resolve(dirname)
    })
)