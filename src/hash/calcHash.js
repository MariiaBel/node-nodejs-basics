
import { createHash } from 'crypto';
import { createReadStream } from 'fs'
import { getDirname } from './../fs/hint.js';
import path from 'path';

const calculateHash = async () => {
    const hash = createHash('sha256'),
        __dirname = getDirname(import.meta.url),
        pathForReadableStreamFile = path.join(__dirname,'files/fileToCalculateHashFor.txt')

    const readStream = createReadStream(pathForReadableStreamFile);
    readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();