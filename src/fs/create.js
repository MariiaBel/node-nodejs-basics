import { writeFile } from 'fs/promises'
import { throwError } from './error.js'
import path from 'path';
import { getDirname } from './hint.js';

const create = async () => {
    try {
        const pathToFile = path.join(getDirname(import.meta.url), 'files', 'fresh.txt')
        await writeFile(pathToFile, 'I am fresh and young', { flag: 'wx'})
    } catch (error) {
        throwError()
    }
};

await create();