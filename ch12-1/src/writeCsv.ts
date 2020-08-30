import { writeCsvFormatFakeData } from './fake/writeCsvFormatFakeData';
import { getFileNameAndNumber } from './utils/getFileNameAndNumber';

const [filename, nubmerOfFakeData] = getFileNameAndNumber('./data/fake', 1)
const csvFilename = `${filename}-${nubmerOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename, nubmerOfFakeData)
    .then(result => console.log(result))
    .catch((e: Error) => console.log(e.message))