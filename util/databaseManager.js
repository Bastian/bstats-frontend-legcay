const config = require('./config');
const Redis = require('ioredis');

let cluster = null;

/**
 * Gets the redis cluster defined in the config.
 *
 * @returns {Redis.Cluster} The cluster.
 */
function getRedisCluster() {
    if (cluster === null) {
        if (Array.isArray(config.redis)) {
            cluster = new Redis.Cluster(config.redis);
        } else {
            cluster = new Redis(config.redis);
        }
    }
    return cluster;
}

// Exports
module.exports.getRedisCluster = getRedisCluster;