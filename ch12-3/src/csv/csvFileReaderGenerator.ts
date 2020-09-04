import { zip } from '../utils/zip';
import { readFileGenerator } from "../fileApi"

export function* csvFileReaderGenerator(filename: string, delim: string = ',') {
    let header = []
    for (let line of readFileGenerator(filename)) {
        if (!header.length)
            header = line.split(delim)
        else
            yield zip(header, line.split(delim))
    }
}