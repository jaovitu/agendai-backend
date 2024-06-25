import { Queue } from 'bullmq';
import { redisConnection } from '../../database/redis/redis';

const createAppointmentQueue = new Queue('CreateAppointment', { connection: redisConnection });

export { createAppointmentQueue };
