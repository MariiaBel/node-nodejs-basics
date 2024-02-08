import { createUnzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'

const decompress = async () => {
    const readableStream = createReadStream('./files/archive.gz')
    const writableStream = createWriteStream('./files/fileToCompress.txt')
    const unzip = createUnzip()
    
    readableStream.pipe(unzip).pipe(writableStream)
};

await decompress();