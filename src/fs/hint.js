import path from 'path';
import { fileURLToPath } from 'url';

export const getDirname = (url) => {
    const __filename = getFilename(url)
    return path.dirname(__filename)
}

const getFilename = (url) => {
    return fileURLToPath(url)
}