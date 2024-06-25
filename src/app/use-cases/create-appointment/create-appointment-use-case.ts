import { customLOG } from '../../utils/custom-log';
import { CreateAppointmentDTO } from './create-appointment-dto';
import { createAppointmentQueue } from './queue';

class CreateAppointmentUseCase {
  async execute(data: CreateAppointmentDTO) {
    await createAppointmentQueue.add('new-appointment', data, { delay: 2000 });
    customLOG('CREATE APPOINTMENT', `Novo agendamento adicionado à fila - ID: ${data.scheduleID}`, 'success');

    return { message: 'Agendamento adicionado à fila com sucesso.' };
  }
}

export { CreateAppointmentUseCase };
