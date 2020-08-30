import { mkdir } from './../fileApi/mkdir';
import { appendFile } from './../fileApi/appendFile';

const appendTest = async (filename: string, data: any) => {
    const result = await appendFile(filename, data)
    console.log(result)
}

mkdir('./data')
    .then(s => appendTest('./data/hello.txt', 'Hi, there!'))
    .catch((e: Error) => console.log(e.message))
