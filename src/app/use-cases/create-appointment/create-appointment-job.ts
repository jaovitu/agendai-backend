import { Job } from 'bullmq';
import { CreateAppointmentDTO } from './create-appointment-dto';
import { AppointmentRepository } from '../../repositories/implementations/appointment-repository';
import { customLOG } from '../../utils/custom-log';

const appointmentsRepository = new AppointmentRepository();

async function createAppointmentJOB(job: Job) {
  const { userID, scheduleID } = job.data as CreateAppointmentDTO;

  await appointmentsRepository.create({ userID, scheduleID });

  // Enviar email confirmando agendamento
  customLOG('APPOINTMENT CONFIRMED', 'Olá, usuário! Seu agendamento foi confirmado', 'success');
}

export { createAppointmentJOB };
