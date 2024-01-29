
import { createHash } from 'crypto';
import { createReadStream } from 'fs'

const calculateHash = async () => {
    const hash = createHash('sha256')

    const readStream = createReadStream('./files/fileToCalculateHashFor.txt');
    readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();