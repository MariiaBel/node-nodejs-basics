import * as readline from 'readline/promises'

const parseArgs = async() => {
    const readlineInterface = readline.createInterface({input: process.stdin, output: process.stdout})
    const answer = await readlineInterface.question('Print arguments in format (--propName value --prop2Name value2):')

    const regular = /--(\w+)\s(\w+)/g
    const args = answer.replace(regular, '$1 is $2,')
    console.log(args)
    
    readlineInterface.close()

};

parseArgs();