import { Worker } from 'bullmq';
import { createAppointmentJOB } from './create-appointment-job';
import { redisConnection } from '../../database/redis/redis';

async function createAppointmentWorker() {
  new Worker('CreateAppointment', createAppointmentJOB, { connection: redisConnection });
}

export { createAppointmentWorker };
