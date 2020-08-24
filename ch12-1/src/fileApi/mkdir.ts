import { fileExists } from "./fileExists"
import mkdirp from "mkdirp"

export const mkdir = (dirname: string): Promise<string> =>
    new Promise(async (resolve) => {
        const alreadyExists = await fileExists(dirname)
        alreadyExists ? resolve(dirname) : resolve(mkdirp.sync(dirname))
    })