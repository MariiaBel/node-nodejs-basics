const parseEnv = () => {
    const PREFIX = 'RSS_'

    for(const [key, value] of Object.entries(process.env)) {
        if(key.indexOf(PREFIX) === 0) console.log(`${key}=${value}; `)
    }
};

parseEnv();