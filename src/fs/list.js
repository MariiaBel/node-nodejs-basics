import { readdir } from 'fs/promises'
import { throwError } from './error.js'
import { getDirname } from './hint.js';
import path from 'path';

const list = async () => {
    try {
        const PATH = './files',
            __dirname = getDirname(import.meta.url),
            folderPath = path.join(__dirname, PATH)
        
        const files = await readdir(folderPath)
        console.log(files)
        // for(const file of files) {
        //     console.log(file)
        // }
    } catch(error) {
        throwError()
    }
};

await list();