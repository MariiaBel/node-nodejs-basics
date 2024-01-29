import { Transform } from 'stream';

const transform = async () => {
    const rs = process.stdin;
    const ws = process.stdout;
    const ts = new Transform({
        transform(chunk, enc, cb) {
            const chunkStringified = chunk.toString().trim()
            const reversedChunk = chunkStringified.split('').reverse().join('')
            this.push(reversedChunk)

            cb()
        }
    })

    rs.pipe(ts).pipe(ws);
};

await transform();