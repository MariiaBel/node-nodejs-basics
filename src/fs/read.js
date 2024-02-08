import { readFile } from 'fs/promises'
import { throwError } from './error.js';
import { getDirname } from './hint.js';
import path from 'path';

const read = async () => {
    try {
        const FILE_PATH = 'files/fileToRead.txt',
            __dirname = getDirname(import.meta.url),
            fileToReadPath = path.join(__dirname, FILE_PATH)
        const contents = await readFile(fileToReadPath, { encoding: 'utf8' });
        console.log(contents);

    } catch(error) {
        throwError()
    }
};

await read();