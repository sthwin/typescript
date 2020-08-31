import { rmdir } from './../fileApi/rmdir';
import { deleteFile } from '../fileApi/deleteFile';

const deleteTest = async (filename: string) => {
    const result = await deleteFile(filename)
    console.log(`delete ${result} file.`)
}

Promise.all([deleteTest('./data/hello.txt'), deleteTest('./data/test.json')])
    .then(s => rmdir('./data'))
    .then(dirname => console.log(`delete ${dirname} dir`))
    .catch((e: Error) => console.log(e.message))

