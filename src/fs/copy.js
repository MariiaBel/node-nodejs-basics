import { copyFile, readdir, mkdir, access } from 'fs/promises'
import { throwError } from './error.js'
import { getDirname } from './hint.js';
import path from 'path';

const copy = async () => {
    try {
        const __dirname = getDirname(import.meta.url)
        const PATH = path.join(__dirname,'files'), 
              NEW_PATH = path.join(__dirname,'./files_copy')
        await access(PATH)

        await mkdir(NEW_PATH)
        // await access(NEW_PATH) // do not need because mkdir throw Error if it folder exist

        const files = await readdir(PATH)
        for(const file of files) {
            copyFile(`${PATH}/${file}`, `${NEW_PATH}/${file}`)
        }

    } catch(error) {
        throwError()
    }
};

await copy();
