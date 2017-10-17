const redis = require('redis');

let client = null;

class Redis {
    constructor() {
        if (client === null) {
            client = redis.createClient({
                retry_strategy: (options) => {
                    if (options.attempt > 10) {
                        process.exit();
                    }
                    return Math.min(options.attempt * 100, 2000);
                },
            });

            client.on('reconnecting', (param) => {
                console.warn('Redis not connection. Reconnecting... Attempt: ', param.attempt);
            });
            client.on('error', (err) => {
                console.log(`Redis error: ${err}`);
            });
            client.on('connect', () => {
                console.log('Redis successfully connected');
            });

            return client;
        }
        return client;
    }
}

module.exports = new Redis();
