import { createWriteStream } from 'fs'
import { getDirname } from './../fs/hint.js';
import path from 'path';

const write = async () => {
    const __dirname = getDirname(import.meta.url),
        filePath = path.join(__dirname,'files/fileToWrite.txt')
    const writableStream = createWriteStream(filePath)
    const readableStream = process.stdin
    await readableStream.pipe(writableStream)
};

await write();