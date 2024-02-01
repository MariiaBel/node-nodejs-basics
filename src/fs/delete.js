import { unlink } from 'fs/promises'
import { throwError } from './error.js'
import path from 'path';
import { getDirname } from './hint.js';

const remove = async () => {
    const fileNamePath = path.join(getDirname(import.meta.url) ,'files','fileToRemove.txt')
    try {
        await unlink(fileNamePath)
    } catch(error) {
        throwError()
    }
};

await remove();