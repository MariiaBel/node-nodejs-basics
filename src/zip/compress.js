import { createGzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'

const compress = async () => {
    const gzip = createGzip()
    const readableStream =  createReadStream('./files/fileToCompress.txt')
    const writableStream = createWriteStream('./files/archive.gz')
    readableStream.pipe(gzip).pipe(writableStream)
};

await compress();