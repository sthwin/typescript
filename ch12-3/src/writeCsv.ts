import { writeCsvFormatFakeData } from './fake/writeCsvFormatFakeData';
import { getFileNameAndNumber } from './utils/getFileNameAndNumber';

const [filename, nubmerOfFakeData] = getFileNameAndNumber('./test/data/fake', 100000)
const csvFilename = `${filename}-${nubmerOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename, nubmerOfFakeData)
    .then(result => console.log(result))
    .catch((e: Error) => console.log(e.message))