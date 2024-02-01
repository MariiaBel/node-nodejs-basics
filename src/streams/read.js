import { createReadStream } from 'fs';
import { getDirname } from './../fs/hint.js';
import path from 'path';

const read = async () => {
    const __dirname = getDirname(import.meta.url),
        filePath = path.join(__dirname,'files/fileToRead.txt')
    const readStream = createReadStream(filePath)
    readStream.pipe(process.stdout)
};

await read();