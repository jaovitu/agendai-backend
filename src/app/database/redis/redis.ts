import Redis from 'ioredis';
import 'dotenv/config';
import { customLOG } from '../../utils/custom-log';

const { REDIS_URL } = process.env;
const redisConnection = new Redis(REDIS_URL || '', { maxRetriesPerRequest: null });

redisConnection.on('connect', () => {
  customLOG('INIT REDIS', '🚀 Redis conectado!', 'info');
});

export { redisConnection };
