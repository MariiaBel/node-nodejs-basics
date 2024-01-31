import { createWriteStream } from 'fs'

const write = async () => {
    const writableStream = createWriteStream('./files/fileToWrite.txt')
    const readableString = process.stdin
    await readableString.pipe(writableStream)
};

await write();