import { Appointment } from '../../database/mysql/models/Appointment';
import { CreateAppointmentDTO } from '../../use-cases/create-appointment/create-appointment-dto';

interface IAppointmentsRepository {
  create(appointment: CreateAppointmentDTO): Promise<Appointment | null>
}

export { IAppointmentsRepository };
