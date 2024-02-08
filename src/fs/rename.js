import { throwError } from "./error.js";
import { access, rename as renameFile } from 'fs/promises';
import { getDirname } from './hint.js';
import path from 'path'

const rename = async () => {
    try {
        const WRONG_FILE_NAME = 'wrongFilename.txt',
            PROPER_FILE_NAME = 'properFilename.md',
            PATH = './files',
            __dirname = getDirname(import.meta.url),
            pathForProperFile = path.join(__dirname, PATH, PROPER_FILE_NAME),
            pathForWrongFile = path.join(__dirname, PATH, WRONG_FILE_NAME)

        
        await access(pathForProperFile)
            .then(() => {
                console.log('file exist')
                throwError()
            }).catch(() => {})

        await renameFile(pathForWrongFile, pathForProperFile)

    } catch(error) {
        throwError()
    }
};

await rename();